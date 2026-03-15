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
  // CNC PLAN — Scott (Weeks 1–12)
  // ═══════════════════════════════════════════════════════════════════════════

  const CNC_URL   = 'https://www.shopsabre.com/shopsabre-university/';
  const CNC_LABEL = 'ShopSabre University';

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
        topic: 'Loading and Opening a Job File',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Locate a job file on the shop computer',
          'Load the file into the CNC software correctly',
          'Verify the file loaded without errors',
        ],
        task: 'Watch the opening files video. Load 3 different sample files provided by Jose.',
        tip: 'Always double-check the file name matches the job before loading.',
      },
      {
        topic: 'Practice — File Loading',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load 5 different files independently',
          'Identify the job and what it will cut for each file',
          'Confirm correct loading without assistance',
        ],
        task: 'Open 5 different files. For each, state what job it is and what it will cut. No cuts — software only.',
        tip: 'Speed in file loading prevents mistakes under pressure.',
      },
      {
        topic: 'Toolpath Preview',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run the toolpath simulation for a loaded file',
          'Identify each cut pass in the simulation',
          'Spot potential errors before any cutting begins',
        ],
        task: 'Watch the toolpath simulation video. Preview the sample file and describe each cut pass out loud.',
        tip: 'If the preview looks wrong, it IS wrong. Stop and call Jose.',
      },
      {
        topic: 'Week 2 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'State the file format the machine uses',
          'Explain what toolpath preview reveals before cutting',
          'Know when to stop and call Jose',
        ],
        task: 'Write: What file format does the machine use? What does toolpath preview tell you? What would make you stop and call Jose?',
        tip: 'These are the three most important questions in software operation.',
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up a straight-line cut correctly',
          'Understand climb vs. conventional cutting direction',
          'Verify the cut setup before running',
        ],
        task: 'Watch the basic cutting video. Set up a straight-line cut on scrap. Jose approves before running.',
        tip: 'Climb cutting can grab the material — use conventional on first passes.',
      },
      {
        topic: 'Cutting a Rectangle — Pocket vs. Profile & Tabs',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load a real Mozaik export into the ShopSabre software',
          'Verify the file loaded correctly with no errors',
          'Preview the full toolpath',
        ],
        task: 'Load a real Mozaik export. Preview the full toolpath. List every part you see in the preview.',
        tip: 'Every part in the preview should match the cut list Maria generated.',
      },
      {
        topic: 'Practice — Reading Cut Files',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load 3 different Mozaik files independently',
          'List every part by name and dimension before previewing',
          'Verify each part against the preview',
        ],
        task: 'Load 3 different Mozaik files. For each, list every part by name and dimension before previewing. Then preview and verify.',
        tip: 'Reading before previewing builds the habit of thinking before cutting.',
      },
      {
        topic: 'Cross-Checking Cut List Against Machine File',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
          'Describe how Maria\'s output becomes your input',
        ],
        task: 'Write: What is the difference between a box part, a door, and a drawer front in a Mozaik file? What do you do if the file and cut list don\'t match?',
        tip: 'Understanding the upstream makes you a better operator.',
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run a complete Mozaik job file from load to finished parts',
          'Follow the pre-cut checklist on every step',
          'Measure all parts after cutting and record results',
        ],
        task: 'Run the cut with Jose watching the full session. Measure every part. Save results in the training log.',
        tip: 'First cut is about process, not speed. Slow and correct.',
      },
      {
        topic: 'Practice — Second Cut Independently',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand how nesting arranges parts on a panel',
          'Calculate waste percentage from a nesting layout',
          'Identify when waste is too high to approve',
        ],
        task: 'Watch the nesting video. Review a Mozaik sheet layout. Calculate the waste percentage.',
        tip: 'Above 20% waste, flag to Jose before approving the cut.',
      },
      {
        topic: 'Cutting a Full 4×8 Panel',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up a door cut with correct grain direction',
          'Run the cut with proper tolerances',
          'Inspect all door panels after cutting',
        ],
        task: 'Watch the door cutting module. Cut a set of 4 doors from a real Mozaik file. Measure all 4.',
        tip: 'Grain direction is non-negotiable on wood-look panels. Wrong direction = reject.',
      },
      {
        topic: 'Practice — Full Door Set',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand drawer front sizing rules',
          'Cut a set of drawer fronts correctly',
          'Verify false front reveal is consistent on all four sides',
        ],
        task: 'Watch the drawer front video. Cut a drawer front set from scrap. Check reveal consistency on all sides.',
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
        topic: 'Bit Types — Compression, Downcut, Upcut & V-Bits',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify each bit type by sight',
          'Know which bit to use for each material and cut type',
          'Know where bits are stored and how they\'re labeled',
        ],
        task: 'Walk the shop and find every bit. Identify its type. Write down which bit is used for sheet good box parts and which for doors.',
        tip: 'Using the wrong bit destroys surface quality.',
      },
      {
        topic: 'Changing a Bit — Collet, Torque & Runout Check',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Change a bit safely and correctly',
          'Torque the collet to the correct specification',
          'Perform a runout check before cutting',
        ],
        task: 'Watch the tool change video. Observe Jose change a bit. Then do it yourself under supervision.',
        tip: 'Under-torqued bits spin loose mid-cut. Over-torqued collets crack.',
      },
      {
        topic: 'Practice — Bit Change Independently',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Complete 3 full bit changes independently',
          'Pass Jose\'s inspection for torque and runout on each',
          'Build the habit before it matters on a live job',
        ],
        task: 'Complete 3 full bit changes independently. Jose inspects each for correct torque and runout. No cuts until approved.',
        tip: 'Bit changes done right take 5 minutes. Done wrong, they cost hours.',
      },
      {
        topic: 'Tool Life — When to Replace & Signs of a Dull Bit',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify visual signs of a dull bit',
          'Know the life expectancy of our standard bits',
          'Know the replacement process and who to notify',
        ],
        task: 'Watch the tool wear video. Inspect all current bits and note condition in the log. Flag any that need replacement to Jose.',
        tip: 'A dull bit burns, chatters, and tears the material. If you see any of those, stop.',
      },
      {
        topic: 'Week 9 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Describe how to identify a dull bit',
          'Explain what a dull bit does to cut quality',
          'Write the correct bit change procedure from memory',
        ],
        task: 'Write: How do you know a bit is dull? What does a dull bit do to cut quality? What is the correct change procedure from memory?',
        tip: 'Tool management is machine management. Own both.',
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
        resourceLabel: 'Training Resource',
        resourceUrl: FIELD_URL_QUALITY,
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
      role:      'Designer / Office Manager',
      color:     '#5F8062',
      anchor:    '2026-03-16',
      startWeek: 8,
      plan:      MOZAIK_PLAN,
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
      anchor:    '2026-03-17',
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

    return {
      week: weekNum,
      day:  dayIdx + 1,
      employee,
      ...weekPlan[dayIdx],
    };
  }

  // ── exports ────────────────────────────────────────────────────────────────
  window.TRAINING_CONTENT = TRAINING_CONTENT;
  window.getTrainingDay   = getTrainingDay;
})();
