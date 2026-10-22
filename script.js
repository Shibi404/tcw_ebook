/* ==========================================================================
   PrintPod — ebook behaviour
   --------------------------------------------------------------------------
   01  Helpers and constants
   02  Heading ids (assigned from the DOM, never typed into the HTML)
   03  Table of contents generation
   04  Collapse by part
   05  Smooth scroll with a fixed-header offset
   06  Current-section highlighting (IntersectionObserver)
   07  Reading progress bar
   08  Mobile drawer
   09  Dark mode toggle
   10  Hide guidance notes toggle
   ========================================================================== */

(function () {
  'use strict';

  /* ======================================================================
     01  HELPERS AND CONSTANTS
     ====================================================================== */

  var root = document.documentElement;
  var content = document.getElementById('content');
  var tocEl = document.getElementById('toc');
  var sidebar = document.getElementById('sidebar');
  var scrim = document.getElementById('scrim');
  var navToggle = document.getElementById('navToggle');
  var themeToggle = document.getElementById('themeToggle');
  var notesToggle = document.getElementById('notesToggle');
  var progressBar = document.getElementById('progressBar');

  var THEME_KEY = 'printpod-theme';
  var NOTES_KEY = 'printpod-notes';
  var MOBILE_MAX = 899;

  /* localStorage can throw in private mode or when site data is blocked, so
     every read and write goes through these two wrappers. */
  function storeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function storeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function isMobile() {
    return window.matchMedia('(max-width: ' + MOBILE_MAX + 'px)').matches;
  }

  /* Height of the fixed top bar, read from the CSS custom property so the
     two never drift apart. */
  function chromeHeight() {
    var raw = getComputedStyle(root).getPropertyValue('--chrome-h').trim();
    var px = parseFloat(raw);
    if (!px) return 52;
    return raw.indexOf('rem') > -1 ? px * 16 : px;
  }

  function slugify(text) {
    return text.toLowerCase()
      .replace(/[‘’'"]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60);
  }

  /* ======================================================================
     02  HEADING IDS
     Walks the document in order, numbering parts, chapters and sections the
     same way the CSS counters do, and gives every heading a stable id.
     Returns a structure the table of contents is built from.
     ====================================================================== */

  function readStructure() {
    var groups = [];
    var chapterNumber = 0;
    var partNumber = 0;
    var usedIds = {};

    function uniqueId(base) {
      var id = base || 'section';
      var n = 2;
      /* Collide with either an id we have just minted or one already in the
         HTML (two sections share the title "Document retention and
         deletion", for instance). */
      while (usedIds[id] || document.getElementById(id)) {
        id = base + '-' + n++;
      }
      usedIds[id] = true;
      return id;
    }

    Array.prototype.forEach.call(content.children, function (block) {

      /* ---- Front matter / back matter ---- */
      if (block.classList.contains('matter')) {
        var isBack = block.id === 'back-matter';
        var group = { title: isBack ? 'Back matter' : 'Front matter', label: '', items: [] };

        Array.prototype.forEach.call(block.querySelectorAll('.matter-title'), function (h2) {
          if (!h2.id) h2.id = uniqueId(slugify(h2.textContent));
          group.items.push({ level: 'chapter', num: '', text: h2.textContent, href: h2.id, target: h2 });
        });

        if (group.items.length) groups.push(group);
        return;
      }

      /* ---- Parts ---- */
      if (block.classList.contains('part')) {
        partNumber += 1;
        var partTitleEl = block.querySelector('.part-title');
        if (partTitleEl && !partTitleEl.id) partTitleEl.id = uniqueId('part-' + partNumber + '-title');

        var partGroup = {
          title: partTitleEl ? partTitleEl.textContent : 'Part ' + partNumber,
          label: 'Part ' + partNumber,
          items: []
        };

        Array.prototype.forEach.call(block.querySelectorAll('.chapter'), function (chapter) {
          chapterNumber += 1;
          var h2 = chapter.querySelector('.chapter-title');
          if (!h2) return;
          if (!h2.id) h2.id = uniqueId('ch-' + chapterNumber + '-title');
          if (!chapter.id) chapter.id = uniqueId('ch-' + chapterNumber);

          partGroup.items.push({
            level: 'chapter',
            num: String(chapterNumber),
            text: h2.textContent,
            href: chapter.id,
            /* Observe the opener block, not the <h2>. The opener sits at the
               top of the chapter, so it falls inside the detection band as
               soon as the chapter is reached; the <h2> itself sits below the
               large chapter number and would be missed. */
            target: chapter.querySelector('.chapter-opener') || h2
          });

          var secNumber = 0;
          Array.prototype.forEach.call(chapter.querySelectorAll('.sec'), function (sec) {
            secNumber += 1;
            var h3 = sec.querySelector('h3');
            if (!h3) return;
            if (!h3.id) h3.id = uniqueId('sec-' + chapterNumber + '-' + secNumber);

            partGroup.items.push({
              level: 'sec',
              num: chapterNumber + '.' + secNumber,
              text: h3.textContent,
              href: h3.id,
              target: h3
            });
          });
        });

        groups.push(partGroup);
      }
    });

    return groups;
  }

  /* ======================================================================
     03  TABLE OF CONTENTS GENERATION
     ====================================================================== */

  var linkFor = new Map();   /* observed heading -> <a> in the sidebar */
  var observedOrder = [];    /* headings in document order */

  function buildToc(groups) {
    tocEl.innerHTML = '';

    groups.forEach(function (group, index) {
      var wrap = document.createElement('div');
      wrap.className = 'toc__group';

      var listId = 'toc-list-' + (index + 1);

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'toc__part';
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-controls', listId);

      if (group.label) {
        var label = document.createElement('span');
        label.className = 'toc__part-label';
        label.textContent = group.label;
        button.appendChild(label);
      }

      var title = document.createElement('span');
      title.className = 'toc__part-title';
      title.textContent = group.title;
      button.appendChild(title);

      var chev = document.createElement('span');
      chev.className = 'toc__chev';
      chev.setAttribute('aria-hidden', 'true');
      button.appendChild(chev);

      var list = document.createElement('ul');
      list.className = 'toc__list';
      list.id = listId;

      group.items.forEach(function (item) {
        var li = document.createElement('li');
        li.className = 'toc__item toc__item--' + item.level;

        var a = document.createElement('a');
        a.href = '#' + item.href;

        if (item.num) {
          var num = document.createElement('span');
          num.className = 'toc__num';
          num.textContent = item.num;
          a.appendChild(num);
        }

        a.appendChild(document.createTextNode(item.text));
        li.appendChild(a);
        list.appendChild(li);

        linkFor.set(item.target, a);
        observedOrder.push(item.target);
      });

      wrap.appendChild(button);
      wrap.appendChild(list);
      tocEl.appendChild(wrap);
    });
  }

  /* ======================================================================
     04  COLLAPSE BY PART
     ====================================================================== */

  function initCollapse() {
    tocEl.addEventListener('click', function (event) {
      var button = event.target.closest('.toc__part');
      if (!button) return;
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
  }

  /* ======================================================================
     05  SMOOTH SCROLL WITH A FIXED-HEADER OFFSET
     ====================================================================== */

  function scrollToTarget(el) {
    var offset = chromeHeight() + 16;
    var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
  }

  function initSmoothScroll() {
    tocEl.addEventListener('click', function (event) {
      var link = event.target.closest('a[href^="#"]');
      if (!link) return;

      var id = decodeURIComponent(link.getAttribute('href').slice(1));
      var target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      if (isMobile()) closeNav();
      scrollToTarget(target);

      /* Keep the URL shareable without letting the browser jump. */
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', '#' + id);
      }

      /* Move focus to the destination so keyboard users follow the jump. */
      var focusTarget = target.matches('h2, h3') ? target : target.querySelector('h2, h3') || target;
      focusTarget.setAttribute('tabindex', '-1');
      try { focusTarget.focus({ preventScroll: true }); } catch (e) { focusTarget.focus(); }
    });
  }

  /* ======================================================================
     06  CURRENT-SECTION HIGHLIGHTING
     ====================================================================== */

  function initActiveTracking() {
    if (!('IntersectionObserver' in window) || !observedOrder.length) return;

    var visible = new Set();
    var activeLink = null;

    function setActive(target) {
      var link = target ? linkFor.get(target) : null;
      if (link === activeLink) return;
      if (activeLink) activeLink.classList.remove('is-active');
      activeLink = link || null;
      if (!activeLink) return;

      activeLink.classList.add('is-active');

      /* Make sure the part containing the active row is open. */
      var list = activeLink.closest('.toc__list');
      if (list) {
        var button = list.previousElementSibling;
        if (button && button.getAttribute('aria-expanded') === 'false') {
          button.setAttribute('aria-expanded', 'true');
        }
      }

      /* Keep the active row in view inside the sidebar. Adjust scrollTop on
         the sidebar directly — scrollIntoView() would also scroll the
         document, and against a sticky sidebar that turns into a feedback
         loop that drags the page back up. */
      if (!isMobile()) {
        var frameEl = sidebar.querySelector('.sidebar__inner');
        if (frameEl && frameEl.scrollHeight > frameEl.clientHeight) {
          var box = activeLink.getBoundingClientRect();
          var frame = frameEl.getBoundingClientRect();
          var pad = 24;
          if (box.top < frame.top + pad) {
            frameEl.scrollTop -= (frame.top + pad - box.top);
          } else if (box.bottom > frame.bottom - pad) {
            frameEl.scrollTop += (box.bottom - (frame.bottom - pad));
          }
        }
      }
    }

    function update() {
      if (visible.size) {
        for (var i = 0; i < observedOrder.length; i++) {
          if (visible.has(observedOrder[i])) { setActive(observedOrder[i]); return; }
        }
      }
      /* Nothing in the detection band — fall back to the last heading passed. */
      var limit = chromeHeight() + 24;
      var candidate = null;
      for (var j = 0; j < observedOrder.length; j++) {
        if (observedOrder[j].getBoundingClientRect().top <= limit) candidate = observedOrder[j];
        else break;
      }
      setActive(candidate);
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      update();
    }, {
      rootMargin: '-' + (chromeHeight() + 8) + 'px 0px -65% 0px',
      threshold: 0
    });

    observedOrder.forEach(function (el) { observer.observe(el); });
    update();
  }

  /* ======================================================================
     07  READING PROGRESS BAR
     ====================================================================== */

  function initProgress() {
    if (!progressBar) return;
    var queued = false;

    function paint() {
      queued = false;
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = scrollable > 0 ? window.pageYOffset / scrollable : 0;
      progressBar.style.width = Math.min(Math.max(ratio, 0), 1) * 100 + '%';
    }

    function request() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(paint);
    }

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    paint();
  }

  /* ======================================================================
     08  MOBILE DRAWER
     ====================================================================== */

  function openNav() {
    root.classList.add('nav-open');
    navToggle.setAttribute('aria-expanded', 'true');
    scrim.hidden = false;
    var first = tocEl.querySelector('.toc__part');
    if (first) first.focus();
  }

  function closeNav() {
    if (!root.classList.contains('nav-open')) return;
    root.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    scrim.hidden = true;
  }

  function initNav() {
    navToggle.addEventListener('click', function () {
      if (root.classList.contains('nav-open')) {
        closeNav();
        navToggle.focus();
      } else {
        openNav();
      }
    });

    scrim.addEventListener('click', function () {
      closeNav();
      navToggle.focus();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && root.classList.contains('nav-open')) {
        closeNav();
        navToggle.focus();
      }
    });

    /* Leaving mobile width must not leave the page locked. */
    window.addEventListener('resize', function () {
      if (!isMobile()) closeNav();
    });
  }

  /* ======================================================================
     09  DARK MODE TOGGLE
     The saved preference is applied by the inline script in <head> so there
     is no flash; this only handles the control itself.
     ====================================================================== */

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit === 'dark' || explicit === 'light') return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function paintThemeButton() {
    var dark = currentTheme() === 'dark';
    themeToggle.textContent = dark ? 'Light mode' : 'Dark mode';
    themeToggle.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }

  function initTheme() {
    paintThemeButton();

    themeToggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      storeSet(THEME_KEY, next);
      paintThemeButton();
    });

    /* Follow the system setting while the reader has not chosen explicitly. */
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function () {
      if (!storeGet(THEME_KEY)) paintThemeButton();
    };
    if (media.addEventListener) media.addEventListener('change', onChange);
    else if (media.addListener) media.addListener(onChange);
  }

  /* ======================================================================
     10  HIDE GUIDANCE NOTES TOGGLE
     Lets the team preview the ebook without the placeholder instructions.
     ====================================================================== */

  function paintNotesButton() {
    var hidden = root.classList.contains('notes-hidden');
    notesToggle.textContent = hidden ? 'Show guidance notes' : 'Hide guidance notes';
    notesToggle.setAttribute('aria-pressed', hidden ? 'true' : 'false');
  }

  function initNotes() {
    paintNotesButton();

    notesToggle.addEventListener('click', function () {
      var hidden = root.classList.toggle('notes-hidden');
      storeSet(NOTES_KEY, hidden ? 'hidden' : 'shown');
      paintNotesButton();
    });
  }

  /* ======================================================================
     BOOT
     ====================================================================== */

  function init() {
    if (!content || !tocEl) return;

    buildToc(readStructure());
    initCollapse();
    initSmoothScroll();
    initActiveTracking();
    initProgress();
    initNav();
    initTheme();
    initNotes();

    /* Honour a hash in the URL once the ids exist. */
    if (window.location.hash.length > 1) {
      var target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) window.requestAnimationFrame(function () { scrollToTarget(target); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
