// curriculum-cnc.js — CNC Machine Operator Track
// Week 1: ShopSabre Machine Fundamentals (hardcoded with full quiz)
// Weeks 2–12: Dynamically built from window.TRAINING_CONTENT (CNC_PLAN for scott)
// Source: SabreNation University (shopsabre.com/sabrenation/sabrenation-university/)
// Daily pattern: Mon/Wed = video, Tue/Thu = quiz, Fri = weekly-review

window.PORTAL_CURRICULUM = {
  track: 'cnc',
  title: 'CNC Machine Operator',
  weeks: [
    {
      weekNum: 1,
      theme: 'ShopSabre Machine Fundamentals',
      days: [
        {
          dayNum: 1,
          label: 'Machine Overview — Video',
          type: 'video',
          duration: 25,
          videoTitle: 'ShopSabre CNC Router — Machine Overview',
          videoUrl: 'https://www.shopsabre.com/sabrenation/sabrenation-university/',
          videoDuration: '~15 min',
          videoNote: 'SabreNation login required. Password: SabreNationUniversityAccess — watch the machine overview video, then come back and confirm.',
          segments: [
            'Min 1–5: What is a ShopSabre CNC router and what it does at NFR (cutting cabinet parts from sheet material)',
            'Min 6–10: Machine parts — gantry, spindle, cutting bed, vacuum table hold-down system',
            'Min 11–15: Control panel overview — power, speed, emergency stop, home position',
            'Min 16–20: Common materials we run at NFR — plywood, MDF, hardwood, how they differ',
            'Min 21–25: What a typical job looks like start to finish — load file → set origin → run → unload'
          ],
          quiz: [
            { q: 'What does the vacuum table do on a ShopSabre CNC router?', options: ['Collects sawdust into a bag', 'Holds the sheet material flat to the cutting bed', 'Cools the spindle during cutting', 'Controls the cutting speed'], answer: 1 },
            { q: 'What is the gantry?', options: ['The software used to run the machine', 'The vacuum pump unit', 'The bridge structure that moves the spindle across the bed', 'The emergency stop button'], answer: 2 },
            { q: 'Which material requires the slowest feed rate due to hardness?', options: ['MDF', 'Plywood', 'Hardwood', 'They all run the same'], answer: 2 },
            { q: 'What is the first step before starting a CNC cutting job?', options: ['Load the file and set the origin point', 'Turn on the vacuum table last', 'Start the spindle before loading material', 'Home position is not needed'], answer: 0 },
            { q: 'What does "homing the machine" mean?', options: ['Turning the machine off at end of day', 'Returning the spindle to its zero/reference position', 'Moving the gantry to the material center', 'Running a test cut'], answer: 1 }
          ]
        },
        {
          dayNum: 2,
          label: 'Machine Overview — Quiz & Practice',
          type: 'quiz',
          duration: 20,
          taskDescription: 'Review the machine parts and job flow from Day 1. Complete the quiz without looking at notes.',
          segments: [
            'Min 1–5: From memory, name the 5 main parts of the ShopSabre (gantry, spindle, bed, vacuum table, control panel)',
            'Min 6–10: Describe what each part does in one sentence — say it out loud or write it down',
            'Min 11–15: Trace through a full job in your head: file load → origin set → material check → run → unload',
            'Min 16–20: Self-check — could you explain the machine to a brand new employee? Take the quiz below'
          ],
          quiz: [
            { q: 'The spindle on a CNC router is responsible for:', options: ['Holding the material down', 'Rotating the cutting bit', 'Moving the gantry left and right', 'Running the control software'], answer: 1 },
            { q: 'MDF stands for:', options: ['Machine-Driven Fiber', 'Medium-Density Fiberboard', 'Multi-Directional Frame', 'Manufactured Door Frame'], answer: 1 },
            { q: 'Before loading material onto the bed, you should always check that the vacuum table is:', options: ['Off — it turns on automatically', 'On and holding suction', 'Set to minimum pressure', 'Only needed for hardwood'], answer: 1 },
            { q: 'What does setting the origin (zero point) tell the machine?', options: ['How fast to cut', 'Which bit to use', 'Where the job starts on the material', 'When to turn off'], answer: 2 },
            { q: 'After a cut job is complete, the correct next step is:', options: ['Immediately load the next file', 'Turn off the machine completely', 'Unload the cut parts and clear the bed before anything else', 'Run the job again to verify'], answer: 2 }
          ]
        },
        {
          dayNum: 3,
          label: 'Machine Safety — Video',
          type: 'video',
          duration: 25,
          videoTitle: 'ShopSabre CNC Safety & Pre-Run Checklist',
          videoUrl: 'https://www.shopsabre.com/sabrenation/sabrenation-university/',
          videoDuration: '~12 min',
          videoNote: 'SabreNation login required. Password: SabreNationUniversityAccess — watch the safety video, then come back and confirm.',
          segments: [
            'Min 1–5: Why CNC safety matters — the spindle runs at 18,000+ RPM, loose material or clothing can cause serious injury',
            'Min 6–10: Required PPE — safety glasses (always), ear protection during long runs, no loose clothing, no dangling jewelry',
            'Min 11–15: Emergency stop — where the E-stop button is, when to use it, what it does vs. pausing a job',
            'Min 16–20: Workspace rules — nobody stands in the cutting zone while running, chip/dust removal between jobs, vacuum hose check',
            'Min 21–25: Pre-run checklist — bit secure, material flat, origin set, file correct, area clear, vacuum on'
          ],
          quiz: [
            { q: 'What RPM does a CNC spindle typically run at?', options: ['1,000–3,000 RPM', '5,000–8,000 RPM', '18,000+ RPM', '500–1,000 RPM'], answer: 2 },
            { q: 'Which PPE is required every single time you run the machine, no exceptions?', options: ['Gloves', 'Safety glasses', 'Hard hat', 'Face shield'], answer: 1 },
            { q: 'When should you press the Emergency Stop?', options: ['Only if the machine catches fire', 'Whenever something looks wrong or unsafe — material shifting, unusual sound, anyone in the cut zone', 'Only when the software crashes', 'At the end of every job'], answer: 1 },
            { q: 'Who is allowed to stand in the cutting zone while the machine is running?', options: ['Only the operator', 'The operator and one supervisor', 'Nobody', 'Anyone wearing PPE'], answer: 2 },
            { q: 'What is the last item to check on the pre-run checklist before pressing Go?', options: ['Bit is secure in the spindle collet', 'Material is flat with vacuum holding', 'Area is clear of people and obstacles', 'All of the above — every item must be checked'], answer: 3 }
          ]
        },
        {
          dayNum: 4,
          label: 'Safety Quiz & Checklist Practice',
          type: 'quiz',
          duration: 20,
          taskDescription: 'Run through the pre-run safety checklist from memory. You should be able to recite it without looking by end of this session.',
          segments: [
            'Min 1–5: Write out the pre-run checklist from memory — bit, material, origin, file, area, vacuum',
            'Min 6–10: Identify the 3 situations that require immediate E-stop: material shifts mid-cut, unusual grinding sound, anyone enters the cut zone',
            'Min 11–15: PPE review — what is required vs. recommended. Glasses = always required. Ear protection = required for runs over 10 min.',
            'Min 16–20: Scenario drill — read each situation below and decide: keep running or stop the machine?'
          ],
          quiz: [
            { q: 'You notice the material starting to lift slightly on one corner mid-cut. You should:', options: ['Finish the cut — it will probably be fine', 'Stop the machine immediately using E-stop', 'Slow the feed rate and continue', 'Push the material down by hand while it\'s cutting'], answer: 1 },
            { q: 'A coworker walks up to talk to you while the machine is running. You should:', options: ['Wave them over closer so you can hear them', 'Signal them to stay back until the job is done or paused', 'Ignore them and keep watching the machine', 'Pause the job only if it\'s a long conversation'], answer: 1 },
            { q: 'You hear a new grinding sound from the spindle during a cut. You should:', options: ['Finish the current pass — grinding is normal', 'E-stop immediately and inspect before running again', 'Increase the feed rate to get through it faster', 'Turn off only the vacuum'], answer: 1 },
            { q: 'You forgot to check the bit tightness before starting. The machine is 2 minutes into the job. You should:', options: ['Let it finish — stopping mid-job ruins the part', 'Stop the job, check the bit, re-home, restart', 'Check the bit while it\'s still running by touching it quickly', 'Only stop if you hear a problem'], answer: 1 },
            { q: 'Ear protection is required when:', options: ['Only when the spindle is above 20,000 RPM', 'Runs lasting 10 minutes or more', 'Only for new employees', 'It is never required — optional only'], answer: 1 }
          ]
        },
        {
          dayNum: 5,
          label: 'Week 1 Review — Machine + Safety',
          type: 'review',
          duration: 20,
          taskDescription: 'Combined review of everything from Week 1. Machine parts, job flow, PPE, and safety rules. No notes — this should come from memory.',
          segments: [
            'Min 1–5: Name the 5 machine parts and what each does (gantry, spindle, bed, vacuum table, control panel)',
            'Min 6–10: Walk through a full job from start to finish — file load, origin, pre-run checklist, run, unload',
            'Min 11–15: Recite the 3 mandatory PPE rules and the 3 situations that require immediate E-stop',
            'Min 16–20: Combined quiz — 8 questions covering both machine knowledge and safety'
          ],
          quiz: [
            { q: 'The gantry on a ShopSabre CNC is:', options: ['The vacuum hold-down system', 'The bridge that moves the spindle across the bed', 'The cutting bit', 'The file loading software'], answer: 1 },
            { q: 'What holds sheet material flat to the cutting bed?', options: ['Clamps on all 4 corners', 'The vacuum table suction', 'Double-sided tape only', 'The weight of the gantry'], answer: 1 },
            { q: 'MDF is different from plywood because:', options: ['It is harder and needs a slower feed rate', 'It is a compressed fiber board with no grain — machines consistently but produces fine dust', 'It cannot be cut on a CNC router', 'It is always cheaper'], answer: 1 },
            { q: 'The origin (zero) point tells the machine:', options: ['How fast to run the spindle', 'Which material type is loaded', 'Where the job starts on the sheet', 'When to turn the vacuum on'], answer: 2 },
            { q: 'Safety glasses are:', options: ['Required only for long jobs', 'Recommended but not required', 'Required every time the machine is running, no exceptions', 'Only needed when changing bits'], answer: 2 },
            { q: 'The Emergency Stop should be used:', options: ['Only for fires', 'Any time something looks or sounds wrong — no hesitation', 'Only when the software freezes', 'After every job as a habit'], answer: 1 },
            { q: 'Before pressing Go on any job, the last thing you confirm is:', options: ['The bit speed setting in software', 'The area is clear of people and all checklist items are done', 'The material type matches last job', 'The control panel display shows green'], answer: 1 },
            { q: 'If you hear a new unusual sound during a cut, you should:', options: ['Wait to see if it gets worse', 'E-stop immediately and inspect', 'Increase feed speed to finish faster', 'Turn off only the vacuum and keep cutting'], answer: 1 }
          ]
        }
      ]
    }
  ]
};

