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

// ── INTEGRATED 18-WEEK PLAN — Maria ──────────────────────────────────────────
// Weeks 1–7:  Mozaik (1hr) + Admin (45min) + Design (45min)
// Weeks 8–18: Mozaik (1hr) + Admin (45min)  [Design track ends after Week 7]
// Day types: Mon/Wed = video | Tue/Thu = quiz | Fri = weekly-review
// ─────────────────────────────────────────────────────────────────────────────

const MARIA_PLAN = {

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 1 — What Is Mozaik? | Portal & Workspace Setup | Design Inspiration
  // ══════════════════════════════════════════════════════════════════════
  1: [
    {
      mozaik: {
        topic: 'Mozaik Overview — What the Software Does for NFR',
        duration: 60,
        type: 'video',
        objectives: [
          'Understand what Mozaik is and why NFR uses it',
          'See the end-to-end workflow from client brief to cut list',
          'Know the difference between design mode and production mode',
        ],
        task: 'Write 3 sentences describing what Mozaik does in your own words.',
        tip: 'Mozaik connects the design you show a client directly to the parts the shop cuts. Nothing else needs to be redrawn.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Staff Portal Orientation — Tools You Will Use Every Day',
        duration: 45,
        type: 'video',
        objectives: [
          'Log in to every tool: staff portal, CompanyCam, Gmail, Google Drive',
          'Know where agreements, proposals, and work orders live',
          'Understand the difference between client-facing tools and internal tools',
        ],
        task: 'Screenshot your logged-in dashboard for each tool and share with Jose.',
        tip: 'Bookmark each tool on Day 1. You will open these every morning.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Design Inspiration — Nate Berkus and the Art of Layering',
        duration: 45,
        type: 'video',
        objectives: [
          'Identify Nate Berkus\'s signature layering technique',
          'Understand how texture and tone work together in a room',
          'Name 3 elements you could apply to a kitchen or bathroom',
        ],
        task: 'Find one Nate Berkus kitchen image online. Write what you notice first.',
        tip: 'Great design has a hierarchy — your eye travels on purpose.',
        resourceLabel: 'Nate Berkus Design — YouTube',
        resourceUrl: 'https://www.youtube.com/@nateberkusdesigns',
      },
    },
    {
      mozaik: {
        topic: 'Mozaik Overview — Quiz & Reflection',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Recall the main purpose of Mozaik in NFR\'s workflow',
          'Identify design mode vs. production mode outputs',
          'Explain why NFR uses cabinet design software instead of paper drawings',
        ],
        task: 'Complete the Week 1 Day 1 Mozaik quiz.',
        tip: 'If you missed a question, re-read your Day 1 notes before moving on.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Staff Portal — Quiz & Tool Checklist',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Confirm login access to all 4 tools from Day 1',
          'Navigate to the agreements section without help',
          'Find and open the most recent work order in the portal',
        ],
        task: 'Complete the admin quiz for portal orientation.',
        tip: 'Ask Jose if anything is locked — do not skip access issues.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Design Inspiration — Quiz: Nate Berkus',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name 2 recurring design principles from Nate Berkus',
          'Explain what "layering" means in an interior space',
          'Apply one layering concept to a kitchen NFR might design',
        ],
        task: 'Complete the design quiz for Week 1 Day 1.',
        tip: 'Relate every design concept back to kitchens and bathrooms — that\'s NFR\'s focus.',
        resourceLabel: 'Nate Berkus Design — YouTube',
        resourceUrl: 'https://www.youtube.com/@nateberkusdesigns',
      },
    },
    {
      mozaik: {
        topic: 'Interface Tour — Menus, Toolbars, and Panels',
        duration: 60,
        type: 'video',
        objectives: [
          'Name the 5 main areas of the Mozaik interface',
          'Open and close each panel without looking at notes',
          'Find the cabinet library panel and the properties panel',
        ],
        task: 'Label a screenshot of the Mozaik interface with the names of all 5 areas.',
        tip: 'The properties panel on the right is where you will spend most of your time.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Google Workspace — Drive, Docs, and Folder Structure',
        duration: 45,
        type: 'video',
        objectives: [
          'Navigate the NFR Google Drive folder hierarchy',
          'Find the 2026 client folder and open a project',
          'Create a new Google Doc in the correct folder',
        ],
        task: 'Create a test doc in the correct Drive folder and share it with Jose.',
        tip: 'Every client gets their own folder. Never save files to the root Drive.',
        resourceLabel: 'NFR Google Drive',
        resourceUrl: 'https://drive.google.com/',
      },
      design: {
        topic: 'Angela Rose — Functional Glamour and Spatial Flow',
        duration: 45,
        type: 'video',
        objectives: [
          'Describe Angela Rose\'s approach to functional glamour',
          'Identify how she balances storage with visual openness',
          'Name one layout technique she uses in kitchens',
        ],
        task: 'Find one Angela Rose kitchen or bathroom. Write what you would copy for an NFR client.',
        tip: 'Notice how she controls visual weight — heavy elements balanced with light ones.',
        resourceLabel: 'Angela Rose Interiors — YouTube',
        resourceUrl: 'https://www.youtube.com/@angelarosehome',
      },
    },
    {
      mozaik: {
        topic: 'Interface Tour — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Recall the name and function of each interface area',
          'Navigate between panels without a guide',
          'Open the properties panel and change one value',
        ],
        task: 'Complete the Mozaik interface quiz.',
        tip: 'Speed through the panels 3 times before the quiz — muscle memory matters here.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Google Workspace — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name the NFR Drive folder structure from memory',
          'Create and share a doc correctly',
          'Find a past client project in under 30 seconds',
        ],
        task: 'Complete the Google Workspace admin quiz.',
        tip: 'The folder structure is the same every time — learn it once.',
        resourceLabel: 'NFR Google Drive',
        resourceUrl: 'https://drive.google.com/',
      },
      design: {
        topic: 'Angela Rose — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Explain functional glamour in your own words',
          'Describe one spatial flow technique Angela Rose uses',
          'Apply her balance principle to a sample NFR kitchen layout',
        ],
        task: 'Complete the Angela Rose design quiz.',
        tip: 'Think about how NFR clients want their kitchens to feel, not just look.',
        resourceLabel: 'Angela Rose Interiors — YouTube',
        resourceUrl: 'https://www.youtube.com/@angelarosehome',
      },
    },
    {
      mozaik: {
        topic: 'Week 1 Review — Mozaik Orientation',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Summarize what Mozaik does and where it fits in NFR\'s process',
          'Navigate the interface without looking at notes',
          'Identify one thing that was confusing and ask Jose about it',
        ],
        task: 'Open Mozaik, navigate to each panel once, then close and summarize the week to Jose.',
        tip: 'Week 1 is orientation. If something didn\'t click, that\'s normal — note it and keep moving.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 1 Review — Admin Tools Checkpoint',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Log in to all tools without help',
          'Find the most recent agreement and open it',
          'Share the correct Google Drive folder with Jose as a test',
        ],
        task: 'Log in to all tools and report to Jose which ones are fully working.',
        tip: 'Any login issue that isn\'t fixed by Friday becomes a Monday problem — fix it today.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Week 1 Review — Design Foundations',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Name both designers studied this week and one key principle from each',
          'Identify one design principle you would use in an NFR kitchen',
          'Write one question about design you want Jose to answer',
        ],
        task: 'Write a 3-sentence summary of what you learned about design this week.',
        tip: 'Design fluency takes time. You\'re building vocabulary — each week adds more.',
        resourceLabel: 'Nate Berkus Design — YouTube',
        resourceUrl: 'https://www.youtube.com/@nateberkusdesigns',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 2 — The Cabinet Library | Client Communication | Sarah Richardson & Bobby Berk
  // ══════════════════════════════════════════════════════════════════════
  2: [
    {
      mozaik: {
        topic: 'Cabinet Library — Categories, Browsing, and Search',
        duration: 60,
        type: 'video',
        objectives: [
          'Identify the 4 main cabinet categories: base, wall, tall, specialty',
          'Use the search bar to find a specific cabinet type',
          'Filter the library by category and browse results',
        ],
        task: 'Find a 30" base cabinet and a 30" wall cabinet. Screenshot both.',
        tip: 'Learn the category names now — clients will ask for them by name.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Client Communication — Email Templates and Response Standards',
        duration: 45,
        type: 'video',
        objectives: [
          'Know the NFR standard response time (same business day)',
          'Use the correct email template for a new client inquiry',
          'CC the correct people on client emails',
        ],
        task: 'Draft a sample first-reply email to a new flooring inquiry client.',
        tip: 'Every client email either builds trust or erodes it. Template, then personalize.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Sarah Richardson — Livable Luxury and the Canadian Design Mindset',
        duration: 45,
        type: 'video',
        objectives: [
          'Describe Sarah Richardson\'s "livable luxury" philosophy',
          'Identify how she handles transitions between rooms',
          'Note her approach to kitchen cabinet color and hardware',
        ],
        task: 'Find one Sarah Richardson kitchen. List 3 specific design choices you notice.',
        tip: 'Sarah Richardson designs for how a space lives, not just how it photographs.',
        resourceLabel: 'Sarah Richardson Design — YouTube',
        resourceUrl: 'https://www.youtube.com/@sarahrichardsondesign',
      },
    },
    {
      mozaik: {
        topic: 'Cabinet Library — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Name the 4 cabinet categories without looking at notes',
          'Find 3 specific cabinets using search in under 2 minutes',
          'Explain the difference between base and tall cabinets',
        ],
        task: 'Complete the cabinet library quiz.',
        tip: 'If you can\'t find a cabinet fast, the client is waiting. Practice search speed.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Client Communication — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Recall NFR\'s response time standard',
          'Fill in a first-reply email template for a paint inquiry',
          'Identify who to CC on a cabinet client email',
        ],
        task: 'Complete the client communication admin quiz.',
        tip: 'Slow response = lost job. Speed and professionalism are the same thing here.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Sarah Richardson — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Define "livable luxury" in your own words',
          'Describe one transition technique she uses',
          'Apply her hardware principle to an NFR cabinet color choice',
        ],
        task: 'Complete the Sarah Richardson design quiz.',
        tip: 'Her work is practical — good model for NFR clients who want beauty without fuss.',
        resourceLabel: 'Sarah Richardson Design — YouTube',
        resourceUrl: 'https://www.youtube.com/@sarahrichardsondesign',
      },
    },
    {
      mozaik: {
        topic: 'Placing Your First Base Cabinet',
        duration: 60,
        type: 'video',
        objectives: [
          'Create a new project and set room dimensions',
          'Drag a base cabinet from the library into the room',
          'Use the properties panel to confirm its width, height, and depth',
        ],
        task: 'Place a 36" base cabinet in a new project. Screenshot the result.',
        tip: 'Every placement starts with room dimensions. Get those right first.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'CompanyCam — Job Photos, Albums, and Tagging',
        duration: 45,
        type: 'video',
        objectives: [
          'Create a new project in CompanyCam',
          'Upload a photo and tag it correctly',
          'Share a photo album with Jose',
        ],
        task: 'Create a test CompanyCam project and upload 2 sample photos.',
        tip: 'CompanyCam is your field record. Every job should have before and after photos.',
        resourceLabel: 'CompanyCam App',
        resourceUrl: 'https://companycam.com/',
      },
      design: {
        topic: 'Bobby Berk — Approachable Modern and the Edit Principle',
        duration: 45,
        type: 'video',
        objectives: [
          'Describe Bobby Berk\'s approach to "approachable modern"',
          'Understand his "edit principle" — removing rather than adding',
          'Identify his kitchen and bath signature choices',
        ],
        task: 'Find one Bobby Berk kitchen. Identify 2 elements he removed to make it feel modern.',
        tip: 'Modern design is often about what you take out, not what you add.',
        resourceLabel: 'Bobby Berk Interiors — YouTube',
        resourceUrl: 'https://www.youtube.com/@bobbyberk',
      },
    },
    {
      mozaik: {
        topic: 'Placing Base, Wall, and Tall Cabinets — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Place a base, wall, and tall cabinet without help',
          'Confirm dimensions in the properties panel for each',
          'Move a placed cabinet to a new position',
        ],
        task: 'Complete the Mozaik cabinet placement quiz.',
        tip: 'Placement is muscle memory. Do it 10 times and it becomes automatic.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'CompanyCam — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name the 3 steps to create a new CompanyCam project',
          'Explain why photo tagging matters for NFR',
          'Describe how to share a photo with Jose correctly',
        ],
        task: 'Complete the CompanyCam admin quiz.',
        tip: 'A photo without a tag is just a file. Always tag job, location, and phase.',
        resourceLabel: 'CompanyCam App',
        resourceUrl: 'https://companycam.com/',
      },
      design: {
        topic: 'Bobby Berk — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Define the edit principle',
          'Name 2 Bobby Berk kitchen signature choices',
          'Apply the edit principle to an NFR design concept',
        ],
        task: 'Complete the Bobby Berk design quiz.',
        tip: 'Clients often want to add more. Your job is to protect the edit.',
        resourceLabel: 'Bobby Berk Interiors — YouTube',
        resourceUrl: 'https://www.youtube.com/@bobbyberk',
      },
    },
    {
      mozaik: {
        topic: 'Week 2 Review — Cabinet Library and First Placements',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Find any cabinet type in the library in under 60 seconds',
          'Place one of each category without notes',
          'Confirm properties for each placed cabinet',
        ],
        task: 'Open Mozaik and place one base, one wall, and one tall cabinet. Show Jose.',
        tip: 'You\'re building the foundation. It feels slow now — it won\'t by Week 6.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 2 Review — Communication and Tools',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Draft a first-reply email without the template',
          'Create a CompanyCam project and add photos',
          'Find last week\'s Drive files without help',
        ],
        task: 'Draft a sample client email and show it to Jose before sending.',
        tip: 'Communication and tools together = your daily rhythm. Solidify both.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Week 2 Review — Designer Principles Comparison',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Compare Nate Berkus, Angela Rose, Sarah Richardson, and Bobby Berk in 2 sentences each',
          'Identify which designer is closest to NFR\'s target client taste',
          'Write one design rule you will apply on the next job',
        ],
        task: 'Write a 1-paragraph summary of this week\'s design lessons for Jose.',
        tip: 'You don\'t need to love every designer. You need to understand their tools.',
        resourceLabel: 'Bobby Berk Interiors — YouTube',
        resourceUrl: 'https://www.youtube.com/@bobbyberk',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 3 — First Kitchen | Scheduling & Calendar | Joanna Gaines & Kelly Wearstler
  // ══════════════════════════════════════════════════════════════════════
  3: [
    {
      mozaik: {
        topic: 'Building a Straight-Wall Kitchen — Room Setup and Base Run',
        duration: 60,
        type: 'video',
        objectives: [
          'Set up a 10×12 room with correct wall dimensions',
          'Fill a wall run with base cabinets end to end',
          'Verify the total run width matches the wall',
        ],
        task: 'Build a 10-foot straight base cabinet run. Screenshot the top view.',
        tip: 'Always start with the room, then the walls, then cabinets. Never the other way.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Google Calendar — Scheduling Appointments and Blocking Time',
        duration: 45,
        type: 'video',
        objectives: [
          'Create a new calendar event with location and attendees',
          'Block Jose\'s calendar for a site visit',
          'Set a reminder on a client appointment',
        ],
        task: 'Create a test calendar event for a fictitious client appointment.',
        tip: 'Every appointment that isn\'t on the calendar doesn\'t exist.',
        resourceLabel: 'Google Calendar',
        resourceUrl: 'https://calendar.google.com/',
      },
      design: {
        topic: 'Joanna Gaines — Farmhouse Modern and the Story of a Space',
        duration: 45,
        type: 'video',
        objectives: [
          'Describe what "farmhouse modern" means in Joanna Gaines\'s work',
          'Identify how she uses shiplap, open shelving, and natural wood',
          'Note her kitchen island design choices',
        ],
        task: 'Find one Joanna Gaines kitchen. List the materials and finishes she used.',
        tip: 'Joanna Gaines makes kitchens feel lived in. That\'s the goal for most NFR clients.',
        resourceLabel: 'Magnolia Network — YouTube',
        resourceUrl: 'https://www.youtube.com/@magnolia',
      },
    },
    {
      mozaik: {
        topic: 'Adding Wall Cabinets Above a Base Run — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Add wall cabinets above the base run from Day 1',
          'Align wall cabinets to the correct height (standard 18" above counter)',
          'Confirm alignment is consistent across the full run',
        ],
        task: 'Complete the straight-wall kitchen Mozaik quiz.',
        tip: 'Wall cabinet height is one of the first things clients notice. Get it right.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Google Calendar — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Create a calendar event with all fields filled correctly',
          'Edit an existing event to change the location',
          'Add a reminder to an event without creating a duplicate',
        ],
        task: 'Complete the Google Calendar admin quiz.',
        tip: 'Calendar errors cause missed appointments. Double-check every event you create.',
        resourceLabel: 'Google Calendar',
        resourceUrl: 'https://calendar.google.com/',
      },
      design: {
        topic: 'Joanna Gaines — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Define farmhouse modern in your own words',
          'Name 3 materials Joanna Gaines uses most in kitchens',
          'Explain why open shelving works in some kitchens but not others',
        ],
        task: 'Complete the Joanna Gaines design quiz.',
        tip: 'Open shelving requires organized clients. Know when to suggest it and when not to.',
        resourceLabel: 'Magnolia Network — YouTube',
        resourceUrl: 'https://www.youtube.com/@magnolia',
      },
    },
    {
      mozaik: {
        topic: 'Saving, Opening, and Naming Projects',
        duration: 60,
        type: 'video',
        objectives: [
          'Save a project with the NFR naming convention (client last name + address)',
          'Close and reopen a project without losing changes',
          'Understand where project files are stored on the computer',
        ],
        task: 'Save your Week 3 kitchen project using the correct naming convention.',
        tip: 'Bad file names cost time on every future revision. Name it right once.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'QuickBooks Basics — The NFR Chart of Accounts',
        duration: 45,
        type: 'video',
        objectives: [
          'Navigate to the chart of accounts in QuickBooks',
          'Identify the 4 main income categories for NFR',
          'Find the most recent invoice and explain what it shows',
        ],
        task: 'Open QuickBooks and find last month\'s invoices. Report total to Jose.',
        tip: 'You don\'t need to understand all of QuickBooks — just the parts that touch your role.',
        resourceLabel: 'QuickBooks',
        resourceUrl: 'https://quickbooks.intuit.com/',
      },
      design: {
        topic: 'Kelly Wearstler — Bold Scale and Material Contrast',
        duration: 45,
        type: 'video',
        objectives: [
          'Describe Kelly Wearstler\'s use of scale and oversized elements',
          'Identify how she uses material contrast (rough vs. smooth, matte vs. gloss)',
          'Note one technique you could adapt for NFR\'s price point',
        ],
        task: 'Find one Kelly Wearstler kitchen or bath. Identify the biggest design risk she took.',
        tip: 'Kelly Wearstler pushes harder than most NFR clients want — but understand the principles.',
        resourceLabel: 'Kelly Wearstler — Instagram',
        resourceUrl: 'https://www.instagram.com/kellywearstler/',
      },
    },
    {
      mozaik: {
        topic: 'Project Management and File Organization — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Save a project using correct naming convention',
          'Open an existing project and find it in the project list',
          'Identify where Mozaik stores project files',
        ],
        task: 'Complete the Mozaik project management quiz.',
        tip: 'One client = one folder = one naming convention. Always.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'QuickBooks — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name NFR\'s 4 main income categories',
          'Find the chart of accounts and explain its purpose',
          'Locate an invoice from the last 30 days',
        ],
        task: 'Complete the QuickBooks admin quiz.',
        tip: 'You don\'t need to memorize accounting rules — just know where to look.',
        resourceLabel: 'QuickBooks',
        resourceUrl: 'https://quickbooks.intuit.com/',
      },
      design: {
        topic: 'Kelly Wearstler — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Define material contrast in design',
          'Explain scale as a design tool',
          'Name one Kelly Wearstler technique that works at a mid-range budget',
        ],
        task: 'Complete the Kelly Wearstler design quiz.',
        tip: 'High-end designers teach principles. Your job is to adapt them.',
        resourceLabel: 'Kelly Wearstler — Instagram',
        resourceUrl: 'https://www.instagram.com/kellywearstler/',
      },
    },
    {
      mozaik: {
        topic: 'Week 3 Review — Build a 1-Wall Kitchen from Scratch',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Create a new 10×12 room',
          'Fill one wall with base and wall cabinets',
          'Save the file correctly and show Jose',
        ],
        task: 'Build a 1-wall kitchen from scratch without notes. Show Jose the result.',
        tip: 'This is your first real Mozaik build. It should feel harder than it looks.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 3 Review — Admin Tools Full Run',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Open all tools and confirm access',
          'Draft a client email, create a calendar event, and find an invoice',
          'Report any access issue to Jose',
        ],
        task: 'Run through all 4 tools in 20 minutes without help. Report status.',
        tip: 'By now, tools should feel like routine. If any still feel foreign — say so.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Week 3 Review — Design Language Check',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Describe farmhouse modern vs. approachable modern in one sentence each',
          'Explain material contrast to someone who has never heard the term',
          'Name one design principle you feel confident applying',
        ],
        task: 'Tell Jose one design concept you\'d use on the next real client presentation.',
        tip: 'Design training only works if it connects to real jobs. Start making those connections now.',
        resourceLabel: 'Magnolia Network — YouTube',
        resourceUrl: 'https://www.youtube.com/@magnolia',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 4 — Corners & Appliances | Documents & Agreements | Cabinet Styles & Countertops
  // ══════════════════════════════════════════════════════════════════════
  4: [
    {
      mozaik: {
        topic: 'Two-Wall Kitchen and Corner Cabinets',
        duration: 60,
        type: 'video',
        objectives: [
          'Build a two-wall kitchen layout',
          'Place a corner cabinet (blind corner and lazy susan)',
          'Understand when to use each corner solution',
        ],
        task: 'Build a two-wall kitchen with one corner transition. Screenshot.',
        tip: 'Corners are the hardest part of any kitchen layout. Master them early.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'NFR Documents — Agreements, Proposals, and Work Orders',
        duration: 45,
        type: 'video',
        objectives: [
          'Identify the 3 main NFR document types and when each is used',
          'Find a signed agreement in the portal',
          'Understand what fields must be filled before Jose signs',
        ],
        task: 'Open a real NFR agreement and list the 5 most important fields.',
        tip: 'Every job starts with a document. Know what each field means before you fill it.',
        resourceLabel: 'NFR Staff Portal — Agreements',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/agreement-portal.html',
      },
      design: {
        topic: 'Cabinet Door Styles — Shaker, Flat Front, Raised Panel, and Glass',
        duration: 45,
        type: 'video',
        objectives: [
          'Identify the 4 main door styles NFR offers',
          'Know which style fits which client aesthetic',
          'Pair a door style with a countertop material correctly',
        ],
        task: 'Match each door style to one NFR client type (e.g., Shaker = farmhouse modern).',
        tip: 'Door style sets the tone for the entire kitchen. Clients often decide here first.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Corner Cabinets — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Place a blind corner and a lazy susan in the correct orientation',
          'Explain the clearance requirements for each',
          'Identify when a blind corner is preferred over a lazy susan',
        ],
        task: 'Complete the corner cabinet Mozaik quiz.',
        tip: 'Ask yourself: what will the client access most? That drives the corner choice.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Documents & Agreements — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name the 3 document types and their sequence in a job',
          'Fill in a sample agreement with test data',
          'Identify 2 fields that cannot be blank before Jose signs',
        ],
        task: 'Complete the documents and agreements admin quiz.',
        tip: 'Missing fields on agreements cause delays. Catch them before Jose sees the doc.',
        resourceLabel: 'NFR Staff Portal — Agreements',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/agreement-portal.html',
      },
      design: {
        topic: 'Cabinet Door Styles — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name all 4 door styles without notes',
          'Match each style to a design aesthetic',
          'Recommend a door style for a described client brief',
        ],
        task: 'Complete the cabinet door styles design quiz.',
        tip: 'Practice making the recommendation out loud — you\'ll need to do it with clients.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Sink Base, Dishwasher Gap, Range, and Hood Placement',
        duration: 60,
        type: 'video',
        objectives: [
          'Place a sink base cabinet with correct width',
          'Leave a dishwasher gap (standard 24") next to the sink',
          'Place a range and hood cabinet above it',
        ],
        task: 'Place sink, dishwasher gap, range, and hood in a kitchen. Screenshot.',
        tip: 'The sink-dishwasher-range triangle is the core of every kitchen layout.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Proposal Calculator — Entering Scope and Generating Totals',
        duration: 45,
        type: 'video',
        objectives: [
          'Open the proposal calculator in the staff portal',
          'Enter a sample flooring scope and generate totals',
          'Export the proposal as a PDF',
        ],
        task: 'Build a sample flooring proposal using test measurements.',
        tip: 'Clients judge your professionalism by the proposal. Make it clean.',
        resourceLabel: 'NFR Proposal Calculator',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/proposal-calculator.html',
      },
      design: {
        topic: 'Countertop Materials — Quartz, Granite, Laminate, and Butcher Block',
        duration: 45,
        type: 'video',
        objectives: [
          'Name the 4 countertop materials and their price ranges',
          'Know which countertop material pairs with which cabinet door style',
          'Understand maintenance differences for client conversations',
        ],
        task: 'Create a countertop pairing guide: 4 styles × 4 materials = 16 combinations. Rate each.',
        tip: 'Quartz is the most-asked-for material in Columbus right now. Know it cold.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Appliance Placement — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Place all 4 appliance elements without prompts',
          'Confirm dishwasher gap is exactly 24"',
          'Verify hood cabinet is centered above range',
        ],
        task: 'Complete the appliance placement Mozaik quiz.',
        tip: 'The work triangle (sink-range-fridge) is the industry standard. Know the distances.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Proposal Calculator — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Enter scope for a cabinet job and generate a total',
          'Export the proposal as a PDF',
          'Identify what Jose reviews before the proposal is sent',
        ],
        task: 'Complete the proposal calculator admin quiz.',
        tip: 'Never send a proposal Jose hasn\'t reviewed. Always ask first.',
        resourceLabel: 'NFR Proposal Calculator',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/proposal-calculator.html',
      },
      design: {
        topic: 'Countertop Materials — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name 4 countertop materials and 1 fact about each',
          'Recommend a material for a described client budget',
          'Explain the maintenance difference between quartz and granite',
        ],
        task: 'Complete the countertop materials design quiz.',
        tip: 'Clients who ask about maintenance are often deciding between granite and quartz. Be ready.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 4 Review — Two-Wall Kitchen with Appliances',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Build a two-wall kitchen with one corner and all 4 appliances',
          'Confirm all placement dimensions',
          'Show completed layout to Jose',
        ],
        task: 'Build a full two-wall kitchen with corner and appliances. Show Jose.',
        tip: 'By now your builds should look like real kitchens. If something looks off — fix it.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 4 Review — Documents and Proposal Workflow',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Walk through a full document cycle: agreement → proposal → work order',
          'Generate a sample proposal without help',
          'Confirm Jose\'s approval step in the workflow',
        ],
        task: 'Run through the full document cycle with test data. Report to Jose.',
        tip: 'Documents flow in one direction. Know the sequence cold.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Week 4 Review — Cabinet and Countertop Pairing',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Pair door styles and countertops for 3 different client types',
          'Explain each recommendation out loud',
          'Identify your strongest pairing and weakest — report both to Jose',
        ],
        task: 'Present 3 door + countertop combinations to Jose verbally.',
        tip: 'Design recommendations only matter if you can explain them. Practice the words.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 5 — L-Shape & U-Shape | Proposals Deep Dive | Bathroom Design
  // ══════════════════════════════════════════════════════════════════════
  5: [
    {
      mozaik: {
        topic: 'L-Shape Kitchen Layout from Scratch',
        duration: 60,
        type: 'video',
        objectives: [
          'Set up an L-shape room in Mozaik',
          'Fill both walls with base and wall cabinets',
          'Handle the inside corner correctly',
        ],
        task: 'Build an L-shape kitchen. Screenshot top view.',
        tip: 'L-shape is the most common kitchen in Columbus homes. Know it instinctively.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Proposals — Line Items, Scope Descriptions, and Pricing Rules',
        duration: 45,
        type: 'video',
        objectives: [
          'Know NFR\'s standard markup rates (24% materials, 30% subs, 15% equipment)',
          'Write a scope line item that is specific enough to become a contract',
          'Identify vague line items that would cause disputes later',
        ],
        task: 'Rewrite 2 vague scope descriptions into specific, billable line items.',
        tip: 'Vague scopes create arguments. Specific scopes create payments.',
        resourceLabel: 'NFR Proposal Calculator',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/proposal-calculator.html',
      },
      design: {
        topic: 'Bathroom Design Fundamentals — Vanity, Shower, and Layout',
        duration: 45,
        type: 'video',
        objectives: [
          'Identify the 3 elements of a bathroom redesign: vanity, shower, flooring',
          'Know standard vanity sizes (24", 30", 36", 48", 60")',
          'Understand the difference between tub-to-shower conversion and full remodel',
        ],
        task: 'Sketch or describe a bathroom layout for a client with a 36" vanity and walk-in shower.',
        tip: 'Bathroom jobs are rising fast for NFR. Get fluent in the vocabulary now.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Fillers and End Panels — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Add a filler cabinet to close a gap in an L-shape run',
          'Place an end panel at the exposed end of a base run',
          'Know when a filler is needed vs. an end panel',
        ],
        task: 'Complete the fillers and end panels Mozaik quiz.',
        tip: 'Fillers fill gaps. End panels finish exposed sides. Never confuse the two.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Proposals — Pricing Rules Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Calculate a material cost with the 24% markup applied',
          'Identify which line items require sub markup vs. equipment markup',
          'Verify a sample proposal total is correct',
        ],
        task: 'Complete the proposals pricing rules admin quiz.',
        tip: 'Every number on a proposal is a commitment. Check your math twice.',
        resourceLabel: 'NFR Proposal Calculator',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/proposal-calculator.html',
      },
      design: {
        topic: 'Bathroom Design — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name standard vanity sizes and when each is used',
          'Explain the difference between tub-to-shower conversion and full remodel',
          'Recommend a vanity size for a described bathroom footprint',
        ],
        task: 'Complete the bathroom design fundamentals quiz.',
        tip: 'Most clients want a bigger vanity and a bigger shower. Know the trade-offs.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'U-Shape Kitchen Layout',
        duration: 60,
        type: 'video',
        objectives: [
          'Build a U-shape kitchen with 3 wall runs',
          'Handle both inside corners correctly',
          'Verify cabinet dimensions and clearances',
        ],
        task: 'Build a U-shape kitchen. Screenshot.',
        tip: 'U-shape kitchens have 2 corners. Place them before filling the runs.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Work Orders — Creating, Assigning, and Tracking',
        duration: 45,
        type: 'video',
        objectives: [
          'Create a work order from an approved proposal',
          'Assign the work order to the correct crew member',
          'Mark a work order as in-progress and complete',
        ],
        task: 'Create a test work order and walk through the status changes.',
        tip: 'Work orders connect office to field. Get this right and jobs run smoother.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Tile Selection — Ceramic, Porcelain, Subway, and Mosaic',
        duration: 45,
        type: 'video',
        objectives: [
          'Identify the 4 tile types and their best use cases',
          'Know which tile size works for each space',
          'Pair tile with a cabinet and countertop combination',
        ],
        task: 'Create 2 sample tile pairings with cabinet + countertop combinations.',
        tip: 'Tile is often the first thing clients touch and the last they decide on. Help them decide early.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'U-Shape and Galley Layouts — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Build a U-shape from scratch without notes',
          'Build a galley kitchen (two parallel walls) from scratch',
          'Compare the two layouts: when is each preferred?',
        ],
        task: 'Complete the U-shape and galley kitchen Mozaik quiz.',
        tip: 'Galley kitchens are common in older Columbus homes. Know the clearance rule (48" aisle minimum).',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Work Orders — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Create and assign a work order correctly',
          'Identify the status stages of a work order lifecycle',
          'Know who sees the work order when it\'s assigned',
        ],
        task: 'Complete the work order admin quiz.',
        tip: 'A work order without an assignee doesn\'t exist to the crew. Always assign.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Tile Selection — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name 4 tile types and match each to a use case',
          'Recommend a tile for a described bathroom client brief',
          'Pair a tile with a cabinet door style for a cohesive look',
        ],
        task: 'Complete the tile selection design quiz.',
        tip: 'Subway tile is the safe choice. When a client wants more — know your options.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 5 Review — L-Shape with Fillers and End Panels',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Build an L-shape kitchen with fillers and end panels',
          'Add all 4 appliances',
          'Show completed layout to Jose',
        ],
        task: 'Build a complete L-shape kitchen with all elements. Show Jose.',
        tip: 'This is the most common layout NFR quotes. Build it until it\'s automatic.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 5 Review — Document and Work Order Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Run through agreement → proposal → work order without help',
          'Identify where in the cycle Jose\'s approval is needed',
          'Report any tool issues to Jose',
        ],
        task: 'Run the full cycle with test data. Report to Jose.',
        tip: 'You are the gatekeeper of the document cycle. Own that role.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Week 5 Review — Bathroom Design Package',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Describe a bathroom design for a client with $8,000 budget',
          'Choose vanity, tile, and countertop — and explain each choice',
          'Present to Jose verbally',
        ],
        task: 'Present a $8K bathroom design package to Jose — vanity, tile, countertop, rationale.',
        tip: 'Design recommendations land better with a "because" attached.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 6 — Islands & Peninsulas | Job Coordination | Open Concept & Work Triangle
  // ══════════════════════════════════════════════════════════════════════
  6: [
    {
      mozaik: {
        topic: 'Adding a Basic Kitchen Island',
        duration: 60,
        type: 'video',
        objectives: [
          'Place a freestanding island in a kitchen layout',
          'Verify minimum clearance on all 4 sides (42" standard)',
          'Add a base cabinet run to the island',
        ],
        task: 'Build an L-shape kitchen with a 4×2 island. Verify clearances. Screenshot.',
        tip: 'The most common client request: "Can we add an island?" Know clearance rules cold.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Job Coordination — Scheduling Crews, Deliveries, and Site Visits',
        duration: 45,
        type: 'video',
        objectives: [
          'Understand the sequence: agreement signed → materials ordered → crew scheduled',
          'Block crew time on Google Calendar correctly',
          'Coordinate a delivery window with a supplier',
        ],
        task: 'Create a calendar block for a fictional 3-day cabinet install job.',
        tip: 'Coordination errors are the #1 cause of job delays. Calendar everything.',
        resourceLabel: 'Google Calendar',
        resourceUrl: 'https://calendar.google.com/',
      },
      design: {
        topic: 'Open Concept Kitchens — Flow, Sightlines, and Transition Points',
        duration: 45,
        type: 'video',
        objectives: [
          'Identify what makes an open concept kitchen feel cohesive',
          'Understand how sightlines from the living room affect cabinet choices',
          'Know when to match flooring across the open space vs. define zones',
        ],
        task: 'Find one open concept kitchen. Describe how the designer handled the living room transition.',
        tip: 'Open concept clients want it to feel like one room. The design decisions tell that story.',
        resourceLabel: 'Houzz',
        resourceUrl: 'https://www.houzz.com/photos/kitchen-phbr0-bo~t_709',
      },
    },
    {
      mozaik: {
        topic: 'Peninsula Design and Seating Overhang — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Place a peninsula attached to one wall with correct clearance',
          'Add a seating overhang (standard 12–15" for bar stools)',
          'Compare peninsula vs. island for a described space',
        ],
        task: 'Complete the peninsula and island Mozaik quiz.',
        tip: 'Peninsula connects to the wall. Island floats. Know when each makes sense.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Job Coordination — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name the coordination sequence in order',
          'Create a delivery window event on Google Calendar correctly',
          'Identify what happens if materials arrive before the crew is scheduled',
        ],
        task: 'Complete the job coordination admin quiz.',
        tip: 'Materials without a crew date waste space. Crew without materials wastes time.',
        resourceLabel: 'Google Calendar',
        resourceUrl: 'https://calendar.google.com/',
      },
      design: {
        topic: 'Open Concept — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Define sightlines and explain their design impact',
          'Describe 2 ways to transition from kitchen to living room flooring',
          'Recommend a cabinet color for an open concept home with dark hardwood floors',
        ],
        task: 'Complete the open concept design quiz.',
        tip: 'Color continuity is your friend in open concept. Don\'t create visual noise.',
        resourceLabel: 'Houzz',
        resourceUrl: 'https://www.houzz.com/',
      },
    },
    {
      mozaik: {
        topic: 'Island Clearance Rules and Sizing for Client Presentations',
        duration: 60,
        type: 'video',
        objectives: [
          'Know the 42" working clearance rule and 48" if two cooks',
          'Size an island for a 10×12 vs. 12×14 kitchen',
          'Explain clearance to a client in plain language',
        ],
        task: 'Test 3 different island sizes in the same kitchen. Document which one works.',
        tip: 'Clients always want a bigger island. Your job is to protect the workflow.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Interior Surface Coordination — Scheduling and Communication',
        duration: 45,
        type: 'video',
        objectives: [
          'Know the Interior Surface check cycle (Tue 11am cutoff → Thu → Fri)',
          'Understand how NFR marks up Interior Surface work (30%)',
          'Draft a coordination email to Brad for a new job scope',
        ],
        task: 'Draft a fictional coordination email to Brad for a cabinet install scope.',
        tip: 'Interior Surface is a sub. Treat them professionally — they are a long-term relationship.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Work Triangle and Kitchen Workflow — Design Science',
        duration: 45,
        type: 'video',
        objectives: [
          'Define the kitchen work triangle (sink-range-fridge)',
          'Know the ideal triangle dimensions (4-9 ft per leg, <26 ft total)',
          'Identify how an island affects the work triangle',
        ],
        task: 'Check the work triangle in your Week 5 L-shape kitchen. Does it meet the standard?',
        tip: 'The work triangle is the most referenced rule in kitchen design. Know it.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Island with Seating — Full Build Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Build an L-shape kitchen with a seating island from scratch',
          'Verify all clearances: walkway, seating overhang, work triangle',
          'Adjust island size to meet clearance if needed',
        ],
        task: 'Complete the island with seating Mozaik quiz.',
        tip: 'Seating overhang + clearance + work triangle = 3 things to check every island.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Interior Surface Coordination — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Recall the Interior Surface check cycle from memory',
          'Calculate an Interior Surface job with 30% NFR markup',
          'Draft a coordination update email to Brad for a scope change',
        ],
        task: 'Complete the Interior Surface coordination admin quiz.',
        tip: 'Brad is a key relationship. Every email to him represents NFR professionally.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Work Triangle — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'State the work triangle dimensions from memory',
          'Identify a work triangle violation in a described layout',
          'Recommend a correction for an oversized triangle',
        ],
        task: 'Complete the work triangle design quiz.',
        tip: 'A bad work triangle means a kitchen that feels tiring to cook in. Clients don\'t know why — you do.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 6 Review — L-Shape Kitchen with Island',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Build a full L-shape kitchen with appliances and a seating island',
          'Verify all clearances and work triangle',
          'Present to Jose — explain your clearance decisions out loud',
        ],
        task: 'Build the complete kitchen with island and present to Jose verbally.',
        tip: 'You are now 6 weeks in. A full kitchen with island should feel possible — not easy, but possible.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 6 Review — Full Coordination Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Walk through crew scheduling, delivery coordination, and Interior Surface markup',
          'Run the full cycle with test data',
          'Report any gaps to Jose',
        ],
        task: 'Run the coordination cycle end-to-end with test data. Report to Jose.',
        tip: 'Coordination is your most visible admin function. Make it clean.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Week 6 Review — Design Integration Check',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Apply work triangle, door style, countertop, and tile to one kitchen concept',
          'Present the full concept to Jose with reasoning',
          'Identify the one design area where you still feel weakest',
        ],
        task: 'Present a full kitchen design concept (layout + materials) to Jose. No notes.',
        tip: 'You\'ve built the vocabulary. Now start building the sentence.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 7 — Cabinet Sizing | Admin Checkpoint | Design Graduation
  // ══════════════════════════════════════════════════════════════════════
  7: [
    {
      mozaik: {
        topic: 'Changing Cabinet Width, Height, and Depth',
        duration: 60,
        type: 'video',
        objectives: [
          'Select a placed cabinet and change its width using properties panel',
          'Adjust height for a tall vs. standard ceiling',
          'Change depth for a refrigerator panel',
        ],
        task: 'Modify 3 cabinets in your Week 6 kitchen — change each dimension on one.',
        tip: 'Width changes are most common. Height changes come up with 9-foot ceilings.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Admin Checkpoint — Week 1–6 Review and Gap Assessment',
        duration: 45,
        type: 'video',
        objectives: [
          'List all tools you are fully comfortable with',
          'Identify 2 admin tasks that still feel uncertain',
          'Report your assessment to Jose',
        ],
        task: 'Write a self-assessment: which tools are solid, which need more practice.',
        tip: 'Honesty here helps Jose train you better. There are no wrong answers.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Design Graduation — Client Presentation Simulation',
        duration: 45,
        type: 'video',
        objectives: [
          'Present a kitchen design concept as if the client is in the room',
          'Explain each choice (door style, countertop, tile) with a "because"',
          'Handle one objection from Jose playing client',
        ],
        task: 'Present your Week 6 kitchen design to Jose as a live client presentation.',
        tip: 'Design track ends this week. Use this presentation to show everything you\'ve learned.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Cabinet Sizing — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Resize 3 cabinets to specified dimensions without prompts',
          'Apply combined modifications: change width AND height on one cabinet',
          'Verify final dimensions in properties panel',
        ],
        task: 'Complete the cabinet sizing Mozaik quiz.',
        tip: 'Custom sizing is what separates a Mozaik user from a catalog browser.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Admin Checkpoint — Quiz and Self-Assessment',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Answer a question from each tool category (portal, calendar, proposals, work orders)',
          'Identify which tool you\'ve used least',
          'Report your weakest area to Jose and ask for a drill',
        ],
        task: 'Complete the Week 7 admin checkpoint quiz.',
        tip: 'This is your midpoint check. Be honest — it affects your training from here.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Design Graduation — Final Reflection and Feedback',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name 5 designers studied and one key principle from each',
          'Describe your design philosophy in 2 sentences',
          'State one design principle you will use on your first real client job',
        ],
        task: 'Complete the design graduation reflection quiz.',
        tip: 'This is the end of the Design track. Everything from here is applied on real jobs.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Combined Modifications on a Full Layout',
        duration: 60,
        type: 'video',
        objectives: [
          'Apply width + height + depth changes to 5 different cabinets in one layout',
          'Use the properties panel efficiently without resetting the view',
          'Verify all modified cabinets look correct in top view',
        ],
        task: 'Modify 5 cabinets in one layout. Screenshot before and after.',
        tip: 'On real jobs, you\'ll customize at least 3-4 cabinets per layout.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Admin Processes — SOP Review and Process Cards',
        duration: 45,
        type: 'video',
        objectives: [
          'Locate the SOPs folder in the portal',
          'Read and summarize the proposal-to-payment SOP',
          'Identify which SOP covers your daily role most directly',
        ],
        task: 'Read the proposal-to-payment SOP and write a 3-sentence summary.',
        tip: 'SOPs are not optional reading. They are the rules of the job.',
        resourceLabel: 'NFR SOPs',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Design Application — Applying Principles on Real Jobs',
        duration: 45,
        type: 'video',
        objectives: [
          'Review all 7 weeks of design learning in one session',
          'Identify which principles apply to the next real NFR job',
          'Ask Jose one question about design direction for NFR',
        ],
        task: 'Review your design notes and ask Jose one specific design question about NFR\'s clients.',
        tip: 'Design track ends here — but the application starts now. Connect learning to real jobs.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Full Layout Modifications — Advanced Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Resize 5 cabinets to exact specified dimensions',
          'Rebuild a section of the layout with different widths',
          'Verify the total run width after changes',
        ],
        task: 'Complete the advanced cabinet sizing Mozaik quiz.',
        tip: 'Speed and accuracy together — that\'s the goal from here on.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'SOP Review — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name the SOPs you\'ve read and what each covers',
          'Identify the step in the proposal-to-payment SOP where your role is most critical',
          'State what happens if a step is skipped',
        ],
        task: 'Complete the SOP review admin quiz.',
        tip: 'SOPs exist because something went wrong once. Respect the reason.',
        resourceLabel: 'NFR SOPs',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Design Graduation — Final Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Answer design questions from all 7 weeks',
          'Make a design recommendation for a described client brief',
          'Justify every recommendation with a named principle',
        ],
        task: 'Complete the design graduation final quiz.',
        tip: 'Every right answer is a tool you now own. Take these into every client meeting.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 7 Review — Complex Kitchen Challenge',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Build an L-shape kitchen with island, all appliances, AND custom-sized cabinets',
          'Show Jose a completed layout with 5 modified cabinets',
          'Verbally explain every customization choice',
        ],
        task: 'Build Jose\'s kitchen challenge from scratch. Present without notes.',
        tip: 'This is Phase 1 graduation for Mozaik. If you can do this — Phase 2 will build on it.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 7 Review — Full Admin Cycle Confirmation',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Run through every admin tool and process from weeks 1-7',
          'Identify what is solid and what needs more repetition',
          'Report to Jose and plan drills for any weak spots',
        ],
        task: 'Complete full admin cycle review. Report to Jose with honest self-assessment.',
        tip: 'Weeks 8-18 build on this foundation. Any gaps here will slow you down.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
      design: {
        topic: 'Design Graduation Ceremony — Final Presentation to Jose',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Present a complete kitchen design concept: layout, door style, countertop, tile, color',
          'Explain every choice with a designer principle or client need',
          'Accept feedback from Jose and apply one change on the spot',
        ],
        task: 'Present your final design concept to Jose. No notes. Handle one change request live.',
        tip: 'Design track complete. You now have a vocabulary. The next 11 weeks build the production skill.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 8 — Specialty Cabinets & Transitions | Agreement Lifecycle
  // NOTE: Design track ends after Week 7. Weeks 8–18 = Mozaik + Admin only
  // ══════════════════════════════════════════════════════════════════════
  8: [
    {
      mozaik: {
        topic: 'Filler Cabinets and Scribe Molding',
        duration: 60,
        type: 'video',
        objectives: [
          'Place a filler cabinet to close an irregular gap',
          'Add scribe molding to a wall-to-cabinet transition',
          'Know when a filler is preferred over a scribe',
        ],
        task: 'Add a filler and scribe molding to an existing layout. Screenshot.',
        tip: 'Fillers and scribes make the job look finished. They\'re the last 5% that clients remember.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Agreement Lifecycle — From Inquiry to Signed Contract',
        duration: 45,
        type: 'video',
        objectives: [
          'Map the full agreement lifecycle: inquiry → proposal → agreement → signed → deposit',
          'Know what triggers each stage',
          'Identify Maria\'s role at each stage',
        ],
        task: 'Draw the agreement lifecycle as a flowchart. Show Jose.',
        tip: 'Every job follows this path. Know it so well you could run it in your sleep.',
        resourceLabel: 'NFR Staff Portal — Agreements',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/agreement-portal.html',
      },
    },
    {
      mozaik: {
        topic: 'Angle Cabinets and Corner Transitions — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Place an angled cabinet at a non-90-degree corner',
          'Transition between two cabinet runs at an angle',
          'Verify the gap is closed correctly on both sides',
        ],
        task: 'Complete the angle cabinet and corner transition quiz.',
        tip: 'Angled cabinets appear in irregular rooms. Not common but clients notice when it\'s wrong.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Agreement Lifecycle — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name the 5 stages of the agreement lifecycle in order',
          'Identify what Maria sends at the proposal stage',
          'Explain what triggers the deposit request',
        ],
        task: 'Complete the agreement lifecycle admin quiz.',
        tip: 'No deposit = no job start. Protect that rule.',
        resourceLabel: 'NFR Staff Portal — Agreements',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/agreement-portal.html',
      },
    },
    {
      mozaik: {
        topic: 'Soffits, Bulkheads, and Crown Molding Basics',
        duration: 60,
        type: 'video',
        objectives: [
          'Add a soffit above wall cabinets in the layout',
          'Place a bulkhead to fill the space between cabinet top and ceiling',
          'Add crown molding to the top of wall cabinets',
        ],
        task: 'Add soffit and crown molding to your existing kitchen layout. Screenshot.',
        tip: 'Crown molding is a finishing detail that adds perceived value. Learn to recommend it.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Change Orders — When Scope Changes After Signing',
        duration: 45,
        type: 'video',
        objectives: [
          'Know what triggers a change order (client-requested scope change)',
          'Create a change order document with the new scope and cost',
          'Know who must approve a change order before work proceeds',
        ],
        task: 'Create a sample change order for a scope addition on a test project.',
        tip: 'Change orders protect NFR from doing free work. Always document scope changes.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Soffit, Bulkhead, and Crown — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Add all 3 elements to a kitchen layout without prompts',
          'Explain the difference between soffit and bulkhead',
          'Verify crown molding is on the correct cabinet edge',
        ],
        task: 'Complete the soffit, bulkhead, and crown quiz.',
        tip: 'Most clients won\'t know these terms. Explain what they\'ll see, not the label.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Change Orders — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Identify when a change order is required vs. optional',
          'Fill in a change order form for a described scope addition',
          'Explain the change order approval chain to Jose',
        ],
        task: 'Complete the change order admin quiz.',
        tip: 'One undocumented change order can turn a profitable job into a loss.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 8 Review — Specialty Elements Kitchen Build',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Build a kitchen with filler, scribe, soffit, and crown molding',
          'Add an angled corner transition',
          'Show Jose — explain each specialty element and why you placed it',
        ],
        task: 'Build a fully detailed kitchen with all specialty elements. Present to Jose.',
        tip: 'Specialty elements are finishing details. A kitchen without them looks unfinished.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 8 Review — Agreement and Change Order Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Walk through agreement → change order → closeout for a test project',
          'Identify where Jose\'s approval is needed in each step',
          'Run the cycle with test data and report',
        ],
        task: 'Run agreement + change order cycle end-to-end. Report to Jose.',
        tip: 'Week 8 builds the documentation backbone. Own these processes.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 9 — Advanced Layout Challenges | Vendors & Closeout
  // ══════════════════════════════════════════════════════════════════════
  9: [
    {
      mozaik: {
        topic: 'Multi-Wall Complex Layouts',
        duration: 60,
        type: 'video',
        objectives: [
          'Build a kitchen that uses 3 or more walls',
          'Handle multiple corner transitions in one layout',
          'Verify clearances and run widths across all walls',
        ],
        task: 'Build a 3-wall kitchen layout from scratch. Screenshot.',
        tip: 'Multi-wall kitchens are common in older Columbus homes with awkward shapes.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Vendor Communication — Ordering Materials and Confirming Delivery',
        duration: 45,
        type: 'video',
        objectives: [
          'Know NFR\'s main material vendors and how to contact them',
          'Draft an order confirmation email for a flooring delivery',
          'Record a delivery date in the calendar correctly',
        ],
        task: 'Draft a sample material order confirmation email to a fictional vendor.',
        tip: 'Vendor communication errors create job delays. Confirm everything in writing.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Awkward Room Shapes — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Build a kitchen in a room with a non-right-angle wall',
          'Use filler and angle cabinets to solve the irregular shape',
          'Show the solution looks finished from all angles',
        ],
        task: 'Complete the awkward room shapes Mozaik quiz.',
        tip: 'Irregular rooms are where Mozaik\'s value becomes obvious. No contractor can sketch this faster.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Vendor Communication — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name NFR\'s primary material vendors from memory',
          'Draft an order email using the correct tone and format',
          'Identify what happens if a delivery confirmation is not followed up',
        ],
        task: 'Complete the vendor communication admin quiz.',
        tip: 'Every delivery that isn\'t confirmed is a risk. Confirm everything.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Full Appliance Integration in Complex Layouts',
        duration: 60,
        type: 'video',
        objectives: [
          'Place all appliances in a multi-wall layout',
          'Verify work triangle across a complex floor plan',
          'Handle a refrigerator in an unusual wall position',
        ],
        task: 'Add all appliances to your 3-wall kitchen. Verify work triangle.',
        tip: 'Complex layouts make the work triangle harder. Always check it after appliances are placed.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Job Closeout — Final Walkthrough, Punch List, and Invoice',
        duration: 45,
        type: 'video',
        objectives: [
          'Know the NFR closeout process: walkthrough → punch list → sign-off → final invoice',
          'Create a punch list document for a test job',
          'Understand when the final invoice is sent vs. when it\'s paid',
        ],
        task: 'Write a sample punch list for a fictional cabinet install.',
        tip: 'Closeout is where you get paid. Don\'t rush it — document it.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Combining 3+ Modification Types — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Apply width + height + depth + specialty modifications in one build',
          'Build a complex kitchen with at least 3 modification types',
          'Verify every dimension in the properties panel',
        ],
        task: 'Complete the combined modifications Mozaik quiz.',
        tip: 'Real jobs always have multiple modifications. Get comfortable combining them.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Job Closeout — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name the 4 stages of job closeout in order',
          'Create a punch list for a described final walkthrough',
          'Identify what triggers the final invoice',
        ],
        task: 'Complete the job closeout admin quiz.',
        tip: 'A job isn\'t closed until the client signs and the invoice is paid. Know the steps.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 9 Review — Complex Kitchen Challenge Assigned by Jose',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Build the kitchen Jose assigns during this session',
          'Apply all modifications from weeks 7-9',
          'Present with verbal explanation of every major decision',
        ],
        task: 'Ask Jose for a complex kitchen assignment. Build it. Present it.',
        tip: 'This week\'s challenge comes from Jose. No template — just the brief.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 9 Review — Vendor and Closeout Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Run vendor order through delivery and closeout with test data',
          'Create a punch list and draft a final invoice',
          'Report any gaps to Jose',
        ],
        task: 'Run vendor-to-closeout cycle end-to-end. Report to Jose.',
        tip: 'Weeks 8-9 admin covers the full job lifecycle. You now own it end-to-end.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 10 — 3D View Basics | Client Experience
  // ══════════════════════════════════════════════════════════════════════
  10: [
    {
      mozaik: {
        topic: '3D View — Camera Navigation and Perspective Control',
        duration: 60,
        type: 'video',
        objectives: [
          'Switch from top view to 3D view in Mozaik',
          'Navigate the 3D camera: orbit, pan, zoom',
          'Position the camera at eye level for a client-ready view',
        ],
        task: 'Open your most recent kitchen in 3D view. Navigate to 3 different camera angles. Screenshot each.',
        tip: 'The first 3D view you show a client is the first impression. Practice camera control.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Client Experience — First Impression, Follow-Up, and Satisfaction',
        duration: 45,
        type: 'video',
        objectives: [
          'Know the 3 touchpoints where Maria shapes the client experience',
          'Draft a post-meeting follow-up email to a client',
          'Understand the difference between a satisfied client and a repeat client',
        ],
        task: 'Draft a post-meeting follow-up email for a fictional kitchen consult.',
        tip: 'Repeat clients cost nothing to acquire. Follow-up is how you earn them.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Saving Camera Angles and Applying Door Styles — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Save 3 named camera angles in a project',
          'Apply a door style to all cabinets in 3D view',
          'Switch between 2 door styles and compare',
        ],
        task: 'Complete the 3D camera and door styles Mozaik quiz.',
        tip: 'Saved camera angles = consistent client presentations. Name them (Front, Island, Corner).',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Client Experience — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name the 3 client experience touchpoints',
          'Write a follow-up email using the correct template',
          'Explain what distinguishes a satisfied client from a referral source',
        ],
        task: 'Complete the client experience admin quiz.',
        tip: 'NFR\'s best leads come from past clients. Invest in the experience.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Applying Colors and Finishes in 3D',
        duration: 60,
        type: 'video',
        objectives: [
          'Apply a finish color to all cabinets in 3D view',
          'Compare 2 finish colors side by side',
          'Apply a countertop material in 3D',
        ],
        task: 'Apply 2 different finish colors to your kitchen in 3D. Screenshot both.',
        tip: 'Color in 3D is the closest thing to what a client will see in their home.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Client Reviews and Referrals — Asking and Tracking',
        duration: 45,
        type: 'video',
        objectives: [
          'Know when to ask for a Google review (within 3 days of job closeout)',
          'Draft a review request email',
          'Understand how NFR tracks referral sources',
        ],
        task: 'Draft a Google review request email for a completed cabinet job.',
        tip: 'Reviews and referrals compound over time. Ask every single time.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Material and Finish Library — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Apply door style + color finish + countertop material in one 3D view',
          'Switch all 3 to a different combination without errors',
          'Save the view after the change',
        ],
        task: 'Complete the material and finish library Mozaik quiz.',
        tip: 'A client who can see 2 versions decides faster. Master the switch.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Client Reviews and Referrals — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'State when to ask for a review (timing)',
          'Draft a review request for a flooring job',
          'Explain how NFR would track where a new client came from',
        ],
        task: 'Complete the client reviews and referrals admin quiz.',
        tip: 'Every 5-star review is worth more than a paid ad. Earn them systematically.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 10 Review — 3D Presentation Package',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Open an existing kitchen and build a full 3D presentation: 3 angles, door style applied, color applied, countertop applied',
          'Save all views with names',
          'Show Jose — walk through the presentation as if he is the client',
        ],
        task: 'Present a 3D kitchen package to Jose. 3 angles, 2 options.',
        tip: '3D presentations close more jobs. Own this skill before Week 11.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 10 Review — Client Experience Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Walk through follow-up → review request → referral ask for a test job',
          'Draft each communication without templates',
          'Report to Jose — which feels natural, which feels forced?',
        ],
        task: 'Run client experience cycle with test data. Report to Jose.',
        tip: 'Client experience is a system. Run it the same way every time.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 11 — Rendering & Exports | Invoices & Payments
  // ══════════════════════════════════════════════════════════════════════
  11: [
    {
      mozaik: {
        topic: 'Lighting Adjustments in 3D View',
        duration: 60,
        type: 'video',
        objectives: [
          'Find and adjust the lighting controls in Mozaik 3D',
          'Add ambient and directional light to improve realism',
          'Know which lighting setting produces the most client-ready image',
        ],
        task: 'Adjust lighting in your 3D kitchen. Compare 3 settings. Screenshot each.',
        tip: 'Bad lighting makes a good kitchen look like a blueprint. Get this right.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Invoices — Creating, Sending, and Tracking in QuickBooks',
        duration: 45,
        type: 'video',
        objectives: [
          'Create an invoice in QuickBooks for a test cabinet job',
          'Send the invoice and verify it was received',
          'Check the payment status of an existing invoice',
        ],
        task: 'Create and send a test invoice in QuickBooks. Screenshot the sent status.',
        tip: 'Invoices that aren\'t tracked don\'t get paid. QuickBooks is your memory.',
        resourceLabel: 'QuickBooks',
        resourceUrl: 'https://quickbooks.intuit.com/',
      },
    },
    {
      mozaik: {
        topic: 'Render Quality Settings — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Identify fast vs. quality render modes',
          'Set render quality to the correct level for a client presentation',
          'Explain the trade-off between render quality and speed',
        ],
        task: 'Complete the render quality settings Mozaik quiz.',
        tip: 'Use fast render for feedback, quality render for client presentations.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Invoices — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Create a QuickBooks invoice with all required fields',
          'Identify an overdue invoice in the aging report',
          'Explain what steps follow when an invoice is 30 days overdue',
        ],
        task: 'Complete the QuickBooks invoicing admin quiz.',
        tip: 'Overdue invoices are a cash flow problem. Catch them early.',
        resourceLabel: 'QuickBooks',
        resourceUrl: 'https://quickbooks.intuit.com/',
      },
    },
    {
      mozaik: {
        topic: 'Exporting 3D Images for Client Presentations',
        duration: 60,
        type: 'video',
        objectives: [
          'Export a 3D render as a high-resolution image',
          'Name the file correctly (client name + date + view angle)',
          'Save the export to the correct Google Drive folder',
        ],
        task: 'Export 2 views of your kitchen render. Save to Google Drive with correct naming.',
        tip: 'File naming is not optional. Every export needs to be findable in 6 months.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Payment Tracking — Deposits, Progress Payments, and Final Balance',
        duration: 45,
        type: 'video',
        objectives: [
          'Know NFR\'s standard payment structure (deposit → progress → final)',
          'Record a deposit payment in QuickBooks',
          'Confirm a progress payment and update the job record',
        ],
        task: 'Record a test deposit payment in QuickBooks. Screenshot the record.',
        tip: 'Payment structure is a contract term. Know it before the job starts.',
        resourceLabel: 'QuickBooks',
        resourceUrl: 'https://quickbooks.intuit.com/',
      },
    },
    {
      mozaik: {
        topic: 'Full Presentation Package (Renders + Floor Plan) — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Export 3 render views + 1 floor plan from a single project',
          'Name all 4 files correctly',
          'Organize into a client-ready folder in Google Drive',
        ],
        task: 'Complete the full presentation package Mozaik quiz.',
        tip: 'A presentation package is a product. Deliver it like one.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Payment Tracking — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name NFR\'s payment stages and the % at each',
          'Record a progress payment without prompts',
          'Identify what triggers the final payment request',
        ],
        task: 'Complete the payment tracking admin quiz.',
        tip: 'Payments follow the work — only when milestones are confirmed.',
        resourceLabel: 'QuickBooks',
        resourceUrl: 'https://quickbooks.intuit.com/',
      },
    },
    {
      mozaik: {
        topic: 'Week 11 Review — Present a Kitchen to Jose',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Deliver a full presentation: 3D renders + floor plan + file package',
          'Present to Jose as if he is the client seeing their kitchen for the first time',
          'Respond to one change request and update the render live',
        ],
        task: 'Full client presentation to Jose. Handle one revision live.',
        tip: 'This is Week 11. Your presentations should feel professional by now.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 11 Review — Invoice and Payment Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Create invoice → record deposit → record progress → close with final for a test job',
          'Identify any payment that is overdue in the test data',
          'Report to Jose',
        ],
        task: 'Run full invoice and payment cycle with test data. Report to Jose.',
        tip: 'You now own the financial side of job operations. Track it weekly.',
        resourceLabel: 'QuickBooks',
        resourceUrl: 'https://quickbooks.intuit.com/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 12 — Client Simulation | Consultation Process
  // ══════════════════════════════════════════════════════════════════════
  12: [
    {
      mozaik: {
        topic: 'Reading a Real Client Brief and Translating to Layout',
        duration: 60,
        type: 'video',
        objectives: [
          'Read a written client brief and identify layout requirements',
          'Map brief requirements to Mozaik layout decisions',
          'Start a kitchen build from a brief — no template',
        ],
        task: 'Jose gives you a written brief. Start the layout without asking questions.',
        tip: 'The brief is your only instruction. Learn to extract everything from it.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Client Consultation — Discovery Call and Site Visit Process',
        duration: 45,
        type: 'video',
        objectives: [
          'Know the discovery call framework: goals, budget, timeline, scope',
          'Prepare a site visit checklist',
          'Record client notes in the correct Drive folder after a visit',
        ],
        task: 'Create a site visit checklist you would use on a cabinet consultation.',
        tip: 'The consultation is where NFR wins or loses the job. Own the process.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Creating Two Design Options from One Brief — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Build 2 distinct kitchen layouts from the same brief',
          'Differentiate the options clearly (layout A vs. layout B)',
          'Note what is different and why each is valid',
        ],
        task: 'Complete the two-option design quiz.',
        tip: 'Two options give the client control without infinite choice. This is a sales skill.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Consultation Process — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'List the discovery call framework questions',
          'Use the site visit checklist to assess a described space',
          'Identify what information must be captured before a proposal is written',
        ],
        task: 'Complete the client consultation process admin quiz.',
        tip: 'A consultation without a checklist is a conversation. A checklist makes it a process.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Presenting Two Options with Explanations',
        duration: 60,
        type: 'video',
        objectives: [
          'Present Layout A and Layout B to Jose as the client',
          'Explain the trade-offs of each option clearly',
          'Guide the client toward the option that best fits their brief',
        ],
        task: 'Present both layouts to Jose. Let him choose. Support his choice with data.',
        tip: 'Presenting options is a skill. Guide without pushing. Inform without overwhelming.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Post-Consultation Admin — Notes, Proposal Trigger, and Follow-Up',
        duration: 45,
        type: 'video',
        objectives: [
          'Record consultation notes in the correct format',
          'Trigger a proposal from consultation notes',
          'Send a follow-up email within 24 hours',
        ],
        task: 'Write up a fictional consultation using the correct format and trigger a sample proposal.',
        tip: 'The 24-hour follow-up is not optional. It\'s the difference between a lead and a client.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Live Client Simulation — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Build a kitchen from a brief, create 3D renders, present 2 options',
          'Handle one change request live',
          'Close the presentation with a next step',
        ],
        task: 'Complete the live client simulation quiz — Jose plays the client.',
        tip: 'This is your first simulation under pressure. Mistakes are OK — learning isn\'t.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Post-Consultation Admin — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Write up a consultation and trigger a proposal correctly',
          'Send a follow-up email within the 24-hour standard',
          'Identify what is missing in a described incomplete consultation record',
        ],
        task: 'Complete the post-consultation admin quiz.',
        tip: 'Consultation records are legal documents if a dispute arises. Be accurate.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 12 Review — Full Live Client Simulation with Jose',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Full simulation: brief → layout → 3D → 2 options → present → handle revision → close',
          'No notes, no help, no prompts',
          'Jose grades the presentation on clarity, confidence, and accuracy',
        ],
        task: 'Run the full simulation for Jose. This is a pass/fail checkpoint.',
        tip: 'Week 12 is a major milestone. If you pass — production training begins. If not — Jose will tell you what to drill.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 12 Review — Consultation to Proposal Full Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Run the full cycle: discovery call → site visit → consultation notes → proposal → follow-up',
          'Time yourself — target under 2 hours for the full admin cycle',
          'Report any bottlenecks to Jose',
        ],
        task: 'Run the full consultation-to-proposal cycle. Time it. Report to Jose.',
        tip: 'Speed + accuracy = professional. Slow but accurate is a starting point. Aim for both.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 13 — Cut Lists | Closeout, Punch List, and Reviews
  // ══════════════════════════════════════════════════════════════════════
  13: [
    {
      mozaik: {
        topic: 'Understanding Cut List Output from Mozaik',
        duration: 60,
        type: 'video',
        objectives: [
          'Generate a cut list from a completed kitchen design',
          'Identify the 5 columns every cut list has (part, material, thickness, W, L)',
          'Know which parts are cut by CNC vs. by hand',
        ],
        task: 'Generate a cut list from your Week 12 kitchen. Identify 3 CNC-cut parts.',
        tip: 'The cut list is what Scott reads to run the CNC. Every error here is a cut error there.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Job Closeout — Punch List Creation and Tracking',
        duration: 45,
        type: 'video',
        objectives: [
          'Know when to initiate the punch list (after install, before final payment)',
          'Create a punch list document using the NFR template',
          'Track punch list items to completion in the portal',
        ],
        task: 'Create a punch list for a fictional 2-room flooring install.',
        tip: 'The punch list is the client\'s last chance to flag issues. Capture everything.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Reading Part Labels — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Match 5 part labels on a cut list to their cabinet location',
          'Identify a mislabeled part in a test cut list',
          'Explain what "LH" and "RH" mean on door panels',
        ],
        task: 'Complete the part labels cut list quiz.',
        tip: 'LH = left hand, RH = right hand. Mix them up and the install fails.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Punch List — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Create a punch list from a described final walkthrough',
          'Assign each item a status (open, in-progress, complete)',
          'Identify what triggers the final invoice once punch list is closed',
        ],
        task: 'Complete the punch list admin quiz.',
        tip: 'An open punch list item blocks payment. Track them aggressively.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Sheet Optimization and Nesting Basics',
        duration: 60,
        type: 'video',
        objectives: [
          'Understand what sheet optimization means (maximizing yield from a sheet)',
          'See how Mozaik arranges parts on a standard 4×8 sheet',
          'Identify waste percentage and understand why it matters',
        ],
        task: 'Generate an optimized sheet layout from your kitchen cut list. Note waste %.',
        tip: 'Waste % directly affects job profitability. Lower is better.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Client Reviews — Request, Track, and Respond',
        duration: 45,
        type: 'video',
        objectives: [
          'Send a Google review request after a punch list close',
          'Monitor and respond to a Google review',
          'Know how NFR handles a negative review',
        ],
        task: 'Draft a 5-star response to a fictional review and a professional response to a 3-star.',
        tip: 'How you respond to reviews is public. Write like the next 100 clients will read it.',
        resourceLabel: 'Google My Business',
        resourceUrl: 'https://business.google.com/',
      },
    },
    {
      mozaik: {
        topic: 'Checking Cut Lists for Errors Before Sending — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Check a cut list for 3 types of common errors: missing parts, wrong dimensions, wrong material',
          'Identify and flag 2 errors in a test cut list',
          'Know who reviews the cut list before it goes to Scott',
        ],
        task: 'Complete the cut list error-checking quiz.',
        tip: 'A cut list error caught by Maria > a cut list error caught by Scott > a cut list error caught at install.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Client Reviews — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Draft a review request for 3 different job types (flooring, cabinet, paint)',
          'Write a response to a 4-star review that mentions one complaint',
          'Explain how reviews affect NFR\'s Google search ranking',
        ],
        task: 'Complete the client reviews admin quiz.',
        tip: 'Reviews are compounding. The habit matters more than any single response.',
        resourceLabel: 'Google My Business',
        resourceUrl: 'https://business.google.com/',
      },
    },
    {
      mozaik: {
        topic: 'Week 13 Review — Full Cut List Generation and Check',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Generate a cut list from a kitchen Jose assigns',
          'Check it for errors before showing Jose',
          'Explain the nesting and sheet optimization output',
        ],
        task: 'Generate and error-check a cut list. Present to Jose.',
        tip: 'Production starts with your cut list. The shop trusts what you send.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 13 Review — Closeout and Review Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Run punch list → final invoice → review request cycle end-to-end',
          'Produce all 3 documents without templates',
          'Report to Jose',
        ],
        task: 'Run closeout cycle end-to-end. Report to Jose.',
        tip: 'Closeout is the last impression clients have. Make it professional.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 14 — Manufacturing Files | New Client Intake
  // ══════════════════════════════════════════════════════════════════════
  14: [
    {
      mozaik: {
        topic: 'Material Quantity Reports from Mozaik',
        duration: 60,
        type: 'video',
        objectives: [
          'Generate a material quantity report from a completed layout',
          'Identify sheet count, hardware count, and edge banding length',
          'Know how to use the report to create a material order',
        ],
        task: 'Generate a material report from your Week 13 kitchen. Identify the order quantities.',
        tip: 'Material reports tell you what to buy. Cut lists tell you what to cut.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'New Client Intake — From First Call to Project Folder',
        duration: 45,
        type: 'video',
        objectives: [
          'Know the steps from first call to active project: intake form → Drive folder → calendar event',
          'Create a new client folder in Google Drive with the correct structure',
          'Schedule the first appointment on Google Calendar',
        ],
        task: 'Create a new client folder and first appointment for a fictional client.',
        tip: 'New client intake sets the tone. Get it right at the start.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'CNC Export Basics — What Mozaik Sends to the Machine',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Know the file format Mozaik exports for CNC (DXF or proprietary)',
          'Identify which parts in the cut list go to CNC vs. table saw',
          'Understand what Scott does with the exported file',
        ],
        task: 'Complete the CNC export basics quiz.',
        tip: 'You don\'t run the CNC. But you need to know what you\'re sending and why.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'New Client Intake — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Walk through intake steps without prompts',
          'Create a Drive folder using the correct naming convention',
          'Identify what is missing in a described incomplete intake',
        ],
        task: 'Complete the new client intake admin quiz.',
        tip: 'Every client who ever came to NFR went through intake. This is the front door.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Job Setup for Scott — What the Warehouse Needs Before Cutting',
        duration: 60,
        type: 'video',
        objectives: [
          'Know what Scott needs to run a job: cut list, CNC file, material list',
          'Prepare a complete job package for Scott',
          'Know the naming convention for files sent to the warehouse',
        ],
        task: 'Assemble a complete job package for Scott from your Week 13 kitchen.',
        tip: 'The shop package is Maria\'s handoff to production. Missing files cause delays.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'CRM Basics — Tracking Leads, Clients, and Follow-Up',
        duration: 45,
        type: 'video',
        objectives: [
          'Understand how NFR tracks leads vs. active clients',
          'Record a new lead with source, contact info, and status',
          'Schedule a follow-up reminder for a cold lead',
        ],
        task: 'Record a fictional lead with full details and schedule a follow-up.',
        tip: 'Leads that aren\'t tracked disappear. Track everything in one place.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'File Handoff Process and Verification — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Assemble a job package (cut list + CNC file + material report) for a test kitchen',
          'Verify all 3 files are correct before sending',
          'Send the package to Scott using the correct method',
        ],
        task: 'Complete the file handoff and verification Mozaik quiz.',
        tip: 'The handoff is a contract between you and Scott. Make it clean.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'CRM and Lead Tracking — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Record a lead and schedule a follow-up without prompts',
          'Identify a lead that has gone cold and explain the next action',
          'Explain the difference between a lead and a client in NFR\'s system',
        ],
        task: 'Complete the CRM and lead tracking admin quiz.',
        tip: 'Most closed jobs come from following up on leads that didn\'t close the first time.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 14 Review — Full Manufacturing Package',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Generate material report + cut list + CNC export for a kitchen Jose assigns',
          'Assemble the full shop package with correct file names',
          'Present the package to Jose as if handing off to Scott',
        ],
        task: 'Assemble and present a full manufacturing package. Present to Jose.',
        tip: 'Week 14 is production handoff. If this is clean — the shop runs smooth.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 14 Review — Intake and Lead Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Run new client intake → lead recording → follow-up schedule end-to-end',
          'Produce all documents without templates',
          'Report to Jose — what\'s working, what\'s not',
        ],
        task: 'Run intake and lead cycle end-to-end. Report to Jose.',
        tip: 'Intake + lead tracking = the front end of the business. Own it.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 15 — Production to Field | Advanced QuickBooks
  // ══════════════════════════════════════════════════════════════════════
  15: [
    {
      mozaik: {
        topic: 'Sending Files to Scott and Tracking the Job Status',
        duration: 60,
        type: 'video',
        objectives: [
          'Send the manufacturing package to Scott using the correct channel',
          'Record the send date and expected completion in the project file',
          'Know how to check status without interrupting Scott',
        ],
        task: 'Send a test package to Scott and record the send confirmation.',
        tip: 'Every handoff has a timestamp. Log it.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'QuickBooks — Expense Tracking and Bill Entry',
        duration: 45,
        type: 'video',
        objectives: [
          'Enter a material expense bill in QuickBooks',
          'Assign the bill to the correct job and expense category',
          'Run a job cost report and verify profitability',
        ],
        task: 'Enter a test material bill in QuickBooks. Run a job cost report.',
        tip: 'If expenses aren\'t tracked by job, NFR can\'t know if a job made money.',
        resourceLabel: 'QuickBooks',
        resourceUrl: 'https://quickbooks.intuit.com/',
      },
    },
    {
      mozaik: {
        topic: 'Cut List Verification Walkthrough with Scott — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Walk through a cut list with Scott (or Jose playing Scott) item by item',
          'Identify 2 items Scott would question',
          'Explain each item clearly without Mozaik open',
        ],
        task: 'Complete the cut list verification walkthrough quiz.',
        tip: 'You sent it — you own it. Know every line item.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'QuickBooks — Expense Tracking Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Enter a bill with all fields correct',
          'Run a job cost report and identify the gross margin',
          'Identify an expense that was miscategorized in a test record',
        ],
        task: 'Complete the QuickBooks expense tracking quiz.',
        tip: 'Miscategorized expenses distort job margins. Catch them on entry.',
        resourceLabel: 'QuickBooks',
        resourceUrl: 'https://quickbooks.intuit.com/',
      },
    },
    {
      mozaik: {
        topic: 'CNC Output Observation — Understanding What Scott Sees',
        duration: 60,
        type: 'video',
        objectives: [
          'Watch (or review) a CNC output from a real Mozaik-generated file',
          'Match the output parts to the cut list',
          'Identify one thing you would have done differently in the layout to improve CNC yield',
        ],
        task: 'Review a CNC output from a past job. Match 5 parts to the cut list.',
        tip: 'Watching production makes you a better designer. The machine shows you what the file becomes.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Payroll Basics — Tracking Hours and Reporting to Jose',
        duration: 45,
        type: 'video',
        objectives: [
          'Know how NFR tracks crew hours (time sheets, CompanyCam)',
          'Enter a test time sheet for Jorge',
          'Report total hours for a week to Jose',
        ],
        task: 'Enter a test time sheet for Jorge. Report total hours to Jose.',
        tip: 'Payroll depends on hours tracked. Missing time sheets delay pay.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Revision Protocol — Handling Changes After Handoff',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Know the steps to revise a design after files have been sent to Scott',
          'Generate a revised cut list and mark it as v2',
          'Communicate the revision to Scott clearly',
        ],
        task: 'Complete the revision protocol Mozaik quiz.',
        tip: 'Revisions happen. The protocol prevents confusion — follow it every time.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Payroll and Time Tracking — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Enter a week of time sheets without prompts',
          'Identify overtime and calculate the correct rate',
          'Report weekly hours to Jose in the correct format',
        ],
        task: 'Complete the payroll and time tracking admin quiz.',
        tip: 'Payroll errors create trust problems with crew. Get it right every week.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 15 Review — Jose Assigns a Real Project for Handoff',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Complete a full design → cut list → manufacturing package for a real or near-real project',
          'Verify every file before sending',
          'Present the package to Jose for approval before sending to Scott',
        ],
        task: 'Jose assigns a real project. Build and package it. Jose approves before sending.',
        tip: 'This is the closest thing to a real job you\'ve done. Treat it like one.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 15 Review — QuickBooks Job Costing Full Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Enter invoice + expenses + time → run job cost report for a test project',
          'Identify the gross margin',
          'Report to Jose — what margin does this job produce?',
        ],
        task: 'Run full job costing cycle. Report margin to Jose.',
        tip: 'Margin visibility is how Jose runs the business. You\'re now a key part of that.',
        resourceLabel: 'QuickBooks',
        resourceUrl: 'https://quickbooks.intuit.com/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 16 — Speed & Accuracy | Office Efficiency & SOPs
  // ══════════════════════════════════════════════════════════════════════
  16: [
    {
      mozaik: {
        topic: 'Standard 10×12 Kitchen — Timed Build',
        duration: 60,
        type: 'video',
        objectives: [
          'Build a complete 10×12 L-shape kitchen in under 45 minutes',
          'Include base, wall, tall, appliances, island, and end panels',
          'Time yourself and record your result',
        ],
        task: 'Build the standard kitchen. Time it. Target: under 45 minutes.',
        tip: 'Speed is a skill. The first time takes 90 minutes. By graduation it should take 30.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Office Efficiency — Batching, Templates, and Time Blocking',
        duration: 45,
        type: 'video',
        objectives: [
          'Know the 3 admin tasks that benefit most from batching (emails, invoices, scheduling)',
          'Create a daily time-blocking template for Maria\'s role',
          'Identify 2 recurring tasks that should be templated',
        ],
        task: 'Draft a sample daily time block schedule for Maria\'s office role.',
        tip: 'Efficiency is a system, not a mood. Build the system.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Complex Modifications — Timed Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Apply 5 combined modifications in under 20 minutes',
          'Generate a cut list from the result',
          'Verify no errors in the cut list output',
        ],
        task: 'Complete the timed modifications quiz.',
        tip: 'Timed work reveals where your process slows down. Note it.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Office Efficiency — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Name the 3 best tasks for batching',
          'Create a time block for a described busy day',
          'Identify a time sink in a described admin workflow',
        ],
        task: 'Complete the office efficiency admin quiz.',
        tip: 'Efficiency questions are about systems, not speed. The system creates the speed.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Client Brief to 3D in One Session',
        duration: 60,
        type: 'video',
        objectives: [
          'Take a written brief and produce a complete 3D presentation in under 90 minutes',
          'Include 2 options, 3 camera angles, door style, and color',
          'Time yourself',
        ],
        task: 'Jose gives brief. Build full 3D presentation. Target: 90 minutes.',
        tip: 'This is the real job. Brief comes in the morning, client sees 3D by afternoon.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'SOP Creation — Writing a Process That Others Can Follow',
        duration: 45,
        type: 'video',
        objectives: [
          'Know the NFR SOP format (title, purpose, steps, owner, frequency)',
          'Write a 5-step SOP for a task you now do regularly',
          'Have Jose review it',
        ],
        task: 'Write an SOP for one admin task you do regularly. Show Jose.',
        tip: 'If you can write it, someone else can follow it. That\'s the goal.',
        resourceLabel: 'NFR SOPs',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Revision on Completed Project — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Receive a revision request from Jose (playing client)',
          'Apply the change, regenerate the cut list, and update the file package',
          'Complete the revision in under 30 minutes',
        ],
        task: 'Complete the timed revision quiz.',
        tip: 'Revisions are normal. Slow revisions lose clients. Build the muscle.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'SOP Writing — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Write an SOP for a described process you haven\'t done yet',
          'Use the correct NFR SOP format',
          'Identify a step that is missing from a test SOP',
        ],
        task: 'Complete the SOP writing admin quiz.',
        tip: 'Good SOPs prevent errors. Great SOPs prevent the same error twice.',
        resourceLabel: 'NFR SOPs',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 16 Review — Speed and Accuracy Assessment',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Timed build: 10×12 kitchen with all elements. Target: 40 minutes',
          'Timed brief-to-3D: full presentation from brief. Target: 85 minutes',
          'Jose grades both on speed AND accuracy',
        ],
        task: 'Two timed builds. Jose grades speed and accuracy. Report times.',
        tip: 'Speed without accuracy is noise. Both matter equally.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 16 Review — Office Systems Audit',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Review all admin processes from weeks 1-16',
          'Identify top 3 strongest processes and top 2 weakest',
          'Report to Jose with specific gaps and proposed fixes',
        ],
        task: 'Audit your admin processes. Report 3 strong and 2 weak to Jose.',
        tip: 'Self-awareness about gaps is a senior skill. Name them — don\'t hide them.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 17 — Multi-Room & Complex Projects | Marketing Support
  // ══════════════════════════════════════════════════════════════════════
  17: [
    {
      mozaik: {
        topic: 'Kitchen + Bathroom in One Project File',
        duration: 60,
        type: 'video',
        objectives: [
          'Create a project with both a kitchen and a bathroom floor plan',
          'Switch between rooms in the same project file',
          'Keep cabinet naming consistent across rooms',
        ],
        task: 'Build a kitchen + bathroom in one Mozaik project. Screenshot both rooms.',
        tip: 'Multi-room projects are common for kitchen + bath remodels. This is your future.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Marketing Support — Social Media, Photos, and Before/After Posts',
        duration: 45,
        type: 'video',
        objectives: [
          'Know which platforms NFR uses for marketing (Google, Instagram, Facebook)',
          'Select 2 CompanyCam before/after photos for a post',
          'Draft a caption for a completed kitchen job',
        ],
        task: 'Draft a social media post (with caption) for a fictional completed kitchen.',
        tip: 'Every finished kitchen is a marketing asset. Document it like one.',
        resourceLabel: 'CompanyCam App',
        resourceUrl: 'https://companycam.com/',
      },
    },
    {
      mozaik: {
        topic: 'Managing Multiple Project Versions — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Save v1, v2, and final versions of a project with correct naming',
          'Know when to create a new version vs. overwrite',
          'Explain your version control system to Jose',
        ],
        task: 'Complete the project version management Mozaik quiz.',
        tip: 'Version control is respect for your past work. The client will ask to see v1 someday.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Marketing Support — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Write a caption for 3 different job types',
          'Identify which photo makes the best before/after for marketing',
          'Explain how reviews connect to marketing reach',
        ],
        task: 'Complete the marketing support admin quiz.',
        tip: 'Marketing is everyone\'s job at a small company. Your photos and words matter.',
        resourceLabel: 'CompanyCam App',
        resourceUrl: 'https://companycam.com/',
      },
    },
    {
      mozaik: {
        topic: 'Large Project Organization — Naming, Folders, and File Structure',
        duration: 60,
        type: 'video',
        objectives: [
          'Organize a multi-room project with 3+ rooms in one Mozaik file',
          'Create a clear folder structure in Google Drive for the project',
          'Name all Mozaik files, exports, and cut lists consistently',
        ],
        task: 'Organize a large 3-room project folder. Show Jose the structure.',
        tip: 'Disorganized projects lose money at every handoff. File structure is a skill.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Email Campaign Basics — Announcing New Services and Following Up',
        duration: 45,
        type: 'video',
        objectives: [
          'Know when NFR sends a bulk email vs. individual follow-up',
          'Draft a service announcement email for NFR\'s new kitchen design service',
          'Know which email tool NFR uses for outreach',
        ],
        task: 'Draft a kitchen design service announcement email for 20 past clients.',
        tip: 'Past clients who trust you are your best leads. Remind them you\'re here.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Efficiency Workflow for Multi-Room Projects — Quiz',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Build a kitchen + bathroom project in under 2 hours',
          'Generate cut lists for both rooms',
          'Verify no part naming conflicts across rooms',
        ],
        task: 'Complete the multi-room efficiency workflow quiz.',
        tip: 'Time matters on multi-room jobs. Every hour saved is margin earned.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Email Campaign — Quiz',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Draft a campaign email for a described service launch',
          'Identify the 3 components of an effective follow-up email',
          'Explain when not to send a bulk email',
        ],
        task: 'Complete the email campaign admin quiz.',
        tip: 'Every email is a chance to build or erode trust. Write accordingly.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Week 17 Review — Complex Multi-Room Project',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Build a multi-room project Jose assigns (kitchen + bathroom or kitchen + laundry)',
          'Generate all manufacturing files',
          'Present to Jose — speed and clarity graded',
        ],
        task: 'Build and present a multi-room project Jose assigns.',
        tip: 'One week until graduation. This is the final practice run.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Week 17 Review — Marketing and Outreach Cycle',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Produce a social post, a review request, and a campaign email for a test job',
          'Present all 3 to Jose for review',
          'Apply one piece of feedback from Jose',
        ],
        task: 'Produce and present marketing materials for a test job. Apply Jose\'s feedback.',
        tip: 'Week 17 admin is about outward communication. Own your voice for NFR.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
  ],

  // ══════════════════════════════════════════════════════════════════════
  // WEEK 18 — GRADUATION WEEK
  // ══════════════════════════════════════════════════════════════════════
  18: [
    {
      mozaik: {
        topic: 'Graduation — Jose Gives a Full Client Brief',
        duration: 60,
        type: 'video',
        objectives: [
          'Receive a full client brief from Jose (real client scope)',
          'Begin the project immediately without asking clarifying questions',
          'Plan your build: room setup → layout → modifications → 3D → package',
        ],
        task: 'Jose gives you the graduation brief. Begin your plan. No help.',
        tip: 'This is the real thing. Everything from 18 weeks leads here.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Graduation — Admin Operations Mastery Check',
        duration: 45,
        type: 'video',
        objectives: [
          'Review all admin processes end-to-end',
          'Identify your 3 strongest operations',
          'Write a self-assessment to share with Jose',
        ],
        task: 'Write a 1-page admin self-assessment. Cover: what you own, what you\'re still learning.',
        tip: 'A good self-assessment is more valuable than a passing score.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Graduation — Build the Complete Layout',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Build the full layout from the graduation brief',
          'Apply all modifications, specialty elements, and islands',
          'Save with correct naming — this is a real file',
        ],
        task: 'Complete the graduation layout build.',
        tip: 'Build it like a client is paying for it. Because one probably is.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Graduation — Full Intake-to-Closeout Simulation',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Run the full admin cycle for the graduation project: intake → proposal → agreement → work order → closeout',
          'Produce all documents without templates or notes',
          'Present to Jose',
        ],
        task: 'Run the full admin cycle for the graduation project.',
        tip: 'This is the whole job, end-to-end. You own every step.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Graduation — 3D Renders and Final Package',
        duration: 60,
        type: 'video',
        objectives: [
          'Generate 3D renders for the graduation project',
          'Apply door style, color, and countertop in 3D',
          'Export full presentation: 3 angles + floor plan',
        ],
        task: 'Complete 3D render package for the graduation project.',
        tip: 'Your renders are what the client will see first. Make them count.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Graduation — SOP Contribution: Add One New SOP',
        duration: 45,
        type: 'video',
        objectives: [
          'Write one new NFR SOP based on something you learned during training',
          'Use the correct format: title, purpose, steps, owner, frequency',
          'Submit to Jose — if approved, it goes into the team SOPs folder',
        ],
        task: 'Write one new SOP for a process not yet documented. Submit to Jose.',
        tip: 'Contributing a real SOP is a graduation gift to the company.',
        resourceLabel: 'NFR SOPs',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'Graduation — Full Manufacturing Package',
        duration: 60,
        type: 'quiz',
        objectives: [
          'Generate cut list + material report + CNC export for the graduation project',
          'Error-check all 3 files',
          'Assemble the complete shop package for Scott',
        ],
        task: 'Assemble the full manufacturing package for the graduation project.',
        tip: 'The shop package is your final handoff. Make it clean.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'Graduation — Jose Reviews Your SOP and Admin Package',
        duration: 45,
        type: 'quiz',
        objectives: [
          'Present your SOP and admin package to Jose',
          'Answer questions about each document',
          'Receive and apply one piece of feedback from Jose',
        ],
        task: 'Present admin graduation package to Jose. Apply feedback.',
        tip: 'Feedback at graduation is a gift. Receive it well.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
    },
    {
      mozaik: {
        topic: 'GRADUATION DAY — Complete Presentation to Jose',
        duration: 60,
        type: 'weekly-review',
        objectives: [
          'Deliver the full graduation presentation: layout → 3D renders → manufacturing package → verbal client walkthrough',
          'Handle one live change request from Jose',
          'Demonstrate speed, accuracy, and confidence',
        ],
        task: 'GRADUATION: Full presentation to Jose. No notes. No help. This is the job.',
        tip: 'You started knowing nothing about Mozaik. You finish ready to build real kitchens for real clients. That is the work.',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
      },
      admin: {
        topic: 'GRADUATION DAY — Admin Mastery Final Review with Jose',
        duration: 45,
        type: 'weekly-review',
        objectives: [
          'Walk Jose through every admin system you now own',
          'State your 3 strongest capabilities and your 1 development area',
          'Commit to one admin improvement for Month 4',
        ],
        task: 'GRADUATION: Admin review with Jose. Verbal walkthrough of your full role.',
        tip: 'Graduation is not the end — it\'s the beginning of doing this for real. Welcome to the team.',
        resourceLabel: 'NFR Staff Portal',
        resourceUrl: 'https://hearthwoodcabinetry.com/staff/',
      },
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

  // ── 90-Day Phase System ────────────────────────────────────────────────────
  // Beginner:     Weeks 1–6   (Days 1–30)
  // Intermediate: Weeks 7–12  (Days 31–60)
  // Advanced:     Weeks 13+   (Days 61–90)

  function getPhaseForWeek(weekNum) {
    if (weekNum <= 6)  return 'Beginner';
    if (weekNum <= 12) return 'Intermediate';
    return 'Advanced';
  }

  // Returns program day number (1-based weekday count from anchor to dateStr)
  function getProgramDay(employee, dateStr) {
    var config = TRAINING_CONTENT[employee];
    if (!config || !config.anchor) return null;
    var anchor = new Date(config.anchor + 'T00:00:00');
    var target = new Date(dateStr + 'T00:00:00');
    if (target < anchor) return null;
    var day = 0;
    var cursor = new Date(anchor);
    while (cursor.toISOString().slice(0, 10) <= dateStr) {
      var dow = cursor.getDay();
      if (dow !== 0 && dow !== 6) day++;
      if (cursor.toISOString().slice(0, 10) === dateStr) break;
      cursor.setDate(cursor.getDate() + 1);
    }
    return day > 0 ? day : null;
  }

  // ── Daily Schedule Pattern ─────────────────────────────────────────────────
  // dayIndex: 0=Mon 1=Tue 2=Wed 3=Thu 4=Fri
  // Mon/Wed → 'video'          (Video + Information)
  // Tue/Thu → 'quiz'           (Review + Quiz)
  // Fri    → 'weekly-review'   (All subjects from the week)

  function getDailyType(dayIndex) {
    if (dayIndex === 0 || dayIndex === 2) return 'video';
    if (dayIndex === 4)                   return 'weekly-review';
    return 'quiz';
  }

  // ── Daily Time Blocks ──────────────────────────────────────────────────────
  // Maria: 2.5 hrs  — Admin + Mozaik + Design
  // Scott: 2.0 hrs  — Admin + CNC + Warehouse
  // Jorge: 0.5 hrs  — Admin + Project Manager (7:30–8:00am only)
  var DAILY_SCHEDULE = {
    maria: { hours: 2.5, tracks: ['admin', 'mozaik', 'design'],   timeWindow: null },
    scott: { hours: 2.0, tracks: ['admin', 'cnc', 'warehouse'],   timeWindow: null },
    jorge: { hours: 0.5, tracks: ['admin', 'manager'],            timeWindow: '7:30–8:00am' },
  };

  // ── exports ────────────────────────────────────────────────────────────────
  window.TRAINING_CONTENT  = TRAINING_CONTENT;
  window.getTrainingDay    = getTrainingDay;
  window.getPhaseForWeek   = getPhaseForWeek;
  window.getDailyType      = getDailyType;
  window.getProgramDay     = getProgramDay;
  window.DAILY_SCHEDULE    = DAILY_SCHEDULE;
})();
