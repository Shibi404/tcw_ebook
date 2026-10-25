# REVIEW-NOTES.md

Record of the transfer from `PrintPod.md` into `index.html`.

**No wording was changed during the transfer.** Every section that was
transferred was checked word for word against the Markdown: **65 of 66 matched
exactly**. The one that did not is 9.5, and the three-word difference is
explained in item S4 below.

Four changes were then made afterwards **at the team's request** — these are
deliberate and are listed in section 0.

Apart from those four, nothing in this file has been acted on. Each remaining
item is for the team to decide.

---

## 0. Changes made at the team's request (after the transfer)

| # | Change | Where |
| --- | --- | --- |
| 1 | `[Institution name]` / `[institution name]` replaced with **Amrita Vishwa Vidyapeetham** | Title page, Copyright and disclaimer, Document information (3 places) |
| 2 | Removed the sentence "For questions about this document, contact [email address]." | Copyright and disclaimer |
| 3 | About the team table columns changed from *Member / Role / Contribution* to **Name / Roll no** | About the team |
| 4 | About the team reduced to 3 placeholder rows — **reverted by change 8**; "Team is 3" meant the team is *named* Team 3, not that it has three members | About the team |
| 5 | `[Team name]` in the copyright line replaced with **Team 3** | Copyright and disclaimer |
| 6 | Removed the Figure 5.1 placeholder (the labelled kiosk drawing) | 5.1 The kiosk unit |
| 7 | Added the content of `PrintPod_Updated.pdf` | Chapters 3, 4, 10, 11, 12 (22 sections + 3 chapter intros) |
| 8 | Filled About the team with the **seven** members' names and roll numbers, and removed that section's guidance note | About the team |
| 9 | Filled the **Authors** line with the seven names | Document information |
| 10 | Added **Figure 5.1**, a labelled front elevation of the kiosk drawn as inline SVG | 5.1 The kiosk unit |
| 11 | Gave the QR scanner a purpose (collection by scanned code) and split the unpaid-job expiry timer | 3.1, 3.2, 3.3, 4.3, 4.6, 5.2, 6.2, 6.4, 6.5, 6.6, 7.2, 9.5, 10.1 |
| 12 | Removed USB and email upload from Chapter 7, so it agrees with the architecture | 7.1, 7.2 |
| 13 | Payment methods cut to **UPI and campus card**; wallet balance removed throughout | 3.1, 4.4, 8.7, 9.5, 13.1, 13.4, Glossary |
| 14 | A paid job that cannot be printed is now held **ten minutes**, not thirty | 4.3, 4.6, 6.4, 6.5 |
| 15 | Chapter 14 recomputed on the team's figures: **500 pages/day at ₹2/page**, low-usage case 250/day | 14.1, 14.4, 14.5 |
| 16 | 5.3's consumable life recomputed, since it follows from Chapter 14's volume | 5.3 |
| 17 | Outright errors corrected and terminology normalised to one house style | 1.1, 7.1-7.5, 7.7, 8.5, 8.7, 9.5, 14.2 |
| 18 | "ATM Printer" renamed, 5.2 tray capacities filled, notes-to-self cut from References, Document information completed | 2.1, 5.2, References, Document information |
| 19 | Three paragraphs lost a stray whole-paragraph italic wrapper left by the Markdown transfer | 8.1 (twice), 8.7 |

Consequences worth noting:

- **Copyright and disclaimer no longer matches the Markdown**, because of
  changes 1, 2 and 5. It now has three paragraphs where the Markdown has four.
  This was asked for, but if the Markdown is also being submitted, make the same
  three changes there so the two versions agree.
- `PrintPod.md` still contains `\[institution name\]`, `\[Team name\]` and the
  contact sentence. Only `index.html` was changed.
