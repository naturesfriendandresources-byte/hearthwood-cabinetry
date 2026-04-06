// curriculum-mozaik.js — Mozaik Design Software Track (Maria)
// Dynamically built from window.TRAINING_CONTENT (loaded before this file in portal-mozaik.html)
// Extracts the 'mozaik' block from each day of MARIA_PLAN.
// Daily pattern: Mon/Wed = video, Tue/Thu = quiz, Fri = weekly-review

(function () {
  'use strict';

  var MOZAIK_RESOURCE_URL   = 'https://sites.google.com/view/mozaikonlinehelp/training-videos';
  var MOZAIK_RESOURCE_LABEL = 'Mozaik Training Library';

  var DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  function dailyType(dIdx) {
    if (window.getDailyType) return window.getDailyType(dIdx);
    if (dIdx === 0 || dIdx === 2) return 'video';
    if (dIdx === 4)               return 'weekly-review';
    return 'quiz';
  }

  function buildWeek(wNum, portalWeekNum, days) {
    var portalDays = [];
    days.forEach(function (day, dIdx) {
      var mz  = day.mozaik || {};
      var dt  = dailyType(dIdx);
      var topic = mz.topic || ('Day ' + (dIdx + 1));
      var typeLabel = dt === 'video' ? 'Video' : dt === 'weekly-review' ? 'Weekly Review' : 'Quiz';

      var pd = {
        dayNum:   dIdx + 1,
        label:    topic + ' — ' + typeLabel,
        type:     dt,
        duration: dt === 'weekly-review' ? 60 : 45,
        segments: mz.objectives || [],
      };

      // All days get a video — quiz/review days re-watch the week's topic video
      pd.videoTitle = topic;
      pd.videoUrl   = mz.resourceUrl   || MOZAIK_RESOURCE_URL;
      pd.videoNote  = mz.resourceLabel || MOZAIK_RESOURCE_LABEL;
      if (dt !== 'video') {
        pd.taskDescription = mz.task || 'Practice the Mozaik skills from this week in a real project.';
      }

      portalDays.push(pd);
    });

    var theme = (days[0] && days[0].mozaik && days[0].mozaik.topic)
      ? days[0].mozaik.topic
      : 'Mozaik Week ' + portalWeekNum;

    return { weekNum: portalWeekNum, theme: theme, days: portalDays };
  }

  function build() {
    var TC = window.TRAINING_CONTENT;
    if (!TC || !TC.maria || !TC.maria.plan) return null;

    var plan     = TC.maria.plan;
    var weekNums = Object.keys(plan).map(Number).sort(function (a, b) { return a - b; });
    var weeks    = [];
    var portalWk = 0;

    weekNums.forEach(function (wNum) {
      var days = plan[wNum];
      if (!days || !days.length || !days[0].mozaik) return; // skip non-3-block weeks
      portalWk++;
      weeks.push(buildWeek(wNum, portalWk, days));
    });

    if (!weeks.length) return null;

    return {
      track:    'mozaik',
      title:    'Mozaik Design Software',
      employee: 'maria',
      weeks:    weeks,
    };
  }

  var curriculum = build();

  window.PORTAL_CURRICULUM = curriculum || {
    track: 'mozaik',
    title: 'Mozaik Design Software',
    weeks: [{
      weekNum: 1,
      theme:   'Curriculum Loading',
      days: [{
        dayNum: 1,
        label:  'Refresh the page to load your curriculum',
        type:   'video',
        duration: 5,
        segments: [],
        videoTitle: 'Mozaik Training Library',
        videoUrl:   MOZAIK_RESOURCE_URL,
        videoNote:  'If this keeps showing, contact Jose.',
      }],
    }],
  };

})();
