// portal-engine.js — Shared Training Portal Engine
// Powers all 6 NFR training portals. Reads window.PORTAL_CURRICULUM and renders
// the full portal: week tabs, day pills, video flow, quiz, and progress tracking.

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var C = window.PORTAL_CURRICULUM;
    if (!C || !C.weeks || !C.weeks.length) {
      document.getElementById('portal-root').innerHTML =
        '<div class="rest-card"><div class="rest-icon">⚠️</div><h2>No curriculum loaded.</h2></div>';
      return;
    }

    // Page title
    document.title = 'NFR Training — ' + C.title;

    // Header
    var session = NFRAuth.getSession ? NFRAuth.getSession() : null;
    var nameEl = document.getElementById('emp-name');
    if (nameEl && session) nameEl.textContent = session.name || session.user || '';

    var logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        if (NFRAuth.logout) NFRAuth.logout();
        window.location.href = 'index.html';
      });
    }

    startTimer();

    // Progress — stored per track
    var PROGRESS_KEY = 'nfr_progress_' + C.track;
    var progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');

    function saveProgress() {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }

    function dayKey(wIdx, dIdx) { return 'w' + wIdx + 'd' + dIdx; }
    function isComplete(wIdx, dIdx) { return !!progress[dayKey(wIdx, dIdx)]; }

    // Find first incomplete day to start on
    var activeWeek = 0, activeDay = 0, found = false;
    for (var w = 0; w < C.weeks.length && !found; w++) {
      for (var d = 0; d < C.weeks[w].days.length && !found; d++) {
        if (!isComplete(w, d)) { activeWeek = w; activeDay = d; found = true; }
      }
    }

    // ── Render ──────────────────────────────────────────────────────────────

    function render() {
      var root = document.getElementById('portal-root');
      root.innerHTML = '';

      // Track title bar
      var titleBar = document.createElement('div');
      titleBar.className = 'portal-title-bar';
      titleBar.innerHTML = '<h1 class="portal-track-title">' + esc(C.title) + ' Training</h1>';
      root.appendChild(titleBar);

      // Week tabs (only if multiple weeks)
      if (C.weeks.length > 1) root.appendChild(buildWeekTabs());

      // Day pills + week theme
      root.appendChild(buildDayPills());

      // Day content card
      root.appendChild(buildDayCard());
    }

    // ── Week tabs ────────────────────────────────────────────────────────────

    function buildWeekTabs() {
      var wrap = document.createElement('div');
      wrap.className = 'portal-week-tabs';
      C.weeks.forEach(function (week, wIdx) {
        var allDone = week.days.every(function (_, dIdx) { return isComplete(wIdx, dIdx); });
        var tab = document.createElement('button');
        tab.className = 'portal-week-tab' + (wIdx === activeWeek ? ' active' : '') + (allDone ? ' done' : '');
        tab.textContent = 'Week ' + week.weekNum + (allDone ? ' ✓' : '');
        tab.title = week.theme;
        tab.addEventListener('click', function () { activeWeek = wIdx; activeDay = 0; render(); });
        wrap.appendChild(tab);
      });
      return wrap;
    }

    // ── Day pills ────────────────────────────────────────────────────────────

    function buildDayPills() {
      var week = C.weeks[activeWeek];
      var wrap = document.createElement('div');
      wrap.className = 'week-pills-wrap';

      var themeLabel = document.createElement('div');
      themeLabel.className = 'portal-week-theme';
      themeLabel.textContent = 'Week ' + week.weekNum + ' — ' + week.theme;
      wrap.appendChild(themeLabel);

      var pillsRow = document.createElement('div');
      pillsRow.className = 'portal-day-pills';
      week.days.forEach(function (day, dIdx) {
        var done = isComplete(activeWeek, dIdx);
        var isCurrent = dIdx === activeDay;
        var pill = document.createElement('button');
        pill.className = 'pill' + (done ? ' complete' : '') + (isCurrent && !done ? ' today' : (!done ? ' upcoming' : ''));
        pill.innerHTML = 'Day ' + day.dayNum + (done ? ' ✓' : '');
        pill.title = day.label;
        pill.addEventListener('click', function () { activeDay = dIdx; render(); });
        pillsRow.appendChild(pill);
      });
      wrap.appendChild(pillsRow);
      return wrap;
    }

    // ── Day card ─────────────────────────────────────────────────────────────

    function buildDayCard() {
      var week = C.weeks[activeWeek];
      var day = week.days[activeDay];
      var wIdx = activeWeek, dIdx = activeDay;
      var done = isComplete(wIdx, dIdx);
      var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

      var card = document.createElement('div');
      card.className = 'training-card';

      // Week · Day · Weekday badge
      var badge = document.createElement('div');
      badge.className = 'week-badge';
      badge.textContent = 'Week ' + week.weekNum + ' · Day ' + day.dayNum + ' · ' + (dayNames[dIdx] || '');
      card.appendChild(badge);

      // Topic title
      var title = document.createElement('h1');
      title.className = 'topic-title';
      title.textContent = day.label;
      card.appendChild(title);

      // Duration chip
      var dur = document.createElement('div');
      dur.className = 'portal-duration-chip';
      dur.textContent = (day.duration || 25) + ' min session';
      card.appendChild(dur);

      // Completed state
      if (done) {
        var doneBadge = document.createElement('div');
        doneBadge.className = 'completion-badge';
        doneBadge.innerHTML = '✓ Completed';
        card.appendChild(doneBadge);

        var replayBtn = document.createElement('button');
        replayBtn.className = 'mark-complete-btn portal-replay-btn';
        replayBtn.textContent = 'Review this day again';
        replayBtn.addEventListener('click', function () {
          delete progress[dayKey(wIdx, dIdx)];
          saveProgress();
          render();
        });
        card.appendChild(replayBtn);
        return card;
      }

      // Today's schedule (5-min segments)
      if (day.segments && day.segments.length) {
        var segSection = document.createElement('div');
        segSection.className = 'portal-segments';
        var segHead = document.createElement('h3');
        segHead.className = 'section-heading';
        segHead.textContent = "Today's Schedule";
        segSection.appendChild(segHead);
        var segList = document.createElement('ul');
        segList.className = 'portal-segments-list';
        day.segments.forEach(function (seg) {
          var li = document.createElement('li');
          li.textContent = seg;
          segList.appendChild(li);
        });
        segSection.appendChild(segList);
        card.appendChild(segSection);
      }

      // Content: video or quiz
      if (day.type === 'video') {
        card.appendChild(buildVideoSection(day, wIdx, dIdx));
      } else {
        card.appendChild(buildQuizSection(day, wIdx, dIdx));
      }

      return card;
    }

    // ── Video section ────────────────────────────────────────────────────────

    function buildVideoSection(day, wIdx, dIdx) {
      var wrap = document.createElement('div');

      var vidBox = document.createElement('div');
      vidBox.className = 'admin-video-redirect';

      var vidTitle = document.createElement('p');
      vidTitle.className = 'admin-video-redirect-label';
      vidTitle.innerHTML = '<strong>' + esc(day.videoTitle) + '</strong><br><span style="font-size:0.85em;opacity:0.7">' + esc(day.videoDuration || '') + '</span>';
      vidBox.appendChild(vidTitle);

      var watchBtn = document.createElement('a');
      watchBtn.className = 'admin-watch-yt-btn';
      watchBtn.href = day.videoUrl;
      watchBtn.target = '_blank';
      watchBtn.rel = 'noopener noreferrer';
      watchBtn.textContent = '▶ Watch Video on YouTube';
      vidBox.appendChild(watchBtn);

      var hint = document.createElement('p');
      hint.className = 'admin-progress-hint';
      hint.textContent = 'Click Watch, then come back here and confirm below to unlock the quiz.';
      vidBox.appendChild(hint);

      var confirmBtn = document.createElement('button');
      confirmBtn.className = 'mark-complete-btn';
      confirmBtn.style.marginTop = '0.75rem';
      confirmBtn.disabled = true;
      confirmBtn.textContent = 'I finished watching — unlock quiz';
      vidBox.appendChild(confirmBtn);

      wrap.appendChild(vidBox);

      // Quiz (hidden until confirmed)
      var quizWrap = document.createElement('div');
      quizWrap.style.display = 'none';
      quizWrap.appendChild(buildQuizForm(day, wIdx, dIdx));
      wrap.appendChild(quizWrap);

      // Enable confirm after clicking watch
      watchBtn.addEventListener('click', function () {
        setTimeout(function () { confirmBtn.disabled = false; }, 800);
      });

      confirmBtn.addEventListener('click', function () {
        confirmBtn.disabled = true;
        confirmBtn.textContent = '✓ Quiz unlocked';
        quizWrap.style.display = 'block';
        quizWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      return wrap;
    }

    // ── Quiz section (quiz/review days) ──────────────────────────────────────

    function buildQuizSection(day, wIdx, dIdx) {
      var wrap = document.createElement('div');

      if (day.taskDescription) {
        var taskBox = document.createElement('div');
        taskBox.className = 'task-box';
        var taskHead = document.createElement('h3');
        taskHead.className = 'section-heading';
        taskHead.textContent = "Hands-On Task";
        taskBox.appendChild(taskHead);
        var taskText = document.createElement('p');
        taskText.textContent = day.taskDescription;
        taskBox.appendChild(taskText);
        wrap.appendChild(taskBox);
      }

      wrap.appendChild(buildQuizForm(day, wIdx, dIdx));
      return wrap;
    }

    // ── Quiz form ────────────────────────────────────────────────────────────

    function buildQuizForm(day, wIdx, dIdx) {
      var section = document.createElement('div');
      section.className = 'admin-quiz-section';

      var head = document.createElement('h3');
      head.className = 'section-heading';
      head.textContent = day.type === 'review' ? 'Combined Review Quiz' : 'Quiz';
      section.appendChild(head);

      var form = document.createElement('form');
      form.className = 'admin-quiz-form';

      day.quiz.forEach(function (q, qIdx) {
        var qBlock = document.createElement('div');
        qBlock.className = 'admin-quiz-q';

        var qText = document.createElement('p');
        qText.innerHTML = '<strong>' + (qIdx + 1) + '. ' + esc(q.q) + '</strong>';
        qBlock.appendChild(qText);

        var opts = document.createElement('div');
        opts.className = 'admin-quiz-opts';
        q.options.forEach(function (opt, oIdx) {
          var label = document.createElement('label');
          var radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = 'q' + qIdx;
          radio.value = oIdx;
          label.appendChild(radio);
          label.appendChild(document.createTextNode(' ' + opt));
          opts.appendChild(label);
        });
        qBlock.appendChild(opts);
        form.appendChild(qBlock);
      });
      section.appendChild(form);

      var submitBtn = document.createElement('button');
      submitBtn.type = 'button';
      submitBtn.className = 'mark-complete-btn';
      submitBtn.textContent = 'Submit Quiz';
      section.appendChild(submitBtn);

      var feedback = document.createElement('div');
      feedback.className = 'admin-quiz-feedback';
      section.appendChild(feedback);

      submitBtn.addEventListener('click', function () {
        var correct = 0, allAnswered = true;
        day.quiz.forEach(function (q, qIdx) {
          var sel = form.querySelector('input[name="q' + qIdx + '"]:checked');
          if (!sel) { allAnswered = false; return; }
          if (parseInt(sel.value, 10) === q.answer) correct++;
        });

        if (!allAnswered) {
          feedback.textContent = 'Please answer all questions before submitting.';
          feedback.style.color = 'var(--red, #C0392B)';
          return;
        }

        var total = day.quiz.length;
        var pass = correct >= Math.ceil(total * 0.6);
        feedback.innerHTML = pass
          ? '✓ Passed! ' + correct + '/' + total + ' correct. Day complete.'
          : '✗ ' + correct + '/' + total + ' correct. Review the material and try again.';
        feedback.style.color = pass ? 'var(--green, #3A8C4E)' : 'var(--red, #C0392B)';

        if (pass) {
          progress[dayKey(wIdx, dIdx)] = true;
          saveProgress();
          submitBtn.disabled = true;
          setTimeout(render, 1400);
        }
      });

      return section;
    }

    // ── Timer ────────────────────────────────────────────────────────────────

    function startTimer() {
      var el = document.getElementById('session-timer');
      if (!el) return;
      var start = Date.now();
      setInterval(function () {
        var s = Math.floor((Date.now() - start) / 1000);
        var m = Math.floor(s / 60); s = s % 60;
        el.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }, 1000);
    }

    // ── Utilities ────────────────────────────────────────────────────────────

    function esc(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    render();
  });
})();