- Chapter 5 now has no figures at all. The Markdown's own placeholder for that
  drawing ("Figure 5.1: labelled diagram of the kiosk unit...") is still in
  `PrintPod.md` at line 175 and should be deleted there too. Figure numbering
  elsewhere is unaffected, since figures are numbered per chapter.

## 0b. The PrintPod_Updated.pdf transfer

Added verbatim from the PDF: **22 sections and 3 chapter introductions**, covering
Chapters 3, 4, 10, 11 and 12. Verified two ways — the patch reproduces the
transcription exactly (0 mismatches in 22 sections), and the transcription
matches the PDF word for word, allowing for the figure labels and table headers
noted below.

**Filled:** 3.1-3.3, 4.1-4.6, 10.1-10.6, 11.1-11.5, 12.1, 12.2, and the chapter
introductions for 10, 11 and 12. Chapters 3 and 4 have no introduction text in
the PDF, so their guidance notes remain.

**Chapter 11 numbering is now resolved.** The PDF uses five sections, 11.1-11.5,
matching the webpage rather than the four in `PrintPod.md`. Item S1 below is
therefore settled in the webpage's favour, and the cross-references in 8.6 and
9.4 to "Section 11.2" for the refill procedure are correct. `PrintPod.md` is
still one step out and should be renumbered if it is submitted.

**Headings that differ between the PDF and the webpage.** The webpage headings
were kept, since they were agreed as final. The PDF calls them:

| Webpage | PDF |
| --- | --- |
| Chapter 12 Troubleshooting and FAQ | Chapter 12 Troubleshooting |
| 11.1 Routine maintenance schedule | 11.1 Routine maintenance |
| 12.1 Troubleshooting table | 12.1 Common problems and solutions |

**12.1 was overwritten.** It previously held the partly written table from
`PrintPod.md` (six symptoms with `[cause]` and `[resolution]` placeholders). The
PDF supplies a complete table, so it replaced the old one. The PDF table has
three columns - Problem, Possible cause, Solution - where the skeleton had four;
the fourth column, **Handled by**, is gone, because the PDF does not provide it.
Say the word if you want it back as an empty column.

**11.1 still has its empty starter table** (Task / Frequency / Performed by /
Time). The PDF gives 11.1 a paragraph and no table, so the empty table was left
in place rather than removed.

**The two diagrams were not imported.** The PDF contains finished artwork for
Figure 3.1 (the user flow) and Figure 4.1 (the architecture). The webpage still
shows the bordered placeholders, with the captions already matching the PDF word
for word. Importing the artwork means rasterising it out of the PDF and
embedding it, which is more than a content change - ask and I will do it.

**Still missing:** 12.3 Frequently asked questions is now the only numbered
section in the whole ebook with no content. The PDF has no 12.3.

