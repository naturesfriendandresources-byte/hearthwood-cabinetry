// curriculum-design.js — Interior Design Track (Maria)
// Dynamically built from window.TRAINING_CONTENT (loaded before this file in portal-design.html)
// Extracts the 'design' block from each day of MARIA_PLAN.
// Daily pattern: Mon/Wed = video, Tue/Thu = quiz, Fri = weekly-review

(function () {
  'use strict';

  var DESIGN_RESOURCE_URL   = 'https://www.architecturaldigest.com';
  var DESIGN_RESOURCE_LABEL = 'Design Reference';

  function dailyType(dIdx) {
    if (window.getDailyType) return window.getDailyType(dIdx);
    if (dIdx === 0 || dIdx === 2) return 'video';
    if (dIdx === 4)               return 'weekly-review';
    return 'quiz';
  }

  function buildWeek(wNum, portalWeekNum, days) {
    var portalDays = [];
    days.forEach(function (day, dIdx) {
      var ds    = day.design || {};
      var dt    = dailyType(dIdx);
      var topic = ds.topic || ('Day ' + (dIdx + 1));
      var typeLabel = dt === 'video' ? 'Video' : dt === 'weekly-review' ? 'Weekly Review' : 'Study';

      var pd = {
        dayNum:   dIdx + 1,
        label:    topic + ' — ' + typeLabel,
        type:     dt,
        duration: dt === 'weekly-review' ? 45 : 30,
        segments: ds.objectives || [],
      };

      if (dt === 'video') {
        pd.videoTitle = topic;
        pd.videoUrl   = ds.resourceUrl   || DESIGN_RESOURCE_URL;
        pd.videoNote  = ds.resourceLabel || DESIGN_RESOURCE_LABEL;
      } else {
        pd.taskDescription = ds.task || 'Review the design concepts from this week and apply them to a client brief.';
      }

      portalDays.push(pd);
    });

    var theme = (days[0] && days[0].design && days[0].design.topic)
      ? days[0].design.topic
      : 'Design Week ' + portalWeekNum;

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
      if (!days || !days.length || !days[0].design) return;
      portalWk++;
      weeks.push(buildWeek(wNum, portalWk, days));
    });

    if (!weeks.length) return null;

    return {
      track:    'design',
      title:    'Interior Design & Client Vision',
      employee: 'maria',
      weeks:    weeks,
    };
  }

  var curriculum = build();

  window.PORTAL_CURRICULUM = curriculum || {
    track: 'design',
    title: 'Interior Design & Client Vision',
    weeks: [{
      weekNum: 1,
      theme:   'Curriculum Loading',
      days: [{
        dayNum: 1,
        label:  'Refresh the page to load your curriculum',
        type:   'video',
        duration: 5,
        segments: [],
        videoTitle: 'Design Reference',
        videoUrl:   DESIGN_RESOURCE_URL,
        videoNote:  'If this keeps showing, contact Jose.',
      }],
    }],
  };

})();
