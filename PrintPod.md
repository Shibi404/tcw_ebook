# PrintPod

## Self-service document printing for university campuses 

***How to use this skeleton.** Every heading below is final — write under it, do not rename it without telling the Lead Editor. Italic grey notes in brackets tell you what belongs in that space; delete each note once you have written the section. Tag every heading you write with your initials, e.g. \[AR\].*

# **Front matter**

## **Cover page**

PrintPod

Self-service document printing for university campuses

\[Figure: the kiosk against a campus background. To be supplied by the Design Lead.\]

Technical Content Writing

\[Institution name\]

\[Team member names\]

October 2026

## **Copyright and disclaimer**

© 2026 \[Team name\]. All rights reserved.

This ebook was produced as an academic project for the Technical Content Writing course at \[institution name\].

PrintPod is a concept product developed for this project. It is not a commercially available system. All specifications, figures, pricing and performance data in this ebook are illustrative and were created to demonstrate technical documentation practice. The case study in Chapter 15 describes a projected scenario, not an actual deployment.

For questions about this document, contact \[email address\].

## **Table of contents**

*\[Auto-generate from heading styles. Do not type this by hand — it will drift from the real page numbers the moment anyone edits. Include chapter titles and first-level subheadings only; going three levels deep makes it unreadable. Regenerate after final layout.\]*

## **Preface**

Printing on a university campus still works the way it did twenty years ago. There is a counter, it keeps fixed hours, it takes cash, and a queue forms in front of it an hour before every submission deadline. Almost every other campus transaction has moved to self-service in that time. Printing has not.

PrintPod is a self-service printing kiosk designed for universities. A student uploads a document, chooses how they want it printed, pays from their phone or campus card, and collects the printout. No counter, no staff, no cash. This ebook describes what the system does, how it is built, and what it takes to run one.

It is written for two readers. Administrators and facility managers evaluating a self-service printing system will find the case for it in Part 1, the technical and operational detail in Parts 2 and 4, and the costs in Part 5\. Students and staff who will use a kiosk need only Chapter 7, a step-by-step guide to printing a document, and the questions answered in Chapter 12\.

The ebook covers what PrintPod is, how it is built, how it is used by students and administrators, how it is deployed and maintained, and what it costs to operate. It does not cover procurement or tendering processes, vendor selection, or any institution's specific IT and data policies. Those vary too widely between institutions to be treated usefully here.

Read it in order if you are deciding whether to deploy a kiosk. If you already know what PrintPod is and want one answer, use the table of contents. The chapters are self-contained, and where detail is not repeated, a cross-reference points to the chapter that holds it.

# **Part 1 — The case**

## **Chapter 1: The campus printing problem**

### **1.1 A day in the life of a student deadline**

It is 9 p.m., and a second-year student has a report due at 9 a.m. tomorrow. Her instructor wants three printed copies. The library counter closed at six, and the only print shop outside the gate has a queue of students with the same deadline. She stands in line for forty minutes, pays in cash, and waits while the shopkeeper looks for change. Then her file is opened on a shared computer that other people are also using. 

### **1.2 Where the current system breaks down**

* **Limited operating hours.** Library and department counters close in the evening, but deadlines and late-night study do not.  
* **Queues at peak times.** Printing demand rises sharply before submission dates, and one counter with one operator cannot absorb it.  
* **Cash and change problems.** Small payments in cash need exact change, and both students and shopkeepers lose time to this.  
* **Staff time on a non-academic task.** Library and office staff spend part of every day on printing instead of on the work they were hired to do.  
* **Privacy.** Documents left in an output tray can be taken or read by anyone who passes. At a shared counter this applies to assignments, project reports and sometimes personal documents.  
* **No record.** Counter printing leaves no reliable log of what was printed, by whom, or what was paid, so disputes and errors are hard to settle.

### **1.3 What it costs the institution**

Administrators rarely see printing as a cost centre, but it uses resources across the institution. Part of this cost is human: staff time diverted from teaching support and library services. Part is physical: counter space and equipment that need upkeep. The rest is organisational: end-of-day cash reconciliation and a steady flow of small complaints about queues, wrong prints and missing change. Because none of this is tracked, it is easy to underestimate. Costs are discussed qualitatively here, and figures appear in Chapter 14\.

The main cost areas are:

* Staff hours spent operating counters and handling print requests  
* Counter space and equipment taken up by manual printing  
* Daily cash handling and reconciliation  
* Complaints about waiting times, errors and payment disputes  
* Paper and toner wasted on reprints and uncollected jobs

### **1.4 What a solution must do**

A printing solution for a university should meet these criteria:

1. **R1: Always available.** It works whenever the campus is open, not only during staff hours.  
2. **R2: No cash handling.** Payment is digital, with no change and no end-of-day counting.  
3. **R3: Private by design.** A document is never visible to anyone other than its owner.  
4. **R4: Usable without training.** A first-time user can print without asking for help.  
5. **R5: Accountable.** Every job and payment is recorded and can be traced.  
6. **R6: Low staff effort.** It runs without a dedicated operator and reports its own problems.

## **Chapter 2: Introducing PrintPod**

### **2.1 What it is**

The ATM Printer is a self-service printing kiosk for universities. A student uploads a PDF, chooses print options, pays digitally and collects the printout at the kiosk, with no staff member involved. Documents are released only to the person who submitted them, and every job and payment is recorded. Administrators can monitor paper, ink and printer status remotely, so the kiosk keeps running without a dedicated operator. 

### **2.2 Key capabilities at a glance**

| Capability | What it means  |
| ----- | :---- |
| Upload PDFs  | Send your file to the kiosk from your own phone or laptop  |
| Choose print options  | Pick copies, colour or black and white, and single or double sides before you pay  |
| Digital payment  | Pay on screen, with no cash and no change needed  |
| Self-service collection  | Pick up your printout at the kiosk at any hour the campus is open  |
| Private release  | Your document prints only when you are standing at the kiosk  |
| Job queue  | Jobs are handled in order, so a busy period does not cause a breakdown  |
| Printer monitoring  | The kiosk tracks its own paper and ink levels and reports faults  |
| Records and reports  | Every print and payment is logged for you and for the administrator  |

### **2.3 How it answers each requirement**

* **R1, Always available:** The kiosk runs without staff, so printing is possible whenever the campus is open.  
* **R2, No cash handling:** Payment is digital, so there is no change to give and no cash to reconcile.  
* **R3, Private by design:** Files are held until the owner is at the kiosk, so no one else sees the printout.  
* **R4, Usable without training:** The flow is upload, choose, pay, collect, shown step by step on screen.  
* **R5, Accountable:** Each job and payment is logged against the user.  
* **R6, Low staff effort:** Remote monitoring of paper, ink and printer status replaces routine checks by staff.

### **2.4 Who it serves**

**The student.** Students can print at any hour, pay without cash, and collect their documents without waiting behind a queue. Their files stay private from upload to collection.

**The faculty member.** Faculty can print handouts, question papers and notes without going through a department office. A record of each job is kept, so repeat prints and costs are easy to track.

**The administrator.** Administrators get a printing service that does not depend on staff time or cash handling. They can see usage, payments and printer status from one place and plan refills before the kiosk runs out.

