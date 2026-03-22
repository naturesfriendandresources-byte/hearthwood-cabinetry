// curriculum-manager.js — Field Manager Track (Jorge)
// Dynamically built from window.TRAINING_CONTENT (loaded before this file in portal-manager.html)
// Uses FIELD_PLAN (jorge) — 20 weeks, Phases 1–5.
// Daily pattern: Mon/Wed = video, Tue/Thu = quiz, Fri = weekly-review
// Jorge trains 7:30–8:00am only (30 min window). Daily tasks reflect this.

(function () {
  'use strict';

  var FIELD_DEFAULT_URL   = 'https://www.nahb.org/nahb-community/nahb-rmi';
  var FIELD_DEFAULT_LABEL = 'Field Management Resource';

  var PHASES = [
    { upToWeek: 4,  label: 'Phase 1 — Foundation: Job Execution' },
    { upToWeek: 8,  label: 'Phase 2 — Trade Execution' },
    { upToWeek: 12, label: 'Phase 3 — Reporting & Communication' },
    { upToWeek: 16, label: 'Phase 4 — Managing Others' },
    { upToWeek: 20, label: 'Phase 5 — Leadership & Strategy' },
  ];

  function phaseLabel(weekNum) {
    for (var i = 0; i < PHASES.length; i++) {
      if (weekNum <= PHASES[i].upToWeek) return PHASES[i].label;
    }
    return 'Advanced';
  }

  function dailyType(dIdx) {
    if (window.getDailyType) return window.getDailyType(dIdx);
    if (dIdx === 0 || dIdx === 2) return 'video';
    if (dIdx === 4)               return 'weekly-review';
    return 'quiz';
  }

  function buildWeek(wNum, days) {
    var portalDays = [];
    days.forEach(function (day, dIdx) {
      var dt    = dailyType(dIdx);
      var topic = day.topic || ('Day ' + (dIdx + 1));
      var typeLabel = dt === 'video' ? 'Concept' : dt === 'weekly-review' ? 'Weekly Review' : 'Application';

      var pd = {
        dayNum:   dIdx + 1,
        label:    topic + ' — ' + typeLabel,
        type:     dt,
        duration: 30, // Jorge's 30-min morning window
        segments: day.objectives || [],
      };

      if (dt === 'video') {
        pd.videoTitle = topic;
        pd.videoUrl   = day.resourceUrl   || FIELD_DEFAULT_URL;
        pd.videoNote  = (day.resourceLabel || FIELD_DEFAULT_LABEL) + ' · 7:30–8:00am window';
      } else {
        pd.taskDescription = day.task || 'Review concepts from this week and apply to current job site.';
      }

      // No quizzes for field manager track — all practical application

      portalDays.push(pd);
    });

    var theme = (days[0] && days[0].topic) ? days[0].topic : 'Field Manager Week ' + wNum;

    return {
      weekNum: wNum,
      theme:   phaseLabel(wNum) + ' · ' + theme,
      days:    portalDays,
    };
  }

  function build() {
    var TC = window.TRAINING_CONTENT;
    if (!TC || !TC.jorge || !TC.jorge.plan) return null;

    var plan     = TC.jorge.plan;
    var weekNums = Object.keys(plan).map(Number).sort(function (a, b) { return a - b; });
    var weeks    = [];

    weekNums.forEach(function (wNum) {
      var days = plan[wNum];
      if (!days || !days.length) return;
      weeks.push(buildWeek(wNum, days));
    });

    if (!weeks.length) return null;

    return {
      track:    'manager',
      title:    'Field Manager — 20-Week Program',
      employee: 'jorge',
      weeks:    weeks,
    };
  }

  var curriculum = build();

  window.PORTAL_CURRICULUM = curriculum || {
    track: 'manager',
    title: 'Field Manager — 20-Week Program',
    weeks: [{
      weekNum: 1,
      theme:   'Curriculum Loading',
      days: [{
        dayNum: 1,
        label:  'Refresh the page to load your curriculum',
        type:   'video',
        duration: 30,
        segments: [],
        videoTitle: 'Field Management Resource',
        videoUrl:   FIELD_DEFAULT_URL,
        videoNote:  '7:30–8:00am window',
      }],
    }],
  };

})();