// ── Dynamically append Weeks 2–12 from TRAINING_CONTENT ───────────────────
(function () {
  'use strict';

  var CNC_DEFAULT_URL   = 'https://www.shopsabre.com/sabrenation/sabrenation-university/';
  var CNC_DEFAULT_LABEL = 'SabreNation University';

  function dailyType(dIdx) {
    if (window.getDailyType) return window.getDailyType(dIdx);
    if (dIdx === 0 || dIdx === 2) return 'video';
    if (dIdx === 4)               return 'weekly-review';
    return 'quiz';
  }

  var TC = window.TRAINING_CONTENT;
  if (!TC || !TC.scott || !TC.scott.plan) return;

  var plan     = TC.scott.plan;
  var weekNums = Object.keys(plan).map(Number).sort(function (a, b) { return a - b; });

  weekNums.forEach(function (wNum) {
    if (wNum <= 1) return; // Week 1 is already hardcoded above
    var days = plan[wNum];
    if (!days || !days.length) return;

    var portalDays = [];
    days.forEach(function (day, dIdx) {
      var dt    = dailyType(dIdx);
      var topic = day.topic || ('Day ' + (dIdx + 1));
      var typeLabel = dt === 'video' ? 'Video' : dt === 'weekly-review' ? 'Weekly Review' : 'Practice';

      var pd = {
        dayNum:   dIdx + 1,
        label:    topic + ' — ' + typeLabel,
        type:     dt,
        duration: 35,
        segments: day.objectives || [],
      };

      if (dt === 'video') {
        pd.videoTitle = topic;
        pd.videoUrl   = day.resourceUrl   || CNC_DEFAULT_URL;
        pd.videoNote  = (day.resourceLabel || CNC_DEFAULT_LABEL) + ' · Login: SabreNationUniversityAccess';
      } else {
        pd.taskDescription = day.task || 'Apply what you learned on the machine with Jose supervising.';
      }

      portalDays.push(pd);
    });

    var theme = (days[0] && days[0].topic) ? days[0].topic : 'CNC Week ' + wNum;

    window.PORTAL_CURRICULUM.weeks.push({
      weekNum: wNum,
      theme:   theme,
      days:    portalDays,
    });
  });

})();