## **Chapter 3: How it works**

### **3.1 The four-step cycle**

*\[Upload, preview and configure, pay, collect. One short paragraph per step at a conceptual level. Do not write click-by-click instructions here — that is Chapter 7\. The test: this section should still make sense to someone who will never touch the kiosk.\]*

### **3.2 The user journey**

*\[**Figure 3.1** — the user flow diagram goes here. Request it from the Design Lead. Show the path from arrival to collection, including the branch where a user uploads ahead of time from their phone versus at the kiosk itself. Caption below the figure.\]*

### **3.3 What happens behind the scenes**

*\[One paragraph bridging to Part 2\. Where the file goes, what the backend does, how payment is confirmed before printing starts. Two or three sentences — just enough that the architecture chapter does not arrive cold.\]*

# **Part 2 — The product**

## **Chapter 4: System architecture**

### **4.1 Overview**

*\[**Figure 4.1** — the architecture block diagram. Four components minimum: the kiosk itself, the cloud backend, the payment gateway, the admin portal. Arrows labelled with what passes between them. This figure carries the chapter; the prose supports it, not the other way round.\]*

### **4.2 The kiosk**

*\[What runs locally: the touchscreen application, the print spooler, the payment reader interface, local storage during a session. State explicitly what the kiosk does NOT store after a job completes.\]*

### **4.3 The cloud backend**

*\[Document handling, the print queue, user accounts if any, transaction records, usage analytics. One paragraph per responsibility.\]*

### **4.4 The payment gateway**

*\[How payment is initiated and confirmed. The critical design point: printing starts only after payment confirmation, and a failed print triggers a refund. Say so explicitly.\]*

### **4.5 The admin portal**

*\[What administrators see and control remotely. Keep it brief here — Chapter 8 is the full guide.\]*

### **4.6 Data flow for a single print job**

*\[A numbered sequence from file upload to printed output, naming which component does what at each step. Six to ten steps. This is where a reader checks whether the architecture actually holds together, so be precise.\]*

## **Chapter 5: Hardware specifications**

### **5.1 The kiosk unit**

*The PrintPod unit is a free-standing enclosure designed to stand against a wall in a corridor, foyer or library entrance. It is 1,450 mm tall, which places the touchscreen at a comfortable height for a standing adult and keeps the output tray above knee level. The front face carries, from top to bottom, the touchscreen, the QR scanner window, the card reader and the output tray. The printer sits behind a lockable panel on the left side, so paper and toner can be replaced without opening the main enclosure. A status light runs along the top edge and is visible from the far end of a corridor, which lets a passing student see that the kiosk is free before walking to it.*

*\[Figure 5.1: labelled diagram of the kiosk unit, calling out the touchscreen, card reader, QR scanner, output tray, printer access panel, status light and enclosure lock. To be supplied by the Design Lead.\]*

### **5.2 Specification table**

*The specifications below describe the standard PrintPod unit. Every figure quoted elsewhere in this ebook refers to this table.*

| Component | Specification |
| :---- | :---- |
| Printer type | *Monochrome laser (colour laser on the PrintPod C variant)* |
| Print speed | *32 pages per minute, A4 monochrome* |
| Print resolution | *1200 × 1200 dpi* |
| Paper sizes supported | *A4 and A3* |
| Paper tray capacity | *\[sheets\]* |
| Output tray capacity | *\[sheets\]* |
| Touchscreen | *15.6 inch, 1920 × 1080, capacitive multi-touch* |
| Payment hardware | *QR scanner for UPI, NFC reader for campus cards* |
| Connectivity | *Wi-Fi 6 (802.11ax), Gigabit Ethernet, 4G LTE fallback* |
| Power requirement | *230 V, 50 Hz, 450 W peak and 12 W standby* |
| Dimensions | *1,450 × 600 × 550 mm* |
| Weight | *78 kg* |
| Enclosure | *Powder-coated 1.5 mm steel, cam lock on each access panel, IP41* |
| Operating temperature | *10 °C to 35 °C* |

### **5.3 Consumables**

*The unit takes two consumables, and both can be replaced by a campus operator without a service visit.*

*Paper. The tray holds 500 sheets of 80 gsm A4. A second tray for A3 is fitted to units that offer A3 printing. At the usage assumed in Chapter 14, a single kiosk empties its A4 tray roughly every two days during term and far less often outside it.*

*Toner. The cartridge is rated at 6,000 pages at five per cent coverage, which works out to about three weeks of term-time printing on one unit. The admin portal raises a low-toner alert at fifteen per cent remaining, giving an operator several days of warning rather than a surprise on a deadline morning.*

*Both consumables are ordinary office stock. Nothing in the kiosk is proprietary, and an institution can buy paper and cartridges from its existing supplier.*

### **5.4 Site requirements**

*A location must meet five requirements before a unit can be installed.*

*Floor space. The unit occupies 600 mm by 550 mm. Allow 900 mm of clear space in front for a user to stand, and 400 mm of clearance on the left for the printer panel to swing open.*

*Power. One earthed 230 V socket within two metres, on a circuit that is not switched off with the building lighting. The unit draws 450 W while printing and 12 W on standby.*

*Network. Wi-Fi coverage at the kiosk position, or a wired point within three metres. Signal strength should be tested at the exact position rather than assumed from coverage elsewhere in the building.*

*Lighting. Enough ambient light for a user to read the screen and check a printout, and no window directly behind the unit, which makes the touchscreen hard to read for part of the day.*

*Mounting. The unit is bolted to the floor through four points in the base. Floor fixing is required in any location that is unsupervised outside staff hours.*

## **Chapter 6: Software features**

### **6.1 Supported file formats**

*PrintPod accepts PDF, Word documents in .docx and .doc, PowerPoint files in .pptx, plain text, and the JPG, PNG and HEIC image formats.*

*PDF is the recommended format and prints exactly as it appears on the user's own screen. Other formats are converted to PDF on the backend before printing, and conversion can shift the layout of a document that uses an unusual font or a complex table. The preview screen shows the converted file, not the original, so a user who checks the preview will see any shift before paying.*

*The maximum file size is 50 MB and the maximum length is 200 pages in a single job. A file that exceeds either limit is rejected at upload with a message naming the limit it broke, and the user is not charged. Password-protected files cannot be opened and are rejected in the same way.*

### **6.2 Upload methods**

*There are two ways to get a document onto a kiosk, and both go through the same place: the PrintPod web app, at the address printed on every unit. There is nothing to install and no account to create.*

*Why both routes lead to the same place. Sending every upload through one web app keeps the path identical whichever way a user starts, so the preview, settings and payment screens behave the same way in both cases. It also means the kiosk itself never accepts a file directly. There is no USB port and no inbox, so there is no way to put a file into the unit without it passing through the backend first.*

*At the kiosk, by QR code. The user taps Upload on the kiosk and scans the QR code shown on screen with their phone camera. The code opens the PrintPod web app in the phone's browser, already linked to that kiosk, and the user picks a file from their phone storage or from a cloud drive they are signed in to. The file appears on the kiosk screen for preview within a few seconds. The QR code is valid for five minutes and belongs to that one session, so nobody else can send a file to the kiosk while it is in use.*

