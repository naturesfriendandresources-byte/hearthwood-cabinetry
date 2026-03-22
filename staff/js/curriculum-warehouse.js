// curriculum-warehouse.js — Warehouse Track (Scott)
// Warehouse curriculum is managed separately from CNC.
// When videos are added to staff/videos/warehouse/, run /curriculum-agent warehouse to wire them in.
// Run /training-video-quiz [topic] scott to research and approve warehouse videos.

window.PORTAL_CURRICULUM = {
  track: 'warehouse',
  title: 'Warehouse Operations',
  employee: 'scott',
  weeks: [
    {
      weekNum: 1,
      theme: 'Inventory & Material Management',
      days: [
        {
          dayNum: 1,
          label: 'Inventory Basics — Video',
          type: 'video',
          duration: 30,
          videoTitle: 'Warehouse Inventory Management',
          videoUrl: 'https://www.youtube.com/results?search_query=warehouse+inventory+management+basics',
          videoNote: 'Video coming soon — Jose will approve a specific video for this slot. Use /training-video-quiz inventory scott to find options.',
          segments: [
            'Know what inventory management means at NFR',
            'Understand how materials are tracked from receiving to job site',
            'Know where to log received materials',
          ],
        },
        {
          dayNum: 2,
          label: 'Inventory Basics — Quiz',
          type: 'quiz',
          duration: 20,
          taskDescription: 'Walk the warehouse and do a physical count of one material category. Compare to what\'s logged. Report any differences to Jose.',
          segments: [
            'Physically count one category of material (e.g., flooring boxes)',
            'Write down the count and the location',
            'Compare to any existing inventory list',
            'Report discrepancies to Jose immediately',
          ],
        },
        {
          dayNum: 3,
          label: 'Receiving & Labeling — Video',
          type: 'video',
          duration: 30,
          videoTitle: 'Receiving Materials & Labeling',
          videoUrl: 'https://www.youtube.com/results?search_query=warehouse+receiving+process+labeling',
          videoNote: 'Video coming soon — use /training-video-quiz receiving scott.',
          segments: [
            'Know how to receive a delivery at NFR',
            'Understand labeling rules: what goes on every item',
            'Know when to flag a damaged or incorrect delivery',
          ],
        },
        {
          dayNum: 4,
          label: 'Receiving & Labeling — Quiz',
          type: 'quiz',
          duration: 20,
          taskDescription: 'Next time a delivery arrives, walk through the receiving process with Jose. Document each step you took.',
          segments: [
            'Check the delivery against the PO or order form',
            'Label each item per NFR format',
            'Note any damage or discrepancies',
            'Place materials in the correct zone',
          ],
        },
        {
          dayNum: 5,
          label: 'Weekly Review — Inventory & Receiving',
          type: 'weekly-review',
          duration: 30,
          taskDescription: 'Walk the full warehouse with Jose. Identify: (1) anything that\'s out of place, (2) anything that needs to be labeled, (3) any inventory that looks low. Write it up and submit.',
          segments: [
            'Inventory count vs. expected',
            'Receiving process: steps followed correctly',
            'Labeling: all materials properly labeled',
            'Zone organization: materials in correct locations',
          ],
        },
      ],
    },
    {
      weekNum: 2,
      theme: 'Storage Organization & Safety',
      days: [
        {
          dayNum: 1,
          label: 'Warehouse Layout & Zones — Video',
          type: 'video',
          duration: 30,
          videoTitle: 'Warehouse Organization & Safety',
          videoUrl: 'https://www.youtube.com/results?search_query=warehouse+organization+safety+zones',
          videoNote: 'Video coming soon — use /training-video-quiz organization scott.',
          segments: [
            'Know each zone in the NFR warehouse and what belongs there',
            'Understand why organization saves time on every job',
            'Know OSHA aisle width and stacking height rules',
          ],
        },
        {
          dayNum: 2,
          label: 'Warehouse Safety — Quiz',
          type: 'quiz',
          duration: 20,
          taskDescription: 'Walk the warehouse with a safety checklist. Identify any hazards and report them.',
          segments: [
            'Aisle clearance: 36" minimum clear',
            'Stacking: no unstable stacks above head height without rack',
            'Emergency exits: clear and visible',
            'Fire extinguisher: location known and accessible',
          ],
        },
        {
          dayNum: 3,
          label: 'CNC Material Prep — Video',
          type: 'video',
          duration: 30,
          videoTitle: 'Sheet Material Handling for CNC',
          videoUrl: 'https://www.youtube.com/results?search_query=plywood+sheet+material+handling+warehouse',
          videoNote: 'Video coming soon — use /training-video-quiz materials scott.',
          segments: [
            'Know how to handle 4x8 sheet goods safely (two-person lift)',
            'Understand how to stage sheets for the CNC machine',
            'Know the difference between MDF, plywood, and hardwood at NFR',
          ],
        },
        {
          dayNum: 4,
          label: 'Material Handling — Quiz',
          type: 'quiz',
          duration: 20,
          taskDescription: 'Stage materials for an upcoming CNC job. Show Jose the setup before cutting begins.',
          segments: [
            'Pull the correct sheet count for the job',
            'Stage sheets near the CNC in safe, stable stacks',
            'Label staged materials with job name',
            'Confirm material type matches Mozaik cut list',
          ],
        },
        {
          dayNum: 5,
          label: 'Weekly Review — Storage & Safety',
          type: 'weekly-review',
          duration: 30,
          taskDescription: 'Full warehouse walk with Jose. Identify any organization, safety, or material handling improvements. Write a 3-item action list.',
          segments: [
            'Zone organization score (1–5)',
            'Safety walk: any hazards found',
            'Material staging: process followed correctly',
            'Your 3 improvement ideas for next week',
          ],
        },
      ],
    },
  ],
};
