/**
 * content.js — NFR Team Training Portal
 * Training content for Maria (Mozaik), Scott (CNC), Jorge (Field).
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // MOZAIK PLAN — Maria (Weeks 8–12)
  // ═══════════════════════════════════════════════════════════════════════════

  const MOZAIK_URL   = 'https://sites.google.com/view/mozaikonlinehelp/training-videos';
  const MOZAIK_LABEL = 'Mozaik Training Library';

  const MOZAIK_PLAN = {
    8: [
      // Mon
      {
        topic: 'Custom Width Modifications',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Change a standard cabinet to a custom width',
          'Apply width changes to multiple cabinets in sequence',
          'Verify the fit in the 3D layout view',
        ],
        task: 'Open a kitchen project, change one 24" base cabinet to 27", verify the change in 3D view, and save as [Project]-W8D1.',
        tip: 'Always view in 3D after any width change.',
      },
      // Tue
      {
        topic: 'Height & Depth Customization',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Adjust cabinet height for non-standard ceiling situations',
          'Modify depth for appliance clearance requirements',
          'Stack multiple modifications on a single cabinet',
        ],
        task: 'Change a base cabinet to 32" height, set a wall cabinet to reduced depth 11", and save as [Project]-W8D2.',
        tip: 'Height changes affect countertop alignment — always check after.',
      },
      // Wed
      {
        topic: 'Specialty Configurations — Fillers, Angles & Transitions',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Add filler panels to close gaps at walls',
          'Create corner transitions between two cabinet runs',
          'Use specialty cabinet types in a layout',
        ],
        task: 'Build an L-shape layout, add fillers on wall ends, add a corner base cabinet, verify no gaps in 3D, and save as [Project]-W8D3.',
        tip: 'Filler panels must match cabinet finish.',
      },
      // Thu
      {
        topic: 'Combining Modifications on Full Layouts',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Apply multiple modifications across a full kitchen layout',
          'Check for conflicts between stacked modifications',
          'Regenerate the cut list after all changes are made',
        ],
        task: 'Build a 10×12 kitchen with at least 3 modification types, generate the cut list, and save as [Project]-W8D4.',
        tip: 'Always regenerate cut list after modifications.',
      },
      // Fri
      {
        topic: 'Week 8 Review — Practice Kitchen',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Complete a full kitchen using all Week 8 skills without reference',
          'Include custom width, non-standard height, and fillers',
          'Generate a 3D view and cut list as deliverables',
        ],
        task: 'Build a complete kitchen from Jose\'s brief, apply all Week 8 modifications, generate 3D and cut list — this is your Friday 1pm check-in deliverable.',
        tip: 'Friday check-in: show 3D view, walk through modifications, explain one decision.',
      },
    ],

    9: [
      // Mon
      {
        topic: 'L-Shape Kitchen Layouts',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a complete L-shape kitchen layout',
          'Place the corner base cabinet correctly at the turn',
          'Fill outward from the corner on both runs',
        ],
        task: 'Build a 10×10 L-shape kitchen with corner base cabinet at the turn and wall cabinets above both runs. Export 3D view.',
        tip: 'Place corner cabinet first, fill outward.',
      },
      // Tue
      {
        topic: 'Island & Peninsula Design',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Add a kitchen island with correct aisle clearance',
          'Apply a contrasting finish to the island',
          'Verify minimum 42" clearance on all sides',
        ],
        task: 'Add a 36×60 island to the W9D1 layout with 42" clearance maintained. Apply a contrasting finish to the island.',
        tip: 'Island aisle clearance is a code minimum — do not go below 42".',
      },
      // Wed
      {
        topic: 'Awkward Spaces — Soffits and Bulkheads',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Model a soffit above a wall cabinet run',
          'Handle a wall with a 2" offset correctly',
          'Verify everything looks correct in 3D',
        ],
        task: 'Build a kitchen with a soffit above the wall cabinet run and one wall with a 2" offset. Verify in 3D.',
        tip: 'Measure from both ends of each wall.',
      },
      // Thu
      {
        topic: 'U-Shape & Galley Layouts',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a complete U-shape kitchen layout',
          'Build a complete galley layout with correct clearance',
          'Understand minimum walkway requirements for each layout type',
        ],
        task: 'Build both — a U-shape in an 8×10 room and a galley in an 8×14 room with 48" clearance between runs.',
        tip: 'Galley needs 48" minimum between runs.',
      },
      // Fri
      {
        topic: 'Week 9 Review — Full Layout Challenge',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a complete kitchen layout from Jose\'s assigned room size and type',
          'Apply Week 8 modifications within the layout',
          'Generate 3D and cut list, present to Jose at 1pm',
        ],
        task: 'Jose assigns room size and layout type. Build the complete kitchen, apply Week 8 modifications, generate 3D and cut list, and present at 1pm.',
        tip: 'Show Jose the layout, explain why you chose each cabinet type.',
      },
    ],

    10: [
      // Mon
      {
        topic: '3D View Navigation & Camera Angles',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Navigate the 3D view confidently from any angle',
          'Save named camera views for a project',
          'Export camera views as images',
        ],
        task: 'Open a completed kitchen. Save 3 camera views: overall, island detail, and corner. Export each as an image.',
        tip: 'Best client angle is from the kitchen entry at eye height.',
      },
      // Tue
      {
        topic: 'Material & Color Application in 3D',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Apply finishes and colors in the 3D view',
          'Create two distinct finish versions of the same kitchen',
          'Export both versions for client comparison',
        ],
        task: 'Create Version A (white perimeter, navy island) and Version B (greige perimeter, white island). Export both.',
        tip: 'Always show two options side-by-side — clients decide faster with a comparison.',
      },
      // Wed
      {
        topic: 'Lighting & Rendering Quality',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Adjust lighting settings in an existing 3D view',
          'Export a render at the highest quality setting',
          'Compare before and after lighting adjustment',
        ],
        task: 'Adjust lighting on an existing 3D view, export at highest quality, compare before and after. Save both.',
        tip: 'Good lighting does more for client confidence than cabinet details.',
      },
      // Thu
      {
        topic: 'Creating Client Presentation Exports',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Assemble a complete client presentation export package',
          'Follow the NFR file naming convention',
          'Ensure the package contains all 4 required items',
        ],
        task: 'Export a full package: 2 camera views, floor plan, and cut list. Name each file: [ClientLastName]-[Date]-[Version].',
        tip: 'Every package needs the same 4 items every time.',
      },
      // Fri
      {
        topic: 'Week 10 Review — Full Presentation Walkthrough',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a kitchen to Jose\'s brief and prepare a full presentation package',
          'Walk Jose through the design as if he were the client',
          'Demonstrate camera angles, color options, and the cut list',
        ],
        task: 'Jose plays the client. Build the kitchen to his brief, prepare the full package, and walk him through it at 1pm.',
        tip: 'This is your chance to practice being a designer, not just a software operator.',
      },
    ],

    11: [
      // Mon
      {
        topic: 'Understanding Cut List Output',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate a cut list from a completed kitchen project',
          'Identify every part on the list by name and purpose',
          'Circle or flag any entry that looks incorrect',
        ],
        task: 'Generate a cut list from a completed kitchen. Go line by line, identify every part, circle anything that looks wrong.',
        tip: 'The cut list is what Scott and the CNC work from. Read it like you\'re the one making the cut.',
      },
      // Tue
      {
        topic: 'Part Labeling & Sheet Optimization',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Review the sheet layout and nesting output',
          'Calculate waste percentage from the nesting layout',
          'Identify the largest and smallest cut on the sheet',
        ],
        task: 'Review a Mozaik sheet layout and nesting output. Note the waste percentage. Identify the largest and smallest cut.',
        tip: 'If waste is above 20%, flag to Jose before approving.',
      },
      // Wed
      {
        topic: 'Material Quantity Reports',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate a full material quantity report',
          'List total sheet count, door count, drawer count, and hardware',
          'Compare the quantity report to the cut list for accuracy',
        ],
        task: 'Generate a full material quantity report. List total sheets, door count, drawer count, and hinges. Compare to the cut list.',
        tip: 'This becomes your purchase order — it must be accurate.',
      },
      // Thu
      {
        topic: 'CNC Output Files & Job Setup',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Export CNC-ready files from Mozaik',
          'Apply the NFR file naming convention',
          'Organize exported files in a labeled folder',
        ],
        task: 'Export CNC-ready files. Name each: [Client]-[Date]-[PartType]. Place in a correctly labeled folder.',
        tip: 'File naming is not optional — Scott needs to know which files go with which job.',
      },
      // Fri
      {
        topic: 'Week 11 Review — Full Manufacturing Package',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate a complete production package for a real job',
          'Hand the package off to Scott with everything labeled',
          'Present the package to Jose at 1pm',
        ],
        task: 'Generate the complete production package: cut list, material report, CNC files, labeled folder. Hand to Scott. Present to Jose at 1pm.',
        tip: 'This is the full circle — design to production.',
      },
    ],

    12: [
      // Mon
      {
        topic: 'Project Planning from Client Brief',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Read and interpret a client brief before opening Mozaik',
          'Write out room dimensions and design constraints',
          'Prepare 3 clarifying questions for the client',
        ],
        task: 'Jose gives a client brief. Before opening Mozaik: write the room dimensions, constraints, and 3 questions for the client. Then set up the room in Mozaik.',
        tip: 'The best design starts before you open the software.',
      },
      // Tue
      {
        topic: 'Layout & Cabinet Selection',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a full cabinet layout from the client brief',
          'Select appropriate cabinet types for each position',
          'Apply Week 8 modifications where required',
        ],
        task: 'Build the full cabinet layout from the brief. Select appropriate cabinet types. Apply Week 8 modifications. Layout only — no finishes yet.',
        tip: 'Get the layout perfect before touching color.',
      },
      // Wed
      {
        topic: 'Finish, Modifications & Final Design',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Apply client-selected finishes to the layout',
          'Create two distinct color option versions',
          'Make final adjustments and review in 3D',
        ],
        task: 'Apply finishes, create two color options, make final adjustments, and view in 3D. End with the 3D view open.',
        tip: 'Always end with 3D view open — if it doesn\'t look right there, it won\'t look right in person.',
      },
      // Thu
      {
        topic: '3D Renders, Presentation & Cut List',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate renders for both color option versions',
          'Export floor plan and cut list',
          'Assemble everything in a labeled package folder',
        ],
        task: 'Generate the complete package: renders for both options, floor plan, cut list, material report, labeled folder.',
        tip: 'Package should be clean enough Jose could send it to the client without reviewing.',
      },
      // Fri
      {
        topic: 'Week 12 Final — Complete Project Presentation',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Present the full project to Jose at 1pm',
          'Walk through every design decision',
          'Write a self-assessment: 3 things learned, 1 to improve',
        ],
        task: 'Present the full project to Jose at 1pm. Walk through every decision. After: write 3 things learned this week and 1 to improve.',
        tip: 'Week 12 is not the end — it\'s the baseline.',
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // OFFICE ADMIN PLAN — Maria (Weeks 13–19)
  // ═══════════════════════════════════════════════════════════════════════════

  const OFFICE_URL_QBO  = 'https://quickbooks.intuit.com/tutorials/';
  const OFFICE_URL_GOOG = 'https://workspace.google.com/intl/en/learn-more/';
  const OFFICE_URL_NKBA = 'https://www.nkba.org';
  const OFFICE_LABEL    = 'Training Resource';

  const MARIA_ADMIN_PLAN = {

    // ── WEEK 13: NFR SYSTEMS & TOOLS ─────────────────────────────────────────
    13: [
      // Mon — Concept
      {
        topic: 'NFR Portals Overview',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know every portal Maria touches: Staff Portal, Google Drive, CompanyCam, QuickBooks (view-only)',
          'Understand which portal is used for which task',
          'Log in to each portal and confirm access',
        ],
        task: 'Write a one-page portal map: name of each tool, what it\'s used for, and Maria\'s access level. Show Jose.',
        tip: 'Knowing which tool to open before you need it saves 10 minutes per client interaction.',
      },
      // Tue — Application
      {
        topic: 'Google Workspace at NFR',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know the NFR Google Drive folder structure',
          'Understand how to name and move files correctly',
          'Know how shared drives work vs. personal drives',
        ],
        task: 'Navigate to the active project folder. Find one project file and verify it is named correctly per NFR convention. If not, correct it and note it.',
        tip: 'Every file you create should be findable by Jose or the Field Manager without calling you.',
      },
      // Wed — Practice
      {
        topic: 'CompanyCam — Accessing & Organizing Job Photos',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know how to find a job in CompanyCam',
          'Understand photo phases: before, milestone, after',
          'Know how to share a photo link with a client or Jose',
        ],
        task: 'Find an active job in CompanyCam. Verify photos are labeled by trade and phase. Flag any missing phase photos to Jose.',
        tip: 'CompanyCam photos are NFR\'s proof on every job. Treat them as part of the file.',
      },
      // Thu — Deepen
      {
        topic: 'QuickBooks Basics — What Maria Sees',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_QBO,
        objectives: [
          'Know that Maria\'s QuickBooks role is read-only for project reference, not financial entry',
          'Understand how to look up an invoice or payment record for a client',
          'Know the separation: financials stay with Jose, Maria reads status only',
        ],
        task: 'With Jose, open a recent project in QuickBooks. Identify: Has the deposit posted? Is there an outstanding invoice? Write what you see — not what it means financially.',
        tip: 'Maria\'s job is to know the project status, not to manage the books.',
      },
      // Fri — Review
      {
        topic: 'Week 13 Review — NFR Systems',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Name every tool Maria uses and its purpose from memory',
          'Find a client project across all three systems (Drive, CompanyCam, QuickBooks) in under 5 minutes',
          'Write the portal map from memory',
        ],
        task: 'Jose names a recent client. Maria locates the project folder, photos, and invoice status in under 5 minutes without asking for help. Write what she found.',
        tip: 'Speed in the tools is confidence in the role.',
      },
    ],

    // ── WEEK 14: CLIENT COMMUNICATION ────────────────────────────────────────
    14: [
      // Mon — Concept
      {
        topic: 'NFR Voice & Email Professionalism',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Understand what "NFR voice" means: warm, confident, professional, never casual',
          'Know the email greeting and sign-off standard',
          'Understand that every client email reflects the entire company',
        ],
        task: 'Read 3 past client emails from the NFR inbox. Rate each 1–5 for tone and professionalism. Write one that you think was too casual and rewrite it in NFR voice.',
        tip: 'A professional email prevents a misunderstanding that costs 2 hours to fix.',
      },
      // Tue — Application
      {
        topic: 'Responding to New Inquiries',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know the NFR inquiry response time target: same day, within 4 hours',
          'Know the 3-part inquiry response: acknowledge, qualify, next step',
          'Draft a response to a new kitchen remodel inquiry from scratch',
        ],
        task: 'Jose provides a sample inquiry. Maria drafts a response using the 3-part format. Jose reviews for tone and completeness.',
        tip: 'Speed + warmth in the first reply sets the client\'s impression for the entire project.',
      },
      // Wed — Practice
      {
        topic: 'Follow-Up Cadence',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know the NFR follow-up schedule: 48h after proposal, 1 week if no response, 2 weeks final',
          'Draft a follow-up email that is warm but not desperate',
          'Know when to stop following up vs. when to escalate to Jose',
        ],
        task: 'Identify one open proposal in the pipeline. Write the next follow-up email using the NFR cadence. Show Jose before sending.',
        tip: 'Most clients close on the second or third follow-up. Never stop after one.',
      },
      // Thu — Deepen
      {
        topic: 'Difficult Conversations — What to Escalate to Jose',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know which conversations Maria handles vs. which go directly to Jose',
          'Understand the escalation trigger: pricing, scope changes, client complaints',
          'Know how to hold a client warmly while Jose is looped in',
        ],
        task: 'Write the decision rule: "Maria handles ___. Maria escalates to Jose when ___." Use 3 real scenarios from the past 30 days.',
        tip: 'Never try to resolve a scope or pricing conflict without Jose. Warm hold, then escalate.',
      },
      // Fri — Review
      {
        topic: 'Week 14 Review — Client Communication',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Draft an inquiry response from scratch in 10 minutes',
          'Write a follow-up for an open proposal with no response',
          'Identify one email that should be escalated to Jose and explain why',
        ],
        task: 'Jose gives Maria a mock inbox with 5 emails. Maria triages: handle, draft, or escalate. Jose reviews each decision.',
        tip: 'A well-managed inbox is a well-managed company.',
      },
    ],

    // ── WEEK 15: THE AGREEMENT WORKFLOW ──────────────────────────────────────
    15: [
      // Mon — Concept
      {
        topic: 'Agreement-First Philosophy',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Understand why NFR never starts work without a signed agreement and deposit',
          'Know the Agreement-First sequence: Agreement → Jose approves → client signs → deposit → PO',
          'Know that Maria does not create or approve agreements — Jose does',
        ],
        task: 'Write the Agreement-First rule in your own words. Why does it exist? What happens to NFR if we skip it? Show Jose.',
        tip: 'The agreement protects both NFR and the client. Never treat it as a formality.',
      },
      // Tue — Application
      {
        topic: 'Reading an NFR Agreement',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know the key sections of an NFR agreement: scope, price, payment terms, start date',
          'Identify what is missing from an incomplete agreement',
          'Know what a signed agreement with deposit looks like in the system',
        ],
        task: 'Read a completed NFR agreement from a past project. List all 4 key sections. Write one thing that could go wrong if any section were missing.',
        tip: 'You don\'t need to write agreements. You need to know when one is complete.',
      },
      // Wed — Practice
      {
        topic: 'Proposal-to-Deposit Sequence',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Walk the full sequence from proposal sent → agreement signed → deposit received → project file opened',
          'Know who does what at each step: Maria, Jose, client',
          'Know what Maria enters in the system when a deposit is confirmed',
        ],
        task: 'Draw the full proposal-to-deposit sequence as a flowchart. Label each step with: who does it and what tool is used. Show Jose.',
        tip: 'The sequence only works if everyone knows their step. Maria\'s steps are intake and confirmation.',
      },
      // Thu — Deepen
      {
        topic: 'What Happens After Deposit',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know the post-deposit checklist: project folder created, PO triggered, schedule opened, client notified',
          'Know what Maria does and what Jose does after deposit lands',
          'Know the client communication at the deposit confirmation step',
        ],
        task: 'Write the post-deposit checklist from memory. Send it to Jose for review.',
        tip: 'The deposit is the client\'s green light. Maria\'s job is to move fast and set expectations clearly.',
      },
      // Fri — Review
      {
        topic: 'Week 15 Review — Agreement Workflow',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Walk the full Agreement-First sequence from inquiry to PO without reference',
          'Identify what step is missing from a broken workflow scenario',
          'Write the client-facing deposit confirmation message from scratch',
        ],
        task: 'Jose gives Maria a scenario with a skipped step in the workflow. Maria identifies the gap, explains the risk, and writes the correction. Show Jose.',
        tip: 'One missed step in the agreement workflow can delay a job by two weeks.',
      },
    ],

    // ── WEEK 16: JOB FILE MANAGEMENT ─────────────────────────────────────────
    16: [
      // Mon — Concept
      {
        topic: 'NFR File Naming Conventions',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know the NFR file naming standard: [ClientLastName]-[JobType]-[Date] or equivalent',
          'Understand why consistent naming prevents lost files and confusion',
          'Audit 5 recent project files for naming compliance',
        ],
        task: 'Audit 5 project files in Google Drive. Are they named correctly? Fix any that aren\'t. Write what you changed and why.',
        tip: 'If Jose can\'t find the file in 30 seconds, it\'s named wrong.',
      },
      // Tue — Application
      {
        topic: 'Google Drive Structure — Active vs. Archived Jobs',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know the difference between an active job folder and an archived job folder',
          'Know when a job moves from active to archived',
          'Know what files belong in the job folder at each stage',
        ],
        task: 'Find one job that should be archived but isn\'t. Move it to the correct folder with Jose\'s approval.',
        tip: 'A clean active jobs folder = a clear picture of what\'s in progress.',
      },
      // Wed — Practice
      {
        topic: 'Project Status Tracking',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know the NFR project stages: Inquiry → Proposal → Signed → Deposited → Scheduled → In Progress → Final → Archived',
          'Know how Maria tracks project status in the system',
          'Update the status of 3 current projects accurately',
        ],
        task: 'Check the status tracker. Are all active jobs at the right stage? Update any that are out of date. Flag one to Jose if the status is unclear.',
        tip: 'Project status is only useful if it\'s current. Maria owns keeping it current.',
      },
      // Thu — Deepen
      {
        topic: 'CompanyCam as Part of the Job File',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know that CompanyCam photos are part of the permanent job record',
          'Know how to link a CompanyCam project to the Google Drive job folder',
          'Know what to do if photos are missing at job close',
        ],
        task: 'Pick one recently closed job. Verify photos are complete in CompanyCam. If anything is missing, write the gap and the recovery plan.',
        tip: 'Closed jobs without photos are a liability. Check before archiving.',
      },
      // Fri — Review
      {
        topic: 'Week 16 Review — File Management',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Set up a new project folder correctly from scratch',
          'Name 3 files per NFR convention',
          'Update the status tracker for all active jobs',
        ],
        task: 'Jose names a new project. Maria creates the full project folder, names the starter files, and sets the status to "Proposal." Jose inspects.',
        tip: 'A well-organized file system means a well-organized company.',
      },
    ],

    // ── WEEK 17: SCHEDULING & COORDINATION ───────────────────────────────────
    17: [
      // Mon — Concept
      {
        topic: 'Reading the NFR Calendar',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know how NFR\'s Google Calendar is structured: Jose, Jorge, project blocks',
          'Understand what each calendar event type means (client meeting, job start, site visit, office)',
          'Know what Maria can add vs. what needs Jose\'s approval',
        ],
        task: 'Review this week\'s calendar. Write a summary: how many active jobs are running, who is on site each day, are there any scheduling conflicts? Show Jose.',
        tip: 'The calendar is the source of truth for what\'s happening. Read it every morning.',
      },
      // Tue — Application
      {
        topic: 'Field-to-Office Updates',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know the daily update flow: Jorge updates job status → Maria logs it → Jose reviews',
          'Know what to do if Maria doesn\'t receive an update from the field',
          'Know which updates require immediate action vs. logging only',
        ],
        task: 'Write the field-to-office update protocol: who sends, what they send, when, and what Maria does with it. Show Jose.',
        tip: 'If Maria doesn\'t have today\'s site update by noon, she follows up. Don\'t wait.',
      },
      // Wed — Practice
      {
        topic: 'Vendor Communication',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know which vendors Maria communicates with: cabinet supplier, materials, Interior Surface',
          'Know the communication standard: order confirmation, delivery ETAs, follow-up on late orders',
          'Know when to escalate a vendor issue to Jose',
        ],
        task: 'Identify one open material order on an active job. Check its status. Is there an ETA? If not, write the follow-up email to the vendor. Show Jose before sending.',
        tip: 'Vendors respect consistent follow-up. Maria is the point of contact for routine vendor updates.',
      },
      // Thu — Deepen
      {
        topic: 'Scheduling Conflicts & Escalation',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know what a scheduling conflict looks like: two jobs needing the same crew on the same day',
          'Know Maria\'s role: surface the conflict to Jose immediately, never resolve independently',
          'Know how to hold a client while a scheduling conflict is being resolved',
        ],
        task: 'Write a scenario where a scheduling conflict arises. What does Maria do step by step? Who does she contact and what does she say? Show Jose.',
        tip: 'Scheduling conflicts are Jose decisions. Maria\'s job is to surface them fast and hold clients professionally.',
      },
      // Fri — Review
      {
        topic: 'Week 17 Review — Scheduling & Coordination',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Read the calendar and summarize next week\'s active jobs in 5 minutes',
          'Identify one coordination gap in the current schedule',
          'Write the field-to-office update protocol from memory',
        ],
        task: 'Jose asks: what is happening next week, who is where, and is there anything that needs to be resolved? Maria answers from the calendar without being prompted.',
        tip: 'A coordinator who knows the schedule is the reason the schedule works.',
      },
    ],

    // ── WEEK 18: OFFICE FINANCIAL AWARENESS ──────────────────────────────────
    18: [
      // Mon — Concept
      {
        topic: 'What Maria Touches vs. What She Doesn\'t',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_QBO,
        objectives: [
          'Know the financial boundary: Maria reads status, never enters data or makes financial decisions',
          'Know which financial tasks belong to Jose only: approving invoices, authorizing payments, reviewing P&L',
          'Understand why this separation protects both Maria and the company',
        ],
        task: 'Write the financial boundary in your own words: what can Maria look at, what can she never touch? Include one example of each. Show Jose.',
        tip: 'Financial clarity protects everyone. Stay in your lane and own it well.',
      },
      // Tue — Application
      {
        topic: 'Reading a PO',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_QBO,
        objectives: [
          'Know the key fields on an NFR PO: job name, materials, quantities, vendor, amount',
          'Know how to read a PO to confirm what was ordered vs. what arrived',
          'Know what to do if a PO doesn\'t match the delivery',
        ],
        task: 'Open a recent PO with Jose. Read every line. Write: does it match what was ordered? If anything is off, how would you flag it?',
        tip: 'A PO is a commitment. Know what was committed before the delivery arrives.',
      },
      // Wed — Practice
      {
        topic: 'Deposit Tracking',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_QBO,
        objectives: [
          'Know how to check whether a client deposit has been received',
          'Know the project does not move forward until deposit is confirmed',
          'Know the client communication when deposit is received vs. not received',
        ],
        task: 'Check the deposit status for all active projects. Write: deposited, pending, or not yet requested. Flag any project that is "in progress" but deposit is unconfirmed.',
        tip: 'No deposit = no start. Maria enforces this by tracking, not by guessing.',
      },
      // Thu — Deepen
      {
        topic: 'Materials Awareness — What Things Cost',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_QBO,
        objectives: [
          'Know the rough cost range for common NFR materials: cabinet sets, countertops, flooring, paint',
          'Understand why Maria knowing approximate costs helps her support the sales process',
          'Know that Maria never quotes prices to clients — she directs price questions to Jose',
        ],
        task: 'With Jose, review the material costs on one recent project. Write the approximate range for 3 material types. What would you say if a client asked you "how much does a cabinet set cost?"',
        tip: 'Knowing costs makes you a better coordinator. Quoting costs is Jose\'s job.',
      },
      // Fri — Review
      {
        topic: 'Week 18 Review — Office Financial Awareness',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_QBO,
        objectives: [
          'State Maria\'s financial boundary accurately from memory',
          'Read a PO and confirm or flag the match',
          'Check deposit status for all active projects without being asked',
        ],
        task: 'Jose asks for a deposit status report on all active projects. Maria produces it independently in under 10 minutes. Jose reviews for accuracy.',
        tip: 'Financial awareness makes Maria a better partner to Jose — not a replacement for him.',
      },
    ],

    // ── WEEK 19: GRADUATION — OFFICE OPERATIONS ──────────────────────────────
    19: [
      // Mon — Concept
      {
        topic: 'SOP Review — Office Operations',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Review all office SOPs Maria has been trained on over Weeks 13–18',
          'Identify which SOPs feel fully confident vs. need more practice',
          'Write any SOP gaps Maria has identified during the 6 weeks',
        ],
        task: 'Self-audit across all 6 weeks. Rate yourself 1–5 in each area: Systems, Communication, Agreement Workflow, File Management, Scheduling, Financial Awareness. Write your honest assessment.',
        tip: 'Honest self-assessment is the first step to closing the gaps.',
      },
      // Tue — Application
      {
        topic: 'Evaluation Preparation',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Know what Jose will evaluate on Friday: live client scenario, file audit, calendar read, deposit status check',
          'Prepare any weak areas identified in Monday\'s self-audit',
          'Review the agreement workflow and portal map one more time',
        ],
        task: 'Pick your weakest area from Monday\'s self-audit. Spend today\'s session drilling it until you feel confident. Tell Jose what you practiced.',
        tip: 'Preparation is what turns evaluation day into a confirmation, not a surprise.',
      },
      // Wed — Practice
      {
        topic: 'Live Office Simulation',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Handle a simulated busy office morning: 3 client emails, a new inquiry, a vendor delivery question, and a scheduling conflict — all in 45 minutes',
          'Prioritize and triage correctly',
          'Know which items to escalate and which to handle independently',
        ],
        task: 'Jose runs a simulated office morning. Maria handles everything she can, escalates what she should, and logs what she did. Jose reviews each decision.',
        tip: 'The simulation is designed to feel like a real Monday morning. Breathe, triage, move.',
      },
      // Thu — Deepen
      {
        topic: 'Jose Evaluation',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Complete the full Jose evaluation across all 6 office training areas',
          'Receive specific feedback on each area',
          'Identify the 3 strongest areas and 1 area for continued focus',
        ],
        task: 'Jose conducts the formal evaluation. Maria completes each task without coaching. Jose writes specific written feedback on each area.',
        tip: 'This is the checkpoint, not the finish line. Growth continues after graduation.',
      },
      // Fri — Graduation
      {
        topic: 'Graduation — Office & Design Coordinator',
        resourceLabel: OFFICE_LABEL,
        resourceUrl: OFFICE_URL_GOOG,
        objectives: [
          'Celebrate completing the 7-week office administration track',
          'Commit to the 90-day growth plan built from Jose\'s evaluation',
          'Begin Track 3: Design Awareness next Monday',
        ],
        task: 'Maria and Jose review the journey from Week 13 to Week 19. Jose names one thing Maria does exceptionally well. Maria names one thing she\'s committed to improving. Both write it down.',
        tip: 'You have the systems. You have the process. Design track starts Monday — you\'re ready.',
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // DESIGN AWARENESS PLAN — Maria (Weeks 20–25)
  // ═══════════════════════════════════════════════════════════════════════════

  const DESIGN_URL_SW    = 'https://www.sherwin-williams.com/painting-contractors/color/color-forecast';
  const DESIGN_URL_HOUZZ = 'https://www.houzz.com/magazine/decorating';
  const DESIGN_URL_NKBA  = 'https://www.nkba.org';
  const DESIGN_URL_AD    = 'https://www.architecturaldigest.com';
  const DESIGN_LABEL     = 'Training Resource';

  const MARIA_DESIGN_PLAN = {

    // ── WEEK 20: WHAT DESIGNERS DO ────────────────────────────────────────────
    20: [
      // Mon — Concept
      {
        topic: 'The Designer\'s Role — What Design Actually Is',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_AD,
        objectives: [
          'Understand the difference between a designer\'s role and a salesperson\'s role',
          'Know how a designer guides a client from confusion to a clear direction',
          'Understand why design skills make an Office & Design Coordinator more valuable',
        ],
        task: 'Read one article on Architectural Digest about how designers work with clients. Write: what does a designer do that Maria could start doing in her role right now?',
        tip: 'Design is not decoration. It\'s problem-solving with aesthetics.',
      },
      // Tue — Application
      {
        topic: 'How Clients Choose a Direction',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_HOUZZ,
        objectives: [
          'Understand the three ways clients arrive at a style: inspiration images, gut feeling, or "I don\'t know"',
          'Know how to respond to each client type at the first meeting',
          'Know what questions to ask to help a client define their direction',
        ],
        task: 'Browse Houzz. Find 3 images in 3 different styles. Write 2–3 words that describe each style\'s mood. Then write: what question would you ask a client who showed you each image?',
        tip: 'Most clients can\'t name a style. They can describe a feeling. Maria\'s job is to translate.',
      },
      // Wed — Practice
      {
        topic: 'NFR\'s Design Role — Where Maria Fits',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_AD,
        objectives: [
          'Know where NFR\'s design involvement begins and ends: Maria supports, Jose closes',
          'Understand that Maria\'s design role is to help the client feel heard and get to yes',
          'Know when to involve Jose in the design conversation',
        ],
        task: 'Write: at what point in the client journey does Maria\'s design input make the biggest difference? What does Maria say or show that moves a client forward?',
        tip: 'Maria\'s design role is not about being a full designer — it\'s about guiding a client to a decision.',
      },
      // Thu — Deepen
      {
        topic: 'The Design Appointment — What Happens and Why',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_HOUZZ,
        objectives: [
          'Know the structure of a design appointment: listen, show, narrow, confirm',
          'Understand what questions open a client up vs. shut them down',
          'Know how to end an appointment with a clear next step',
        ],
        task: 'With Jose, role-play a design appointment using a past client scenario. Maria asks the questions. Jose plays the client. Debrief: what worked, what to sharpen.',
        tip: 'A design appointment ends with a direction, not a question mark.',
      },
      // Fri — Review
      {
        topic: 'Week 20 Review — What Designers Do',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_AD,
        objectives: [
          'Describe what a designer does in one clear sentence',
          'Name the 3 client arrival types and how to handle each',
          'Explain where Maria\'s design role fits in the NFR sales process',
        ],
        task: 'Write a one-page summary: What does Maria do differently in client conversations now that she understands the designer\'s role?',
        tip: 'Understanding the role changes how you show up in every client interaction.',
      },
    ],

    // ── WEEK 21: COLOR THEORY & TRENDS ───────────────────────────────────────
    21: [
      // Mon — Concept
      {
        topic: 'Color Wheel Basics',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_SW,
        objectives: [
          'Know the color relationships: complementary, analogous, triadic',
          'Understand warm vs. cool, light vs. dark, saturated vs. muted',
          'Know how color temperature affects how a space feels',
        ],
        task: 'Draw or print a color wheel. Circle 3 pairs of complementary colors. Write one word that describes the mood of each pair.',
        tip: 'Color theory is the grammar of design. You don\'t need to be fluent — you need to be functional.',
      },
      // Tue — Application
      {
        topic: 'Sherwin-Williams Color Forecast',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_SW,
        objectives: [
          'Know how to read the SW annual color forecast',
          'Understand which current trending colors are showing up in NFR project requests',
          'Know the 3 most requested NFR palette types: warm neutral, cool gray, white/bright',
        ],
        task: 'Visit the SW color forecast page. Write the 3 trending directions and which one best matches what NFR clients have been asking for.',
        tip: 'Trending colors are talking points. Knowing them makes Maria sound current and credible.',
      },
      // Wed — Practice
      {
        topic: 'Translating Client Language to Palettes',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_SW,
        objectives: [
          'Know how to hear "cozy," "clean," "modern," or "farmhouse" and translate to specific color directions',
          'Practice matching common client words to SW color families',
          'Know 3 go-to NFR palettes that close reliably',
        ],
        task: 'Jose gives Maria 5 client descriptions: "I want it to feel warm and cozy," "I want it to look like a magazine," "I want something timeless," "I want it bright," "I don\'t know — just not dark." Maria translates each to a color direction and 1–2 SW colors.',
        tip: 'The client says "cozy." Maria hears "warm whites and wood tones." That\'s the translation skill.',
      },
      // Thu — Deepen
      {
        topic: 'Light vs. Dark, Warm vs. Cool — How It Affects the Room',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_SW,
        objectives: [
          'Understand how light affects color: north-facing vs. south-facing rooms read color differently',
          'Know when to recommend a lighter vs. darker tone based on the room\'s light exposure',
          'Know how cabinet finish color interacts with wall and countertop color',
        ],
        task: 'Pick 2 photos of kitchens from Houzz — one in a bright room, one in a darker room. Describe how each color choice works or doesn\'t work with the light in that room.',
        tip: 'A color that looks beautiful in a showroom can look wrong in a north-facing kitchen. Light is everything.',
      },
      // Fri — Review
      {
        topic: 'Week 21 Review — Color Theory & Trends',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_SW,
        objectives: [
          'Name the 3 most-requested NFR palette types',
          'Translate 3 client style words to color directions',
          'Describe how light exposure affects color choice',
        ],
        task: 'Jose gives Maria a client description. Maria picks a color direction, names 1–2 SW colors, and explains why. Jose rates it: would this close the client?',
        tip: 'Color confidence is a sales superpower. Own it.',
      },
    ],

    // ── WEEK 22: MATERIALS & FINISHES ────────────────────────────────────────
    22: [
      // Mon — Concept
      {
        topic: 'Cabinet Finishes — What\'s Available & What\'s Trending',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_NKBA,
        objectives: [
          'Know the main Hearthwood finish categories: painted, stained, thermofoil',
          'Know which finishes are most popular with current NFR clients',
          'Know how to describe each finish in terms a client would understand',
        ],
        task: 'Open the Hearthwood catalog. Write a one-sentence client-friendly description for each finish category. Which one would Maria most confidently recommend to a client who wants "clean and modern"?',
        tip: 'Materials are easier to sell when you know how to describe what they feel like, not just what they are.',
      },
      // Tue — Application
      {
        topic: 'Countertops — Quartz, Granite, Laminate & Solid Surface',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_NKBA,
        objectives: [
          'Know the trade-offs of each countertop type: cost, durability, maintenance, appearance',
          'Know which countertop types NFR installs vs. refers out',
          'Know the NFR standard recommendation for a mid-range kitchen remodel',
        ],
        task: 'Write a 4-row comparison table: countertop type, cost range, best for, and one reason clients choose it. Show Jose.',
        tip: 'Countertop choice is usually where the client\'s budget and taste collide. Know both sides.',
      },
      // Wed — Practice
      {
        topic: 'Flooring — LVP, Hardwood, Tile & Carpet',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_NKBA,
        objectives: [
          'Know the most common flooring types in NFR jobs',
          'Know how to match flooring to cabinet finish and wall color for a cohesive look',
          'Know the NFR flooring division\'s most commonly installed products',
        ],
        task: 'Pick a kitchen from Houzz. Identify: what flooring would you pair with those cabinets and why? What flooring would you avoid and why? Bring 2 Houzz examples.',
        tip: 'Flooring ties the room together. When it\'s wrong, the whole design feels off.',
      },
      // Thu — Deepen
      {
        topic: 'Hardware Trends — Pulls, Knobs & Finishes',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_NKBA,
        objectives: [
          'Know the current hardware finish trends: matte black, brushed gold, satin nickel',
          'Know how to match hardware finish to faucets and light fixtures for a cohesive look',
          'Know when hardware is an upgrade vs. a standard spec',
        ],
        task: 'Browse 5 kitchen photos. Identify the hardware in each. Write: what finish, does it match the faucet/fixtures, and does it work with the cabinet finish? What would you change?',
        tip: 'Hardware is the jewelry of a kitchen. Small choice, big visual impact.',
      },
      // Fri — Review
      {
        topic: 'Week 22 Review — Materials & Finishes',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_NKBA,
        objectives: [
          'Name the Hearthwood finish categories and describe each to a client',
          'Build a cohesive kitchen spec: cabinets + countertop + flooring + hardware',
          'Explain one trade-off a client should know before choosing a material',
        ],
        task: 'Jose gives Maria a client brief: "mid-range kitchen, wants it to feel modern but warm." Maria builds a full material spec: cabinet finish, countertop, flooring, hardware. Jose reviews.',
        tip: 'A full material spec is what separates a design coordinator from a receptionist.',
      },
    ],

    // ── WEEK 23: KITCHEN & BATH TRENDS ───────────────────────────────────────
    23: [
      // Mon — Concept
      {
        topic: 'Current Kitchen Styles — Transitional, Modern Farmhouse, Contemporary',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_NKBA,
        objectives: [
          'Know the defining features of each style: cabinet style, finish, hardware, countertop, lighting',
          'Know which style is most popular in Columbus right now',
          'Know how to identify a client\'s style from their inspiration images',
        ],
        task: 'Find one example of each style on Houzz. Write 3 defining features for each. Which one is NFR building the most of right now?',
        tip: 'Style vocabulary makes Maria credible in client conversations.',
      },
      // Tue — Application
      {
        topic: 'Current Bath Styles & Trends',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_NKBA,
        objectives: [
          'Know the top 3 current bath remodel trends: floating vanities, walk-in showers, spa-inspired neutrals',
          'Know the difference between a primary bath, a guest bath, and a half bath renovation scope',
          'Know which bath projects NFR handles vs. refers out',
        ],
        task: 'Browse NKBA bath trend pages. Write the 3 biggest trends for 2025–2026 bathrooms. Which one is most requested in NFR\'s Columbus market?',
        tip: 'Bath projects are growing at NFR. Knowing trends helps Maria pre-sell the category.',
      },
      // Wed — Practice
      {
        topic: 'NKBA Resources — Using Industry Tools',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_NKBA,
        objectives: [
          'Know what NKBA is and why it\'s a credible design reference',
          'Know which NKBA resources Maria can access and use with clients',
          'Find one trend report or design guide and summarize it',
        ],
        task: 'Visit nkba.org. Find one resource Maria could use in a client conversation. Write a 3-sentence summary and explain how it would help close a kitchen or bath project.',
        tip: 'Using industry sources makes Maria sound like a professional, not a salesperson.',
      },
      // Thu — Deepen
      {
        topic: 'Style Vocabulary — How to Talk About Design',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_AD,
        objectives: [
          'Know the 10 most common style terms used in kitchen and bath design',
          'Know how to use style vocabulary in a client conversation naturally',
          'Know how to describe a style without using jargon a client won\'t understand',
        ],
        task: 'Write a 10-term design vocabulary list with a plain-English definition for each. Then write: how would you use 3 of these terms naturally in a client meeting?',
        tip: 'Vocabulary is confidence. Use it casually, not like you\'re reading from a textbook.',
      },
      // Fri — Review
      {
        topic: 'Week 23 Review — Kitchen & Bath Trends',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_NKBA,
        objectives: [
          'Describe 3 kitchen styles and 3 bath trends in client-friendly language',
          'Identify a client\'s style from 3 inspiration images',
          'Use design vocabulary correctly in a role-play client conversation',
        ],
        task: 'Jose shows Maria 5 kitchen images. Maria identifies the style, names the defining features, and states what type of NFR client would choose it.',
        tip: 'When Maria can name a style and its client, she can build the whole pitch around it.',
      },
    ],

    // ── WEEK 24: SPOTTING A LOOK ──────────────────────────────────────────────
    24: [
      // Mon — Concept
      {
        topic: 'Houzz & Pinterest — How Clients Use Them',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_HOUZZ,
        objectives: [
          'Understand that most clients arrive with a Houzz or Pinterest board',
          'Know how to read a client\'s saved images to find the common thread',
          'Know how to ask for a client\'s inspiration board before the first meeting',
        ],
        task: 'Browse Houzz and save 10 images that feel consistent in style. Write: what is the common thread? What style would you call it? What material shows up most?',
        tip: 'The client\'s inspiration board tells you everything. Learn to read it.',
      },
      // Tue — Application
      {
        topic: 'Mood Board Basics — What They Are and Why They Work',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_HOUZZ,
        objectives: [
          'Know what a mood board is: a visual collection that aligns client and designer',
          'Know the basic components: cabinet finish, countertop, flooring, wall color, hardware',
          'Know when to use a mood board: at the proposal stage, before spec is finalized',
        ],
        task: 'Build a simple mood board using Google Slides or a printed collage: 5 images representing a cohesive kitchen direction. Label each: what it is and which Hearthwood product it relates to.',
        tip: 'A mood board does more work than a paragraph of description. Clients respond to images.',
      },
      // Wed — Practice
      {
        topic: 'Listening to What Clients Really Want',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_HOUZZ,
        objectives: [
          'Know how to listen past the words to the feeling a client is describing',
          'Know the difference between what a client says and what they mean',
          'Practice reflecting back a client\'s feeling in design language',
        ],
        task: 'Jose plays 3 clients with different descriptions. Maria listens, reflects the feeling back, and names a design direction for each. Debrief: did Maria hear the right thing?',
        tip: '"I want it to feel like a vacation" means something specific. Maria\'s job is to find out what.',
      },
      // Thu — Deepen
      {
        topic: 'From Inspiration to Spec — Bridging the Gap',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_HOUZZ,
        objectives: [
          'Know how to take a client\'s inspiration images and translate them into an NFR spec',
          'Understand which elements of an inspiration image can be replicated vs. approximated vs. referenced',
          'Know when a client\'s vision exceeds the project budget and how to handle it',
        ],
        task: 'Take a Houzz kitchen image and build a corresponding NFR spec using available Hearthwood products and standard materials. What can you match? What do you approximate? What do you flag?',
        tip: 'The best design coordinators translate beautifully — not perfectly. Close is enough to close the deal.',
      },
      // Fri — Review
      {
        topic: 'Week 24 Review — Spotting a Look',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_HOUZZ,
        objectives: [
          'Read a client\'s inspiration board and name the style and dominant material',
          'Build a basic mood board in 20 minutes',
          'Translate a client feeling into a design direction and a starting spec',
        ],
        task: 'Jose gives Maria a client brief with 5 inspiration images. Maria builds a mood board, names the style, and proposes a starting spec. Jose evaluates: would this move the client forward?',
        tip: 'When Maria can translate a client\'s vision into a concrete direction, she is doing design work.',
      },
    ],

    // ── WEEK 25: DESIGN → NFR SALES ──────────────────────────────────────────
    25: [
      // Mon — Concept
      {
        topic: 'Design as a Closing Tool',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_AD,
        objectives: [
          'Understand how design clarity reduces client hesitation and speeds decision-making',
          'Know the principle: a client who can see it will sign it',
          'Know where design input fits in the NFR sales sequence',
        ],
        task: 'Write: how has learning design helped Maria in her role? Where in the client journey can design make the biggest difference at NFR? Show Jose.',
        tip: 'Design that closes deals is not about being an artist — it\'s about reducing uncertainty.',
      },
      // Tue — Application
      {
        topic: 'When to Involve Jose',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_AD,
        objectives: [
          'Know the clear triggers for looping in Jose: pricing decisions, scope expansions, client hesitation about budget',
          'Know how to hand off a design-engaged client to Jose in a way that maintains momentum',
          'Practice the hand-off conversation: "Let me bring Jose in to walk you through the options."',
        ],
        task: 'Write the exact hand-off script Maria uses when a client is ready for Jose. Role-play it with Jose. Debrief: does it feel natural? Does it create momentum?',
        tip: 'A smooth hand-off from Maria to Jose is the moment the sale accelerates.',
      },
      // Wed — Practice
      {
        topic: 'Maria\'s Expanded Role in the NFR Sales Process',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_AD,
        objectives: [
          'Know how Maria\'s design track changes her role from coordinator to design-informed coordinator',
          'Know the 3 things Maria now does that she couldn\'t do before this training',
          'Know what Maria\'s involvement looks like in a kitchen discovery conversation',
        ],
        task: 'Write a before/after summary: what did Maria do in a client meeting before this training vs. now? What specific actions changed? Show Jose.',
        tip: 'Growth shows up in the specifics. Name exactly what changed.',
      },
      // Thu — Deepen
      {
        topic: 'The Future of Design at NFR',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_NKBA,
        objectives: [
          'Understand Jose\'s vision: design-first positioning for NFR\'s kitchen and bath division',
          'Know what Maria\'s expanded design role looks like in the next 90 days',
          'Build a personal 90-day design growth plan: 2 skills to deepen, 1 stretch goal',
        ],
        task: 'Write a 90-day design growth plan: what will Maria practice, what will she study, and what does success look like? Submit to Jose.',
        tip: 'The vision for design at NFR is bigger than this training. Maria is building toward it.',
      },
      // Fri — Design Graduation
      {
        topic: 'Design Track Graduation',
        resourceLabel: DESIGN_LABEL,
        resourceUrl: DESIGN_URL_AD,
        objectives: [
          'Celebrate completing all 3 tracks: Mozaik, Office Admin, Design Awareness',
          'Acknowledge the growth from a Mozaik-only coordinator to a full Office & Design Coordinator',
          'Commit to the 90-day growth plan as the next chapter',
        ],
        task: 'Maria presents to Jose: one thing she can now do for a client that she couldn\'t 90 days ago. Jose responds: one thing he\'s seen change in Maria during this training. Both write it down.',
        tip: 'Ninety days. Three tracks. One hundred and eighty sessions. You are the Office & Design Coordinator NFR needs.',
      },
    ],
  };

  // ── INTEGRATED 7-WEEK PLAN — 3 blocks per day (Mozaik 1hr + Admin 45min + Design 45min) ──
  // MOZAIK_PLAN, MARIA_ADMIN_PLAN, MARIA_DESIGN_PLAN above are no longer used directly.
  const MARIA_PLAN = {

    // ══ PROGRAM WEEK 1 — Mozaik Wk8 / Admin Basic Wk1 / Design Basic Wk1 ════
    1: [
      // Mon
      {
        mozaik: {
          topic: 'Custom Width Modifications', duration: '1 hour',
          objectives: ['Change a standard cabinet to a custom width','Apply width changes to multiple cabinets in sequence','Verify the fit in the 3D layout view'],
          task: 'Open a kitchen project, change one 24" base cabinet to 27", verify the change in 3D view, and save as [Project]-W1D1.',
          tip: 'Always view in 3D after any width change.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'NFR Portals Overview', duration: '45 min',
          objectives: ['Know every portal Maria touches: Staff Portal, Google Drive, CompanyCam, QuickBooks (view-only)','Understand which portal is used for which task','Log in to each portal and confirm access'],
          task: 'Write a one-page portal map: name of each tool, what it\'s used for, and your access level. Show Jose.',
          tip: 'Knowing which tool to open before you need it saves 10 minutes per client interaction.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'What Designers Do — Nate Berkus', duration: '45 min',
          objectives: ['Understand the role of an interior designer vs. a decorator vs. a contractor','Study Nate Berkus\'s philosophy: collected, not decorated','Identify 3 recurring design elements across his portfolio'],
          task: 'Browse Nate Berkus\'s work online. Write: What emotion does his design create? Which 3 choices could NFR apply to a kitchen project?',
          tip: 'Design is not about having taste — it\'s about knowing what a client feels and giving them the room that creates it.',
          resourceLabel: 'Watch: Nate Berkus — AD Tour', resourceUrl: 'https://www.youtube.com/results?search_query=Nate+Berkus+apartment+tour+Architectural+Digest',
        },
      },
      // Tue
      {
        mozaik: {
          topic: 'Height & Depth Customization', duration: '1 hour',
          objectives: ['Adjust cabinet height for non-standard ceiling situations','Modify depth for appliance clearance requirements','Stack multiple modifications on a single cabinet'],
          task: 'Change a base cabinet to 32" height, set a wall cabinet to reduced depth 11", and save as [Project]-W1D2.',
          tip: 'Height changes affect countertop alignment — always check after.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Google Workspace at NFR', duration: '45 min',
          objectives: ['Know the NFR Google Drive folder structure','Understand how to name and move files correctly per convention','Know how shared drives work vs. personal drives'],
          task: 'Navigate to the active project folder. Find one project file and verify it is named correctly per NFR convention. If not, correct it and note it.',
          tip: 'Every file you create should be findable by Jose or the Field Manager without calling you.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Client Types & Preferences — Angela Rose', duration: '45 min',
          objectives: ['Study Angela Rose\'s client approach: practical beauty for real families','Identify the client type that values her work (family-oriented, functional, timeless)','Match the Angela Rose client type to the NFR buyer profile'],
          task: 'Look at 5 Angela Rose kitchens. Write: What type of NFR client would choose this? What Hearthwood finish? What would they say in their first call?',
          tip: 'Knowing the client type is the first step in knowing what to propose.',
          resourceLabel: 'Watch: Angela Rose — Kitchen Design', resourceUrl: 'https://www.youtube.com/results?search_query=Angela+Rose+kitchen+design+home+renovation',
        },
      },
      // Wed
      {
        mozaik: {
          topic: 'Specialty Configurations — Fillers, Angles & Transitions', duration: '1 hour',
          objectives: ['Add filler panels to close gaps at walls','Create corner transitions between two cabinet runs','Use specialty cabinet types in a layout'],
          task: 'Build an L-shape layout, add fillers on wall ends, add a corner base cabinet, verify no gaps in 3D, and save as [Project]-W1D3.',
          tip: 'Filler panels must match cabinet finish.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'CompanyCam — Accessing & Organizing Job Photos', duration: '45 min',
          objectives: ['Know how to find a job in CompanyCam','Understand photo phases: before, milestone, after','Know how to share a photo link with a client or Jose'],
          task: 'Find an active job in CompanyCam. Verify photos are labeled by trade and phase. Flag any missing phase photos to Jose.',
          tip: 'CompanyCam photos are NFR\'s proof on every job. Treat them as part of the file.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Color & Personality — Genevieve Gorder', duration: '45 min',
          objectives: ['Study how Genevieve Gorder uses color as a personality statement','Know the difference between a color statement and a color mistake','Understand how to help a client take a color risk confidently'],
          task: 'Find 3 Genevieve Gorder rooms with bold color. Write: Would an NFR client do this? How would you soften the concept to fit their comfort level?',
          tip: 'Most clients want more personality in their home than they think they\'re allowed to have. Your job is to show them what\'s possible.',
          resourceLabel: 'Watch: Genevieve Gorder — Color in Design', resourceUrl: 'https://www.youtube.com/results?search_query=Genevieve+Gorder+color+design+home+renovation',
        },
      },
      // Thu
      {
        mozaik: {
          topic: 'Combining Modifications on Full Layouts', duration: '1 hour',
          objectives: ['Apply multiple modifications across a full kitchen layout','Check for conflicts between stacked modifications','Regenerate the cut list after all changes are made'],
          task: 'Build a 10×12 kitchen with at least 3 modification types, generate the cut list, and save as [Project]-W1D4.',
          tip: 'Always regenerate cut list after modifications.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'QuickBooks Basics — What Maria Sees', duration: '45 min',
          objectives: ['Know that Maria\'s QuickBooks role is read-only for project reference, not financial entry','Understand how to look up an invoice or payment record for a client','Know the separation: financials stay with Jose, Maria reads status only'],
          task: 'With Jose, open a recent project in QuickBooks. Identify: Has the deposit posted? Is there an outstanding invoice? Write what you see — not what it means financially.',
          tip: 'Maria\'s job is to know the project status, not to manage the books.',
          resourceLabel: 'QuickBooks Tutorials', resourceUrl: 'https://quickbooks.intuit.com/tutorials/',
        },
        design: {
          topic: 'The Midwest Design Perspective — Kevin O\'Gara', duration: '45 min',
          objectives: ['Study Kevin O\'Gara\'s approach to Midwest residential design','Understand what "elevated approachable" means as a design positioning','Connect his work to NFR\'s Columbus, Ohio client base'],
          task: 'Watch a Kevin O\'Gara video. Write: How does his work reflect the Columbus buyer? What one style choice would most NFR clients respond to?',
          tip: 'Design that works in Columbus is different from design that works in New York. Know your market.',
          resourceLabel: 'Watch: Kevin O\'Gara — Home Design', resourceUrl: 'https://www.youtube.com/results?search_query=Kevin+O%27Gara+home+design+midwest',
        },
      },
      // Fri
      {
        mozaik: {
          topic: 'Week 1 Review — Practice Kitchen', duration: '1 hour',
          objectives: ['Complete a full kitchen using all Week 1 Mozaik skills without reference','Include custom width, non-standard height, and fillers','Generate a 3D view and cut list as deliverables'],
          task: 'Build a complete kitchen from Jose\'s brief, apply all modifications, generate 3D and cut list — Friday 1pm check-in deliverable.',
          tip: 'Friday check-in: show 3D view, walk through modifications, explain one decision.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Week 1 Admin Review — NFR Systems', duration: '45 min',
          objectives: ['Name every tool Maria uses and its purpose from memory','Find a client project across all three systems (Drive, CompanyCam, QuickBooks) in under 5 minutes','Write the portal map from memory'],
          task: 'Jose names a recent client. Maria locates the project folder, photos, and invoice status in under 5 minutes without asking for help.',
          tip: 'Speed in the tools is confidence in the role.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Week 1 Design Review — Studio McGee Style Synthesis', duration: '45 min',
          objectives: ['Study Studio McGee\'s approach to a cohesive, livable aesthetic','Understand why their style resonates with the NFR client profile','Build a one-paragraph design positioning statement for a mock NFR kitchen client'],
          task: 'Watch a Studio McGee project. Write a design positioning statement: "She wants ___. Her home should feel ___. The palette starts with ___."',
          tip: 'The best design briefs sound like the client wrote them, not the designer.',
          resourceLabel: 'Watch: Studio McGee — Kitchen Design', resourceUrl: 'https://www.youtube.com/results?search_query=Studio+McGee+kitchen+design+makeover',
        },
      },
    ],

    // ══ PROGRAM WEEK 2 — Mozaik Wk9 / Admin Basic Wk2 / Design Basic Wk2 ════
    2: [
      // Mon
      {
        mozaik: {
          topic: 'L-Shape Kitchen Layouts', duration: '1 hour',
          objectives: ['Build a complete L-shape kitchen layout','Place the corner base cabinet correctly at the turn','Fill outward from the corner on both runs'],
          task: 'Build a 10×10 L-shape kitchen with corner base cabinet at the turn and wall cabinets above both runs. Export 3D view.',
          tip: 'Place corner cabinet first, fill outward.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'NFR Voice & Email Professionalism', duration: '45 min',
          objectives: ['Understand what "NFR voice" means: warm, confident, professional, never casual','Know the email greeting and sign-off standard','Understand that every client email reflects the entire company'],
          task: 'Read 3 past client emails from the NFR inbox. Rate each 1–5 for tone. Rewrite the most casual one in NFR voice.',
          tip: 'A professional email prevents a misunderstanding that costs 2 hours to fix.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'High-Design Vocabulary — Kelly Wearstler', duration: '45 min',
          objectives: ['Understand what makes Wearstler\'s work distinctive: bold, layered, material-rich','Learn 5 design vocabulary terms: patina, tension, materiality, scale, contrast','Practice using these terms in a room description'],
          task: 'Find 3 Wearstler rooms. For each, write one sentence using professional design vocabulary. Read each aloud — does it sound confident?',
          tip: 'Design vocabulary is not pretentiousness. It\'s precision. The right word moves a client forward.',
          resourceLabel: 'Watch: Kelly Wearstler — Design Process', resourceUrl: 'https://www.youtube.com/results?search_query=Kelly+Wearstler+design+process+Architectural+Digest',
        },
      },
      // Tue
      {
        mozaik: {
          topic: 'Island & Peninsula Design', duration: '1 hour',
          objectives: ['Add a kitchen island with correct aisle clearance','Apply a contrasting finish to the island','Verify minimum 42" clearance on all sides'],
          task: 'Add a 36×60 island to the W2D1 layout with 42" clearance maintained. Apply a contrasting finish.',
          tip: 'Island aisle clearance is a code minimum — do not go below 42".',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Responding to New Inquiries', duration: '45 min',
          objectives: ['Know the NFR inquiry response time target: same day, within 4 hours','Know the 3-part inquiry response: acknowledge, qualify, next step','Draft a response to a new kitchen remodel inquiry from scratch'],
          task: 'Jose provides a sample inquiry. Maria drafts a response using the 3-part format. Jose reviews for tone and completeness.',
          tip: 'Speed + warmth in the first reply sets the client\'s impression for the entire project.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Warmth as a Design Strategy — Joanna Gaines', duration: '45 min',
          objectives: ['Study why Joanna Gaines\'s style connects with mass market buyers','Understand the elements of warm transitional: shiplap, natural wood, soft neutrals','Know when NFR clients are asking for a "Joanna Gaines kitchen" without saying it'],
          task: 'Find 5 Joanna Gaines kitchens. Write the 3 elements that appear in every one. Which Hearthwood finish lines are closest to this style?',
          tip: 'The Joanna Gaines client is an NFR client. Know this style cold.',
          resourceLabel: 'Watch: Joanna Gaines — Kitchen Design', resourceUrl: 'https://www.youtube.com/results?search_query=Joanna+Gaines+Fixer+Upper+kitchen+design',
        },
      },
      // Wed
      {
        mozaik: {
          topic: 'Awkward Spaces — Soffits and Bulkheads', duration: '1 hour',
          objectives: ['Model a soffit above a wall cabinet run','Handle a wall with a 2" offset correctly','Verify everything looks correct in 3D'],
          task: 'Build a kitchen with a soffit above the wall cabinet run and one wall with a 2" offset. Verify in 3D.',
          tip: 'Measure from both ends of each wall.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Follow-Up Cadence', duration: '45 min',
          objectives: ['Know the NFR follow-up schedule: 48h after proposal, 1 week no response, 2 weeks final','Draft a follow-up email that is warm but not desperate','Know when to stop following up vs. when to escalate to Jose'],
          task: 'Identify one open proposal in the pipeline. Write the next follow-up email using the NFR cadence. Show Jose before sending.',
          tip: 'Most clients close on the second or third follow-up. Never stop after one.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Craft & Detail — Millwork and Cabinet Elevation', duration: '45 min',
          objectives: ['Study how millwork and architectural detail elevates a kitchen space','Understand the difference between a "designer" kitchen and a "contractor" kitchen','Know how to identify detail opportunities in an NFR project'],
          task: 'Find 2 kitchens with strong millwork detail. Write: What details elevated the space? Could NFR deliver any of these? Which would you propose to a client?',
          tip: 'The detail that separates premium from commodity is often one decision — a hood design, a panel profile, a hardware choice.',
          resourceLabel: 'Watch: Kitchen Millwork Detail', resourceUrl: 'https://www.youtube.com/results?search_query=kitchen+millwork+detail+interior+design+custom+cabinetry',
        },
      },
      // Thu
      {
        mozaik: {
          topic: 'U-Shape & Galley Layouts', duration: '1 hour',
          objectives: ['Build a complete U-shape kitchen layout','Build a complete galley layout with correct clearance','Understand minimum walkway requirements for each layout type'],
          task: 'Build both — a U-shape in an 8×10 room and a galley in an 8×14 room with 48" clearance between runs.',
          tip: 'Galley needs 48" minimum between runs.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Difficult Conversations — What to Escalate to Jose', duration: '45 min',
          objectives: ['Know which conversations Maria handles vs. which go directly to Jose','Understand the escalation triggers: pricing, scope changes, client complaints','Know how to hold a client warmly while Jose is looped in'],
          task: 'Write the decision rule: "Maria handles ___. Maria escalates to Jose when ___." Use 3 real scenarios from the past 30 days.',
          tip: 'Never try to resolve a scope or pricing conflict without Jose. Warm hold, then escalate.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Color Theory Basics — The Neutrals Foundation', duration: '45 min',
          objectives: ['Understand warm vs. cool neutrals and how they affect the feel of a space','Know the Sherwin-Williams Color of the Year and what it signals for 2026','Know how to describe a color\'s undertone to a client without using paint chips'],
          task: 'Look up the current SW Color of the Year. Write: What feeling does it create? What client would choose it? What Hearthwood cabinet finish would pair with it?',
          tip: 'Most NFR clients say "I want white" — your job is to find the white that fits their light, their floors, and their personality.',
          resourceLabel: 'Watch: Color Theory for Interiors', resourceUrl: 'https://www.youtube.com/results?search_query=color+theory+interior+design+warm+cool+neutrals',
        },
      },
      // Fri
      {
        mozaik: {
          topic: 'Week 2 Review — Full Layout Challenge', duration: '1 hour',
          objectives: ['Build a complete kitchen layout from Jose\'s assigned room size and type','Apply Week 1 modifications within the layout','Generate 3D and cut list, present to Jose at 1pm'],
          task: 'Jose assigns room size and layout type. Build the complete kitchen, apply modifications, generate 3D and cut list. Present at 1pm.',
          tip: 'Show Jose the layout, explain why you chose each cabinet type.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Week 2 Admin Review — Client Communication', duration: '45 min',
          objectives: ['Draft an inquiry response from scratch in 10 minutes','Write a follow-up for an open proposal with no response','Demonstrate the escalation decision rule correctly'],
          task: 'Jose gives Maria a sample inquiry and an open proposal with no response. Maria responds to both. Jose evaluates tone and completeness.',
          tip: 'Speed + professionalism in client communication is Maria\'s highest-visibility skill.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Week 2 Design Review — National Icons & Style Translation', duration: '45 min',
          objectives: ['Identify 3 national icon design styles by name without looking','Translate a style preference from a celebrity designer into an NFR product recommendation','Explain a style decision to a client in plain language'],
          task: 'Jose names a style (farmhouse, contemporary, transitional, bold). Maria identifies which designer it aligns with and suggests a Hearthwood starting point. 4 rounds.',
          tip: 'The faster Maria can translate an inspiration image into a product direction, the shorter the sales cycle.',
          resourceLabel: 'Watch: Interior Design Styles Explained', resourceUrl: 'https://www.youtube.com/results?search_query=interior+design+styles+explained+farmhouse+transitional+contemporary',
        },
      },
    ],

    // ══ PROGRAM WEEK 3 — Mozaik Wk10 / Admin Basic Wk3 / Design Basic Wk3 ═══
    3: [
      // Mon
      {
        mozaik: {
          topic: '3D View Navigation & Camera Angles', duration: '1 hour',
          objectives: ['Navigate the 3D view confidently from any angle','Save named camera views for a project','Export camera views as images'],
          task: 'Open a completed kitchen. Save 3 camera views: overall, island detail, and corner. Export each as an image.',
          tip: 'Best client angle is from the kitchen entry at eye height.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'The NFR Agreement — What It Is and Why It Matters', duration: '45 min',
          objectives: ['Know what the NFR agreement document contains','Understand that no work starts without a signed agreement','Know Maria\'s role in the agreement process: prepare, not decide'],
          task: 'Read a recent NFR agreement. Identify the 5 required sections. Note any that are missing or incomplete.',
          tip: 'The agreement is NFR\'s protection on every job. Know it better than the client does.',
          resourceLabel: 'Staff Portal', resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
        },
        design: {
          topic: 'Storytelling in Design — Emily Henderson', duration: '45 min',
          objectives: ['Understand Emily Henderson\'s approach: design as personal storytelling','Know how to identify a client\'s "design story" in the first 10 minutes of conversation','Practice translating a client\'s story into a design direction'],
          task: 'Watch Emily Henderson talk about her process. Write: What 3 questions could Maria ask a new client to uncover their design story? Role-play with Jose.',
          tip: 'When a client feels heard, they stop comparing prices.',
          resourceLabel: 'Watch: Emily Henderson — Design Philosophy', resourceUrl: 'https://www.youtube.com/results?search_query=Emily+Henderson+design+philosophy+storytelling',
        },
      },
      // Tue
      {
        mozaik: {
          topic: 'Material & Color Application in 3D', duration: '1 hour',
          objectives: ['Apply finishes and colors in the 3D view','Create two distinct finish versions of the same kitchen','Export both versions for client comparison'],
          task: 'Create Version A (white perimeter, navy island) and Version B (greige perimeter, white island). Export both.',
          tip: 'Always show two options side-by-side — clients decide faster with a comparison.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Preparing an Agreement for Jose\'s Review', duration: '45 min',
          objectives: ['Know the agreement checklist: scope, price, payment terms, timeline, signatures','Prepare an agreement draft from a client brief','Flag anything incomplete before handing to Jose'],
          task: 'Jose gives a sample client brief. Maria prepares the agreement draft. Jose reviews for completeness.',
          tip: 'Every incomplete agreement that reaches a client costs NFR credibility. Catch it first.',
          resourceLabel: 'Staff Portal', resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
        },
        design: {
          topic: 'Pattern, Texture & Layering — Justina Blakeney', duration: '45 min',
          objectives: ['Understand how Justina Blakeney uses pattern and texture to create warmth and depth','Know the difference between layering (intentional) and clutter (accidental)','Identify one layering technique that applies to kitchen cabinet design'],
          task: 'Find 2 Justina Blakeney rooms. Write: What textures are layered? Which of those ideas could work in a kitchen? Propose one material combination for an NFR client.',
          tip: 'Kitchen design is mostly flat surfaces. The designer\'s job is to find texture opportunities where others see only cabinets.',
          resourceLabel: 'Watch: Justina Blakeney — Jungalow Design', resourceUrl: 'https://www.youtube.com/results?search_query=Justina+Blakeney+Jungalow+design+home+tour',
        },
      },
      // Wed
      {
        mozaik: {
          topic: 'Lighting & Rendering Quality', duration: '1 hour',
          objectives: ['Adjust lighting settings in an existing 3D view','Export a render at the highest quality setting','Compare before and after lighting adjustment'],
          task: 'Adjust lighting on an existing 3D view, export at highest quality, compare before and after. Save both.',
          tip: 'Good lighting does more for client confidence than cabinet details.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Client Signing Process', duration: '45 min',
          objectives: ['Know the NFR signing sequence: agreement → Jose approves → client signs + deposit → PO generated','Know how to send an agreement to a client professionally','Know what to do if a client has questions about the agreement'],
          task: 'Walk through a real agreement signing sequence with Jose. Who does what at each step? Write the sequence on one page.',
          tip: 'A smooth signing process communicates that NFR is organized. Fumbling it does the opposite.',
          resourceLabel: 'Staff Portal', resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
        },
        design: {
          topic: 'Materials & Finishes — Sarah Richardson', duration: '45 min',
          objectives: ['Study Sarah Richardson\'s approach to material selection: practical, beautiful, lasting','Know how to evaluate a material for durability, maintenance, and visual impact','Practice making a material recommendation with a reason for each choice'],
          task: 'Find 2 Sarah Richardson kitchens. Write the material choices for countertop, cabinet finish, flooring, and hardware. Which NFR/Hearthwood products are closest?',
          tip: 'Every material recommendation needs a reason the client can understand. Not "it\'s beautiful" — "it hides fingerprints, it\'s easy to clean, and it ages well."',
          resourceLabel: 'Watch: Sarah Richardson — Kitchen Design', resourceUrl: 'https://www.youtube.com/results?search_query=Sarah+Richardson+kitchen+design+materials',
        },
      },
      // Thu
      {
        mozaik: {
          topic: 'Creating Client Presentation Exports', duration: '1 hour',
          objectives: ['Assemble a complete client presentation export package','Follow the NFR file naming convention','Ensure the package contains all 4 required items'],
          task: 'Export a full package: 2 camera views, floor plan, and cut list. Name each file: [ClientLastName]-[Date]-[Version].',
          tip: 'Every package needs the same 4 items every time.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'From Signed Agreement to Active Job', duration: '45 min',
          objectives: ['Know what happens after the deposit posts: PO generation, job file creation, calendar scheduling','Understand the handoff from agreement to production','Know when to loop in the Field Manager'],
          task: 'Trace a recently signed job from signed agreement to first site visit. Document every step and who owned it.',
          tip: 'The agreement-to-production handoff is where jobs fall through the cracks. Own the transition.',
          resourceLabel: 'Staff Portal', resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
        },
        design: {
          topic: 'Translating Client Language to Palettes', duration: '45 min',
          objectives: ['Know the 5 most common client phrases and what they mean as design directions','Practice translating vague client language into a starting material palette','Build a full palette from a 2-sentence client brief'],
          task: 'Jose gives 3 client briefs (2 sentences each). Maria builds a palette for each: cabinet finish, countertop, hardware, one accent. No more than 5 minutes per brief.',
          tip: 'Speed in translation is a skill. Practice it until it feels natural, not stressful.',
          resourceLabel: 'Watch: Interior Design Material Palette', resourceUrl: 'https://www.youtube.com/results?search_query=interior+design+material+palette+kitchen+countertop+cabinet',
        },
      },
      // Fri
      {
        mozaik: {
          topic: 'Week 3 Review — Full Presentation Walkthrough', duration: '1 hour',
          objectives: ['Build a kitchen to Jose\'s brief and prepare a full presentation package','Walk Jose through the design as if he were the client','Demonstrate camera angles, color options, and the cut list'],
          task: 'Jose plays the client. Build the kitchen to his brief, prepare the full package, and walk him through it at 1pm.',
          tip: 'This is your chance to practice being a designer, not just a software operator.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Week 3 Admin Review — Agreement Workflow', duration: '45 min',
          objectives: ['Walk through the full agreement workflow from memory','Prepare a draft agreement from a client brief in 20 minutes','Explain the handoff to production without looking at notes'],
          task: 'Jose gives a brief. Maria prepares the agreement, walks through the signing sequence, and explains the production handoff. All from memory.',
          tip: 'A coordinator who knows the agreement workflow inside out is the backbone of NFR\'s sales process.',
          resourceLabel: 'Staff Portal', resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
        },
        design: {
          topic: 'Week 3 Design Review — Storytelling & Materials', duration: '45 min',
          objectives: ['Ask 3 story-uncovering questions in a role-play client conversation','Build a material palette from a 2-sentence brief in under 5 minutes','Explain one material choice to a client without using design jargon'],
          task: 'Jose plays a client. Maria runs a 10-minute design discovery conversation: story questions, palette proposal, one material explanation. Jose evaluates: would this move a real client forward?',
          tip: 'A 10-minute design conversation that ends with a direction saves 2 hours of back-and-forth later.',
          resourceLabel: 'Watch: Design Consultation Process', resourceUrl: 'https://www.youtube.com/results?search_query=interior+design+client+consultation+process+home+renovation',
        },
      },
    ],

    // ══ PROGRAM WEEK 4 — Mozaik Wk11 / Admin Basic Wk4 / Design Basic Wk4 ═══
    4: [
      // Mon
      {
        mozaik: {
          topic: 'Understanding Cut List Output', duration: '1 hour',
          objectives: ['Generate a cut list from a completed kitchen project','Identify every part on the list by name and purpose','Circle or flag any entry that looks incorrect'],
          task: 'Generate a cut list from a completed kitchen. Go line by line, identify every part, circle anything that looks wrong.',
          tip: 'The cut list is what Scott and the CNC work from. Read it like you\'re the one making the cut.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'NFR File Naming Convention', duration: '45 min',
          objectives: ['Know the NFR file naming standard for all document types','Understand why consistent naming prevents lost files and miscommunication','Apply the convention to 10 sample files'],
          task: 'Review NFR file naming standard. Find 5 files in Drive that are named incorrectly. Rename them using the correct convention.',
          tip: 'A file Jose can\'t find in 30 seconds might as well not exist.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Door Styles — What Every NFR Client Needs to Know', duration: '45 min',
          objectives: ['Know the 5 primary door styles NFR offers: shaker, inset, raised panel, flat, beaded','Know which style is most popular in Columbus right now','Describe each style to a client without technical cabinet language'],
          task: 'Look at 5 kitchen images — one per door style. Write the client-friendly description for each. Which does NFR sell the most of and why?',
          tip: 'A client who understands their door style options makes faster decisions.',
          resourceLabel: 'Watch: Cabinet Door Styles Explained', resourceUrl: 'https://www.youtube.com/results?search_query=kitchen+cabinet+door+styles+shaker+inset+flat+explained',
        },
      },
      // Tue
      {
        mozaik: {
          topic: 'Part Labeling & Sheet Optimization', duration: '1 hour',
          objectives: ['Review the sheet layout and nesting output','Calculate waste percentage from the nesting layout','Identify the largest and smallest cut on the sheet'],
          task: 'Review a Mozaik sheet layout and nesting output. Note the waste percentage. Identify the largest and smallest cut.',
          tip: 'If waste is above 20%, flag to Jose before approving.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Project Status Tracking', duration: '45 min',
          objectives: ['Know the NFR job status stages: inquiry → proposal → agreement → active → punch list → closed','Know where each status lives in Drive','Know how to update a job\'s status and who to notify'],
          task: 'Open 3 active jobs. Verify each has the correct status in Drive. Update any that are wrong. Report to Jose.',
          tip: 'Status tracking is not bureaucracy — it\'s how Jose knows what\'s happening without asking.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Hardware — The Jewelry of a Kitchen', duration: '45 min',
          objectives: ['Know the current hardware finish trends: matte black, brushed gold, satin nickel','Know how to match hardware finish to faucets and light fixtures','Know when hardware is an upgrade vs. a standard spec'],
          task: 'Browse 5 kitchen photos. Identify the hardware in each. Write: what finish, does it match the fixtures, does it work with the cabinet finish? What would you change?',
          tip: 'Hardware is the jewelry of a kitchen. Small choice, big visual impact.',
          resourceLabel: 'Watch: Kitchen Hardware Trends 2026', resourceUrl: 'https://www.youtube.com/results?search_query=kitchen+cabinet+hardware+trends+2026+matte+black+brushed+gold',
        },
      },
      // Wed
      {
        mozaik: {
          topic: 'Material Quantity Reports', duration: '1 hour',
          objectives: ['Generate a full material quantity report','List total sheet count, door count, drawer count, and hardware','Compare the quantity report to the cut list for accuracy'],
          task: 'Generate a full material quantity report. List total sheets, door count, drawer count, and hinges. Compare to the cut list.',
          tip: 'This becomes your purchase order — it must be accurate.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'The Active Job File — What Goes Where', duration: '45 min',
          objectives: ['Know every document that belongs in an active job folder','Understand that a complete job file protects NFR in case of disputes','Know how to assemble a job file from scratch'],
          task: 'Open a recently closed job folder. Verify it contains every required document. List anything missing.',
          tip: 'The file that\'s missing one document is the one that causes a dispute 6 months later.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Countertop Materials — What NFR Clients Actually Choose', duration: '45 min',
          objectives: ['Know the top 4 countertop materials: quartz, granite, marble, butcher block','Know the maintenance, cost tier, and ideal client for each','Practice making a countertop recommendation based on a client brief'],
          task: 'For each countertop material, write a 2-sentence client pitch and identify the NFR client most likely to choose it. Jose evaluates which pitch would land.',
          tip: 'The countertop choice closes the design direction. Get this conversation right.',
          resourceLabel: 'Watch: Countertop Materials Compared', resourceUrl: 'https://www.youtube.com/results?search_query=kitchen+countertop+materials+quartz+granite+marble+comparison',
        },
      },
      // Thu
      {
        mozaik: {
          topic: 'CNC Output Files & Job Setup', duration: '1 hour',
          objectives: ['Export CNC-ready files from Mozaik','Apply the NFR file naming convention','Organize exported files in a labeled folder'],
          task: 'Export CNC-ready files. Name each: [Client]-[Date]-[PartType]. Place in a correctly labeled folder.',
          tip: 'File naming is not optional — Scott needs to know which files go with which job.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'End-of-Job File Closing', duration: '45 min',
          objectives: ['Know the job closing checklist: all docs saved, photos archived, client signed off, invoice paid','Know how to close a job folder correctly','Understand that a properly closed file is NFR\'s record of the work'],
          task: 'With Jose, close a recently completed job. Walk through every item on the closing checklist. Sign off on the file.',
          tip: 'A properly closed file is proof of work delivered. Treat it as such.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Building a Complete Kitchen Palette', duration: '45 min',
          objectives: ['Build a complete kitchen palette: cabinet finish + countertop + flooring + hardware + backsplash direction','Know how to evaluate cohesion across all 5 elements','Practice presenting a palette to Jose as if he were the client'],
          task: 'Build 2 complete palettes from scratch — one warm/traditional, one clean/contemporary. Present both to Jose. For each, name the client type and explain every choice in plain language.',
          tip: 'A complete palette presented confidently is worth more than a design degree.',
          resourceLabel: 'Watch: Kitchen Design Palette Building', resourceUrl: 'https://www.youtube.com/results?search_query=kitchen+design+color+palette+building+cohesive',
        },
      },
      // Fri
      {
        mozaik: {
          topic: 'Week 4 Review — Full Manufacturing Package', duration: '1 hour',
          objectives: ['Generate a complete production package for a real job','Hand the package off to Scott with everything labeled','Present the package to Jose at 1pm'],
          task: 'Generate the complete production package: cut list, material report, CNC files, labeled folder. Hand to Scott. Present to Jose at 1pm.',
          tip: 'This is the full circle — design to production.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Week 4 Admin Review — File & Status Management', duration: '45 min',
          objectives: ['Apply the naming convention to 5 files from memory','Trace a job from inquiry to closed file without reference','Complete a job file closing checklist independently'],
          task: 'Jose names a job from each status stage. Maria finds the file, names its current status, and states what the next step is.',
          tip: 'If Maria can\'t locate a job file in 30 seconds, the system is broken. Fix it.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Week 4 Design Review — Technique & Full Palette', duration: '45 min',
          objectives: ['Name 4 door styles and describe each in client-friendly language','Build a complete 5-element palette from a 3-sentence brief','Present a palette confidently with a reason for every choice'],
          task: 'Jose gives a client brief. Maria builds the full palette (cabinet, counter, floor, hardware, backsplash direction) and presents it as if the client were in the room.',
          tip: 'By Week 4, Maria should be able to run the design portion of a discovery meeting independently.',
          resourceLabel: 'Watch: Interior Design Presentation', resourceUrl: 'https://www.youtube.com/results?search_query=interior+design+presentation+client+mood+board+palette',
        },
      },
    ],

    // ══ PROGRAM WEEK 5 — Mozaik Wk12 Graduation / Admin Intermediate Wk1 / Design Intermediate Wk1 ══
    5: [
      // Mon
      {
        mozaik: {
          topic: 'Project Planning from Client Brief', duration: '1 hour',
          objectives: ['Read and interpret a client brief before opening Mozaik','Write out room dimensions and design constraints','Prepare 3 clarifying questions for the client'],
          task: 'Jose gives a client brief. Before opening Mozaik: write the room dimensions, constraints, and 3 questions for the client. Then set up the room in Mozaik.',
          tip: 'The best design starts before you open the software.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Reading a Project Budget', duration: '45 min',
          objectives: ['Understand what a project budget contains: materials, labor, subs, equipment, margin','Know that Maria reads budgets for status awareness, not financial management','Identify the 3 numbers Jose cares about most on any job'],
          task: 'With Jose, open a recent project budget. Identify: total budget, total spent to date, remaining margin. Write what you observe — not what it means financially.',
          tip: 'Financial awareness is not financial management. Know the difference.',
          resourceLabel: 'QuickBooks Tutorials', resourceUrl: 'https://quickbooks.intuit.com/tutorials/',
        },
        design: {
          topic: 'Developing a Design Point of View', duration: '45 min',
          objectives: ['Understand what a personal design point of view means for a coordinator, not a decorator','Know the 3 elements of Maria\'s emerging design voice: material preference, style comfort zone, client-type strengths','Write a one-paragraph design positioning statement for Maria at NFR'],
          task: 'Write: What design choices do you make consistently? What type of client do you work best with? What palette feels most like you? This is your design voice — own it.',
          tip: 'Clients trust a coordinator who has a point of view. Uncertainty is contagious.',
          resourceLabel: 'Watch: Finding Your Design Voice', resourceUrl: 'https://www.youtube.com/results?search_query=interior+designer+developing+design+voice+style',
        },
      },
      // Tue
      {
        mozaik: {
          topic: 'Layout & Cabinet Selection', duration: '1 hour',
          objectives: ['Build a full cabinet layout from the client brief','Select appropriate cabinet types for each position','Apply modifications where required'],
          task: 'Build the full cabinet layout from the brief. Select appropriate cabinet types. Apply modifications. Layout only — no finishes yet.',
          tip: 'Get the layout perfect before touching color.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Deposit Tracking', duration: '45 min',
          objectives: ['Know the NFR deposit sequence: agreement signed → deposit collected → job active','Know how to verify a deposit has posted in QuickBooks','Know what to do if a job goes active without a confirmed deposit'],
          task: 'Open 3 recent jobs. Verify each has a confirmed deposit in QuickBooks. Report any that don\'t.',
          tip: 'No deposit, no active job. This rule protects NFR on every engagement.',
          resourceLabel: 'QuickBooks Tutorials', resourceUrl: 'https://quickbooks.intuit.com/tutorials/',
        },
        design: {
          topic: 'Curating Design Inspiration for NFR Clients', duration: '45 min',
          objectives: ['Build a curated inspiration folder for each client type (transitional, contemporary, farmhouse, bold)','Know how to present inspiration without overwhelming the client','Use inspiration to accelerate the decision-making process'],
          task: 'Build one inspiration folder for each of the 3 most common NFR client types. Each folder: 5 images, one-paragraph description, starting palette. Present to Jose.',
          tip: 'Curated inspiration is not showing a client everything — it\'s showing them the 3 things that will move them forward.',
          resourceLabel: 'Watch: Interior Design Inspiration Curation', resourceUrl: 'https://www.youtube.com/results?search_query=interior+design+inspiration+client+presentation+curation',
        },
      },
      // Wed
      {
        mozaik: {
          topic: 'Finish, Modifications & Final Design', duration: '1 hour',
          objectives: ['Apply client-selected finishes to the layout','Create two distinct color option versions','Make final adjustments and review in 3D'],
          task: 'Apply finishes, create two color options, make final adjustments, and view in 3D. End with the 3D view open.',
          tip: 'Always end with 3D view open — if it doesn\'t look right there, it won\'t look right in person.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Invoice Status Awareness', duration: '45 min',
          objectives: ['Know the NFR invoicing sequence: final walk → punch list clear → invoice sent → payment collected','Know how to read an invoice status in QuickBooks: sent, viewed, paid','Know when to flag an overdue invoice to Jose'],
          task: 'Open 5 recent invoices. Identify their status. Flag any overdue to Jose with the project name and days past due.',
          tip: 'An overdue invoice that Maria catches is revenue Jose doesn\'t have to chase.',
          resourceLabel: 'QuickBooks Tutorials', resourceUrl: 'https://quickbooks.intuit.com/tutorials/',
        },
        design: {
          topic: 'Synthesis — Connecting Design to the NFR Sales Sequence', duration: '45 min',
          objectives: ['Know exactly where design input enters the NFR sales sequence','Understand that design clarity reduces client hesitation and speeds decisions','Practice the design-to-close handoff: Maria builds direction, Jose closes the deal'],
          task: 'Map the NFR sales sequence and mark every point where Maria\'s design knowledge can accelerate a decision. Present to Jose. Where is the biggest opportunity?',
          tip: 'Design that closes deals is not about being an artist — it\'s about reducing uncertainty at the right moment.',
          resourceLabel: 'Watch: Design as a Sales Tool', resourceUrl: 'https://www.youtube.com/results?search_query=interior+design+sales+tool+close+remodel+client',
        },
      },
      // Thu — IS 408 video on Mozaik block (shows Maria what Scott does with her files)
      {
        mozaik: {
          topic: '3D Renders, Presentation & Cut List', duration: '1 hour',
          objectives: ['Generate renders for both color option versions','Export floor plan and cut list','Assemble everything in a labeled package folder'],
          task: 'Generate the complete package: renders for both options, floor plan, cut list, material report, labeled folder.',
          tip: 'Package should be clean enough Jose could send it to the client without reviewing.',
          resourceLabel: 'Watch: Design to Installation — IS 408 Cabinet', resourceUrl: 'https://www.youtube.com/watch?v=2XGt5-t8tB4',
        },
        admin: {
          topic: 'Understanding Overhead and Why It Matters', duration: '45 min',
          objectives: ['Know that NFR has fixed monthly overhead costs','Understand that every job must cover overhead before profit exists','Know the question: Is this job fully sold vs. is it profitable?'],
          task: 'With Jose, review the overhead breakdown. Write: What does each job need to cover? What happens when a job is sold below cost?',
          tip: 'Understanding overhead is Maria\'s context for why pricing decisions matter — not her job to manage.',
          resourceLabel: 'QuickBooks Tutorials', resourceUrl: 'https://quickbooks.intuit.com/tutorials/',
        },
        design: {
          topic: 'Translating Design Vision to Production — Full-Circle View', duration: '45 min',
          objectives: ['Understand the full path from client design vision to Mozaik file to CNC cut to installed cabinet','Know how Maria\'s design decisions directly affect what Scott cuts and what Jorge installs','Close the loop: design-to-production is one workflow, not two'],
          task: 'Watch the "Design to Installation" video (same link as Mozaik block). Write: What design decisions by Maria directly affected what Scott had to cut? Name 3.',
          tip: 'You are not just the designer — you are the first link in a production chain. Design like it.',
          resourceLabel: 'Watch: Design to Installation — IS 408 Cabinet', resourceUrl: 'https://www.youtube.com/watch?v=2XGt5-t8tB4',
        },
      },
      // Fri
      {
        mozaik: {
          topic: 'Week 5 Final — Complete Project Presentation', duration: '1 hour',
          objectives: ['Present the full project to Jose at 1pm','Walk through every design decision','Write a self-assessment: 3 things learned, 1 to improve'],
          task: 'Present the full project to Jose at 1pm. Walk through every decision. After: write 3 things learned this week and 1 to improve.',
          tip: 'Week 5 Mozaik graduation is not the end — it\'s the baseline.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Week 5 Admin Review — Financial Awareness', duration: '45 min',
          objectives: ['Read a project budget and identify key numbers in under 3 minutes','Verify deposit status for any job Jose names','Flag an overdue invoice independently'],
          task: 'Jose names 2 jobs. Maria reads their budget status, confirms deposit, and checks invoice standing. All without asking Jose for help.',
          tip: 'Financial awareness is the difference between a coordinator and an operations partner.',
          resourceLabel: 'QuickBooks Tutorials', resourceUrl: 'https://quickbooks.intuit.com/tutorials/',
        },
        design: {
          topic: 'Week 5 Design Review — Synthesis & Voice', duration: '45 min',
          objectives: ['Present your design positioning statement without notes','Build a client-type inspiration folder in 15 minutes','Trace a design decision all the way to its production impact'],
          task: 'Jose presents 3 client scenarios. Maria responds with: her design point of view for this client, the starting palette, and one production implication of her choices. Full circle.',
          tip: 'Synthesis week shows Jose that Maria\'s training is working. Show him.',
          resourceLabel: 'Watch: Interior Design Full Process', resourceUrl: 'https://www.youtube.com/results?search_query=interior+design+full+process+client+to+install',
        },
      },
    ],

    // ══ PROGRAM WEEK 6 — Production Mozaik / Admin Intermediate Wk2 / Design Intermediate Wk2 ← CHECKPOINT ══
    6: [
      // Mon
      {
        mozaik: {
          topic: 'Production Mozaik — Sending Files to Scott', duration: '1 hour',
          objectives: ['Know the correct file export format and naming convention for CNC files','Verify the cut list before sending — every part labeled and sized','Understand what Scott needs from the Mozaik file to run an error-free cut'],
          task: 'Export CNC files from a completed Mozaik project. Review with Scott: does the file have everything he needs? Fix anything he flags.',
          tip: 'The handoff from design to production is where errors live. Catch them before Scott does.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'NFR Vendor Relationships — Who We Use and Why', duration: '45 min',
          objectives: ['Know the primary vendors for each division (paint, flooring, cabinets, materials)','Understand that vendor relationships are owned by Jose and maintained by consistency','Know how to look up a vendor contact and purchase history'],
          task: 'Build a one-page vendor contact sheet for the top 5 NFR vendors: name, company, phone, what they supply, payment terms.',
          tip: 'A vendor who knows NFR is organized gets prioritized when supply is short.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Current Kitchen Styles — Transitional, Modern Farmhouse, Contemporary', duration: '45 min',
          objectives: ['Know the defining features of each style: door style, finish, hardware, countertop, lighting','Know which style is most popular in Columbus right now','Identify a client\'s style from their inspiration images'],
          task: 'Find one example of each style on Houzz. Write 3 defining features for each. Which does NFR build the most of? Which is growing fastest?',
          tip: 'Style vocabulary makes Maria credible in client conversations.',
          resourceLabel: 'NKBA — Design Trends', resourceUrl: 'https://www.nkba.org',
        },
      },
      // Tue
      {
        mozaik: {
          topic: 'Production Mozaik — Cut List Verification', duration: '1 hour',
          objectives: ['Review a cut list line by line with Scott before a job runs','Identify any discrepancy between the Mozaik file and physical material on hand','Flag any issue to Jose before cutting begins'],
          task: 'Walk through a real cut list with Scott. Identify every part by name and purpose. Circle anything that doesn\'t match what is staged.',
          tip: 'If Maria cannot read the cut list, she cannot catch the error. Read it like you\'re the one making the cut.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Material Ordering Basics', duration: '45 min',
          objectives: ['Know that material orders follow from a signed agreement and confirmed deposit','Understand the ordering sequence: agreement → PO → Maria confirms with vendor → delivery scheduled','Know the lead times for each material category'],
          task: 'Trace a recent material order from signed agreement to delivery. Document every step. Who touched it and when?',
          tip: 'Materials ordered without a signed agreement are materials NFR may not get paid for.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Current Bath Trends — Floating Vanities, Walk-In Showers, Spa Neutrals', duration: '45 min',
          objectives: ['Know the top 3 current bath remodel trends','Know the difference between primary bath, guest bath, and half bath renovation scope','Know which bath projects NFR handles vs. refers out'],
          task: 'Browse NKBA bath trend pages. Write the 3 biggest trends for 2025–2026 bathrooms. Which one is most requested in NFR\'s Columbus market?',
          tip: 'Bath projects are growing at NFR. Knowing trends helps Maria pre-sell the category.',
          resourceLabel: 'NKBA — Bath Trends', resourceUrl: 'https://www.nkba.org',
        },
      },
      // Wed
      {
        mozaik: {
          topic: 'Production Mozaik — Understanding CNC Output', duration: '1 hour',
          objectives: ['Watch Scott run a CNC cut from a Maria-generated file','Understand how the Mozaik nesting output translates to physical sheet placement','Know what a clean cut looks like so Maria can recognize problems in finished parts'],
          task: 'Observe Scott\'s CNC run from one complete job. Write: what went smoothly? What required adjustment? What could Maria do differently in the file to prevent that adjustment?',
          tip: 'You cannot improve what you cannot see. Watch the cut.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Delivery Scheduling and Job Readiness', duration: '45 min',
          objectives: ['Know how to coordinate a delivery date with a job start date','Understand what happens when materials arrive before the site is ready','Know who to loop in when a delivery needs to be rescheduled'],
          task: 'Pick an active job with upcoming materials. Verify the site will be ready on delivery day. If not, flag it and propose a resolution.',
          tip: 'Materials delivered to an unready site cost money twice — storage and re-handling.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'NKBA Resources — Using Industry Tools', duration: '45 min',
          objectives: ['Know what NKBA is and why it is a credible design reference','Know which NKBA resources Maria can access and use with clients','Find one trend report or design guide and summarize it'],
          task: 'Visit nkba.org. Find one resource Maria could use in a client conversation. Write a 3-sentence summary and explain how it would help close a kitchen or bath project.',
          tip: 'Using industry sources makes Maria sound like a professional, not a salesperson.',
          resourceLabel: 'NKBA Resources', resourceUrl: 'https://www.nkba.org',
        },
      },
      // Thu
      {
        mozaik: {
          topic: 'Production Mozaik — Nesting Efficiency', duration: '1 hour',
          objectives: ['Understand how Mozaik\'s nesting algorithm arranges parts on sheets','Know what a high-waste nesting layout looks like and why it costs money','Know the flag threshold: if waste is above 20%, Maria flags before approving'],
          task: 'Open a recent nesting layout. Calculate the waste percentage. Is it above or below 20%? What would you change in the design to reduce waste?',
          tip: 'Waste percentage is material cost. Every point above 20% comes out of the job margin.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Coordinating with the Field Manager', duration: '45 min',
          objectives: ['Know the communication protocol between the office and field','Understand that the Field Manager needs material status and timeline info before site visits','Know when a coordination issue becomes an escalation to Jose'],
          task: 'Write the coordination protocol: what does Maria send to Jorge and when? What format? What does Jorge send back? Keep it to one page.',
          tip: 'Maria is the bridge between office and field. A clear protocol prevents 10 phone calls a week.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Style Vocabulary — How to Talk About Design', duration: '45 min',
          objectives: ['Know the 10 most common style terms used in kitchen and bath design','Use style vocabulary in a client conversation naturally','Describe a style without using jargon a client will not understand'],
          task: 'Write a 10-term design vocabulary list with a plain-English definition for each. Then: how would you use 3 of these terms naturally in a client meeting?',
          tip: 'Vocabulary is confidence. Use it casually, not like you\'re reading from a textbook.',
          resourceLabel: 'Architectural Digest — Design Vocabulary', resourceUrl: 'https://www.architecturaldigest.com',
        },
      },
      // Fri — REEVALUATION CHECKPOINT
      {
        mozaik: {
          topic: 'Production Mozaik Week 6 Review — Files, Cuts & Waste', duration: '1 hour',
          objectives: ['Export a CNC file and walk Scott through it before the cut','Verify a cut list end-to-end without assistance','Calculate nesting waste and flag any layout above 20%'],
          task: 'Jose assigns a project. Maria exports the files, briefs Scott on the cut list, observes the first cut, and reports the nesting waste percentage. Full production loop.',
          tip: 'Week 6 is the bridge between design and production. Own both sides of it.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Week 6 Admin Review + Reevaluation Checkpoint', duration: '45 min',
          objectives: ['Coordinate a material order from signed agreement to delivery schedule independently','Brief the Field Manager on job status without Jose\'s input','Identify one coordination gap in the current week\'s jobs and propose a fix'],
          task: 'Jose and Maria review: What systems are working? Where is coordination still breaking down? This checkpoint shapes the direction of Maria\'s next phase.',
          tip: 'Reevaluation checkpoint: Jose decides next direction based on 6 weeks of demonstrated performance.',
          resourceLabel: 'Google Workspace Tutorials', resourceUrl: 'https://workspace.google.com/intl/en/learn-more/',
        },
        design: {
          topic: 'Week 6 Design Checkpoint — Kitchen & Bath Trends Review', duration: '45 min',
          objectives: ['Describe 3 kitchen styles and 3 bath trends in client-friendly language','Identify a client\'s style from 3 inspiration images','Use design vocabulary correctly in a role-play client conversation'],
          task: 'Jose and Maria conduct the formal reevaluation: What has Maria mastered? What still needs work? Where does the training go from here? Jose decides next direction.',
          tip: 'This checkpoint is not a test — it is a calibration. Be honest about what you can and cannot do yet.',
          resourceLabel: 'Houzz — Kitchen Design Trends', resourceUrl: 'https://www.houzz.com/magazine/kitchen-ideas',
        },
      },
    ],

    // ══ PROGRAM WEEK 7 — Advanced Production Mozaik / Admin Intermediate Wk3 / Design Intermediate Wk3 ══
    7: [
      // Mon
      {
        mozaik: {
          topic: 'Advanced Mozaik — Multi-Room Projects', duration: '1 hour',
          objectives: ['Build a Mozaik project that includes both kitchen and bathroom cabinets','Manage file organization for a multi-room project without mixing parts','Generate separate cut lists and CNC files per room'],
          task: 'Build a multi-room Mozaik project (kitchen + bath). Generate separate cut lists. Organize files by room. Hand off to Scott with a clear briefing.',
          tip: 'Multi-room projects are where file discipline becomes critical. One mixed folder costs everyone time.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'What Makes a Good SOP', duration: '45 min',
          objectives: ['Understand that an SOP is only useful if anyone can follow it without asking for help','Know the NFR SOP format: trigger, steps, owner, output','Know the difference between an SOP and a to-do list'],
          task: 'Read two existing NFR SOPs. Rate each: Could you hand this to someone on their first day and they\'d know exactly what to do? Write one improvement for each.',
          tip: 'The test of a good SOP: would a new hire know what to do without calling anyone?',
          resourceLabel: 'Staff Portal', resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
        },
        design: {
          topic: 'How Clients Use Houzz & Pinterest', duration: '45 min',
          objectives: ['Understand that most clients arrive with a Houzz or Pinterest board already built','Know how to read a client\'s board to identify their true style vs. their stated style','Practice extracting a design direction from a 10-image board in under 5 minutes'],
          task: 'Find a real Houzz ideabook or Pinterest board. Identify: the dominant style, 2 recurring materials, the color story. Write it in 3 sentences.',
          tip: 'Most clients cannot name what they want — they can only show you. Learn to read the board.',
          resourceLabel: 'Houzz — Ideabooks & Inspiration', resourceUrl: 'https://www.houzz.com',
        },
      },
      // Tue
      {
        mozaik: {
          topic: 'Advanced Mozaik — Revision Management', duration: '1 hour',
          objectives: ['Make a client-requested change to a Mozaik file after the cut list has been generated','Understand the downstream impact of a revision on the cut list and CNC files','Know the revision protocol: change → regenerate → reverify → re-brief Scott'],
          task: 'Jose gives a revision request on an existing project. Maria makes the change, regenerates the cut list, verifies what changed, and re-briefs Scott on the delta.',
          tip: 'Revisions are normal. A revision without a clear briefing to Scott is a production error waiting to happen.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Writing an SOP for the Inquiry Process', duration: '45 min',
          objectives: ['Document the NFR inquiry response process as an SOP','Include every step from first email received to appointment scheduled','Verify against real past inquiries'],
          task: 'Write the inquiry SOP. Walk Jose through it step by step. Does it match what actually happens? Update based on the debrief.',
          tip: 'The inquiry process is the first impression of NFR. An SOP ensures it\'s consistent every time.',
          resourceLabel: 'Staff Portal', resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
        },
        design: {
          topic: 'Building a Mood Board for a Client', duration: '45 min',
          objectives: ['Build a basic mood board using Canva or Google Slides (5 images, palette, direction label)','Know the 5 elements of a complete mood board: style, palette, 2 materials, hardware direction, feeling','Know how to present a mood board in 2 minutes or less'],
          task: 'Build a mood board for a fictitious NFR client. 5 images. A palette. A one-line direction statement. Present to Jose in under 2 minutes.',
          tip: 'A mood board is a communication tool, not an art project. If Jose cannot read it in 30 seconds, it needs work.',
          resourceLabel: 'Watch: Mood Board Design Tutorial', resourceUrl: 'https://www.youtube.com/results?search_query=interior+design+mood+board+tutorial+client+presentation',
        },
      },
      // Wed
      {
        mozaik: {
          topic: 'Advanced Mozaik — Speed and Accuracy Practice', duration: '1 hour',
          objectives: ['Build a standard 10×12 kitchen in Mozaik in under 45 minutes','Verify the 3D view, cut list, and nesting layout before handing off','Identify the 3 most common errors Maria makes and how to prevent them'],
          task: 'Build a standard kitchen from a brief in 45 minutes. Jose times it. Review the 3D and cut list together. Where did Maria slow down? What errors did she catch vs. miss?',
          tip: 'Speed in Mozaik only helps if accuracy is maintained. Build the accuracy first, the speed follows.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Writing an SOP for the Agreement Process', duration: '45 min',
          objectives: ['Document the agreement workflow as an SOP from client approves proposal to signed agreement filed','Every handoff point is documented','Verify against a real recent job'],
          task: 'Write the agreement SOP. Compare it against the last 3 signed agreements. Did the process match? Document any variance.',
          tip: 'An agreement SOP that doesn\'t match real practice is a fiction. Fix the gap.',
          resourceLabel: 'Staff Portal', resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
        },
        design: {
          topic: 'Design as a Closing Tool — Reducing Client Hesitation', duration: '45 min',
          objectives: ['Understand how design clarity reduces client hesitation and speeds decision-making','Know the principle: a client who can see it will sign it','Know where design input fits in the NFR sales sequence'],
          task: 'Write: At what point in a client conversation does a mood board or palette shift the energy? When does design clarity create buying momentum? Share with Jose.',
          tip: 'Design that closes deals is not about being an artist — it is about reducing uncertainty.',
          resourceLabel: 'Watch: Design to Close — Sales Strategy', resourceUrl: 'https://www.youtube.com/results?search_query=interior+design+as+sales+tool+closing+remodel+client',
        },
      },
      // Thu
      {
        mozaik: {
          topic: 'Advanced Mozaik — Complex Modifications', duration: '1 hour',
          objectives: ['Apply 3 or more modifications to a single kitchen layout','Verify that all modifications interact correctly in 3D','Generate a production-ready package: renders, cut list, CNC files'],
          task: 'Build a kitchen with at least 3 complex modifications. Generate the full package. Scott reviews the CNC files. Jose reviews the renders. Both sign off.',
          tip: 'Complex modifications are where Maria earns her role. If the files are right, everyone downstream succeeds.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Writing an SOP for Job File Closing', duration: '45 min',
          objectives: ['Document the job closing process as an SOP','Every checklist item is explicit, not implied','Verify the SOP against 2 recently closed jobs'],
          task: 'Write the job closing SOP. Check it against 2 closed jobs. Did everything get done? Write any items that were missed and add them to the SOP.',
          tip: 'A closing SOP is how NFR proves the job is done. Every line item matters.',
          resourceLabel: 'Staff Portal', resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
        },
        design: {
          topic: 'When to Involve Jose — The Design-to-Sales Handoff', duration: '45 min',
          objectives: ['Know the clear triggers for looping in Jose: pricing decisions, scope expansions, client hesitation about budget','Know how to hand off a design-engaged client to Jose in a way that maintains momentum','Practice the hand-off conversation: "Let me bring Jose in to walk you through the options."'],
          task: 'Write the exact hand-off script Maria uses when a client is ready for Jose. Role-play it with Jose. Debrief: does it feel natural? Does it create momentum?',
          tip: 'A smooth hand-off from Maria to Jose is the moment the sale accelerates.',
          resourceLabel: 'Watch: Sales Handoff Technique', resourceUrl: 'https://www.youtube.com/results?search_query=sales+handoff+technique+client+momentum',
        },
      },
      // Fri — Graduation
      {
        mozaik: {
          topic: 'Week 7 Mozaik Graduation — Full Production Package', duration: '1 hour',
          objectives: ['Deliver a complete production package from client brief to Scott-ready files','Walk Jose through the project as if presenting to a client','Write a self-assessment: 3 things learned in 7 weeks, 1 to continue improving'],
          task: 'Jose gives a client brief. Maria builds the full Mozaik project, generates renders and CNC files, briefs Scott, and presents the 3D to Jose. Graduation.',
          tip: 'Seven weeks of Mozaik. You are the design-to-production link at NFR. Own it.',
          resourceLabel: MOZAIK_LABEL, resourceUrl: MOZAIK_URL,
        },
        admin: {
          topic: 'Week 7 Admin Graduation — SOP Review', duration: '45 min',
          objectives: ['Present all 3 SOPs to Jose','Defend every step when Jose challenges it','Commit to maintaining these SOPs as the processes evolve'],
          task: 'Maria presents 3 SOPs. Jose challenges each: "What if this step is skipped? What if the vendor doesn\'t respond? What if the client disputes the close?" Maria answers from the SOP.',
          tip: 'An SOP you can defend is an SOP you actually understand.',
          resourceLabel: 'Staff Portal', resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
        },
        design: {
          topic: 'Design Track Graduation — Maria as Office & Design Coordinator', duration: '45 min',
          objectives: ['Present one thing Maria can now do for a client that she could not do 7 weeks ago','Acknowledge the growth from Week 1 to Week 7','Commit to the 90-day growth plan as the next chapter'],
          task: 'Maria presents to Jose: one specific client interaction she handled better because of this training. Jose responds: one thing he has seen change in Maria. Both write it down.',
          tip: 'Seven weeks. Three tracks. Every day. You are the Office & Design Coordinator NFR needs.',
          resourceLabel: 'Watch: Design Career Growth', resourceUrl: 'https://www.youtube.com/results?search_query=interior+design+career+growth+coordinator+client+service',
        },
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // CNC PLAN — Scott (Weeks 1–12)
  // ═══════════════════════════════════════════════════════════════════════════

  const CNC_URL        = 'https://www.shopsabre.com/sabrenation/sabrenation-university/';
  const CNC_LABEL      = 'SabreNation University';
  const CNC_MOZAIK_URL   = 'https://sites.google.com/view/mozaikonlinehelp/training-videos';
  const CNC_MOZAIK_LABEL = 'Mozaik Training Library';
  const CNC_W4_URL     = 'https://www.youtube.com/watch?v=a4imaKN49fQ';
  const CNC_W4_LABEL   = 'CNC Cutting Base Cabinet — 5 Min';
  const CNC_W6_URL     = 'https://www.youtube.com/watch?v=2XGt5-t8tB4';
  const CNC_W6_LABEL   = 'Design to Installation: IS 408 Cabinet';
  const CNC_W7_URL     = 'https://www.youtube.com/results?search_query=Mozaik+realtime+nesting+CNC+cabinet+ShopSabre';
  const CNC_W7_LABEL   = 'Mozaik Nesting — Video Search';
  const CNC_W9_URL     = 'https://www.youtube.com/results?search_query=CNC+router+bit+types+compression+downcut+upcut+collet';
  const CNC_W9_LABEL   = 'CNC Bit Management — Video Search';
  const CNC_W11_URL    = 'https://www.youtube.com/results?search_query=CNC+cabinet+part+inspection+quality+control+tolerance';
  const CNC_W11_LABEL  = 'CNC QC — Video Search';

  const CNC_PLAN = {
    1: [
      {
        topic: 'Machine Overview — Parts, Axes & Work Envelope',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify all axes on the physical machine',
          'Understand the machine\'s work envelope dimensions',
          'Learn the control panel layout and key functions',
        ],
        task: 'Watch the introduction video. Walk to the machine and identify each axis by name. Label them on a hand-drawn diagram.',
        tip: 'You must know where each axis moves before you touch a control.',
      },
      {
        topic: 'Safety — Emergency Stop, Pinch Points & PPE',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Locate every safety feature on the machine',
          'Know the emergency stop procedure by memory',
          'Identify all pinch points on the machine perimeter',
        ],
        task: 'Watch the safety video. Walk the machine perimeter and identify every safety feature. Write them all down.',
        tip: 'Know where the e-stop is before you ever start the machine.',
      },
      {
        topic: 'Practice — Safety Walk',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Walk the machine safety route from memory',
          'Recite the emergency stop procedure without prompting',
          'Demonstrate all safety knowledge to Jose',
        ],
        task: 'No video today — full practice. Walk the machine safety route 3 times from memory. Recite the emergency procedure to Jose.',
        tip: 'If you can\'t do it from memory today, you\'re not ready for Thursday.',
      },
      {
        topic: 'Power On/Off Sequence & Homing',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Execute the startup sequence in the correct order',
          'Home all axes correctly',
          'Understand why homing matters for every job',
        ],
        task: 'Watch the startup video. With Jose present, power on and home the machine. Do it 3 times.',
        tip: 'Skipping homing causes crashes. Always home first.',
      },
      {
        topic: 'Week 1 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Recall the 3 most important safety rules without reference',
          'Explain what happens if homing is skipped',
          'Draw the machine axes from memory',
        ],
        task: 'Write in the training log: (1) What are the 3 most important safety rules? (2) What happens if you skip homing? (3) Draw the machine axes from memory.',
        tip: 'You cannot move forward without knowing this section cold.',
      },
    ],

    2: [
      {
        topic: 'Software Overview — Toolbars, Workspace & File Types',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify every toolbar and menu in the CNC software',
          'Understand the file type the machine uses for jobs',
          'Navigate the workspace without assistance',
        ],
        task: 'Watch the software interface video. Open the software and identify every toolbar. List what each toolbar does.',
        tip: 'Learn the software before you touch the machine.',
      },
      {
        topic: 'Bits — What\'s in the Machine (Observation Only)',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify a compression bit by sight — know what it looks like',
          'Understand why we use a compression bit for melamine (clean top AND bottom face)',
          'Know where bits are stored and how they are labeled in the shop',
        ],
        task: 'No cut today — observation only. Walk to the machine with Jose. He points out the bit that\'s loaded. Write: what type is it, what does it look like, what material is it for. Find where all bits are stored and write the inventory.',
        tip: 'You will use this bit every day. Know it before you ever touch a cut.',
      },
      {
        topic: 'Loading and Opening a Job File',
        resourceLabel: CNC_MOZAIK_LABEL,
        resourceUrl: CNC_MOZAIK_URL,
        objectives: [
          'Locate a job file on the shop computer',
          'Load the file into the CNC software correctly',
          'Verify the file loaded without errors',
        ],
        task: 'Watch the Mozaik training video. Load 3 different sample files provided by Jose.',
        tip: 'Always double-check the file name matches the job before loading.',
      },
      {
        topic: 'Practice — File Loading & Toolpath Preview',
        resourceLabel: CNC_MOZAIK_LABEL,
        resourceUrl: CNC_MOZAIK_URL,
        objectives: [
          'Load 5 different files independently',
          'Run the toolpath simulation for each loaded file',
          'Spot any preview errors before any cutting begins',
        ],
        task: 'Open 5 different files. For each, state what job it is and what it will cut, then preview the toolpath and describe each cut pass out loud.',
        tip: 'If the preview looks wrong, it IS wrong. Stop and call Jose.',
      },
      {
        topic: 'Week 2 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'State the file format the machine uses',
          'Describe a compression bit and why we use it for melamine',
          'Know when to stop and call Jose',
        ],
        task: 'Write: What file format does the machine use? What is a compression bit and why do we use it? What would make you stop and call Jose?',
        tip: 'Software + bit awareness before any cutting. That sequence matters.',
      },
    ],

    3: [
      {
        topic: 'Spoilboard — Purpose & Maintenance',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand the spoilboard\'s purpose in the cutting process',
          'Identify when the spoilboard needs replacement',
          'Know the maintenance procedure',
        ],
        task: 'Watch the spoilboard video. Inspect the actual spoilboard and write its current condition in the training log.',
        tip: 'A damaged spoilboard causes cut-through problems.',
      },
      {
        topic: 'Hold-Down Methods — Clamps, Vacuum & Screws',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up each hold-down type correctly',
          'Know which method to use for each material type',
          'Secure a panel correctly before cutting',
        ],
        task: 'Watch the hold-down video. Set up a scrap panel using the method Jose specifies.',
        tip: 'A panel that shifts mid-cut ruins the part and can break a bit.',
      },
      {
        topic: 'Practice — Hold-Down',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up panels using three different hold-down methods',
          'Have Jose inspect each setup before moving on',
          'Know the correct method for every material type we use',
        ],
        task: 'Set up 3 different scrap panels using 3 different hold-down methods. Jose inspects each.',
        tip: 'Consistent hold-down setup is what separates good cuts from bad ones.',
      },
      {
        topic: 'Setting Material Zero — X, Y, Z',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set X and Y zero to the material corner correctly',
          'Set Z zero to the material surface',
          'Understand the consequence of incorrect zero',
        ],
        task: 'Watch the zero-setting video. Practice setting Z-zero on a scrap panel with Jose present.',
        tip: 'Wrong Z-zero = cutting into the spoilboard or not cutting through.',
      },
      {
        topic: 'Week 3 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain why Z-zero matters',
          'State which hold-down method is used for sheet goods',
          'Walk Jose through the full material setup sequence from memory',
        ],
        task: 'Write: Why does Z-zero matter? What hold-down method do we use for sheet goods? Walk Jose through the full material setup sequence from memory.',
        tip: 'Material setup is the foundation of every cut. Own it.',
      },
    ],

    4: [
      {
        topic: 'Cutting a Straight Line — Feed Rate & Cut Direction',
        resourceLabel: CNC_W4_LABEL,
        resourceUrl: CNC_W4_URL,
        objectives: [
          'Set up a straight-line cut correctly',
          'Understand climb vs. conventional cutting direction',
          'Verify the cut setup before running',
        ],
        task: 'Watch the base cabinet cutting video. Set up a straight-line cut on scrap. Jose approves before running.',
        tip: 'Climb cutting can grab the material — use conventional on first passes.',
      },
      {
        topic: 'Cutting a Rectangle — Pocket vs. Profile & Tabs',
        resourceLabel: CNC_W4_LABEL,
        resourceUrl: CNC_W4_URL,
        objectives: [
          'Set up a profile cut with tabs correctly',
          'Understand the difference between pocket and profile cuts',
          'Identify tab locations in the toolpath preview',
        ],
        task: 'Watch the rectangle cuts video. Set up a rectangle cut with tabs on scrap.',
        tip: 'Tabs prevent parts from flying when the cut completes. Never cut without tabs on loose parts.',
      },
      {
        topic: 'Practice — First Live Cuts',
        resourceLabel: CNC_W4_LABEL,
        resourceUrl: CNC_W4_URL,
        objectives: [
          'Run 3 live rectangle cuts on scrap material',
          'Measure each part after cutting',
          'Compare measured dimensions to programmed dimensions',
        ],
        task: 'Cut 3 rectangles from scrap material. Jose supervises. Measure each part after cutting — compare to programmed dimensions.',
        tip: 'First cuts are about process. Slow and correct beats fast and wrong.',
      },
      {
        topic: 'Feed Rates & Speeds',
        resourceLabel: CNC_W4_LABEL,
        resourceUrl: CNC_W4_URL,
        objectives: [
          'Understand what feed rate and spindle speed mean',
          'Know NFR standard settings for sheet goods',
          'Know when to adjust and when to stop',
        ],
        task: 'Watch the feed and speed video. Write down the standard settings Jose uses for plywood and MDF.',
        tip: 'If the bit burns or chatters, something is wrong — stop and ask.',
      },
      {
        topic: 'Week 4 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain what a tab is and why it exists',
          'Compare your cut dimensions to programmed dimensions',
          'Describe what happened on your first cut',
        ],
        task: 'Write: What is a tab and why does it exist? What were your cut dimensions vs. programmed dimensions? What happened on your first cut?',
        tip: 'Your first cuts tell you a lot about your setup habits.',
      },
    ],

    5: [
      {
        topic: 'What Mozaik Outputs — File Types & Naming',
        resourceLabel: CNC_MOZAIK_LABEL,
        resourceUrl: CNC_MOZAIK_URL,
        objectives: [
          'Understand what Mozaik generates for the CNC',
          'Know the NFR file naming convention',
          'Understand the difference between box part and door files',
        ],
        task: 'Sit with Maria for 30 minutes. Have her show you how she exports a cut file from Mozaik. Write down what you observed.',
        tip: 'Maria is your upstream — understand her output before cutting it.',
      },
      {
        topic: 'Loading a Mozaik File',
        resourceLabel: CNC_MOZAIK_LABEL,
        resourceUrl: CNC_MOZAIK_URL,
        objectives: [
          'Load a real Mozaik export into the ShopSabre software',
          'Verify the file loaded correctly with no errors',
          'Preview the full toolpath',
        ],
        task: 'Load a real Mozaik export. Preview the full toolpath. List every part you see in the preview.',
        tip: 'Every part in the preview should match the cut list Maria generated.',
      },
      {
        topic: 'Bit Change — Hands-On (Full Procedure with Jose)',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Change a bit safely using the correct collet procedure',
          'Torque the collet to the correct specification',
          'Perform a runout check before cutting',
        ],
        task: 'You\'ve now seen cuts and know WHY bit condition matters. Today: watch Jose change a bit step by step. Then do it yourself under his supervision. Two full changes minimum.',
        tip: 'Under-torqued bits spin loose mid-cut. Over-torqued collets crack. Torque spec is not optional.',
      },
      {
        topic: 'Cross-Checking Cut List Against Machine File',
        resourceLabel: CNC_MOZAIK_LABEL,
        resourceUrl: CNC_MOZAIK_URL,
        objectives: [
          'Compare the Mozaik cut list to the loaded machine file',
          'Identify any discrepancies between them',
          'Know what to do if they don\'t match',
        ],
        task: 'Take a real Mozaik cut list and a loaded machine file. Cross-check every part. Flag anything that doesn\'t match to Jose.',
        tip: 'If the file and cut list disagree, stop. Do not cut.',
      },
      {
        topic: 'Week 5 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain the difference between box part, door, and drawer front files',
          'State the procedure when file and cut list don\'t match',
          'Describe the correct bit change procedure from memory',
        ],
        task: 'Write: What is the difference between a box part, a door, and a drawer front in a Mozaik file? What do you do if the file and cut list don\'t match? Write the bit change procedure from memory.',
        tip: 'Understanding the upstream + knowing your tooling. Both are your responsibility.',
      },
    ],

    6: [
      {
        topic: 'Pre-Cut Checklist',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Build a personal pre-cut checklist for every job',
          'Get it approved by Jose as the NFR standard',
          'Commit to running it before every single cut',
        ],
        task: 'Write your own pre-cut checklist. Bring it to Jose for approval. This becomes your permanent standard.',
        tip: 'If you skip the checklist once, you\'ll skip it again. Don\'t start that habit.',
      },
      {
        topic: 'First Live Mozaik Cut — Simple Parts',
        resourceLabel: CNC_W6_LABEL,
        resourceUrl: CNC_W6_URL,
        objectives: [
          'Run a complete Mozaik job file from load to finished parts',
          'Follow the pre-cut checklist on every step',
          'Measure all parts after cutting and record results',
        ],
        task: 'Watch the IS 408 full workflow video before cutting. Run the cut with Jose watching the full session. Measure every part. Save results in the training log.',
        tip: 'First cut is about process, not speed. Slow and correct.',
      },
      {
        topic: 'Practice — Second Cut Independently',
        resourceLabel: CNC_W6_LABEL,
        resourceUrl: CNC_W6_URL,
        objectives: [
          'Run a complete Mozaik cut independently',
          'Measure all parts and compare to programmed dimensions',
          'Flag any variance outside tolerance to Jose',
        ],
        task: 'Run a second Mozaik cut on your own. Jose is nearby but not watching every step. Measure all parts. Flag any variance.',
        tip: 'Independence is earned by doing it correctly, not quickly.',
      },
      {
        topic: 'Post-Cut Part Inspection',
        resourceLabel: CNC_W6_LABEL,
        resourceUrl: CNC_W6_URL,
        objectives: [
          'Measure every cut part against the cut list',
          'Identify acceptable vs. unacceptable variance',
          'Know when to recut vs. when to flag to Jose',
        ],
        task: 'Inspect all parts from the week\'s cuts. Record measurements in the log. Flag anything outside tolerance to Jose.',
        tip: 'Measure twice, flag once — don\'t guess.',
      },
      {
        topic: 'Week 6 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Describe what was hardest about the first live cut',
          'Identify what you would do differently',
          'Write the final pre-cut checklist from memory',
        ],
        task: 'Write: What was hardest about your first cut? What would you do differently? Write your final pre-cut checklist from memory.',
        tip: 'The gap between your first cut and your tenth is where skill lives.',
      },
    ],

    7: [
      {
        topic: 'Nesting — Part Arrangement & Waste Minimization',
        resourceLabel: CNC_W7_LABEL,
        resourceUrl: CNC_W7_URL,
        objectives: [
          'Understand how nesting arranges parts on a panel',
          'Calculate waste percentage from a nesting layout',
          'Identify when waste is too high to approve',
        ],
        task: 'Watch the Mozaik nesting video. Review a Mozaik sheet layout. Calculate the waste percentage.',
        tip: 'Above 20% waste, flag to Jose before approving the cut.',
      },
      {
        topic: 'Cutting a Full 4×8 Panel',
        resourceLabel: CNC_W7_LABEL,
        resourceUrl: CNC_W7_URL,
        objectives: [
          'Load and set up a full panel with multiple parts',
          'Manage the cut sequence correctly',
          'Handle tabs correctly on a multi-part panel',
        ],
        task: 'Assist Jose or observe a full panel cut. Write every step he takes in sequence.',
        tip: 'Full panels are heavy — get help loading and unloading.',
      },
      {
        topic: 'Practice — Full Panel Independently',
        resourceLabel: CNC_W7_LABEL,
        resourceUrl: CNC_W7_URL,
        objectives: [
          'Load, cut, and unload a full panel independently',
          'Stack parts by part type after unloading',
          'Pass Jose\'s inspection',
        ],
        task: 'Load, cut, and unload a full panel on your own. Stack parts by part type. Jose inspects.',
        tip: 'Organized parts after unloading saves time in assembly.',
      },
      {
        topic: 'Panel Handling — Loading, Unloading & Stacking',
        resourceLabel: CNC_W7_LABEL,
        resourceUrl: CNC_W7_URL,
        objectives: [
          'Load a full panel safely without bowing',
          'Unload cut parts without breaking tabs incorrectly',
          'Stack finished parts by part type and job',
        ],
        task: 'Practice 3 full panel load/unload cycles with scrap material.',
        tip: 'Never stack cut parts randomly — a mixed stack causes job errors downstream.',
      },
      {
        topic: 'Week 7 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain how to prevent a panel from shifting mid-cut',
          'Describe the correct stacking method for finished parts',
          'Demonstrate a full panel cut sequence from memory',
        ],
        task: 'Write: How do you prevent a panel from shifting? What is the correct stacking method for finished parts?',
        tip: 'Handling is half the job. Treat it seriously.',
      },
    ],

    8: [
      {
        topic: 'Door Dimensions — How Mozaik Sets Them',
        resourceLabel: CNC_MOZAIK_LABEL,
        resourceUrl: CNC_MOZAIK_URL,
        objectives: [
          'Understand how Mozaik calculates door sizing from opening dimensions',
          'Know the standard overlay and gap settings',
          'Read door dimensions correctly from the cut list',
        ],
        task: 'Review door dimensions in a real Mozaik file with Maria. Write down how door width is calculated from cabinet opening.',
        tip: 'Door sizing errors are the most common defect. Know the formula.',
      },
      {
        topic: 'Cutting Door Panels — Tolerances & Grain Direction',
        resourceLabel: CNC_MOZAIK_LABEL,
        resourceUrl: CNC_MOZAIK_URL,
        objectives: [
          'Set up a door cut with correct grain direction',
          'Run the cut with proper tolerances',
          'Inspect all door panels after cutting',
        ],
        task: 'Watch the door cutting module in Mozaik training. Cut a set of 4 doors from a real Mozaik file. Measure all 4.',
        tip: 'Grain direction is non-negotiable on wood-look panels. Wrong direction = reject.',
      },
      {
        topic: 'Practice — Full Door Set',
        resourceLabel: CNC_MOZAIK_LABEL,
        resourceUrl: CNC_MOZAIK_URL,
        objectives: [
          'Cut a complete door set from a real job file independently',
          'Measure all doors against the cut list',
          'Flag anything outside tolerance',
        ],
        task: 'Cut a complete door set from a real job file without Jose present. Measure all doors. Flag anything outside tolerance.',
        tip: 'Door quality is what the client sees and touches. Own the standard.',
      },
      {
        topic: 'Drawer Fronts — Sizing & False Front Rules',
        resourceLabel: CNC_MOZAIK_LABEL,
        resourceUrl: CNC_MOZAIK_URL,
        objectives: [
          'Understand drawer front sizing rules',
          'Cut a set of drawer fronts correctly',
          'Verify false front reveal is consistent on all four sides',
        ],
        task: 'Watch the drawer front video in Mozaik training. Cut a drawer front set from scrap. Check reveal consistency on all sides.',
        tip: 'Drawer front gaps should be equal top, bottom, and sides. Measure all four.',
      },
      {
        topic: 'Week 8 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'State the tolerance used on door width',
          'Explain why grain direction matters',
          'Describe the reveal standard for drawer fronts',
        ],
        task: 'Write: What tolerance do we use on door width? Why does grain direction matter? What is the reveal standard for drawer fronts?',
        tip: 'Doors and drawer fronts are the client-facing parts. Hold the standard.',
      },
    ],

    9: [
      {
        topic: 'Bit Wear Recognition — Identifying a Dull Bit',
        resourceLabel: CNC_W9_LABEL,
        resourceUrl: CNC_W9_URL,
        objectives: [
          'Identify every visual sign of a dull bit: burning, chatter, tearout, dust vs. chip',
          'Know how dull bit damage differs by material (melamine vs. plywood vs. MDF)',
          'Understand the cost impact of running a dull bit — rework time, client callbacks',
        ],
        task: 'Watch the bit types and wear video. Then inspect every bit in the shop. Write a condition report: sharp, borderline, or replace — and why.',
        tip: 'You\'ve been cutting for 8 weeks. Now you know what bad cuts look like. This is why.',
      },
      {
        topic: 'Bit Life — How Long Our Bits Last & Cost Per Cut',
        resourceLabel: CNC_W9_LABEL,
        resourceUrl: CNC_W9_URL,
        objectives: [
          'Know the approximate sheet life for our compression bits on melamine',
          'Calculate cost per sheet for a new bit vs. a worn bit (scrap risk)',
          'Know when borderline becomes replace — and who makes the call',
        ],
        task: 'Ask Jose: what is our compression bit sheet life target? What did the last bit cost? Calculate cost per sheet. Write it in the log.',
        tip: 'Running a bit past life to "save money" always costs more in scrapped parts.',
      },
      {
        topic: 'Practice — Full Bit Inspection & Condition Report',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Inspect all bits in the shop independently',
          'Grade each as: Run / Borderline / Replace',
          'Prepare a written condition report for Jose',
        ],
        task: 'Inspect every bit independently. Write a full condition report. Present to Jose — he confirms or corrects your grades.',
        tip: 'Your inspection eye is a skill. It builds with every report you write.',
      },
      {
        topic: 'Replacement Protocol — Ordering, Lead Times & Stock Levels',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Know who to notify when a bit needs replacement',
          'Know the reorder lead time for our standard bits',
          'Understand the minimum stock level we keep on hand',
        ],
        task: 'Ask Jose: what is the reorder process? What\'s the lead time from our supplier? What minimum stock do we keep? Write the protocol in the log.',
        tip: 'Running out of bits stops production. Stock management is part of your job.',
      },
      {
        topic: 'Week 9 Review — Bit Management',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Describe 3 visual signs that a bit needs replacement',
          'State the approximate sheet life of our compression bit',
          'Explain the reorder protocol from memory',
        ],
        task: 'Write: What are 3 signs a bit is dull? What is our compression bit sheet life? What is the full reorder protocol?',
        tip: 'Tool management is machine management. Bits are your responsibility now.',
      },
    ],

    10: [
      {
        topic: 'Daily Maintenance — Lubrication, Dust Collection & Rail Cleaning',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify all lubrication points on the machine',
          'Clean the rails correctly',
          'Empty and check the dust collection system',
        ],
        task: 'Watch the daily maintenance video. Walk the machine and find every lubrication point. Do the full daily maintenance routine with Jose.',
        tip: 'A dirty machine makes bad cuts. Maintenance is part of the job.',
      },
      {
        topic: 'Weekly Maintenance Checklist',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Build a personal weekly maintenance checklist',
          'Understand what happens when maintenance is skipped',
          'Commit to the maintenance schedule',
        ],
        task: 'Watch the weekly maintenance video. Build Scott\'s personal weekly maintenance checklist. Jose approves it.',
        tip: 'The checklist is not optional — it\'s what protects the machine investment.',
      },
      {
        topic: 'Practice — Full Maintenance Routine',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Complete the full daily maintenance routine independently',
          'Complete the applicable weekly checklist items',
          'Pass Jose\'s inspection',
        ],
        task: 'Complete full daily maintenance independently. Then do the weekly checklist items that apply to today. Jose inspects.',
        tip: 'Maintenance done consistently costs less than repairs done reactively.',
      },
      {
        topic: 'Calibration — Squaring the Machine & Z-Height Accuracy',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand what machine calibration means',
          'Assist with a calibration check on the actual machine',
          'Know when calibration is needed vs. when it\'s an operator error',
        ],
        task: 'Watch the calibration video. Assist Jose with a calibration check on the machine.',
        tip: 'If cuts are consistently off in one direction, that\'s a calibration issue, not an operator error.',
      },
      {
        topic: 'Week 10 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain what happens to cut quality when rails aren\'t clean',
          'State the first thing to check when a cut is off-dimension',
          'Complete the full maintenance routine from memory',
        ],
        task: 'Write: What happens to cut quality if rails aren\'t clean? What\'s the first thing you check if a cut is off-dimension? Complete the full maintenance routine from memory.',
        tip: 'A machine you maintain is a machine you understand.',
      },
    ],

    11: [
      {
        topic: 'Part Inspection Process — What to Measure & Acceptable Tolerances',
        resourceLabel: CNC_W11_LABEL,
        resourceUrl: CNC_W11_URL,
        objectives: [
          'Know the tolerance range for box panels, doors, and drawer fronts',
          'Measure parts correctly with a tape measure',
          'Record measurements accurately in the inspection log',
        ],
        task: 'Build a part inspection checklist with Jose. Write the tolerance for each part type.',
        tip: 'Measure twice. Never guess.',
      },
      {
        topic: 'Identifying Cut Defects — Tearout, Burning, Undersized & Oversized',
        resourceLabel: CNC_W11_LABEL,
        resourceUrl: CNC_W11_URL,
        objectives: [
          'Identify each defect type visually',
          'Know the cause of each defect',
          'Know which defects are fixable vs. require a recut',
        ],
        task: 'Watch the quality control video. Find examples of each defect in scrap. Photograph and label each.',
        tip: 'Every defect has a cause. Find the cause, not just the defect.',
      },
      {
        topic: 'Practice — Full Inspection',
        resourceLabel: CNC_W11_LABEL,
        resourceUrl: CNC_W11_URL,
        objectives: [
          'Inspect a complete set of parts from a real job',
          'Record every measurement in the inspection log',
          'Flag anything outside tolerance without prompting',
        ],
        task: 'Inspect a complete set of parts from a real job. Record every measurement. Flag anything outside tolerance.',
        tip: 'Do not release parts that fail inspection without Jose\'s explicit approval.',
      },
      {
        topic: 'What to Do When a Part is Wrong',
        resourceLabel: CNC_W11_LABEL,
        resourceUrl: CNC_W11_URL,
        objectives: [
          'Apply the decision tree for a wrong part — recut, trim, or flag',
          'Understand the cost of each option',
          'Know how to communicate a recut to Jose clearly',
        ],
        task: 'Discuss with Jose: at what variance does a part get flagged vs. accepted? Write the decision rules.',
        tip: 'Never use a part you\'re not sure about. A bad part costs more to fix in assembly than to recut now.',
      },
      {
        topic: 'Week 11 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'State the tolerance range for a box panel',
          'Answer the first question when a part is wrong',
          'Complete a full inspection of today\'s cut parts',
        ],
        task: 'Write: What is the tolerance range for a box panel? What is the first question when a part is wrong? Complete a full inspection of today\'s cut parts.',
        tip: 'Quality control is not a final step — it\'s built into every step.',
      },
    ],

    12: [
      {
        topic: 'Job Setup — Receive File, Review Cut List & Stage Material',
        resourceLabel: CNC_W6_LABEL,
        resourceUrl: CNC_W6_URL,
        objectives: [
          'Receive a job file from Maria and review the full cut list',
          'Stage all material in the correct zone with correct labels',
          'Flag any cut list discrepancies before staging begins',
        ],
        task: 'Take a real job from Maria. Review the file and cut list. Pull and stage all material. Label the staging bundle: [JobName] | [CutDate] | Scott.',
        tip: 'If anything on the cut list looks wrong, call Maria before staging.',
      },
      {
        topic: 'Cut the Job — All Panels, Doors & Drawer Fronts',
        resourceLabel: CNC_W6_LABEL,
        resourceUrl: CNC_W6_URL,
        objectives: [
          'Run the full cut in the correct sequence',
          'Follow the pre-cut checklist on every step',
          'Manage tabs and finished parts correctly throughout',
        ],
        task: 'Run the full cut. Jose spot-checks only — no hand-holding.',
        tip: 'You know how to do this. Trust your training.',
      },
      {
        topic: 'Practice — Second Full Job',
        resourceLabel: CNC_W6_LABEL,
        resourceUrl: CNC_W6_URL,
        objectives: [
          'Run a second full job independently',
          'Maintain the same quality standard as the first',
          'Identify where you\'re gaining confidence and where you need more reps',
        ],
        task: 'Run a second full job independently. Jose is available but not watching.',
        tip: 'Speed comes from confidence. Confidence comes from doing it correctly.',
      },
      {
        topic: 'Part Inspection & Job Packaging',
        resourceLabel: CNC_W6_LABEL,
        resourceUrl: CNC_W6_URL,
        objectives: [
          'Inspect every part against the cut list',
          'Flag any issues before packaging',
          'Package parts by cabinet and label for assembly or staging',
        ],
        task: 'Inspect all parts from Tuesday\'s cut. Package by cabinet. Write the inspection report.',
        tip: 'The package you send to assembly is your signature. Make it clean and organized.',
      },
      {
        topic: 'Week 12 Graduation',
        resourceLabel: CNC_W6_LABEL,
        resourceUrl: CNC_W6_URL,
        objectives: [
          'Present the full job from Mozaik file to finished parts',
          'Identify what went well and what needs work',
          'Write your training log final entry',
        ],
        task: 'Present to Jose: walk through the full job from Mozaik file to finished parts. What went well? What needs work? What\'s next? Write your training log final entry.',
        tip: 'Week 12 is the baseline. Every real job from here is your ongoing training.',
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // FIELD PLAN — Jorge (Weeks 1–20, 20-Week Phased Program)
  // Schedule: 7:30–8:00am Mon–Fri during carpool to warehouse with Scott
  // ═══════════════════════════════════════════════════════════════════════════

  const FIELD_URL_SAFETY    = 'https://www.osha.gov/construction';
  const FIELD_URL_OSHA10    = 'https://www.osha.gov/training/outreach/construction';
  const FIELD_URL_HAZCOM    = 'https://www.osha.gov/hazcom';
  const FIELD_URL_BLUEPRINTS= 'https://www.youtube.com/watch?v=sd5seNSHQW4';
  const FIELD_URL_PAINT_SW  = 'https://www.youtube.com/watch?v=7lnXlHMPx0Y';
  const FIELD_URL_PDCA      = 'https://www.pdca.org';
  const FIELD_URL_DRYWALL   = 'https://www.youtube.com/watch?v=ZFe3plJEcZM';
  const FIELD_URL_USG       = 'https://www.youtube.com/c/USGypsum';
  const FIELD_URL_DEMO_OSHA = 'https://www.osha.gov/demolition';
  const FIELD_URL_EMAIL     = 'https://www.thebalancemoney.com/email-etiquette-tips-2061246';
  const FIELD_URL_QC        = 'https://www.youtube.com/results?search_query=construction+quality+control';
  const FIELD_URL_QUALITY   = FIELD_URL_QC;
  const FIELD_URL_NAHB      = 'https://www.nahb.org/nahb-community/nahb-rmi';
  const FIELD_URL_FLOORING  = 'https://www.youtube.com/results?search_query=LVP+flooring+installation+professional+contractor';
  const FIELD_URL_CREW      = 'https://www.youtube.com/results?search_query=construction+crew+management+field+supervisor';
  const FIELD_URL_CHANGE_ORD= 'https://www.youtube.com/results?search_query=construction+change+order+scope+management';
  const FIELD_URL_BUDGET    = 'https://www.youtube.com/results?search_query=construction+material+cost+management+field+manager';
  const FIELD_URL_PROJECT   = 'https://www.youtube.com/results?search_query=residential+remodel+project+planning+timeline';
  const FIELD_URL_LEADERSHIP= 'https://www.youtube.com/results?search_query=construction+foreman+leadership+managing+subcontractors';
  const FIELD_LABEL         = 'Training Resource';

  const FIELD_PLAN = {

    // ── PHASE 1: FOUNDATION (Weeks 1–4) ──────────────────────────────────────

    1: [
      // Mon — Concept
      {
        topic: 'Email Response Basics',
        resourceLabel: 'Email Etiquette Guide',
        resourceUrl: FIELD_URL_EMAIL,
        objectives: [
          'Understand why email matters even when you prefer texting',
          'Know the parts of a professional response: greeting, body, action, close',
          'Reply to a job-related email within 2 hours during business hours',
        ],
        task: 'Read the email etiquette guide. Write 3 example replies to Jose: one confirming a job start time, one asking a question about scope, one reporting a problem on site.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. How you respond in writing reflects your professionalism — even a short email matters.',
      },
      // Tue — Application
      {
        topic: 'Texting vs. Calling vs. Emailing',
        resourceLabel: 'Email Etiquette Guide',
        resourceUrl: FIELD_URL_EMAIL,
        objectives: [
          'Know when to text, when to call, and when to email',
          'Understand that urgent problems get a call, not a text',
          'Know that anything with a decision or a number belongs in email or text thread',
        ],
        task: 'Write the rule in your own words: "I text when ___. I call when ___. I email when ___." Share with Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Bad communication mode causes delays. A missed call about a flooded site costs real money.',
      },
      // Wed — Practice
      {
        topic: 'Field Update Format',
        resourceLabel: 'Email Etiquette Guide',
        resourceUrl: FIELD_URL_EMAIL,
        objectives: [
          'Know the NFR daily field update format: Job, Status, Issue, Next',
          'Send one update for every active job before 5pm',
          'Keep updates short — 4 lines max per job',
        ],
        task: 'Write a field update for each job you are on today using the format: Job Name | Status | Any issue? | What happens next?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. If Jose has to ask "what is the status on X?" — the update system failed.',
      },
      // Thu — Deepen
      {
        topic: 'Writing to Jose — Tone, Clarity, Brevity',
        resourceLabel: 'Email Etiquette Guide',
        resourceUrl: FIELD_URL_EMAIL,
        objectives: [
          'Communicate with Jose directly and without drama',
          'Lead with the bottom line — no long setups before the point',
          'Flag problems with a proposed solution, not just a complaint',
        ],
        task: 'Rewrite this message in professional format: "Hey so the painters didn\'t show up and the drywall guy said maybe tomorrow and the client is blowing up my phone." Submit to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Short, clear messages build Jose\'s confidence in you. Long vague ones make him worry.',
      },
      // Fri — Review
      {
        topic: 'Week 1 Review — Communication',
        resourceLabel: 'Email Etiquette Guide',
        resourceUrl: FIELD_URL_EMAIL,
        objectives: [
          'Recall the email/text/call decision rule from memory',
          'Describe the 4-line field update format without looking',
          'Write a professional message to Jose as if a real issue just occurred',
        ],
        task: 'Write a short review: What is the biggest communication habit you need to build? What will you do differently starting Monday?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Week 1 is done. Communication sets the tone for everything else.',
      },
    ],

    // ── WEEK 2: JOB SITE SAFETY ───────────────────────────────────────────────
    2: [
      // Mon — Concept
      {
        topic: 'PPE by Trade',
        resourceLabel: 'OSHA Construction Safety',
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Know the required PPE for each NFR trade: paint, drywall, flooring, demo',
          'Check crew PPE before work starts each morning',
          'Know your personal liability if someone gets hurt without PPE',
        ],
        task: 'Review the OSHA construction page. Write the PPE list for each trade NFR uses. Keep it somewhere you can reference on site.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. You are responsible for PPE on every site you manage. Period.',
      },
      // Tue — Application
      {
        topic: 'Hazard Identification',
        resourceLabel: 'OSHA Construction Safety',
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Identify the 5 most common job site hazards for NFR work',
          'Know how to document and report a hazard',
          'Create a hazard log entry with photos',
        ],
        task: 'Walk a real or mock job site. Identify and photograph 3 hazards. Report each one to Jose via WhatsApp with a photo and one-sentence description.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. The hazard you catch today is the injury that doesn\'t happen next week.',
      },
      // Wed — Practice
      {
        topic: 'OSHA 10-Hour Construction — Start',
        resourceLabel: 'OSHA 10 Outreach Training',
        resourceUrl: FIELD_URL_OSHA10,
        objectives: [
          'Understand what OSHA 10 certifies and why it matters for NFR',
          'Find an authorized OSHA 10 provider and begin enrollment',
          'Know the timeline to complete your OSHA 10 card',
        ],
        task: 'Visit the OSHA outreach training page. Find one authorized online provider. Show Jose the enrollment page and get the go-ahead to register.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. OSHA 10 is your baseline credential as a field manager. Get it done.',
      },
      // Thu — Deepen
      {
        topic: 'Chemical Safety — SDS & Ventilation',
        resourceLabel: 'OSHA Hazard Communication',
        resourceUrl: FIELD_URL_HAZCOM,
        objectives: [
          'Know what an SDS (Safety Data Sheet) is and how to read it',
          'Understand ventilation requirements for paint, epoxy, and adhesive products',
          'Know the emergency response steps for chemical exposure',
        ],
        task: 'Look up the SDS for the paint product currently on a job. Write down the ventilation requirement, first aid for skin/eye contact, and emergency response.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Never let crew work with chemical products in an unventilated space. Know this before someone asks.',
      },
      // Fri — Review
      {
        topic: 'Week 2 Review — Safety',
        resourceLabel: 'OSHA Construction Safety',
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'State the PPE required for a demo job from memory',
          'Know the protocol when a crew member refuses PPE',
          'Confirm OSHA 10 enrollment status',
        ],
        task: 'Write: What are the 3 non-negotiable PPE items for a demo job? What do you do if a crew member refuses? What is your OSHA 10 enrollment status?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Safety isn\'t a box you check — it\'s how you start every single day.',
      },
    ],

    // ── WEEK 3: READING CONSTRUCTION PLANS ───────────────────────────────────
    3: [
      // Mon — Concept
      {
        topic: 'Blueprint Basics',
        resourceLabel: 'How to Read Blueprints — YouTube',
        resourceUrl: FIELD_URL_BLUEPRINTS,
        objectives: [
          'Understand the purpose and parts of a construction blueprint',
          'Know what a title block contains and how to read it',
          'Identify the difference between architectural and structural drawings',
        ],
        task: 'Watch the blueprint basics video. Sketch the parts of a title block from memory. Show it to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. You can\'t manage what you can\'t read. Plans are your bible on every job.',
      },
      // Tue — Application
      {
        topic: 'Reading a Floor Plan',
        resourceLabel: 'How to Read Blueprints — YouTube',
        resourceUrl: FIELD_URL_BLUEPRINTS,
        objectives: [
          'Read room dimensions from a floor plan',
          'Identify doors, windows, and walls on a plan',
          'Translate scale measurements to real-world feet and inches',
        ],
        task: 'Pull up a plan from an active NFR job (or use a sample). Read the dimensions of 3 rooms. Write them down. Verify against your tape measure on site.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Every room measurement on a plan needs to be confirmed on site before material is ordered.',
      },
      // Wed — Practice
      {
        topic: 'Elevation Views',
        resourceLabel: 'How to Read Blueprints — YouTube',
        resourceUrl: FIELD_URL_BLUEPRINTS,
        objectives: [
          'Understand what an elevation view shows vs. a floor plan',
          'Read wall heights, window placement, and cabinet layouts from an elevation',
          'Use elevation views to verify cabinet installs and wall work',
        ],
        task: 'Find an elevation view on any plan. Identify the wall height, window header height, and any cabinetry or millwork shown. Sketch it by hand.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Elevation views prevent the most common install errors — use them before you hang anything.',
      },
      // Thu — Deepen
      {
        topic: 'Symbols, Dimensions & Scale',
        resourceLabel: 'How to Read Blueprints — YouTube',
        resourceUrl: FIELD_URL_BLUEPRINTS,
        objectives: [
          'Recognize common architectural symbols (doors, windows, outlets, fixtures)',
          'Read fractional dimensions on a plan (1/4" = 1\' scale)',
          'Convert plan dimensions to real measurements without a calculator',
        ],
        task: 'On any plan: identify 5 symbols, convert 3 scaled dimensions to real measurements, and confirm them on site or against a spec sheet.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. You should be able to read a plan cold — not study it for 20 minutes before a walk-through.',
      },
      // Fri — Review
      {
        topic: 'Week 3 Review — Plans',
        resourceLabel: 'How to Read Blueprints — YouTube',
        resourceUrl: FIELD_URL_BLUEPRINTS,
        objectives: [
          'Read a floor plan and call out room dimensions from memory',
          'Explain what an elevation view shows and when to use it',
          'Identify 5 blueprint symbols without looking them up',
        ],
        task: 'Walk an active job site with a plan in hand. Call out 3 things the plan shows that are visible in the field. Report one discrepancy between plan and reality if you find one.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. A field manager who can read plans runs a tighter, faster, more professional job.',
      },
    ],

    // ── WEEK 4: FIELD CALCULATIONS ────────────────────────────────────────────
    4: [
      // Mon — Concept
      {
        topic: 'Measuring Rooms Accurately',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Know the correct sequence for measuring a room (longest wall first)',
          'Account for doors, windows, closets, and offsets',
          'Record measurements in a consistent format',
        ],
        task: 'Measure any room on an active or nearby site. Write dimensions for length, width, and any offsets. Double-check by re-measuring.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Measure twice, order once. Bad measurements cost real money and real time.',
      },
      // Tue — Application
      {
        topic: 'Square Footage Math',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Calculate square footage for rectangular and L-shaped rooms',
          'Subtract door and window openings from wall square footage for paint',
          'Know how to add 10–15% waste factor for flooring and paint',
        ],
        task: 'Calculate square footage for a room you measured yesterday. Then calculate how many gallons of paint it needs at 400 sq ft per gallon coverage. Show your math to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. You should be able to do sq ft math in your head for any standard room.',
      },
      // Wed — Practice
      {
        topic: 'Linear Feet & Perimeter',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Calculate perimeter (linear feet) for baseboard, crown, and trim orders',
          'Know the difference between square footage and linear feet',
          'Add waste factor for trim (10%) vs flooring (15%)',
        ],
        task: 'For the same room you\'ve been working with: calculate linear feet of baseboard needed. Calculate how many 12-ft sticks you need. Include a 10% waste factor.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Trim orders without linear feet math always come up short.',
      },
      // Thu — Deepen
      {
        topic: 'Material Quantity Estimates',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Estimate material quantities for paint, flooring, and drywall from a room measurement',
          'Understand how to read a spec sheet for coverage rates',
          'Know when to flag a quantity concern before materials are ordered',
        ],
        task: 'Pick a room. Estimate: gallons of paint, boxes of LVP flooring, and sheets of drywall needed. Compare to any existing order or estimate for that job.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. When you can estimate materials, you can catch mistakes before they happen.',
      },
      // Fri — Review
      {
        topic: 'Week 4 Review — Calculations',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Calculate sq ft, linear ft, and paint gallons for a room from memory',
          'Apply correct waste factors without prompting',
          'Verify estimates against a real order or material sheet',
        ],
        task: 'Jose gives Jorge a room spec. Jorge calculates sq ft, baseboard linear ft, paint gallons, and flooring boxes in under 5 minutes. No phone calculator.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Phase 1 complete. You now have the foundation every field manager needs.',
      },
    ],

    // ── PHASE 2: TRADE KNOWLEDGE (Weeks 5–8) ─────────────────────────────────

    // ── WEEK 5: PAINTING STANDARDS ────────────────────────────────────────────
    5: [
      // Mon — Concept
      {
        topic: 'Prep & Priming Standards',
        resourceLabel: 'Sherwin-Williams Pro Painter — YouTube',
        resourceUrl: FIELD_URL_PAINT_SW,
        objectives: [
          'Know the NFR prep sequence: patch, sand, clean, prime',
          'Understand when primer is required vs. optional',
          'Identify surfaces that need special primer (drywall, stained wood, glossy surfaces)',
        ],
        task: 'Watch the painting prep video. Write the prep checklist NFR painters should follow on every job before a brush touches the wall.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Good paint jobs start with prep — not with the first coat.',
      },
      // Tue — Application
      {
        topic: 'Cut Lines & Paint Types',
        resourceLabel: 'Sherwin-Williams Pro Painter — YouTube',
        resourceUrl: FIELD_URL_PAINT_SW,
        objectives: [
          'Know what a clean cut line is and how to evaluate one',
          'Understand sheen levels: flat, eggshell, satin, semi-gloss, gloss — and when each is used',
          'Know NFR\'s default paint specs for walls, trim, and ceilings',
        ],
        task: 'Walk a paint job in progress (or recently completed). Evaluate the cut lines at ceiling, trim, and corners. Write what\'s acceptable and what needs fixing.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. You can\'t enforce quality you can\'t identify. Know what good looks like before you inspect.',
      },
      // Wed — Practice
      {
        topic: 'NFR Paint SOP',
        resourceLabel: 'PDCA — Painting Contractors Standards',
        resourceUrl: FIELD_URL_PDCA,
        objectives: [
          'Know the step-by-step NFR painting sequence from prep to final coat',
          'Understand what triggers a re-coat vs. a patch-and-touch-up',
          'Know the final walk criteria before a paint job is signed off',
        ],
        task: 'Write the NFR paint SOP in your own words: What happens from the moment the painter arrives to the moment Jose signs off? Step by step.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. An SOP in your head is as good as one on paper — but only if you actually know it.',
      },
      // Thu — Deepen
      {
        topic: 'Finish Inspection — Paint',
        resourceLabel: 'Sherwin-Williams Pro Painter — YouTube',
        resourceUrl: FIELD_URL_PAINT_SW,
        objectives: [
          'Know the 5 things to inspect on every completed paint job',
          'Identify: holidays (missed spots), lap marks, brush marks, poor cut lines, drips',
          'Know the re-work threshold — what gets fixed before client walk-through',
        ],
        task: 'Do a finish inspection on any wall. Write your findings using the 5-point checklist. Decide: pass or rework? Report to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Your eye should catch paint issues before the client\'s eye does. That\'s what a field manager does.',
      },
      // Fri — Review
      {
        topic: 'Week 5 Review — Painting',
        resourceLabel: 'Sherwin-Williams Pro Painter — YouTube',
        resourceUrl: FIELD_URL_PAINT_SW,
        objectives: [
          'Describe the prep-to-finish sequence without prompting',
          'Call out the correct sheen for a kitchen wall vs. bathroom ceiling',
          'Pass or fail a paint job on the spot with documented reasoning',
        ],
        task: 'Jose gives Jorge a paint scenario with 3 issues embedded. Jorge identifies all 3 and writes what he would tell the painter to fix and why.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. When you know painting like a painter, you can run painters like a manager.',
      },
    ],

    // ── WEEK 6: DRYWALL STANDARDS ─────────────────────────────────────────────
    6: [
      // Mon — Concept
      {
        topic: 'Hanging Drywall',
        resourceLabel: 'USG / Sheetrock — YouTube',
        resourceUrl: FIELD_URL_USG,
        objectives: [
          'Know the standard drywall sheet sizes and which to use where',
          'Understand stud layout and how it drives sheet orientation',
          'Know the difference between 1/2" and 5/8" drywall and when each is required',
        ],
        task: 'Watch the USG drywall hanging video. Write: What thickness drywall is used on ceilings? What about fire-rated assemblies? What does "back-to-back" mean for seams?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. You can\'t inspect a hang job without understanding how it works.',
      },
      // Tue — Application
      {
        topic: 'Taping & Mudding',
        resourceLabel: 'USG / Sheetrock — YouTube',
        resourceUrl: FIELD_URL_DRYWALL,
        objectives: [
          'Know the three-coat mud sequence: tape coat, fill coat, finish coat',
          'Understand the drying time between coats',
          'Identify the difference between setting compound and drying compound',
        ],
        task: 'Watch the taping and mudding video. Write the 3-coat sequence in your own words. Include drying time and what can go wrong at each step.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Bad mud work shows through paint. Inspect it before primer goes on.',
      },
      // Wed — Practice
      {
        topic: 'Drywall Finish Levels 1–5',
        resourceLabel: 'USG Finish Level Standards',
        resourceUrl: FIELD_URL_USG,
        objectives: [
          'Know what each finish level (1–5) looks like and when it\'s required',
          'Understand that NFR residential jobs are typically Level 4 or 5',
          'Know how to call out the wrong finish level before paint goes on',
        ],
        task: 'Walk a drywall job in progress. Estimate what finish level it\'s at today. What level does it need to reach before painting? Write your assessment.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Finish level is a client-agreement item — it affects cost and time. Know the standard.',
      },
      // Thu — Deepen
      {
        topic: 'Drywall Inspection Checklist',
        resourceLabel: 'USG / Sheetrock — YouTube',
        resourceUrl: FIELD_URL_USG,
        objectives: [
          'Know the 6-point drywall inspection: seams, corners, fasteners, texture, finish level, moisture',
          'Identify common defects: bowing sheets, nail pops, visible tape, rough mud',
          'Know the sign-off criteria before painting begins',
        ],
        task: 'Inspect a wall section using the 6-point checklist. Write your findings. What passes? What doesn\'t? What would a client notice on move-in day?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Painting over bad drywall is how NFR gets callbacks. Stop it here.',
      },
      // Fri — Review
      {
        topic: 'Week 6 Review — Drywall',
        resourceLabel: 'USG / Sheetrock — YouTube',
        resourceUrl: FIELD_URL_USG,
        objectives: [
          'Describe the 3-coat mud sequence from memory',
          'Identify the correct finish level for an NFR residential kitchen remodel',
          'Complete a drywall inspection without using notes',
        ],
        task: 'Jose gives Jorge a drywall scenario with 2 finish defects. Jorge identifies both and writes the correction instructions.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Drywall is invisible when done right and obvious when done wrong. You\'re the last check.',
      },
    ],

    // ── WEEK 7: FLOORING STANDARDS ────────────────────────────────────────────
    7: [
      // Mon — Concept
      {
        topic: 'Subfloor Prep',
        resourceLabel: 'LVP Flooring — Video Resource',
        resourceUrl: FIELD_URL_FLOORING,
        objectives: [
          'Understand what makes a subfloor ready for LVP or carpet',
          'Know the flatness tolerance standard for LVP (3/16" over 10 ft)',
          'Identify subfloor issues that must be corrected before flooring starts',
        ],
        task: 'Visit a floor in prep. Check for squeaks, high spots, low spots, and moisture. Write a short "ready or not ready" assessment with reason.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Flooring installed on a bad subfloor will fail. Catch it before the first plank goes down.',
      },
      // Tue — Application
      {
        topic: 'LVP Installation Standards',
        resourceLabel: 'LVP Flooring — Video Resource',
        resourceUrl: FIELD_URL_FLOORING,
        objectives: [
          'Know the NFR LVP install sequence: acclimate, layout direction, first row, expansion gap',
          'Understand the correct expansion gap (1/4") and why it matters',
          'Know what "staggered seams" means and how to verify it',
        ],
        task: 'Watch LVP crew install (live or video). Write the install sequence. Identify one mistake or shortcut you see or imagine. What would you correct?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. LVP fails most often at the expansion gap and transitions. Know these before you inspect.',
      },
      // Wed — Practice
      {
        topic: 'Carpet & Seam Standards',
        resourceLabel: 'LVP Flooring — Video Resource',
        resourceUrl: FIELD_URL_FLOORING,
        objectives: [
          'Know carpet seam placement rules (seams away from high-traffic zones)',
          'Understand tack strip installation around the perimeter',
          'Know what a properly stretched carpet looks and feels like',
        ],
        task: 'Find a carpet installation (active or completed). Evaluate: are seams in low-visibility locations? Is the stretch firm? Write your inspection notes.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Carpet seams that show up in the light are callbacks. Prevent them on install day.',
      },
      // Thu — Deepen
      {
        topic: 'Transitions & Final Walk',
        resourceLabel: 'LVP Flooring — Video Resource',
        resourceUrl: FIELD_URL_FLOORING,
        objectives: [
          'Know the transition types: T-bar, reducer, threshold, end cap — and when to use each',
          'Understand the NFR final flooring walk: check seams, transitions, gaps, damage',
          'Know the sign-off criteria before a flooring job is closed',
        ],
        task: 'Walk a completed flooring install. Check transitions at every doorway. Check for edge gaps. Write pass/fail for each area you inspect.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Transitions are the most visible part of a flooring job. They tell the client if the crew cared.',
      },
      // Fri — Review
      {
        topic: 'Week 7 Review — Flooring',
        resourceLabel: 'LVP Flooring — Video Resource',
        resourceUrl: FIELD_URL_FLOORING,
        objectives: [
          'Describe subfloor readiness criteria from memory',
          'Call out the correct expansion gap for LVP',
          'Complete a flooring final walk without prompting',
        ],
        task: 'Jose describes a flooring scenario with a subfloor problem and a bad transition. Jorge writes the correction plan for both.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Every trade has standards. Your job is to know them all well enough to inspect them all.',
      },
    ],

    // ── WEEK 8: DEMO STANDARDS ────────────────────────────────────────────────
    8: [
      // Mon — Concept
      {
        topic: 'Scope Verification Before Demo',
        resourceLabel: 'OSHA Demolition Standards',
        resourceUrl: FIELD_URL_DEMO_OSHA,
        objectives: [
          'Read the scope document before any demo begins',
          'Verify what comes out vs. what stays — with Jose if unclear',
          'Know that unauthorized demo is one of the top NFR cost risks',
        ],
        task: 'Read the OSHA demolition page. Write the 3 questions you should answer before swinging the first hammer: What comes out? What stays? What\'s the utility status?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Demo mistakes are the most expensive kind — you can\'t un-remove a wall.',
      },
      // Tue — Application
      {
        topic: 'Top-Down Demo Sequence',
        resourceLabel: 'OSHA Demolition Standards',
        resourceUrl: FIELD_URL_DEMO_OSHA,
        objectives: [
          'Know the top-down sequence: ceilings first, then walls, then floors last',
          'Understand why sequence matters for debris containment and safety',
          'Know when to stop and call Jose vs. proceed independently',
        ],
        task: 'Write the demo sequence for a full kitchen gut: what goes first, second, third? Why does the sequence matter? What could go wrong if you reverse it?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Top-down isn\'t just best practice — it\'s the difference between controlled and chaotic.',
      },
      // Wed — Practice
      {
        topic: 'Debris Management',
        resourceLabel: 'OSHA Demolition Standards',
        resourceUrl: FIELD_URL_DEMO_OSHA,
        objectives: [
          'Know NFR\'s debris removal process: dumpster call, load frequency, floor protection',
          'Understand that debris sitting in a house is a safety and liability risk',
          'Know what debris requires special disposal (asbestos, lead paint, treated wood)',
        ],
        task: 'Walk an active demo site. Is debris staged correctly? Is it blocking egress? Is the floor protected? Write a brief assessment and identify any unsafe conditions.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. A messy demo site signals a crew that doesn\'t care. A clean demo site signals a manager who does.',
      },
      // Thu — Deepen
      {
        topic: 'Structural Awareness During Demo',
        resourceLabel: 'OSHA Demolition Standards',
        resourceUrl: FIELD_URL_DEMO_OSHA,
        objectives: [
          'Know the visual signs of a load-bearing wall vs. a partition wall',
          'Understand the rule: when in doubt, stop and call Jose',
          'Know what to do if unexpected conditions appear (mold, asbestos tiles, knob-and-tube)',
        ],
        task: 'Write the protocol for what Jorge does if: (a) crew finds suspected mold during demo, (b) crew removes what they thought was a partition wall and it had a beam. Two separate answers.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Structural surprises are not field manager decisions. They are Jose decisions.',
      },
      // Fri — Review
      {
        topic: 'Week 8 Review — Demo',
        resourceLabel: 'OSHA Demolition Standards',
        resourceUrl: FIELD_URL_DEMO_OSHA,
        objectives: [
          'Describe the top-down demo sequence from memory',
          'State the 3 pre-demo verification questions',
          'Know the stop-and-call protocol for structural surprises',
        ],
        task: 'Jose gives Jorge a demo scenario with an unexpected structural condition. Jorge writes the exact steps he would take — including what he says to the crew and to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Phase 2 complete. You now know what good work looks like in every NFR trade.',
      },
    ],

    // ── PHASE 3: FIELD OPERATIONS (Weeks 9–12) ────────────────────────────────

    // ── WEEK 9: PHOTO DOCUMENTATION ──────────────────────────────────────────
    9: [
      // Mon — Concept
      {
        topic: 'NFR Photo Protocol',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the NFR three-shot rule: before, milestone, after — for every trade',
          'Understand why photo documentation protects NFR from disputes',
          'Know the naming convention for job site photos',
        ],
        task: 'Write the NFR photo protocol in your own words: when do you shoot, what do you shoot, and where do photos go? Show Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Photos are your proof. Disputes without photos favor the client. Photos always favor NFR.',
      },
      // Tue — Application
      {
        topic: 'Before, Milestone, After',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know what counts as a "milestone" photo for each trade',
          'Understand the difference between a documentation photo and a social media photo',
          'Identify the 3 angles every room needs: wide, detail, and any defect or repair',
        ],
        task: 'On your next site visit, shoot a full before/milestone/after set for one room. Review with Jose — are all the angles covered?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. A photo set that tells the whole story is better than 50 random snapshots.',
      },
      // Wed — Practice
      {
        topic: 'CompanyCam Workflow',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know how to create a project in CompanyCam and assign it to a job',
          'Upload and label photos by trade and phase',
          'Know how Jose and the Office & Design Coordinator access the photos',
        ],
        task: 'Create or update a CompanyCam project for an active job. Upload today\'s photos. Confirm Jose can see them. Write any workflow issue you hit.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. CompanyCam only works if you use it every day. Consistency is the habit.',
      },
      // Thu — Deepen
      {
        topic: 'Legal Value of Job Site Photos',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Understand that photos are the primary defense in client disputes',
          'Know what "pre-existing conditions" means and why to document them on day one',
          'Understand how photos support warranty claims and change order justification',
        ],
        task: 'Think about a past or current job where a client had a concern. Write: how would a complete photo set have helped NFR respond to that concern? Submit to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Pre-existing condition photos have saved contractors thousands in false damage claims. Take them.',
      },
      // Fri — Review
      {
        topic: 'Week 9 Review — Documentation',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Describe the NFR three-shot protocol from memory',
          'State the legal value of a pre-existing conditions photo set',
          'Confirm CompanyCam is active on all current jobs',
        ],
        task: 'Jorge audits all current jobs in CompanyCam. Which ones are missing photos? Which phases are undocumented? Submit the audit to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Documentation is a habit. Build it now while jobs are small.',
      },
    ],

    // ── WEEK 10: PROJECT PLANNING ─────────────────────────────────────────────
    10: [
      // Mon — Concept
      {
        topic: 'Reading the Schedule',
        resourceLabel: 'Project Planning — Video Resource',
        resourceUrl: FIELD_URL_PROJECT,
        objectives: [
          'Read a project schedule and understand what each line means',
          'Know the difference between a start date, a milestone date, and a completion date',
          'Identify the critical path — the sequence that drives the end date',
        ],
        task: 'Look at the schedule for one active job. Identify the next 3 milestones. What must happen before each one? Write it out.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. You can\'t run a project you haven\'t read. Know the schedule before you show up.',
      },
      // Tue — Application
      {
        topic: 'Trade Dependencies',
        resourceLabel: 'Project Planning — Video Resource',
        resourceUrl: FIELD_URL_PROJECT,
        objectives: [
          'Know the standard NFR trade sequence: demo → rough → drywall → paint → flooring → trim',
          'Understand what happens when a trade is late and how it cascades',
          'Know how to alert Jose when a dependency is at risk',
        ],
        task: 'Map the trade sequence for an active remodel job. Identify: is anything out of order or delayed? What is at risk? What does Jorge do today to prevent a problem?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Your job is to see delays before Jose has to ask about them.',
      },
      // Wed — Practice
      {
        topic: 'Flagging Delays Early',
        resourceLabel: 'Project Planning — Video Resource',
        resourceUrl: FIELD_URL_PROJECT,
        objectives: [
          'Know the 24-hour rule: if you see a delay risk, flag it within 24 hours',
          'Know the format for flagging: job name, what\'s delayed, impact, proposed fix',
          'Understand that flagging early gives Jose options — waiting takes them away',
        ],
        task: 'Find one real or potential delay on any active job. Write the delay flag in proper format: Job | What | Impact | Proposed Fix. Send to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Bringing a delay plus a solution is the difference between a field manager and a babysitter.',
      },
      // Thu — Deepen
      {
        topic: 'Visit Sequencing — Prioritizing Your Day',
        resourceLabel: 'Project Planning — Video Resource',
        resourceUrl: FIELD_URL_PROJECT,
        objectives: [
          'Know how to sequence your site visits for maximum impact',
          'Understand: inspection visits, check-in visits, and sign-off visits — each needs different time',
          'Know which job needs Jorge most and how to determine that at 7am',
        ],
        task: 'Plan your site visits for tomorrow: list each job, what stage it\'s in, and what you need to do at each. Prioritize by most at risk. Share with Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. A day of random drive-bys is not field management. A sequenced visit plan is.',
      },
      // Fri — Review
      {
        topic: 'Week 10 Review — Planning',
        resourceLabel: 'Project Planning — Video Resource',
        resourceUrl: FIELD_URL_PROJECT,
        objectives: [
          'Read a project schedule cold and identify the next 2 milestones',
          'Spot a trade dependency conflict and flag it correctly',
          'Sequence a 3-job visit day and justify the order',
        ],
        task: 'Jose gives Jorge a fictional 3-job scenario with one delay embedded. Jorge identifies the delay, flags it in proper format, and adjusts his visit sequence.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Field operations is your job now. Plan it like a professional.',
      },
    ],

    // ── WEEK 11: CLIENT COMMUNICATION ────────────────────────────────────────
    11: [
      // Mon — Concept
      {
        topic: 'What Jorge Can and Cannot Say to Clients',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know that Jorge represents NFR on every site — everything he says is an NFR statement',
          'Know the topics that belong to Jose only: price, timeline changes, scope changes',
          'Know the topics Jorge handles directly: progress updates, access, safety',
        ],
        task: 'Write two lists: what Jorge CAN tell a client directly, and what he must redirect to Jose. Submit and discuss with Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. The wrong words to a client cost NFR money, reputation, or both.',
      },
      // Tue — Application
      {
        topic: 'Handling Client Questions on Site',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the redirect script: "That\'s a great question — let me have Jose follow up with you directly"',
          'Understand that silence is better than a wrong answer',
          'Know how to be warm and professional without over-promising',
        ],
        task: 'Role-play 3 client questions Jorge might get on site. For each one, write exactly what he would say. Use the redirect for anything above his authority.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. A confident redirect keeps everyone happy. An answer you shouldn\'t give causes problems.',
      },
      // Wed — Practice
      {
        topic: 'Escalation Protocol',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the escalation triggers: client complaint, scope concern, safety issue, structural surprise',
          'Know the escalation sequence: Jorge assesses → Jorge notifies Jose → Jose responds',
          'Know the response time expectation: Jose needs to know within 1 hour of any client escalation',
        ],
        task: 'Write the escalation protocol in your own words for two scenarios: (a) client upset about timeline, (b) client asks about adding a room that\'s not in scope.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Escalation is not weakness. It\'s the right move. Own it.',
      },
      // Thu — Deepen
      {
        topic: 'Setting Expectations Without Over-Promising',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know how to give a "we\'re on track" update without committing to a specific date',
          'Understand why "it should be done by Friday" from the field manager creates a problem',
          'Know the language: "We\'re making good progress — Jose will confirm your completion date"',
        ],
        task: 'Write 3 client update phrases Jorge uses regularly. Make sure none of them include a date or price commitment. Show to Jose for feedback.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Manage expectations with facts and redirect. Never guess a date out loud.',
      },
      // Fri — Review
      {
        topic: 'Week 11 Review — Client Communication',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the can/cannot topics without looking at notes',
          'Use the redirect script naturally in a role-play',
          'Describe the escalation protocol for a client complaint from memory',
        ],
        task: 'Jose role-plays a difficult client on site. Jorge handles it — no dates, no prices, no promises. Debrief with Jose after.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. How you handle clients on site is how they judge NFR.',
      },
    ],

    // ── WEEK 12: DAILY REPORTING ──────────────────────────────────────────────
    12: [
      // Mon — Concept
      {
        topic: 'EOD Report Format',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the NFR end-of-day report format: Jobs | Status | Issues | Tomorrow\'s Plan',
          'Understand that the EOD report replaces most "what\'s happening on X?" texts from Jose',
          'Know the deadline: EOD report by 5:00pm every day, no exceptions',
        ],
        task: 'Write today\'s EOD report in the correct format. Submit to Jose by 5pm. This becomes your daily habit starting now.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. If Jose gets your EOD report, he doesn\'t have to chase you. That\'s the whole point.',
      },
      // Tue — Application
      {
        topic: 'Reporting Across Multiple Jobs',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know how to write a clear EOD report when managing 3+ jobs simultaneously',
          'Use consistent job names so Jose can track which is which',
          'Flag which jobs are green, yellow, or red in every report',
        ],
        task: 'Write an EOD report for all active jobs today. Color code each: green (on track), yellow (minor concern), red (needs Jose now). Submit.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Color coding lets Jose triage at a glance. He reads your report in 60 seconds or it\'s too long.',
      },
      // Wed — Practice
      {
        topic: 'Reporting Under Pressure',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know that a busy, chaotic day is when the EOD report matters most — not least',
          'Understand how to write a quick but complete report even when exhausted',
          'Know the minimum acceptable EOD report on a bad day: 1 line per job, color status, 1 action',
        ],
        task: 'On your most chaotic day this week, still submit an EOD report. It can be short — but it must cover every active job. No skipping.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. The days you most want to skip the report are the days Jose most needs it.',
      },
      // Thu — Deepen
      {
        topic: 'Keeping Jose Informed — Proactive vs. Reactive',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Understand the difference between reactive reporting (Jose asks) and proactive reporting (Jorge tells)',
          'Know that Jose\'s confidence in Jorge is built by consistent, proactive updates',
          'Identify one thing this week Jose should know that he hasn\'t asked about yet',
        ],
        task: 'Write one proactive update to Jose about something on a job he hasn\'t asked about. Not a problem — just something useful he should know.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Proactive communication is the mark of a manager Jose can trust with more responsibility.',
      },
      // Fri — Review
      {
        topic: 'Week 12 Review — Daily Reporting',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Have submitted an EOD report every day this week',
          'Describe the report format from memory',
          'Review this week\'s reports with Jose — what was clear? What was missing?',
        ],
        task: 'Review all 5 EOD reports from this week with Jose. What did Jose have to ask that should have been in the report? Identify your one reporting blind spot.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Phase 3 complete. You now run the job. Next phase: you run the people.',
      },
    ],

    // ── PHASE 4: MANAGING OTHERS (Weeks 13–16) ────────────────────────────────

    // ── WEEK 13: DIRECTING A CREW ─────────────────────────────────────────────
    13: [
      // Mon — Concept
      {
        topic: 'How to Give Clear Task Instructions',
        resourceLabel: 'Crew Management — Video Resource',
        resourceUrl: FIELD_URL_CREW,
        objectives: [
          'Know the 4-part instruction format: What, Where, By When, To What Standard',
          'Understand that vague instructions create vague results',
          'Know how to confirm a crew member understood — not just "got it?"',
        ],
        task: 'Write 3 crew instructions using the 4-part format for real tasks on your current jobs. Compare to how you normally give instructions. What changed?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. "Handle the bathroom" is not an instruction. "Tape the drywall in the master bath, finish Level 4, by end of today" is.',
      },
      // Tue — Application
      {
        topic: 'Setting Daily Production Targets',
        resourceLabel: 'Crew Management — Video Resource',
        resourceUrl: FIELD_URL_CREW,
        objectives: [
          'Know how to set a realistic daily production target for a crew based on scope and headcount',
          'Understand that a crew without a target works to comfort, not completion',
          'Know how to set the target before you leave the site in the morning',
        ],
        task: 'Set a daily production target for one crew before their morning start. Check in at midday. Were they on track? Why or why not? Report to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Crews with clear daily targets finish faster and make fewer mistakes.',
      },
      // Wed — Practice
      {
        topic: 'Accountability Check-ins',
        resourceLabel: 'Crew Management — Video Resource',
        resourceUrl: FIELD_URL_CREW,
        objectives: [
          'Know the check-in cadence: morning direction + midday check + EOD confirmation',
          'Understand how to do a check-in without hovering or undermining the crew',
          'Know how to respond when work is behind or off-standard at check-in time',
        ],
        task: 'Do 3 real check-ins today (morning, midday, EOD) on one crew. Write what you found at each check-in and what action you took. Share with Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Check-ins catch problems while there\'s still time to fix them. Inspections at the end just find excuses.',
      },
      // Thu — Deepen
      {
        topic: 'When a Crew Member Falls Short',
        resourceLabel: 'Crew Management — Video Resource',
        resourceUrl: FIELD_URL_CREW,
        objectives: [
          'Know the 3-step response: address privately, describe the standard, give one chance to correct',
          'Understand that public correction damages crew morale and authority',
          'Know when to escalate a crew performance issue to Jose',
        ],
        task: 'Write the script Jorge uses when a crew member\'s work doesn\'t meet NFR standard. What does he say? How does he say it? When does he loop in Jose?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. How you handle one crew member who falls short defines how every crew member performs.',
      },
      // Fri — Review
      {
        topic: 'Week 13 Review — Directing a Crew',
        resourceLabel: 'Crew Management — Video Resource',
        resourceUrl: FIELD_URL_CREW,
        objectives: [
          'Use the 4-part instruction format naturally, without thinking about it',
          'Set and track a daily production target independently',
          'Handle an off-standard situation with confidence',
        ],
        task: 'Jose reviews Jorge\'s check-in notes from the week. Discuss: were the production targets realistic? Were corrections made early enough? What needs to improve?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Directing a crew is the skill that separates a worker from a manager. You\'re becoming a manager.',
      },
    ],

    // ── WEEK 14: MANAGING SUBCONTRACTORS ─────────────────────────────────────
    14: [
      // Mon — Concept
      {
        topic: 'Interior Surface Oversight',
        resourceLabel: 'NAHB Field Management Resource',
        resourceUrl: FIELD_URL_NAHB,
        objectives: [
          'Understand how Interior Surface fits into the NFR model (1099 sub, 30% markup)',
          'Know the NFR quality gate: IS work must be inspected before NFR signs off',
          'Know the communication protocol with Interior Surface (go through Jose, not directly)',
        ],
        task: 'Review the NFR Interior Surface SOP. Write: What is Jorge\'s role when IS is on site? What does he inspect? What does he not decide?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. IS is NFR\'s most trusted sub — but trust is verified, not assumed.',
      },
      // Tue — Application
      {
        topic: 'Managing Painting Subcontractors',
        resourceLabel: 'NAHB Field Management Resource',
        resourceUrl: FIELD_URL_NAHB,
        objectives: [
          'Know the NFR quality standard a painter sub must hit before Jorge signs off',
          'Know how to brief a painter sub at the start of a job: scope, standard, deadline',
          'Know the step if a painter sub\'s work doesn\'t meet standard: document, correct before leaving',
        ],
        task: 'Brief a painter sub (or write the briefing script) for an active painting job. What do you tell them before they start? What do you inspect before they leave?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. A well-briefed sub does better work. Don\'t assume they know NFR\'s standard — tell them.',
      },
      // Wed — Practice
      {
        topic: 'Managing Flooring Crews',
        resourceLabel: 'NAHB Field Management Resource',
        resourceUrl: FIELD_URL_NAHB,
        objectives: [
          'Know the pre-start checklist for a flooring sub: subfloor ready, materials on site, plan reviewed',
          'Know the mid-job check: seams, expansion gap, transitions staged',
          'Know the final inspection: walk with the sub before they pack up',
        ],
        task: 'Create a 1-page flooring sub checklist: pre-start, mid-job, and final walk. Use it on the next flooring job. Submit completed version to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. A checklist shared with the sub upfront sets expectations. Inspection without it feels arbitrary.',
      },
      // Thu — Deepen
      {
        topic: 'Quality Gates for All Subs',
        resourceLabel: 'NAHB Field Management Resource',
        resourceUrl: FIELD_URL_NAHB,
        objectives: [
          'Understand that a "quality gate" is a defined checkpoint before a sub moves to the next phase',
          'Know the NFR quality gates: after demo, after rough, after drywall, after paint, after flooring',
          'Know that Jorge owns these gates — not Jose, not the sub',
        ],
        task: 'Write the quality gate criteria for one trade (your choice). What does Jorge check? What are the pass/fail criteria? What happens if it fails?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Quality gates are how NFR delivers consistent work across every sub, every job.',
      },
      // Fri — Review
      {
        topic: 'Week 14 Review — Subcontractor Management',
        resourceLabel: 'NAHB Field Management Resource',
        resourceUrl: FIELD_URL_NAHB,
        objectives: [
          'Brief a sub confidently before a job starts',
          'Inspect and pass/fail a sub\'s work using trade standards',
          'Know what goes to Jose vs. what Jorge handles independently',
        ],
        task: 'Jose reviews Jorge\'s sub inspection notes from the week. Discuss: were corrections made before subs left? Were quality gates enforced? What to improve?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Managing subs is the same as managing crews — except they\'re not on payroll and they can walk.',
      },
    ],

    // ── WEEK 15: QUALITY CONTROL INSPECTIONS ─────────────────────────────────
    15: [
      // Mon — Concept
      {
        topic: 'Formal Inspection Process',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Understand the difference between a walk-through and a formal inspection',
          'Know that a formal inspection is documented, trade-specific, and signed off',
          'Know that Jorge\'s sign-off is what triggers the next trade or the client walk',
        ],
        task: 'Write the NFR formal inspection process: who does it, when, what tools are needed, and what the output document looks like.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. An inspection without documentation is just an opinion. Documentation is what holds up.',
      },
      // Tue — Application
      {
        topic: 'Paint Quality Control Inspection',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Complete a full paint QC inspection on a finished room',
          'Use the 5-point checklist: holidays, lap marks, cut lines, drips, sheen consistency',
          'Document findings with photos and written notes',
        ],
        task: 'Conduct a formal paint QC on an active or recently completed room. Complete the checklist. Attach photos. Submit pass/fail to Jose with documentation.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. The first time you run a formal QC without prompting is the day Jose starts trusting you with more.',
      },
      // Wed — Practice
      {
        topic: 'Drywall QC Inspection',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Complete a drywall QC inspection before painting begins',
          'Use the 6-point checklist: seams, corners, fasteners, texture, finish level, moisture',
          'Know the threshold for re-mud vs. touch-and-prime',
        ],
        task: 'Conduct a drywall QC on any room before painting begins. Write findings. Issue a pass or a rework requirement. Notify the drywaller.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Drywall QC before paint saves one of the most expensive reworks in residential construction.',
      },
      // Thu — Deepen
      {
        topic: 'Flooring QC & Punch Lists',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Complete a flooring QC using the NFR final walk checklist',
          'Create a punch list from QC findings: trade, item, correction, deadline',
          'Know how to manage a punch list to completion before client walk-through',
        ],
        task: 'Create a real punch list from a current job. Format: Trade | Item | Correction | Who fixes it | Deadline. Submit to Jose and begin tracking.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Punch lists don\'t fix themselves. They need an owner and a deadline. That\'s Jorge.',
      },
      // Fri — Review
      {
        topic: 'Week 15 Review — QC',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Conduct any trade QC inspection without being asked',
          'Produce a documented punch list from QC findings',
          'Close at least one punch list item this week',
        ],
        task: 'Review the week\'s QC documentation with Jose. Did inspections happen before the next trade moved in? Were punch list items closed? What to improve?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. QC is not about catching people. It\'s about delivering a product worth the price NFR charges.',
      },
    ],

    // ── WEEK 16: SCOPE & CHANGE ORDERS ───────────────────────────────────────
    16: [
      // Mon — Concept
      {
        topic: "What's In Scope",
        resourceLabel: 'Change Order & Scope — Video Resource',
        resourceUrl: FIELD_URL_CHANGE_ORD,
        objectives: [
          'Know how to read the NFR scope document before showing up to a job',
          'Understand that anything not in the scope document is not NFR\'s responsibility — yet',
          'Know the scope review habit: read it before every visit',
        ],
        task: 'Pull the scope document for one active job. List everything that is explicitly in scope. Then list 3 things a client might ask for that are NOT in scope.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. The scope document is your contract on site. Know it better than the client does.',
      },
      // Tue — Application
      {
        topic: 'Change Order Triggers',
        resourceLabel: 'Change Order & Scope — Video Resource',
        resourceUrl: FIELD_URL_CHANGE_ORD,
        objectives: [
          'Know the 4 change order triggers: client request, hidden condition, scope error, material upgrade',
          'Understand that Jorge identifies triggers — Jose decides and prices the change order',
          'Know the no-work-without-approval rule: nothing outside scope happens without a signed CO',
        ],
        task: 'Walk an active job. Can you find any work that was done or requested that might be outside the original scope? Document it and report to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Every unauthorized scope change costs NFR money. Every flagged one is a chance to add revenue.',
      },
      // Wed — Practice
      {
        topic: 'Language to Use on Change Orders',
        resourceLabel: 'Change Order & Scope — Video Resource',
        resourceUrl: FIELD_URL_CHANGE_ORD,
        objectives: [
          'Know the correct language when a client asks for something outside scope',
          'Use the phrase: "That sounds like something we can do — let me have Jose put together a change order for you"',
          'Know why Jorge never quotes prices on site for out-of-scope work',
        ],
        task: 'Write 3 client out-of-scope requests and your exact response to each. Use the redirect language. Show Jose for feedback.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. The client respects a field manager who knows his boundaries. It feels professional, not evasive.',
      },
      // Thu — Deepen
      {
        topic: 'Escalation on Scope Issues',
        resourceLabel: 'Change Order & Scope — Video Resource',
        resourceUrl: FIELD_URL_CHANGE_ORD,
        objectives: [
          'Know the escalation timeline: scope issue identified → Jose notified within 2 hours',
          'Understand that crew should never start out-of-scope work even if the client asks nicely',
          'Know how to hold the line with a client while Jose prepares a change order',
        ],
        task: 'Write the escalation script Jorge uses when a client asks crew to "just do this one thing" that\'s outside scope and crew almost agreed. What does Jorge say to the crew? To the client?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Unauthorized work is NFR\'s #1 risk for disputes. Jorge is the last line of defense.',
      },
      // Fri — Review
      {
        topic: 'Week 16 Review — Scope & Change Orders',
        resourceLabel: 'Change Order & Scope — Video Resource',
        resourceUrl: FIELD_URL_CHANGE_ORD,
        objectives: [
          'Read a scope document and identify what\'s included vs. excluded',
          'Identify a change order trigger and escalate it correctly',
          'Use redirect language with a client requesting out-of-scope work',
        ],
        task: 'Jose gives Jorge a scenario: crew is on site, client asks for something outside scope, and a crew member is about to say yes. Jorge walks through his exact response, step by step.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Phase 4 complete. You can now direct crews AND manage subs AND protect scope. That\'s a field manager.',
      },
    ],

    // ── PHASE 5: LEADERSHIP (Weeks 17–20) ────────────────────────────────────

    // ── WEEK 17: RUNNING MULTIPLE JOBS ───────────────────────────────────────
    17: [
      // Mon — Concept
      {
        topic: 'Prioritizing Multiple Site Visits',
        resourceLabel: 'Multi-Job Management — Video Resource',
        resourceUrl: FIELD_URL_BUDGET,
        objectives: [
          'Know the 3-tier triage for site visits: critical (today or it stops), important (today for progress), routine (check-in)',
          'Build a daily visit plan each morning at 7am before driving',
          'Understand that the highest-risk job gets the first visit, not the closest job',
        ],
        task: 'Triage all active jobs into 3 tiers. Build today\'s visit sequence based on risk, not geography. Share with Jose. Did he agree with your ranking?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. When you have 5 jobs and 8 hours, sequencing is the skill. Guessing is not.',
      },
      // Tue — Application
      {
        topic: 'Time-Splitting Across Jobs',
        resourceLabel: 'Multi-Job Management — Video Resource',
        resourceUrl: FIELD_URL_BUDGET,
        objectives: [
          'Know how long each type of site visit actually takes: QC inspection (30–60 min), check-in (15 min), problem-solve visit (60–90 min)',
          'Allocate realistic time blocks and stick to them',
          'Know when a job needs more time than planned and how to adjust the rest of the day',
        ],
        task: 'Time your visits today — when you arrive and when you leave each site. At EOD, report: How much time did each job actually take vs. what you planned?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. You can\'t manage time you don\'t track. Start tracking.',
      },
      // Wed — Practice
      {
        topic: 'Triage — Knowing When to Go vs. Trust the Crew',
        resourceLabel: 'Multi-Job Management — Video Resource',
        resourceUrl: FIELD_URL_BUDGET,
        objectives: [
          'Know the difference between a crew that can be left to run and one that needs a physical visit',
          'Understand that every in-person visit has a cost — use them where they matter most',
          'Know the questions that determine "go vs. trust": Who is working? What phase? Any risks flagged?',
        ],
        task: 'For each active job today: decide "go" or "trust the crew with a text check-in." Write your reasoning for each. Submit to Jose and compare your decisions.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Knowing when NOT to go is as important as knowing when to go.',
      },
      // Thu — Deepen
      {
        topic: 'Knowing Which Job Needs You Most',
        resourceLabel: 'Multi-Job Management — Video Resource',
        resourceUrl: FIELD_URL_BUDGET,
        objectives: [
          'Know the risk signals that demand Jorge\'s physical presence: new crew, new trade, client on site, QC gate, known problem',
          'Build a mental model for each job: green/yellow/red at any moment',
          'Know how to update job status throughout the day without waiting for EOD',
        ],
        task: 'At 7am, score each job green/yellow/red. Text Jose the scores. Update the scores at noon. Report: did anything change? Why?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. When Jose asks "which job needs you most?" you should already know — without thinking.',
      },
      // Fri — Review
      {
        topic: 'Week 17 Review — Multiple Jobs',
        resourceLabel: 'Multi-Job Management — Video Resource',
        resourceUrl: FIELD_URL_BUDGET,
        objectives: [
          'Build a daily triage sequence without being prompted',
          'Time-track actual visit durations and compare to planned',
          'Score all active jobs in under 2 minutes',
        ],
        task: 'Review this week\'s triage decisions with Jose. Were the right jobs prioritized? What would Jose have done differently? What will Jorge do differently next week?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Running multiple jobs without dropping any is the core skill of a senior field manager.',
      },
    ],

    // ── WEEK 18: CREW RELIABILITY & LEADERSHIP ───────────────────────────────
    18: [
      // Mon — Concept
      {
        topic: 'Building Trust with Your Crew',
        resourceLabel: 'Field Leadership — Video Resource',
        resourceUrl: FIELD_URL_LEADERSHIP,
        objectives: [
          'Understand that trust is built through consistency, fairness, and follow-through',
          'Know that a crew member who trusts their manager works harder and shows up more reliably',
          'Identify one behavior Jorge does that builds trust and one that might undermine it',
        ],
        task: 'Write: What does a crew member need from a manager to feel trusted and motivated? Then write: What does Jorge do today that matches that? What doesn\'t?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Trust isn\'t built in one conversation. It\'s built in 100 small consistent moments.',
      },
      // Tue — Application
      {
        topic: 'Accountability Without Micromanaging',
        resourceLabel: 'Field Leadership — Video Resource',
        resourceUrl: FIELD_URL_LEADERSHIP,
        objectives: [
          'Know the difference between accountability (checking outcomes) and micromanaging (controlling every step)',
          'Understand that giving crew ownership of the HOW — while holding them to the WHAT — builds reliability',
          'Know when to step in vs. when to let the crew figure it out',
        ],
        task: 'Identify one situation this week where Jorge\'s instinct was to step in and direct. Write: should he have? What was the better move — step in or trust the crew?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. The most reliable crews are the ones that have been trusted to solve problems.',
      },
      // Wed — Practice
      {
        topic: 'Leading by Example',
        resourceLabel: 'Field Leadership — Video Resource',
        resourceUrl: FIELD_URL_LEADERSHIP,
        objectives: [
          'Know that crew members copy the manager\'s behavior — especially around safety, quality, and attitude',
          'Understand that showing up early, staying organized, and being honest creates a culture that others adopt',
          'Identify one behavior Jorge models that he would want every crew member to copy',
        ],
        task: 'Write: If your crew copied every habit you have — your arrival time, your communication style, your attention to quality — would NFR be better or worse? What would you change?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. You don\'t build a culture by talking about it. You build it by being it.',
      },
      // Thu — Deepen
      {
        topic: 'Handling a Difficult Crew Member',
        resourceLabel: 'Field Leadership — Video Resource',
        resourceUrl: FIELD_URL_LEADERSHIP,
        objectives: [
          'Know the 3-step response: address behavior privately, state the standard, set a clear expectation with a deadline',
          'Understand the difference between a performance issue (fixable) and a values issue (not)',
          'Know when to escalate a crew member issue to Jose and what information to bring',
        ],
        task: 'Write the script Jorge would use with a crew member who showed up 45 minutes late to a job site with a client visit scheduled. Step by step. What does he say and do?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. How you handle one bad situation tells the whole crew what the standard is.',
      },
      // Fri — Review
      {
        topic: 'Week 18 Review — Leadership',
        resourceLabel: 'Field Leadership — Video Resource',
        resourceUrl: FIELD_URL_LEADERSHIP,
        objectives: [
          'Describe the difference between a reliable crew and an unreliable one — and what Jorge\'s role is in each',
          'Handle a crew accountability scenario without escalating unnecessarily',
          'Identify one leadership improvement to carry into next week',
        ],
        task: 'Jose and Jorge debrief on crew performance this week. Which crews felt solid? Which felt loose? What did Jorge do that helped? What would he do differently?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Leadership is the longest game. Every week you either build it or borrow against it.',
      },
    ],

    // ── WEEK 19: BUDGET & MATERIAL AWARENESS ─────────────────────────────────
    19: [
      // Mon — Concept
      {
        topic: 'Flagging Material Risk',
        resourceLabel: 'Budget & Material Cost — Video Resource',
        resourceUrl: FIELD_URL_BUDGET,
        objectives: [
          'Know the signs of material risk: short supply, wrong order, damage on delivery, wrong spec',
          'Understand that material risk flagged before install saves money; material risk discovered after costs 3x more',
          'Know the protocol: flag to Jose within 1 hour of identifying a material concern',
        ],
        task: 'Check materials on one active job: Are the right products on site? Right quantity? Right spec? Any damage? Write a material status report and submit to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Every material problem caught before install is a crisis avoided. Every one missed is a callback.',
      },
      // Tue — Application
      {
        topic: 'Understanding NFR Markups',
        resourceLabel: 'Budget & Material Cost — Video Resource',
        resourceUrl: FIELD_URL_BUDGET,
        objectives: [
          'Know the NFR markup structure: 24% on materials, 30% on subs, 15% on equipment',
          'Understand why markups exist and what they cover: overhead, risk, margin',
          'Know that Jorge never shares markup amounts with clients or subs',
        ],
        task: 'Write in your own words: why does NFR mark up materials and subs? What would happen to the company if it didn\'t? Why should this stay between Jorge and Jose?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Markup knowledge is internal. It protects the business model. Guard it.',
      },
      // Wed — Practice
      {
        topic: 'Cost vs. Quality Decisions',
        resourceLabel: 'Budget & Material Cost — Video Resource',
        resourceUrl: FIELD_URL_BUDGET,
        objectives: [
          'Know the NFR default: spec quality, not premium quality — unless the client paid for the upgrade',
          'Understand that cost overruns on materials come out of NFR\'s margin',
          'Know the escalation path for a sub who wants to use a higher-cost material "because it\'s better"',
        ],
        task: 'A sub tells Jorge he wants to use a slightly better drywall mud "because it\'s easier to work with." It costs $40 more per job. Write: What does Jorge say? What does he do?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Field managers who protect the budget are trusted with bigger projects. Field managers who don\'t are managed tighter.',
      },
      // Thu — Deepen
      {
        topic: 'Budget Conversations with Jose',
        resourceLabel: 'Budget & Material Cost — Video Resource',
        resourceUrl: FIELD_URL_BUDGET,
        objectives: [
          'Know how to bring a cost concern to Jose with context: what it is, why it\'s a risk, what the options are',
          'Understand that budget conversations are facts first, not opinions',
          'Know the format: Situation | Cost Impact | Options | Jorge\'s Recommendation',
        ],
        task: 'Identify one real cost risk on an active job. Write it up in the 4-part format. Bring it to Jose as a budget flag — not just a complaint.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Jose trusts Jorge with bigger projects when Jorge talks about money like a business owner.',
      },
      // Fri — Review
      {
        topic: 'Week 19 Review — Budget & Materials',
        resourceLabel: 'Budget & Material Cost — Video Resource',
        resourceUrl: FIELD_URL_BUDGET,
        objectives: [
          'Conduct a material audit on an active job without being asked',
          'Explain NFR\'s markup structure accurately and confidentially',
          'Bring a cost concern to Jose in the correct 4-part format',
        ],
        task: 'Jose reviews Jorge\'s material flags from the week. Were risks identified early? Were budget concerns brought as solutions? What to sharpen before graduation week?',
        tip: 'Complete during your 7:30–8:00am window before warehouse. One week left. This is the final stretch before your full field leadership role.',
      },
    ],

    // ── WEEK 20: GRADUATION — FIELD LEADERSHIP ────────────────────────────────
    20: [
      // Mon — Concept
      {
        topic: 'Full Site Walkthrough Prep',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know what a full site walkthrough assessment covers: safety, quality, documentation, crew direction, client readiness',
          'Prepare for the joint walkthrough with Jose on Wednesday',
          'Review all 20 weeks of training and identify your strongest and weakest areas',
        ],
        task: 'Self-audit across all 5 training phases. Rate yourself 1–5 in each: Communication, Safety, Trade Knowledge, Operations, Leadership. Write your honest assessment.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. The best field managers are always honest about where they can improve. That\'s what makes them great.',
      },
      // Tue — Application
      {
        topic: 'Self-Assessment',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Write a personal self-assessment across all 5 training phases',
          'Identify the 3 areas of biggest growth since Week 1',
          'Identify the 1 area that still needs the most work',
        ],
        task: 'Write your self-assessment. Be specific: what could you NOT do in Week 1 that you can do now? What situation still makes you uncomfortable? Submit to Jose before Wednesday.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. A self-assessment that only highlights strengths is not a self-assessment — it\'s a performance.',
      },
      // Wed — Practice
      {
        topic: 'Joint Site Walkthrough with Jose',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Lead Jose through an active job site as the field manager',
          'Call out quality conditions, safety conditions, and documentation status unprompted',
          'Receive Jose\'s evaluation on all 5 areas: safety, quality, crew direction, documentation, communication',
        ],
        task: 'Jorge leads Jose on a full active site walk. Jorge calls out everything. Jose observes and evaluates. No coaching during the walk — this is the assessment.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. This is the real thing. Lead like you mean it.',
      },
      // Thu — Deepen
      {
        topic: 'Reflection & 90-Day Growth Plan',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Debrief on the joint walkthrough with Jose',
          'Understand the areas Jose identified for continued growth',
          'Build a personal 90-day growth plan: 3 habits to cement, 1 skill to deepen',
        ],
        task: 'Jose shares his walkthrough evaluation. Jorge writes a 90-day growth plan based on the feedback: 3 habits, 1 skill, 1 stretch goal. Submit to Jose.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Graduation is not the finish line — it\'s the starting line for the next level.',
      },
      // Fri — Graduation
      {
        topic: 'Graduation — Field Manager',
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Celebrate 20 weeks of consistent 7:30am training with Scott',
          'Acknowledge the growth from Week 1 (email basics) to Week 20 (leading a site walk)',
          'Commit to the 90-day plan as the next chapter of Jorge\'s leadership journey',
        ],
        task: 'Jorge and Jose share this morning\'s carpool reviewing the 20-week journey. One question from Jose: "What is the most important thing you learned?" Jorge answers from the heart.',
        tip: 'Complete during your 7:30–8:00am window before warehouse. Twenty weeks. One hundred sessions. You earned this. Now go be the field manager NFR needs.',
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // TRAINING CONTENT CONFIG
  // ═══════════════════════════════════════════════════════════════════════════

  const TRAINING_CONTENT = {
    maria: {
      name:      'Maria',
      role:      'Office & Design Coordinator',
      color:     '#5F8062',
      anchor:    '2026-03-16',
      startWeek: 1,
      plan:      MARIA_PLAN,
    },
    scott: {
      name:      'Scott',
      role:      'Warehouse Manager / CNC Operator',
      color:     '#C4622D',
      anchor:    '2026-03-16',
      startWeek: 1,
      plan:      CNC_PLAN,
    },
    jorge: {
      name:      'Jorge',
      role:      'Field Manager',
      color:     '#7BAFD4',
      anchor:    '2026-03-16',
      startWeek: 1,
      plan:      FIELD_PLAN,
    },
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // getTrainingDay
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * Returns the training content for a given employee on a given date.
   * Returns null on weekends, before anchor date, or when no plan exists.
   */
  function getTrainingDay(employee, dateStr) {
    const config = TRAINING_CONTENT[employee];
    if (!config) return null;

    const date = new Date(dateStr + 'T12:00:00');
    const dow = date.getDay();
    if (dow === 0 || dow === 6) return null;

    const anchor = new Date(config.anchor + 'T12:00:00');
    const diffDays = Math.round((date - anchor) / 86400000);
    if (diffDays < 0) return null;

    const weekOffset = Math.floor(diffDays / 7);
    const weekNum    = config.startWeek + weekOffset;
    const dayIdx     = dow - 1; // Mon=0, Fri=4

    const weekPlan = config.plan[weekNum];
    if (!weekPlan) return null;

    const dayData = weekPlan[dayIdx];
    const result = {
      week: weekNum,
      day:  dayIdx + 1,
      employee,
      ...dayData,
    };

    // For 3-block days (Maria), add a synthetic topic for manager/tracker compat
    if (dayData && dayData.mozaik && !dayData.topic) {
      result.topic = dayData.mozaik.topic;
    }

    return result;
  }

  // ── exports ────────────────────────────────────────────────────────────────
  window.TRAINING_CONTENT = TRAINING_CONTENT;
  window.getTrainingDay   = getTrainingDay;
})();