*From the website, before arriving. The user opens the PrintPod web address in any browser, uploads a file and receives a six-digit collection code. Entering that code at any kiosk on campus brings the job up for preview. This is the faster route at busy times, because the upload is finished before the user reaches the queue.*

*What else the web app does. Besides uploading, it shows the current price list, the live status of every kiosk on campus so a user can walk to one that is free, and the user's own recent jobs with the amount paid and the refund status where a job failed. It never shows the contents of a document, and it holds no file once the job is complete, as set out in Section 6.5.*

### **6.3 Print settings available to the user**

*The settings screen offers seven options. Each one defaults to the cheapest sensible choice, so a user who changes nothing gets the lowest price for that document.*

*Copies defaults to one. Page range defaults to all pages. Sided defaults to double-sided, which halves the paper used. Colour defaults to monochrome. Paper size defaults to A4. Orientation defaults to the orientation of the uploaded file. Pages per sheet defaults to one.*

*The price shown at the foot of the screen updates as each setting changes, so a user can see the cost of switching to colour or to single-sided before committing to it.*

### **6.4 Queue management**

*Each kiosk prints one job at a time and holds the rest in a queue. A user who arrives while another job is printing can still upload, preview, configure and pay, and the screen shows their position in the queue and an estimated wait in seconds. In practice a queue rarely exceeds two jobs, because a typical job finishes in well under a minute.*

*An unpaid job is held for ten minutes from upload, after which it expires and is deleted. A paid job that fails to print, because the kiosk runs out of paper for instance, is held for thirty minutes so that it can be released once the kiosk is refilled. If it cannot be printed within that window, the job is deleted and the payment is refunded automatically under the rules in Chapter 13\.*

### **6.5 Document retention and deletion**

*A document is deleted within sixty seconds of its print job completing. Deletion covers both the copy held in the backend and the copy spooled to the kiosk, and it happens whether or not the user collects the printout.*

*An uploaded job that is never paid for is deleted when it expires, ten minutes after upload. A paid job that cannot be printed is deleted after thirty minutes, together with an automatic refund.*

*Nothing is retained beyond these windows. The transaction record kept for billing holds the page count, the price and the timestamp, and does not hold the document, its file name or its contents. Chapter 10 sets out how files are protected while they are held.*

### **6.6 Accessibility features**

*The kiosk is designed to be usable by a seated wheelchair user. The touchscreen is mounted at 1,050 mm and tilted fifteen degrees upward, the output tray sits at 800 mm, and every control the user needs falls within a 1,200 mm reach from the front of the unit.*

*On screen, the interface offers three text sizes and a high-contrast mode, both reachable from an accessibility button present on every screen. The interface is available in English, Hindi and Malayalam, selected at the start of a session and reset when the session ends. Audio prompts can be enabled to read each screen aloud through a 3.5 mm headphone socket below the card reader, so a visually impaired user can work through the flow without a sighted assistant.*

*No setting persists between sessions, because the kiosk holds no user accounts. Each user chooses what they need at the start of their own session.*

# **Part 3 — Using the kiosk**

## **Chapter 7: User guide**

This guide provides step-by-step instructions for printing your documents at any PrintPod kiosk on campus. The process is fully automated, self-service, and requires no account creation or software installation.

### **7.1 Before you start**

Before approaching a PrintPod kiosk, ensure you have the following items ready:

* **Document file:** Saved on your smartphone, USB flash drive, or accessible via email or web browser. PDF format is strongly recommended for best layout preservation.  
* **Payment method:** A active UPI app on your smartphone, or an activated campus student ID card with sufficient funds balance.

No registration, account sign-up, or app installation is required to use the kiosk. Printing typically takes under two minutes from upload to collection.

### **7.2 Step 1: Upload your document**

***\[Figure 7.1: Home Screen — Showing Upload Options\]***

**1\.**Tap **Print Document** on the kiosk main touch screen.

**2\.**Select your preferred upload method from the on-screen menu: **Scan QR Code** (Phone), **USB Drive**, **Email**, or **Web Code**.

**3\.**Scan the displayed QR code with your phone camera if choosing phone upload, and select your file on your mobile screen.

**4\.**Insert your flash drive into the USB port below the touch screen if using USB upload, and tap your file name on screen.

**5\.**Enter the 6-digit claim code on the touch screen if you submitted your file via email or web upload prior to arrival.

**6\.**Wait for the kiosk to complete file processing and transfer to the preview screen.

### **7.3 Step 2: Check the preview**

***\[Figure 7.2: Preview Screen — Document Layout Verification\]***

**1\.**Review the document preview pages displayed on the center of the touch screen.

**2\.**Swipe left or right on the screen image to turn pages and verify full document layout.

**3\.**Check for formatting accuracy, font rendering, margins, table alignment, and unwanted trailing blank pages.

**4\.**Tap **Cancel Job** at the bottom left if formatting shifts or errors are detected, returning you safely to the start screen without penalty.

**5\.**Tap **Confirm & Continue** once page formatting is verified.

### **7.4 Step 3: Choose your print settings**

***\[Figure 7.3: Print Options Screen — Configuration Controls\]***

**1\.**Select **Color Mode** by tapping either **Black & White** (default) or **Color**.

**2\.**Choose **Print Sides** by selecting **Double-Sided** (default) or **Single-Sided**.

**3\.**Set **Copies** by tapping the plus (**\+**) or minus (**\-**) buttons to adjust total required print sets.

**4\.**Specify **Page Range** by selecting **All Pages** or typing custom start/end page numbers.

**5\.**Observe the calculated total amount updating automatically at the bottom right corner as options are modified.

**6\.**Tap **Proceed to Payment** when satisfied with settings and price.

### **7.5 Step 4: Pay**

***\[Figure 7.4: Payment Selection Screen — Digital Payment Options\]***

**1\.**Choose your payment type by tapping **UPI** or **Campus Card** on the screen.

**2\.**Scan the dynamic payment QR code on screen using any preferred UPI app on your phone if paying via UPI.

**3\.**Tap your physical student card against the contactless NFC card reader icon below the screen if paying via Campus Card.

**4\.**Confirm the transaction amount on your mobile phone app or on-screen prompt.

**5\.**Verify screen green checkmark icon confirming instant payment receipt and job initiation.

### **7.6 Step 5: Collect your printout**

***\[Figure 7.5: Printing Progress Screen — Job Completion and Pickup Alert\]***

**1\.**Watch top status light change from Blue (Busy) to Green (Ready) as printing completes.

**2\.**Retrieve printed pages immediately from the illuminated output tray located below the main panel.

**3\.**Check the on-screen final message confirming automatic secure deletion of all local temporary document files.

**4\.**Tap **Done** or walk away; screen resets automatically after 15 seconds for the next user.

### **7.7 Tips**

***Pro-Tips for Seamless Printing:***

***• Pre-upload on the walk:** Upload your document via the PrintPod web portal while walking to the kiosk to receive a claim code and skip upload wait times.*

***• Convert to PDF first:** Always export Word (.docx) or PowerPoint (.pptx) documents to PDF before uploading to lock in precise fonts and layout geometries.*

***• Save paper and money:** Keep double-sided printing enabled by default to reduce total page charges and decrease paper waste.*