**On tone.** Chapters 3 and 4 are written in the same careful register as 5 and
6 - quantified, reason-giving, cross-referenced. Chapters 10, 11 and 12 are much
shorter and more general, and 10.1-10.6 in particular do not meet the brief the
skeleton set for them ("Every claim here must be specific... name the mechanism
and the timing"). 10.2 also no longer states the retention rule as a number,
which 6.5 and the old guidance note both required it to match. Nothing was
changed; flagging it as a drafting gap.

## 0c. Change 11 in detail - the collection QR code

**The problem.** The specification listed a QR *scanner* on the front of the
kiosk (5.1, 5.2) but nothing in the ebook ever asked the kiosk to read a QR
code. Every QR flow ran the other way: the kiosk displays a code and the user's
phone camera reads it, for upload (6.2) and for UPI payment (4.2, 7.5). The
scanner was unused hardware.

**The fix.** A job uploaded from the website now returns a collection code in
two forms - a QR code to hold up to the scanner window, and the same code as six
digits to type. That gives the scanner a job and makes collection quicker.

**A second contradiction this exposed, now also fixed.** 6.4 said an unpaid job
was "held for ten minutes from upload", while the entire point of the website
route (6.2) and the narrative in 3.2 is uploading *before* walking to a kiosk.
Ten minutes to cross campus, queue, preview and pay is often impossible, so as
written the headline feature deleted the file before the user arrived. The timer
is now split:

| Stage | Held for |
| --- | --- |
| Uploaded from the website, not yet opened at a kiosk | four hours |
| Opened at a kiosk and not yet paid for | ten minutes |
| Uploaded at the kiosk itself | ten minutes from the start |
| Paid for but cannot be printed | thirty minutes |

The four-hour figure was chosen to cover an upload between lectures while
keeping the retention window short enough to defend in Chapter 10. It is
repeated consistently in 3.2, 4.3 (twice), 4.6, 6.4 and 6.5.

**Other wording touched:** 5.2 now has a separate *Code scanner* row and the
*Payment hardware* row lists the NFC reader only; 7.2's menu item is
**Collection Code** rather than Web Code and its step 5 describes scanning with
typing as the alternative; 6.6 records that the six digits remain for a user who
cannot aim a phone at the scanner; 10.1 states that a collection code is
single-use; and 9.5 gains an acceptance test for collecting a website upload.

**Still open, and deliberately untouched:** 6.2 continues to say there are
**two** upload routes and that the kiosk "has no USB port and no inbox", while
7.1 and 7.2 still describe USB and email upload (item C1 below). Change 11 did
not touch that contradiction.

Still unfilled in the webpage, by the team's decision that these stay theirs to
write: **section 12.3 (Frequently asked questions)** and the **chapter
introductions for 1-6, 13, 14 and 16**. Everything else in the ebook is
complete.

Also outstanding, but not writing: the figure placeholders in 3.2, 4.1, 7.2-7.6
and 14.5. Figure 5.1 is drawn.

---

## 1. Sections filled (66)

### Front matter
| Section | Title |
| --- | --- |
| — | Copyright and disclaimer |
| — | Preface |

### Chapter introductions
| Section | Title |
| --- | --- |
| Ch 7 intro | User guide |
| Ch 8 intro | Administrator guide |
| Ch 9 intro | Installation and deployment |
| Ch 15 intro | Case study |

### Numbered sections
| Section | Title |
| --- | --- |
| 1.1 | A day in the life of a student deadline |
| 1.2 | Where the current system breaks down |
| 1.3 | What it costs the institution |
| 1.4 | What a solution must do |
| 2.1 | What it is |
| 2.2 | Key capabilities at a glance |
| 2.3 | How it answers each requirement |
| 2.4 | Who it serves |
| 5.1 | The kiosk unit |
| 5.2 | Specification table |
| 5.3 | Consumables |
| 5.4 | Site requirements |
| 6.1 | Supported file formats |
| 6.2 | Upload methods |
| 6.3 | Print settings available to the user |
| 6.4 | Queue management |
| 6.5 | Document retention and deletion |
| 6.6 | Accessibility features |
| 7.1 | Before you start |
| 7.2 | Step 1 Upload your document |
| 7.3 | Step 2 Check the preview |
| 7.4 | Step 3 Choose your print settings |
| 7.5 | Step 4 Pay |
| 7.6 | Step 5 Collect your printout |
| 7.7 | Tips |
| 7.8 | If something goes wrong |
| 8.1 | Accessing the admin portal |
| 8.2 | The dashboard |
| 8.3 | Monitoring kiosk health |
| 8.4 | Managing pricing |
| 8.5 | Usage and revenue reports |
| 8.6 | Consumable alerts and refilling |
| 8.7 | Handling refunds and disputes |
| 9.1 | Choosing a location |
| 9.2 | Pre-installation checklist |
| 9.3 | Physical installation |
| 9.4 | Commissioning |
| 9.5 | Acceptance testing |
| 9.6 | Launching to users |
| 12.1 | Troubleshooting table (partial — see C2) |
| 13.1 | Accepted payment methods |
| 13.2 | How pricing works |
| 13.3 | Institutional pricing options |
| 13.4 | Failed jobs and refunds |
| 13.5 | Revenue handling |
| 14.1 | Assumptions |
| 14.2 | Capital cost |
| 14.3 | Operating cost |
| 14.4 | Revenue projection |
| 14.5 | Break-even analysis |
| 14.6 | Benefits that are not financial |
| 15.1 | The scenario |
| 15.2 | The deployment |
| 15.3 | Projected results after six months |
| 15.4 | What the scenario reveals |
| 16.1 | Near-term enhancements |
| 16.2 | Longer-term possibilities |
| 16.3 | Limitations of the current design |

### Back matter
| Section | Title |
| --- | --- |
| — | Glossary (14 terms) |
| — | References |

---

## 2. Sections still empty (18)

These still hold only a placeholder guidance note in the Markdown, so the
guidance note in the webpage was left exactly as it was.

| Section | Title |
| --- | --- |
| 3.1 | The four-step cycle |
| 3.2 | The user journey |
| 3.3 | What happens behind the scenes |
| 4.1 | Overview |
| 4.2 | The kiosk |
| 4.3 | The cloud backend |
| 4.4 | The payment gateway |
| 4.5 | The admin portal |
| 4.6 | Data flow for a single print job |
| 10.1 | Document security |
| 10.2 | Document retention and deletion |
| 10.3 | Payment security |
| 10.4 | Physical security |
| 10.5 | Access control |
| 10.6 | Audit and compliance |
| 12.2 | Error messages |
| — | About the team (table restructured — see section 0 — but the names and roll numbers are still to be filled in) |
| — | Document information |

All of **Chapter 3, Chapter 4 and Chapter 10** are unwritten, and Chapter 10 is
the one the Markdown's own note calls "the chapter administrators read most
carefully".

Also still empty, because the Markdown has no heading for them at all
(see S6): **11.1–11.5** (all of Chapter 11, Maintenance) and **12.3**
(Frequently asked questions).

---

## 3. Contribution initials

**None were found.** No heading in the Markdown carries an `[AR]`, `[SK]` or
any other initials tag.

The only occurrence of `[AR]` in the whole file is in the skeleton instruction
at line 5, which is the example telling the team what to do:

> "Tag every heading you write with your initials, e.g. [AR]."

So there is currently **no record of individual contribution anywhere in the
draft**. If those marks depend on it, this needs to be reconstructed by the team
before submission — I cannot infer it from the file.

---

## 4. Decisions you should check (D)

### D1. Whole-section italics were rendered as normal body text
**This is the one judgment call that affects how the page looks, and it affects
about half the ebook.**

In the Markdown, these sections are wrapped in italics from first character to
last — not a word or phrase, the entire section:

> 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 7.7, 8.1, 8.7, 9.1, 9.5,
> 13.1, 13.2, 13.3, 13.4, 13.5, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 15.1, 15.2,
> 15.3, 15.4, 16.1, 16.2, 16.3, the Chapter 15 note, and most Glossary cells.

This looks like an artefact of Google Docs: the skeleton's guidance notes were
italic, and where someone typed their content inside that italic run the
formatting carried over. The skeleton note at line 5 says "Italic grey notes in
brackets tell you what belongs in that space; delete each note once you have
written the section."

**I rendered these as ordinary paragraphs**, because half an ebook set in
italics reads as broken, and because your own instruction describes 5.3 as a
paragraph with a *bold* lead-in ("**Paper.** The tray holds...") — in the file
it is italic, not bold, which suggests you also think of it as body text.

**No words were changed by this.** Inline emphasis *inside* a paragraph was kept
as `<em>`. If you want the italics back, say so and I will restore them.

**Correction (change 19).** Three paragraphs slipped through this and kept their
italic wrapper: two in 8.1 and one in 8.7. They contained bold runs, which made
my italic-detection skip them. They are now plain body text like the rest, and
the missing full stop at the end of the 8.7 one was added at the same time.

### D2. 8.7 has a heading level the skeleton does not have
The Markdown puts two sub-headings one level below 8.7:
*Automatic refunds* and *When a student reports a problem*. The webpage has no
component for that level. I rendered them as `<h4>` inside 8.7, which keeps a
valid heading order (h3 → h4). They are not in the table of contents, which only
lists h2 and h3. Tell me if you would rather they were bold paragraphs, or
promoted to 8.8 and 8.9.

### D3. The 7.7 callout box still holds its placeholder
Section 7.7 now carries the three tips from the Markdown. The webpage also has a
separate callout box at 7.7, designed to lift out one tip. The Markdown does not
nominate one, so I left that box's placeholder untouched rather than choose a
tip for you.

### D4. Chapter 7 has two more figure slots than the Markdown
The webpage has seven figure placeholders in Chapter 7 (7.1–7.7). The Markdown
names five (7.1–7.5). Both sets are still placeholders, so I changed neither,
but the numbering will not line up until one of them is adjusted.

---

## 5. Structural problems found (S)

### S1. Chapter 11 is numbered one step out of alignment — nothing transferred
The section titles match, but the numbers do not:

| Markdown | Webpage |
| --- | --- |
| 11.1 Refilling consumables | 11.2 Refilling consumables |
| 11.2 Cleaning | 11.3 Cleaning |
| 11.3 Software updates | 11.4 Software updates |
| 11.4 Service and support | 11.5 Service and support |
| *(no counterpart)* | 11.1 Routine maintenance schedule |

The webpage has an extra section, **11.1 Routine maintenance schedule**, which
the Markdown does not have, and everything after it is shifted by one.

I transferred nothing for Chapter 11. **No content was lost by this** — all four
Markdown sections are still placeholders. But the numbering has to be settled
before Chapter 11 is written, or cross-references will break: 8.6 and 9.4 both
point readers to "Section 11.2" for the refill procedure, which is correct in
the webpage's numbering and wrong in the Markdown's.

### S2. A sentence is formatted as a heading in 14.3
In the Markdown this is a `###` heading:

> "The estimated operating cost for two kiosks is ₹16,000 per month. Actual
> expenses will depend on usage, consumable prices and maintenance requirements."

It is a sentence, not a heading. I placed it as the closing paragraph of 14.3.
Its words are unchanged.

### S3. An empty heading
`PrintPod.md` line 770 is a `###` with no text, between 14.2 and 14.3. Ignored.

### S4. A duplicated heading is glued into 9.5's text
The first paragraph of 9.5 ends like this in the Markdown:

> "...and the result of each test.*9.6 Launching to users"

The words `9.6 Launching to users` are a heading that has been pasted onto the
end of the paragraph. The real 9.6 heading exists further down and is intact.

**I left those four words out of the paragraph.** This is the only place where
the webpage text differs from the Markdown, and it is the one section that does
not match word for word (401 words in the Markdown, 398 in the page). Say the
word and I will put it back.

### S5. 9.6 is at the wrong heading level
Every other section uses `###`. **9.6 Launching to users** uses `##`, the same
level as a chapter title. It was still matched and transferred correctly.

### S6. Headings in one file but not the other

**In the Markdown, with no home in the webpage — not transferred:**

| Heading | Line | Has content? |
| --- | --- | --- |
| Cover page | 9 | Yes — title, subtitle, a figure placeholder, course, `[Institution name]`, `[Team member names]`, October 2026 |
| Table of contents | 35 | No, placeholder only |

The webpage has its own title page and a generated sidebar table of contents, so
these two have no place to go. The Cover page content is the only Markdown
content not transferred anywhere. Nothing in it is unique except the figure
placeholder for the kiosk photograph.

**In the webpage, with no heading in the Markdown — left as placeholders:**

| Section | Title |
| --- | --- |
| 11.1 | Routine maintenance schedule |
| 11.5 | Service and support |
| 12.3 | Frequently asked questions |

(11.1 and 11.5 are both consequences of S1.)

### S7. A skeleton instruction that is not marked as one
The paragraph at line 5, under the subtitle, is the "How to use this skeleton"
note. It is not in square brackets, so it does not look like a placeholder by
the usual rule. It was not transferred, because the subtitle has no section in
the webpage. Worth deleting from the Markdown before submission.

---

## 6. Content problems noticed and left alone (C)

Nothing below was changed. Listed roughly by how much it matters.

### C1. 6.2 and Chapter 7 contradicted each other about USB - FIXED (change 12)
**Resolved.** USB and email upload have been removed from 7.1 and 7.2, so the
user guide now describes the same two routes as 6.2: scanning the kiosk's QR
code with a phone, and presenting a collection code from a website upload.

The fix went this way round because "no USB port and no inbox" is load-bearing
elsewhere - it is one of only three named design decisions in 4.1, it is what
makes every file checked and logged (requirement R5), and a USB socket on an
unattended kiosk is a genuine security liability. Supporting it instead would
have meant rewriting 4.1, 4.2, 5.1, 5.2, 6.2, Figure 5.1 and Chapter 10, and
throwing away a good argument.

The original problem is recorded below.

**6.2** says there are **two** upload routes and that:

> "the kiosk itself never accepts a file directly. There is no USB port and no
> inbox, so there is no way to put a file into the unit without it passing
> through the backend first."

**7.1** tells the reader to have their file "Saved on your smartphone, USB flash
drive, or accessible via email or web browser", and **7.2** lists **four**
methods — Scan QR Code, USB Drive, Email, Web Code — including:

> "Insert your flash drive into the USB port below the touch screen if using USB
> upload, and tap your file name on screen."

One of these had to go. It also affected 5.1, which lists the front-face
components without a USB port.

### C2. The product is called something else in 2.1 - FIXED (change 18)
**Resolved.** 2.1 now opens "PrintPod is a self-service printing kiosk for
universities." The original problem is recorded below.
2.1 opens:

> "The ATM Printer is a self-service printing kiosk for universities."

Every other section calls it PrintPod. 2.1 is the section that defines what the
product *is*, so this is a conspicuous place for the wrong name.

### C3. How long a failed job is held — FIXED (change 14)
**Resolved as ten minutes**, on the team's decision. 6.4, 6.5, 4.3 and 4.6 now
say ten, matching what 8.6 and the refund table in 8.7 always said. The original
problem is recorded below.

- **6.4**: "A paid job that fails to print ... is held for thirty minutes so that it can be released once the kiosk is refilled."
- **6.5**: "A paid job that cannot be printed is deleted after thirty minutes."
- **8.6**: "If the tray is not refilled within 10 minutes, the job is cancelled and the user is refunded."
- **8.7**, automatic refunds table: "A job stops part-way and is not finished within 10 minutes".

Chapter 6 said thirty minutes; Chapter 8 said ten, twice.

One style point left alone: Chapter 8 writes "10 minutes" in numerals while
Chapters 3, 4 and 6 spell out "ten minutes". The two now state the same rule
in different styles.

### C4, C5, C6. Chapter 14's arithmetic - FIXED (change 15)
**Resolved.** The team set the assumptions at **500 pages per kiosk per day at
₹2 per page over 300 operating days**, and the stress test at 250 pages per day.
Every figure in 14.4 and 14.5 was recomputed from those:

| | Was | Now |
| --- | --- | --- |
| Daily revenue per kiosk | ₹750 | ₹1,000 |
| Annual revenue per kiosk | ₹2,25,000 | ₹3,00,000 |
| Annual revenue, two kiosks | ₹4,50,000 | ₹6,00,000 |
| Annual surplus, two kiosks | ₹2,58,000 | ₹4,08,000 |
| Monthly revenue per kiosk | ₹37,500 (wrong) | ₹25,000 over 25 operating days |
| Monthly surplus per kiosk | ₹29,500 | ₹17,000 |
| Break-even | 2.5 months | 4.4 months |
| Stress test | 100 pages/day, 30-day month | 250 pages/day, 25-day month |
| Stress-test result | "only ₹1,000 remains" | ₹4,500/month, break-even ~17 months |

C6 resolves itself: ₹2 is exactly 13.2's black-and-white A4 rate, so the average
no longer needs an unstated colour mix to justify it. One caveat worth knowing:
13.2 also gives a 10 per cent double-sided discount, and 6.3 makes double-sided
the default, so a strict average would be a little under ₹2. The team's ₹2 is a
deliberate round figure.

5.3's consumable figures follow from this volume and were recomputed with it
(change 16): toner life from "about three weeks" to about twelve days, and the
low-toner warning from "several days" to nearly two. The paper tray still empties
roughly every two days, but only because double-sided is the default, which 5.3
now says explicitly.

The original problem is recorded below.

### C4. The revenue figure in 14.5 did not follow from 14.1 and 14.4
- **14.1** assumes 250 pages per kiosk per day, ₹3 per page, **300 operating days per year**.
- **14.4** works that through correctly: ₹750 a day, ₹2,25,000 a year per kiosk.
- **14.5** then says "the monthly revenue is ₹37,500 per kiosk".

₹37,500 ÷ ₹750 is 50 operating days in a month. On 300 days a year (25 a month)
the figure is ₹18,750. Every number after it in 14.5 is built on ₹37,500: the
₹29,500 monthly surplus and the 2.5-month break-even. On ₹18,750 the surplus is
₹10,750 and break-even is about 7 months.

### C5. 14.5's low-usage paragraph uses a different year
The same section's lower-usage scenario assumes "30 operating days" in a month,
where 14.1 assumes 300 in a year. The two cases in one section are not on the
same basis.

### C6. ₹3 average per page versus the rate card in 13.2
14.1 assumes an average revenue of ₹3 per page. 13.2 prices black-and-white A4
at ₹2, which is the ordinary case for student printing, with colour A4 at ₹10.
₹3 is reachable, but only with a particular colour mix, and nothing states it.

### C7. Payment methods: three or two — FIXED (change 13)
**Resolved as two**, on the team's decision: UPI and campus card. Wallet balance
is gone from 13.1 (now "two digital payment methods"), 3.1, 4.4, 8.7, 13.4, the
acceptance test in 9.5 and the Glossary, so Chapter 7 no longer disagrees with
Chapter 13.

The original problem: 13.1 and 9.5 described three (UPI, campus card, wallet
balance), while 7.5 offered the user two.

### C8. 5.2 had placeholders inside a filled table - FIXED (change 18)
**Resolved.** Paper tray capacity now reads "500 sheets of 80 gsm A4", matching
5.3. Output tray capacity is set to 250 sheets. The original problem is below.
Two rows of the specification table read `[sheets]`:

- Paper tray capacity — `[sheets]`
- Output tray capacity — `[sheets]`

5.3 already states the answer for the first one: "The tray holds 500 sheets of
80 gsm A4."

### C9. 12.1 is only a third written
The troubleshooting table has six symptoms, but **Likely cause**, **Resolution**
and **Handled by** are placeholders (`[cause]`, `[resolution]`,
`[user / admin]`) on the first row and empty on the rest. There is also a
literal `[add rows]` row. I transferred it as it stands, placeholders included,
since the symptoms are real content. The Markdown's own note asks for ten to
fifteen rows.

### C10. References opened with an instruction - FIXED (change 18)
**Resolved.** The opening paragraph is removed entirely. In the closing
paragraph only the first sentence went, because the second is a real disclaimer
for the reader; References now ends "The projected PrintPod specifications,
costs and case-study results are illustrative assumptions rather than facts
established by these references."

The original problem is recorded below.
The first paragraph reads:

> "Use a consistent citation style throughout the ebook. ... Add the exact
> printer manufacturer's datasheet once the hardware model is finalised."

That is addressed to the team, not the reader, but it is not bracketed, so by
the rule we agreed it counts as content and was transferred. The closing
paragraph has the same problem.

### C11. Grammar, punctuation and typography - FIXED (change 17)
**Resolved**, except the last row, which is a Markdown-only artefact and does
not appear in the webpage. Everything below was corrected.
| Where | What I noticed |
| --- | --- |
| 7.1 | "**A** active UPI app on your smartphone" — should be "An" |
| 8.5 | "Four reports are available " — no colon or full stop, trailing space |
| 8.7 | "If they **are** paid by UPI, ask them to wait out the bank's timeline" — reads as though the student is paid, not the refund |
| 8.7 | "Give the student the refund reference" — sentence ends with no full stop |
| 9.5 | "File the signed table with the installation record" — no full stop |
| 1.1 | Paragraph ends with a trailing space after "other people are also using." |
| 14.2 | "₹3000" and "₹2000" have no thousands separator, while every other figure in the same table does (₹35,000, ₹15,000) |
| 14.2 | The total cell is written `*₹*75,000` — the italics wrap only the rupee sign, unlike every other cell |
| 7.2–7.6 | Steps are written "**1\.**Tap ..." with no space after the number. Harmless here because the webpage numbers the list itself, but it will show if the Markdown is submitted |

### C12. Terminology drift between chapters - FIXED (change 17)
**Resolved.** House style is now: **touchscreen** (one word), **colour** and
**Colour Mode** (British spelling, Title Case for on-screen controls),
**collection code** throughout, and **campus card** in prose with **Campus
Card** kept only as the bolded on-screen button in 7.5. "student ID card" in
7.1 became "campus card", and "center" became "centre".

The original list is recorded below.
- "touch screen" (7.2, 7.4) vs "touchscreen" (5.1, 5.2, 9.3, 11 notes)
- "Black & White" (7.4) vs "black and white" (2.2, 13.2) vs "monochrome" (5.2, 6.3)
- "claim code" (7.2, 7.7) vs "collection code" (6.2) vs "6-digit claim code" / "six-digit collection code"
- "campus card" vs "Campus Card" vs "student ID card" (7.1)

---

## 7. How the conversion was done

- Paragraphs → `<p>`, bold → `<strong>`, italic → `<em>`, bullets → `<ul>`,
  numbered lists → `<ol>`, Markdown tables → the existing styled `<table>` with
  its header row, `☐` lists → the existing checklist component.
- Paragraph breaks were preserved one for one. No paragraph was merged or split.
- Bold lead-ins ("**Paper.** The tray holds...") were kept as lead-ins inside
  their paragraph and never turned into headings.
- `&` was written as `&amp;` (4 places). `₹ ° × — ≈ − ÷ ☐` were kept as real
  characters, not entities.
- Google Docs escape sequences (`\[`, `\]`, `\.`, `\=`, `\+`, `\-`) were undone,
  so the page shows `[`, `]`, `.`, `=`, `+`, `-` as the team typed them.
- Figures, the 7.7 callout, and every guidance note in an unwritten section were
  left exactly as they were.
- Where the Markdown supplied a table or checklist, the empty starter one in the
  webpage was removed so there is only one.
- `styles.css` and `script.js` were not touched.

### Verification
Each filled section's visible text was extracted from the finished
`index.html` and compared word by word against its source in `PrintPod.md`,
using a separate pass that does not share code with the converter.

**Result: 65 of 66 sections identical. The only difference is 9.5 (S4), by the
three words of the duplicated heading.**
