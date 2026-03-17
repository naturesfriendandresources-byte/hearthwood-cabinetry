/**
 * admin-curriculum.js — Shared Administration training for Maria, Jorge, Scott.
 * Same videos and quiz for all three. Updated when Jose approves via /approve-admin-training.
 * Quiz proves they watched (not just clicking Done).
 */
'use strict';

(function () {
  const ADMIN_MODULES = [
    {
      id: 'admin-1',
      title: 'Company Values & Safety',
      videoTitle: 'NFR Company Values & Worksite Safety',
      videoFile: 'admin-1.mp4',
      quiz: [
        { q: 'What should you do before starting any job site task?', options: ['Check your phone', 'Review safety for that task and wear required PPE', 'Start immediately', 'Ask the client'], answer: 1 },
        { q: 'Who do you report a safety concern to?', options: ['Only at the end of the day', 'Jose or the Field Manager right away', 'The client first', 'No one'], answer: 1 },
        { q: "NFR's approach to quality is:", options: ['Finish fast', 'Consistent, repeatable, and done right', 'Only when the client is watching', 'Up to each person'], answer: 1 },
      ],
    },
    {
      id: 'admin-2',
      title: 'Communication & Scheduling',
      videoTitle: 'Communication & Scheduling at NFR',
      videoFile: 'admin-2.mp4',
      quiz: [
        { q: "If you're going to be late or can't make a shift, you should:", options: ['Text when you can', 'Call or text Jose (or your direct lead) as soon as you know', 'Show up and explain later', 'Send an email at end of day'], answer: 1 },
        { q: "Where do we keep job schedules and who's on what?", options: ["Only in Jose's head", 'Calendar and portal; check with office or Field Manager', "We don't use a schedule", 'Only the client knows'], answer: 1 },
        { q: 'When the office or Field Manager assigns you a task, you should:', options: ['Do it only if you feel like it', "Confirm you got it and when you'll do it", 'Ignore until they remind you', 'Delegate to someone else'], answer: 1 },
      ],
    },
    {
      id: 'admin-3',
      title: 'Quality & Client Experience',
      videoTitle: 'Quality & Client Experience',
      videoFile: 'admin-3.mp4',
      quiz: [
        { q: 'Before leaving a job site for the day, you should:', options: ['Leave as soon as the clock hits 4', 'Clean up your area, secure materials, and note what\'s next', 'Let the next person handle it', 'Only if the client is there'], answer: 1 },
        { q: "If a client asks you to change something that wasn't in the scope, you should:", options: ['Do it without telling anyone', 'Tell Jose or the Field Manager so we can track scope and pricing', 'Refuse', 'Only write it down'], answer: 1 },
        { q: '"Consistency" at NFR means:', options: ['Doing things the same way every time so the team and clients know what to expect', 'Only when the boss is watching', 'Whatever is fastest', 'Each person chooses their own method'], answer: 0 },
      ],
    },
  ];

  /** Returns the admin module for a given program day (1-based). Day 1 = module 1, etc. After last module, returns null (administration complete). */
  function getAdminModuleForDay(programDay) {
    if (typeof programDay !== 'number' || programDay < 1) return null;
    const idx = programDay - 1;
    if (idx >= ADMIN_MODULES.length) return null;
    return ADMIN_MODULES[idx];
  }

  /** Program day = number of weekdays since anchor (1-based). */
  function getProgramDay(anchorStr, dateStr) {
    const anchor = new Date(anchorStr + 'T12:00:00');
    const date = new Date(dateStr + 'T12:00:00');
    if (date < anchor) return 0;
    let days = 0;
    const d = new Date(anchor);
    while (d <= date) {
      const dow = d.getDay();
      if (dow !== 0 && dow !== 6) days++;
      d.setDate(d.getDate() + 1);
    }
    return days;
  }

  window.ADMIN_MODULES = ADMIN_MODULES;
  window.getAdminModuleForDay = getAdminModuleForDay;
  window.getProgramDay = getProgramDay;
})();