### **7.8 If something goes wrong**

If you encounter issues while using the kiosk, refer to the quick actions below:

| Issue | Immediate Action | Further Reference |
| :---- | :---- | :---- |
| Payment debited but document did not print | Check transaction history in portal; automatic refund triggers within T+5 days. | See Section 8.7 & Chapter 12 |
| QR code fails to scan from mobile screen | Increase mobile screen brightness to maximum and re-align phone camera. | See Section 12.1 |
| Kiosk status light shows Amber or Red | Check on-screen warning banner for paper/toner out of stock alerts. | See Section 8.3 & Section 12.2 |

## **Chapter 8: Administrator guide**

This chapter is for the people who run PrintPod once it is installed. The administrator sets prices, issues refunds and answers for the money. The operator looks after the kiosk day to day: watching its status and keeping paper and toner topped up. Both use the admin portal, and this chapter follows it from signing in to settling a dispute. Installation is in Chapter 9 and hands-on maintenance is in Chapter 11\.

### **8.1 Accessing the admin portal**

*The admin portal is a web page, so there is nothing to install. Open the portal address you were given at commissioning in any current browser, enter your username and password, then enter the one-time code sent to your registered email or phone. The portal signs you out after 15 minutes without activity.*

*There are two roles, and the one you hold decides what the portal lets you do.*

| *Role* | *Who it is for* | *Can do* | *Cannot do* |
| :---- | :---- | :---- | :---- |
| *Operator* | *Library or department staff who look after the kiosk* | *View the dashboard and kiosk status, acknowledge alerts, view job and payment records* | *Change prices, issue refunds, export revenue reports, manage accounts* |
| *Administrator* | *The person responsible for the service* | *Everything an operator can do, plus change prices, issue refunds, export reports, register kiosks and manage accounts* | *Open or download a user's document (no role can)* |

*To add a person:*

*1\.*       *Click **Users** in the left-hand menu.*  
*2\.*       *Click **Add user**. Enter the person's name and institutional email address, then choose a role.*  
*3\.*       *Click **Send invite**. The person receives a link to set their own password. The link expires after 24 hours.*

*To remove someone's access, open their entry under **Users** and click **Deactivate**. Their past actions stay in the audit log. Keep the number of administrator accounts small, two or three for a campus, so that every refund or price change can be traced to a named person.*

*The **Kiosks** page lists every unit registered to your institution, with its name, location and the time it last contacted the backend. New kiosks are added during commissioning (Section 9.4).*

### **8.2 The dashboard**

The dashboard is the first page you see after signing in. It has five areas.

**Live kiosk status.** One card per kiosk, showing its name, location, current state and the time it last contacted the backend. The states are explained in Section 8.3.

**Jobs today.** The number of completed, failed and cancelled jobs since midnight, and the pages printed so far, split into black and white and colour.

**Revenue.** Money collected today, refunds issued and the net total, split by payment method. These are payments the gateway has confirmed. They have not necessarily reached the institution's bank account yet (Section 13.5).

**Consumable levels.** Paper and toner as a percentage for each kiosk. The bar turns amber when a level is low and red when it is empty.

**Alerts.** Open alerts, newest first, each with the kiosk, what happened and when. Click an alert to see what it means and what to do about it. An operator can mark an alert as acknowledged, but it stays open until the cause is fixed.

No part of the dashboard shows a document. The portal holds page counts, settings, status and amounts, never the file or its name. This follows from requirement R3 and is set out in Section 10.5.

### **8.3 Monitoring kiosk health**

Each kiosk card shows one of five states. The table gives the meaning of each and what to do.

| Indicator | Meaning | Action |
| :---- | :---- | :---- |
| Online (green) | The kiosk is connected and ready for the next user. | None. |
| Busy (blue) | The kiosk is serving a job. | None. If a kiosk stays Busy for more than 15 minutes with no change in pages printed, treat the job as stuck and see Section 12.1. |
| Attention (amber) | The kiosk still works, but something needs doing soon, such as low paper or low toner. | Open the alert and follow it. Refill before the level reaches empty (Section 8.6). |
| Out of service (red) | The kiosk has stopped taking new jobs. Typical causes are no paper, no toner, a paper jam, a printer fault or a payment reader fault. | Open the alert and send an operator to the kiosk. Section 12.1 lists the usual causes and fixes. |
| Offline (grey) | The backend has not heard from the kiosk for five minutes. | Check the power and the network connection at the location. If the kiosk is still offline after 15 minutes, raise a service call (Section 11.5). |

A kiosk that is Out of service or Offline does not let anyone start a job. Without the backend it cannot confirm a payment, and it should not take money for something it cannot print. Users see an unavailable message instead of paying and being refunded later.

### **8.4 Managing pricing**

Prices are set per page, with higher rates for colour and for A3 and a discount for double-sided printing. The rates are the ones listed in Section 13.2, and only administrators can change them.

1\.       Click **Pricing**. The current rate table opens.  
2\.       Click **Edit** beside the rate you want to change and type the new rate in rupees.  
3\.       Choose when it takes effect: **Immediately** or **From a set date and time**.  
4\.       Click **Review changes**. The old and new rates appear side by side.  
5\.       Click **Publish**. The change is saved in the audit log with your name and the time.

Concession rates, free print quotas and departmental billing are set up on the same page. What each option does is described in Section 13.3.

**Warning: when changes take effect.** A new rate applies to jobs priced after you publish it. A user already on the payment screen pays the price they were shown, and a job that has been paid for is never re-priced. Online kiosks pick up new rates within about a minute. Avoid changing prices in the hours before a submission deadline. Users will have seen the old rate on a poster or heard it from a friend, and the queue is at its longest.

### **8.5 Usage and revenue reports**

Four reports are available 

| Report | What it shows |
| :---- | :---- |
| Usage | Jobs completed, failed and cancelled; pages by colour, paper size and single or double sided; busiest hours; all per kiosk |
| Revenue | Payments by method, refunds and the net total, one line per day, with the gateway reference for each payment |
| Consumables | Refills logged, and paper and toner used per kiosk |
| Kiosk health | Time online, number of faults and how long each lasted |

To produce one:

1\.       Click **Reports** and choose a report.  
2\.       Choose a period (**Today**, **Last 7 days**, **This month** or a custom range) and one kiosk or all kiosks.  
3\.       Click **Generate**, then **Export**, and choose a format.

Reports export as CSV, Excel (.xlsx) or PDF. Use CSV or Excel when you want to sort or chart the figures, and PDF when you need something to file or send on. The gateway references in the revenue report let finance staff match each line against the settlement statement from the payment provider. Reports contain job IDs and totals only: no file names and no document content.

### **8.6 Consumable alerts and refilling**

Each kiosk reports its paper and toner levels to the backend continuously, and two alerts follow from those readings.

A **low alert** (amber) is raised when paper falls to 20 percent of the tray or toner to 15 percent. The kiosk keeps working. Refill the same day.

An **empty alert** (red) is raised when either one runs out. The kiosk stops taking new jobs and shows an unavailable message. If paper runs out in the middle of a job, the kiosk pauses it. If the tray is not refilled within 10 minutes, the job is cancelled and the user is refunded for the pages not printed (Section 8.7).

Alerts go by email, and onto the dashboard, to every operator assigned to that kiosk. Administrators get a copy of every empty alert, and of any low alert still unacknowledged after four hours. If a site is slow to refill, an administrator can raise the thresholds under **Kiosks**, then the kiosk's name, then **Alert settings**, to get an earlier warning.

The refill procedure is in Section 11.2. Once paper or toner is loaded, the kiosk reports the new level and the alert closes by itself. Section 11.2 also explains how to clear it by hand if it does not. The consumables report (Section 8.5) shows how fast each kiosk uses stock, which tells you how much paper and toner to keep on site.

### **8.7 Handling refunds and disputes**

*Printing starts only after the payment gateway confirms payment, and a failed print triggers a refund (Section 4.4). Most refunds therefore happen without anyone doing anything. This section covers what the system does on its own, and what you do when a student says they paid and got nothing.*

### ***Automatic refunds***

| *Situation* | *Refund* |
| :---- | :---- |
| *The print fails after payment and no page is delivered (paper jam, printer fault)* | *Full amount* |
| *A job stops part-way and is not finished within 10 minutes (out of paper, power or network loss)* | *Amount for the pages not printed* |
| *Payment is confirmed but the kiosk loses its connection before printing starts* | *Full amount* |
| *The same job is paid for twice* | *The second payment* |

*Refunds to a wallet balance or campus card are credited within minutes of the failure being recorded. A UPI refund is sent back to the payer's bank account straight away, but how soon it appears depends on the bank. The Reserve Bank of India's September 2019 circular on failed transactions allows up to five days (T+5) for a UPI payment to a merchant that was not confirmed, so ask students to allow that long before they chase it.*

### ***When a student reports a problem***

*1\.*       *Click **Transactions** in the left-hand menu.*  
*2\.*       *Search by payment reference (the UPI reference in the student's app), by job ID, or by kiosk, date and time.*  
*3\.*       *Open the transaction. The status line reads Paid, Printed, Failed, Refund issued or Refund pending. Below it, a timeline lists each event from payment to collection, with the time.*  
*4\.*       *Decide what to do from the table below.*

*If a refund is due and none has been issued, click **Refund** (administrators only), choose a reason and click **Confirm refund**. The money goes back to the original payment method. Give the student the refund reference* 

| *What the record shows* | *What to do* |
| :---- | :---- |
| *Printed, Completed* | *The job was delivered, so no refund is due under the standard rules. Show the student the timeline. If they say pages came out faded or incomplete, check the kiosk. An administrator can then refund with the reason Quality.* |
| *Failed, Refund issued* | *Give the student the refund reference. If they are paid by UPI, ask them to wait out the bank's timeline, then raise it in their UPI app with the transaction ID.* |
| *Failed, no refund* | *Refund it manually. The system should have done this itself, so also report it as a fault (Section 11.5).* |
| *No record at all* | *The payment never reached PrintPod, so there is nothing to refund from here. Ask the student to check their bank statement and, if money left their account, to contact the bank with the UPI transaction ID.* |

*Every refund, automatic or manual, is logged with the time, amount and reason and, for manual ones, the administrator's name. The log is kept as described in Section 10.6, and refunds appear in the revenue report. Keep an eye on the refund count for each kiosk. A kiosk that starts producing more refunds than the others usually has a hardware fault, and the pattern shows up here before anyone reports it.*

# **Part 4 — Deployment and operations**

## **Chapter 9: Installation and deployment**

A kiosk is only as reliable as the place it stands in and the way it was set up. This chapter takes you from choosing a site to the first week of public use. It is written for the administrator and the facilities team. Physical specifications and clearances are in Chapter 5, and this chapter points to them instead of repeating them. Steps that need a second person or a qualified electrician are marked.

### **9.1 Choosing a location**

*Printing happens on the way to something else, usually a submission. A good site is one that students already pass or wait at. Apply the criteria below to each candidate on your own campus and compare the results, rating each one as meets, partly meets or does not meet.*

| *Criterion* | *What to look for* | *Why it matters* |
| :---- | :---- | :---- |
| *Footfall* | *Library lobbies, department entrances, hostel common areas, spots near the canteen* | *A kiosk off the usual routes is underused, however good the machine* |
| *Closeness to need* | *A short walk from the library, departments, hostels and the places where assignments are submitted* | *Students print just before they submit and do not want a long walk* |
| *Hours of access* | *A building that stays open as long as you want the kiosk available* | *The kiosk cannot meet requirement R1 if the door is locked at 6 p.m.* |
| *Power* | *A socket within reach of the kiosk's own cable, with no extension lead* | *Extension leads are a fire risk and a common cause of unplanned shutdowns* |
| *Network* | *A wired network point, or good Wi-Fi or 4G signal measured at the exact spot* | *Without the backend the kiosk cannot confirm payments (Section 4.4)* |
| *CCTV and lighting* | *A spot within view of an existing camera, which does not record the screen or the output tray, with good lighting* | *Deters tampering without compromising privacy (Section 10.4)* |
| *Shelter* | *Indoors or under a roof, away from rain, direct sun, dust and water points* | *Humid air makes paper swell and jam, and the unit has a rated operating temperature (Section 5.2)* |
| *Accessibility* | *A step-free route and clear floor space for a wheelchair user to approach the screen* | *Every student should be able to use it (Section 6.6)* |
| *Queue space* | *Room for a short line that does not block a corridor, a door or a fire exit* | *Queues form before deadlines* |
| *Support access* | *Close to a staffed office or desk* | *Refills and faults get attention quickly* |

*Avoid narrow corridors, outdoor spots and anywhere locked at night. If two sites rate the same, choose the one with better access after hours.*

### **9.2 Pre-installation checklist**

Everything below should be ticked before the unit arrives. A unit that turns up to a site without power or network sits in its crate for weeks.

**Site**

•         ☐ Location approved in writing by the building owner or facilities office  
•         ☐ Floor space confirmed to the dimensions and clearances in Section 5.4  
•         ☐ Floor level and strong enough for the unit's weight (Section 5.2)  
•         ☐ Route from the building entrance to the site checked for door widths, lifts and corners

**Power and network**

•         ☐ Power point installed within reach of the cable, earthed, tested, and matching the supply in Section 5.2  
•         ☐ Surge protection or a UPS fitted, if the local supply is unreliable  
•         ☐ Ethernet point live and tested, or Wi-Fi signal measured at the kiosk position  
•         ☐ 4G signal checked at the position, if you will use the fallback

**Accounts and payments**

•         ☐ Payment gateway merchant account approved, with credentials in hand  
•         ☐ Campus card integration switched on, if you will accept campus cards  
•         ☐ Administrator and operator accounts planned, with names and roles (Section 8.1)

**Supplies and people**

•         ☐ First paper and toner on site, plus one spare of each  
•         ☐ Prices decided and rate sheet approved (Section 13.2)  
•         ☐ Signage printed (Section 9.6)  
•         ☐ Two people, and an electrician where marked, booked for installation day  
•         ☐ One person named to hold the keys and one to receive alerts

### **9.3 Physical installation**

Allow half a day. Switch the unit off and unplug it before you open any panel. Steps marked **\[2 people\]** must not be done alone, because the unit is heavy (Section 5.2). Steps marked **\[electrician\]** need a qualified person.

1\.       **\[2 people\]** Inspect the delivery before you sign for it. Look for dents, a damaged enclosure or crushed packaging, and write any damage on the delivery receipt.  
2\.       **\[2 people\]** Unpack the unit. Check the contents against the packing list: the unit, the enclosure keys, the power cable, the output tray and the card with the installer code. Keep the packaging until acceptance testing is passed, in case the unit has to go back.  
3\.       **\[2 people\]** Move the unit to its marked spot on a trolley. Do not lift it by the touchscreen, the output tray or the door.  
4\.       Position the unit with the clearances from Section 5.4: space at the sides and back for ventilation, and space at the front for the output tray and the printer access panel.  
5\.       Level the unit. Turn each adjustable foot until a spirit level reads level front to back and side to side. A tilted printer feeds paper unevenly and jams.  
6\.       **\[electrician\]** Secure the unit to the floor with the fixings supplied. Section 5.4 says whether your site needs bolting down.  
7\.       **\[electrician\]** Check the power point. Confirm that the voltage matches Section 5.2 and that the earth connection is sound. Plug the unit in directly. Do not use an extension lead or a multiway adaptor. Leave it switched off.  
8\.       Connect the network. Plug in the Ethernet cable, or, if you are relying on the 4G fallback, fit the SIM card now while the unit is off.  
9\.       Remove the transport protection inside the printer: tape, foam and any packing in the paper path. Tape left behind is a classic cause of a jam on the very first print.  
10\.   Fit the output tray, then open and close the printer access panel to check that it moves freely.  
11\.   Close and lock the enclosure and check that the lock holds. Give the keys to the named key holder and note who has them. Do not leave a key in the lock.

### **9.4 Commissioning**

Commissioning takes the unit from switched on to ready for the public. Do it with the admin portal open on a laptop, because registering the kiosk needs both ends. An administrator must be present for step 6\.

1\.       Switch on the unit. The touchscreen shows the setup screen after a short start-up.  
2\.       Tap **Start commissioning** and enter the installer code from the card in the box. The code stops working once commissioning is finished.  
3\.       Tap **Network** and choose Ethernet or Wi-Fi (for Wi-Fi, enter the password). Tap **Test connection**. A tick means the kiosk can reach the backend. If you fitted a SIM, tap **Test fallback** as well.  
4\.       In the admin portal, click **Kiosks**, then **Add kiosk**. Enter a name and location, for example Library ground floor, and click **Generate code**. The portal shows a registration code.  
5\.       On the kiosk, tap **Register** and type the code. Within a minute the kiosk appears on the dashboard as Online.  
6\.       In the portal, click **Payments**, then **Link merchant account**, and enter the credentials from your payment gateway provider. Payment is handled entirely by the gateway, and no card details ever reach the kiosk (Section 10.3).  
7\.       Load paper and install the toner, following Section 11.2. The dashboard now shows both levels.  
8\.       Set the prices as described in Section 8.4. Check every rate against the approved rate sheet.  
9\.       Add the operators for this kiosk (Section 8.1) and check that the alert emails reach them.  
10\.   Run a test print. First tap **Print test page** on the kiosk. Then do a real job from start to finish: upload a file from your phone, pay a small amount, and collect the printout. Refund the payment afterwards using Section 8.7.  
11\.   Check the portal. The test job should appear under **Transactions**, the kiosk should show Online, and the paper and toner levels should be filled in.  
12\.   Tap **Finish commissioning** and lock the enclosure. Do not open the kiosk to the public until it has passed acceptance testing.

### **9.5 Acceptance testing**

*Acceptance testing proves that the kiosk does what Chapter 2 says it does. The administrator and a technician carry it out together before the public sees the kiosk, and again after the unit is moved or the printer or payment reader is repaired or replaced. Write down the date, the tester's name and the result of each test.*9.6 Launching to users

| Test | Expected result | Pass |
| :---- | :---- | :---- |
| Print a PDF uploaded from a phone by QR code | The preview matches the file. The printout is complete and the right way up. | ☐ |
| Print a DOCX file | The document prints. Text and layout match the original closely, or the kiosk gives a clear message. | ☐ |
| Print a JPG and a PNG image | The image fills the page without cropping or stretching. | ☐ |
| Change the print settings (two copies, double-sided, colour, A3 if fitted) | The printout matches the choices, and the price charged matches the price shown. | ☐ |
| Pay by UPI | The kiosk confirms payment, printing starts only after that, and the transaction appears in the portal. | ☐ |
| Pay by campus card | The same as UPI. | ☐ |
| Pay from a wallet balance | The balance falls by exactly the price shown. | ☐ |
| Deliberate payment failure (cancel the UPI payment on the phone) | The kiosk says payment was not completed. Nothing prints and no money is taken. | ☐ |
| Interrupt a paid job (technician opens the printer access panel mid-print) | The kiosk shows a failure message. A refund is created automatically and shows as Refund issued in the portal. | ☐ |
| Out-of-paper condition (remove the paper) | The portal raises an alert within two minutes. The kiosk shows Out of service and takes no new jobs. Reloading paper clears the alert. | ☐ |
| Network disconnection (unplug the Ethernet cable) | The kiosk switches to the 4G fallback, or shows an unavailable message if there is none. After reconnection it returns to Online and records are not lost. | ☐ |
| Document deletion after collection | Within the time set in Section 10.2, the document is gone from both the kiosk and the backend. | ☐ |
| Status check | The portal state and the kiosk's own status light agree in each of four conditions: ready, low paper, out of paper and offline. | ☐ |

The kiosk passes only when every row is ticked. If a test fails, fix the cause and repeat that test, then repeat any test the fix could have affected. A payment fix, for example, means re-running all three payment rows. File the signed table with the installation record 

## **9.6 Launching to users**

A kiosk nobody knows about earns nothing, and one that opens without explanation gets a rush of confused first-time users. Plan the launch in four parts.

Put a poster next to the kiosk that shows the four steps (upload, choose, pay, collect), the QR code for phone upload, the price list and a support contact. Announce the kiosk a week before it opens: by email, on the campus notice boards and the learning platform, and through faculty who can mention it in class before the next submission. Say where it is, when it is available and what a page costs.

Staff the first week. Have an operator or a trained student volunteer near the kiosk, especially in the hours before the first deadline that falls after launch. Watching first-time users shows quickly where the instructions are unclear. Collect feedback with a short form behind a QR code on the poster, and keep a simple log of the questions people ask.

At the end of the first week, open the portal and look at failed jobs, refunds, busiest hours and the questions logged. Fix the signage or the settings where they point to a problem, and review again after 30 days.

## **Chapter 10: Security and privacy**

*\[The chapter administrators read most carefully. Every claim here must be specific. "Documents are secure" is worth nothing; name the mechanism and the timing.\]*

### **10.1 Document security**

*\[How a file is protected in transit, while held, and while printing. Name the encryption standard. State where the file physically resides at each stage.\]*

### **10.2 Document retention and deletion**

*\[The exact retention rule, stated as a number: deleted automatically within N minutes of a completed job, or immediately on completion. Also state what happens to an abandoned job that was uploaded but never paid for. Must match Chapter 6.5 exactly.\]*

### **10.3 Payment security**

*\[What payment data the system handles and — more importantly — what it never stores. If payment is handled entirely by a gateway, say that the kiosk never sees card details at all. That is a strong claim worth making clearly.\]*

### **10.4 Physical security**

*\[Enclosure locking, tamper evidence, securing the output tray so printouts are not visible to the next person, and what prevents someone taking another user's printout.\]*

### **10.5 Access control**

*\[Who can access what: users, operators, administrators. A table of role against permission is clearer than paragraphs.\]*

### **10.6 Audit and compliance**

*\[What is logged, how long logs are kept, and what an institution can produce if a dispute arises. Note any data-protection considerations relevant to Indian institutions, stated carefully and without claiming legal advice.\]*

## **Chapter 11: Maintenance**

### **11.1 Refilling consumables**

*\[Numbered steps for loading paper and replacing toner. Include how to clear the alert afterwards.\]*

### **11.2 Cleaning**

*\[Touchscreen, scanner glass if present, enclosure, output tray. What to use and what to avoid.\]*

### **11.3 Software updates**

*\[How updates are delivered, whether the kiosk must be taken offline, and who authorises them.\]*

### **11.4 Service and support**

*\[Response expectations, what constitutes a critical fault, and the escalation path. Present this as a short table of fault severity against response time.\]*

## **Chapter 12: Troubleshooting and FAQ**

### **12.1 Troubleshooting table**

*\[The standard four-column structure. Aim for ten to fifteen rows covering both user-facing and administrator-facing faults. This structure is what graders look for in a troubleshooting section.\]*

| Symptom | Likely cause | Resolution | Handled by |
| :---- | :---- | :---- | :---- |
| Payment deducted but nothing printed | *\[cause\]* | *\[resolution\]* | *\[user / admin\]* |
| Upload fails repeatedly |  |  |  |
| Print quality is faded or streaked |  |  |  |
| Touchscreen is unresponsive |  |  |  |
| Paper jam |  |  |  |
| QR code will not scan |  |  |  |
| *\[add rows\]* |  |  |  |

### **12.2 Error messages**

*\[A table of error codes or messages the kiosk displays, what each means, and what the user should do. Inventing a small set of clear error codes here is a strong detail — real products have them.\]*

# **Part 5 — The business case**

## **Chapter 13: Payments and pricing**

### **13.1 Accepted payment methods**

*PrintPod supports three digital payment methods.*

*UPI: Students can scan a QR code using a UPI application and approve the payment. The kiosk starts printing only after payment confirmation.*

*Campus card: Students can pay using an enabled campus card linked to their account. The payment amount is deducted after successful authorisation.*

*Wallet balance: Students can use their available digital wallet balance to pay for printing. The balance is updated after the transaction is confirmed.*

### **13.2 How pricing works**

*PrintPod follows a pay-per-page pricing model. The price depends on the paper size, colour option and printing mode.* 

| Print type | Rate per page (₹) |
| :---- | :---- |
| Black and white, A4 | *₹2*  |
| Colour, A4 | *₹10*  |
| Black and white, A3 | *₹4*  |
| Colour, A3 | *₹20*  |
| Double-sided discount | 10% discount on eligible printing charges |

### **13.3 Institutional pricing options**

*PrintPod allows institutions to configure pricing according to their academic requirements. Administrators can provide a limited free-print quota for students, subsidised printing for selected courses and departmental billing for faculty use.* 

### **13.4 Failed jobs and refunds**

*PrintPod initiates printing only after payment confirmation. If a job fails before any page is delivered, the full amount is refunded automatically. If printing stops part-way, the user receives a refund for the pages that were not printed. Duplicate payments are also refunded.*

*Wallet and campus-card refunds are credited within minutes of the failure being recorded. UPI refunds are returned to the original bank account, although the time taken to appear depends on the bank. If the refund does not arrive, the student can contact the campus operator with the transaction reference.*

### **13.5 Revenue handling**

*Payments are processed through the configured payment gateway. The institution receives settlements according to the gateway's settlement schedule, after applicable fees and adjustments. The administrator portal records payments, refunds and net revenue to support reconciliation. Revenue reports can be exported for financial review.* 

## **Chapter 14: Cost-benefit analysis**

### **14.1 Assumptions**

*The following estimates are based on a hypothetical university campus. All figures are projections for academic demonstration.*

* *Student population: 3,000*  
* *Number of kiosks: 2*  
* *Average usage: 250 printed pages per kiosk per day*  
* *Operating days: 300 days per year*  
* *Average revenue: ₹3 per printed page*  
* *Currency: Indian rupees (₹)*

### **14.2 Capital cost**

*The estimated one-time investment for one PrintPod kiosk is shown below.* 

| Item | Estimated cost |
| :---- | :---- |
| Printer and printing hardware  | *₹35,000*  |
| Touchscreen and control unit  | *₹15,000*  |
| Payment hardware  | *₹5,000*  |
| Enclosure and locking system  | *₹10,000*  |
| Installation and commissioning  | *₹5,000*  |
| Initial paper and toner  | *₹3000* |
| Signage and launch materials  | *₹2000* |
| Total per kiosk  | *₹*75,000 |

### 

### **14.3 Operating cost**

*Estimated monthly operating expenses for one kiosk are:* 

| Expense | Monthly cost |
| :---- | :---- |
| Paper and toner   | *₹5,000*  |
| Maintenance   | *₹1,000*  |
| Software and backend   | *₹1,000*  |
| Electricity  | *₹500*  |
| Internet connectivity  | *₹500*  |
| Total per month  | *₹8,000* |
|  |  |
|  |  |

### ***The estimated operating cost for two kiosks is ₹16,000 per month. Actual expenses will depend on usage, consumable prices and maintenance requirements.*** 

### **14.4 Revenue projection**

*Assuming each kiosk prints 250 pages per day at an average revenue of ₹3 per page:*

* *Daily revenue per kiosk \= 250 × ₹3 \= ₹750*  
* *Annual revenue per kiosk \= ₹750 × 300 \= ₹2,25,000*  
* *Annual revenue for two kiosks \= ₹2,25,000 × 2 \= ₹4,50,000*

*The projected annual operating cost for two kiosks is ₹1,92,000.*

*Therefore, the projected annual operating surplus before recovering the initial investment is:*

*₹4,50,000 − ₹1,92,000 \= ₹2,58,000*

*These estimates exclude taxes, payment gateway fees, depreciation and other unlisted expenses. They also assume that the stated average revenue per page is achieved.*

### **14.5 Break-even analysis**

*The initial investment for two kiosks is ₹1,50,000. Based on the assumptions above, the monthly revenue is ₹37,500 per kiosk, while the monthly operating cost is ₹8,000.*

*The projected monthly operating surplus is ₹29,500 per kiosk. Therefore, the estimated break-even period is:*

*₹75,000 ÷ ₹29,500 ≈ 2.5 months per kiosk.*

*This is a simplified estimate assuming stable usage from launch. Actual break-even may take longer because of lower initial demand, maintenance issues and unexpected costs.*

*In a lower-usage scenario of 100 pages per day per kiosk, monthly revenue would be ₹9,000, assuming 30 operating days and ₹3 per page. After ₹8,000 in monthly operating expenses, only ₹1,000 remains per kiosk. The initial investment would take much longer to recover. This demonstrates that customer demand is a major factor in the project's financial viability.*

*Figure 14.1: Insert a 24-month cumulative cost-versus-revenue chart using the final approved assumptions. Mark the break-even point clearly.*

### **14.6 Benefits that are not financial**

*PrintPod offers several benefits beyond revenue generation:*

* *Extended availability: Students can print whenever the campus is open without depending on counter timings.*  
* *Reduced waiting: Self-service printing can reduce queues during assignment submissions and examination periods.*  
* *Improved privacy: Documents are released for collection by the person who submitted them.*  
* *Reduced staff workload: Staff can spend less time handling routine printing requests.*  
* *Better accountability: Digital transaction records help administrators investigate payment disputes and monitor usage.*

## **Chapter 15: Case study**

***Note: This is an illustrative scenario developed for an academic project. It does not describe an actual deployment.*** 

*\[Keep that note, or equivalent wording, visible at the top of the chapter. Without it a reader may take these figures as real.\]*

### **15.1 The scenario**

*Consider a hypothetical university with 3,000 students and 10 academic departments. Before introducing PrintPod, students depend on a library printing counter and nearby commercial print shops. These services have limited operating hours and become crowded before assignment deadlines.*

*The existing arrangement also requires manual payment collection and staff involvement. Students may need to wait in queues, carry cash and worry about the privacy of their documents.*

*The university proposes a self-service printing system to improve convenience, reduce manual work and provide better transaction records.*

### **15.2 The deployment**

*The university proposes installing two PrintPod kiosks at locations with high student traffic.* 

| *Location*  | *Justification* |
| :---- | :---- |
| *Central library entrance*  | *Convenient for students accessing study materials and preparing assignments*  |
| *Main academic block*  | *Accessible to students from multiple departments*  |

*The proposed deployment takes place in three phases: site preparation and installation, system testing and commissioning, and a monitored public launch. During the initial period, operators will check printer status, consumable levels and payment records.* 

### **15.3 Projected results after six months**

*The following table presents illustrative projections rather than measured results.* 

| *Indicator*  | *Before deployment*  | *Projected after deployment*  |
| :---- | :---- | :---- |
| *Printing availability*  | *Limited counter hours*  | *Throughout campus opening hours*  |
| *Printing process*  | *Staff-assisted*  | *Self-service*  |
| *Payment method*  | *Primarily manual*  | *Digital*  |
| *Transaction records*  | *Manual or incomplete*  | *Centralised digital records*  |
| *Waiting time*  | *Queues during peak hours*  | *Potentially shorter waits*  |

*The university could use kiosk records and student feedback to measure actual performance after deployment. Numerical improvements should be reported only after sufficient operational data has been collected.* 

### **15.4 What the scenario reveals**

*The scenario highlights three important observations. First, kiosk location strongly influences usage because students prefer services along their normal campus routes. Second, paper and toner must be replenished regularly to avoid interruptions during peak periods. Third, reliable network connectivity and payment confirmation are essential for smooth operation.*

*A limitation is that two kiosks may not meet demand during major submission periods. The university should review usage data, failed jobs and waiting times before deciding whether to expand the service.*

## **Chapter 16: Future scope**

### **16.1 Near-term enhancements**

*PrintPod could be improved through features such as document templates for common academic forms, multilingual screen instructions, scan-to-email functionality and uploads from cloud storage. These additions could make the kiosk easier to use and reduce the steps required to print frequently used documents.* 

### **16.2 Longer-term possibilities**

*Future versions could support ID card printing, document binding, lamination and integration with the institution's learning management system (LMS) or enterprise resource planning (ERP) platform. A multi-campus dashboard could also help administrators monitor several kiosks from one location.* 

### **16.3 Limitations of the current design**

*The proposed design has some limitations:*

* *It depends on a reliable power supply and network connection for payment confirmation and remote monitoring.*  
* *Paper jams, toner shortages and hardware failures can interrupt printing.*  
* *Initial installation and recurring maintenance require financial investment.*  
* *Actual demand and profitability may vary across campuses.*

*These limitations should be evaluated during pilot testing before the system is deployed on a larger scale.*

# **Back matter**

## **Glossary**

| Term | Definition |
| :---- | :---- |
| *Audit log*  | *A chronological record of system activities, including payments, refunds and administrative actions.*  |
| *Backend*  | *The software system that processes requests, manages print jobs and stores transaction records.*  |
| *Duplex printing*  | *Printing on both sides of a sheet of paper.*  |
| *DPI (dots per inch)*  | *A measurement of print resolution that indicates the level of detail in printed output.*  |
| *Encryption at rest*  | *Protection applied to stored data so that unauthorised users cannot easily read it.*  |
| *Kiosk*  | *A self-service machine that allows users to complete tasks without continuous staff assistance.*  |
| *Payment gateway*  | *A service that processes digital payments and confirms whether transactions are successful.*  |
| *Print queue*  | *A list of print jobs waiting to be processed by the printer.*  |
| *Print spooler*  | *Software that manages print jobs and sends them to the printer in the correct order.*  |
| *QR code*  | *A two-dimensional code that can be scanned by a phone to open a link or initiate an action.*  |
| *Toner yield*  | *The estimated number of pages that a toner cartridge can print before replacement.*  |
| *UPI*  | *Unified Payments Interface, an Indian system that enables instant digital payments between bank accounts.*  |
| *Uptime*  | *The amount or proportion of time a system remains operational and available.*  |
| *Wallet balance*  | *The amount of money available in a digital wallet for making payments.*  |

## **References**

Use a consistent citation style throughout the ebook. The following sources are suitable starting points for the payment and security sections. Add the exact printer manufacturer's datasheet once the hardware model is finalised.

1. National Payments Corporation of India (NPCI). Unified Payments Interface (UPI). Official website: [NPCI](https://www.npci.org.in/).  
2. Reserve Bank of India (RBI). Guidelines and circulars on digital payments and failed transactions. Official website: [Reserve Bank of India](https://www.rbi.org.in/).  
3. National Institute of Standards and Technology (NIST). Security and Privacy Controls for Information Systems and Organizations, SP 800-53 Rev. 5\. [Read the publication](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final).  
4. World Wide Web Consortium (W3C). Web Content Accessibility Guidelines (WCAG) 2.2. [Read the guidelines](https://www.w3.org/TR/WCAG22/).

These references should be cited in the relevant chapters, and the final list should include only sources actually consulted. The projected PrintPod specifications, costs and case-study results are illustrative assumptions rather than facts established by these references.

## **About the team**

*\[A short block per member: name, role on this project, and one line on what they contributed. Two or three lines each, consistent length. Keep it factual — this is not a CV section.\]*

| Member | Role | Contribution |
| :---- | :---- | :---- |
| *\[name\]* | *\[role\]* | *\[sections and deliverables\]* |

## **Document information**

*\[Version number, date, course and institution, and a line naming this as an academic project. Half a page at most. This closes the ebook the way a professional document closes.\]*