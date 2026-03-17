/**
 * employee.js — NFR Team Training Portal
 * Drives the employee training view (employee.html).
 */

(function () {
  'use strict';

  // ── constants ──────────────────────────────────────────────────────────────

  const DAY_NAMES  = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const DAY_SHORT  = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const QUIZ_TIMER_SECONDS = 300; // 5 minutes to complete quiz
  const QUIZ_TIMER_KEY     = 'nfr_quiz_timer';

  // ── state ──────────────────────────────────────────────────────────────────

  let currentEmployee  = '';
  let currentDate      = '';
  let currentContent   = null;
  let timerInterval    = null;
  let quizTimerInterval = null;
  let sessionStart     = null;
  let savedSeconds     = 0;   // seconds carried over from prior page visits today
  let noteDebounce     = null;

  // ── timer persistence ──────────────────────────────────────────────────────

  const TIMER_STORE_KEY = 'nfr_session_elapsed';

  function getStoredElapsed(employee, dateStr) {
    try {
      var d = JSON.parse(localStorage.getItem(TIMER_STORE_KEY) || '{}');
      return d[employee + '_' + dateStr] || 0;
    } catch (e) { return 0; }
  }

  function saveElapsedNow() {
    try {
      var d = JSON.parse(localStorage.getItem(TIMER_STORE_KEY) || '{}');
      d[currentEmployee + '_' + currentDate] =
        savedSeconds + Math.floor((new Date() - sessionStart) / 1000);
      localStorage.setItem(TIMER_STORE_KEY, JSON.stringify(d));
    } catch (e) { /* ignore */ }
  }

  // ── quiz countdown timer ────────────────────────────────────────────────────

  function getQuizTimerStart(employee, dateStr, moduleId) {
    try {
      var d = JSON.parse(localStorage.getItem(QUIZ_TIMER_KEY) || '{}');
      return d[employee + '_' + dateStr + '_' + moduleId] || 0;
    } catch (e) { return 0; }
  }

  function saveQuizTimerStart(employee, dateStr, moduleId, ts) {
    try {
      var d = JSON.parse(localStorage.getItem(QUIZ_TIMER_KEY) || '{}');
      d[employee + '_' + dateStr + '_' + moduleId] = ts;
      localStorage.setItem(QUIZ_TIMER_KEY, JSON.stringify(d));
    } catch (e) { /* ignore */ }
  }

  function clearQuizTimerStart(employee, dateStr, moduleId) {
    try {
      var d = JSON.parse(localStorage.getItem(QUIZ_TIMER_KEY) || '{}');
      delete d[employee + '_' + dateStr + '_' + moduleId];
      localStorage.setItem(QUIZ_TIMER_KEY, JSON.stringify(d));
    } catch (e) { /* ignore */ }
  }

  // existingStart is a ms timestamp; omit to start a fresh 5-min window
  function startQuizTimer(moduleId, existingStart) {
    clearInterval(quizTimerInterval);
    var timerEl = document.getElementById('admin-quiz-timer');
    if (!timerEl) return;
    var startTime = existingStart || Date.now();
    if (!existingStart) saveQuizTimerStart(currentEmployee, currentDate, moduleId, startTime);
    timerEl.style.display = 'block';

    function tick() {
      var remaining = QUIZ_TIMER_SECONDS - Math.floor((Date.now() - startTime) / 1000);
      if (remaining <= 0) {
        clearInterval(quizTimerInterval);
        clearQuizTimerStart(currentEmployee, currentDate, moduleId);
        timerEl.textContent = '\u23f1 Time expired — re-watch the video to try again.';
        timerEl.style.cssText = 'display:block;padding:.5rem .75rem;border-radius:4px;font-weight:700;font-size:.9rem;background:#f8d7da;color:#842029;margin-bottom:.75rem;';
        var sb = document.getElementById('admin-quiz-submit');
        if (sb) sb.disabled = true;
        return;
      }
      var m = Math.floor(remaining / 60);
      var s = remaining % 60;
      timerEl.textContent = '\u23f1 ' + pad(m) + ':' + pad(s) + ' remaining to submit';
      timerEl.style.cssText = remaining <= 60
        ? 'display:block;padding:.5rem .75rem;border-radius:4px;font-weight:700;font-size:.9rem;background:#fff3cd;color:#856404;margin-bottom:.75rem;'
        : 'display:block;padding:.5rem .75rem;border-radius:4px;font-weight:700;font-size:.9rem;background:#d1ecf1;color:#0c5460;margin-bottom:.75rem;';
    }
    tick();
    quizTimerInterval = setInterval(tick, 1000);
  }

  // ── init ───────────────────────────────────────────────────────────────────

  function init() {
    const session = auth.requireAuth('employee');
    if (!session) return;

    currentEmployee = session.employee;
    currentDate     = tracker.todayStr();

    const nameEl = document.getElementById('emp-name');
    if (nameEl) nameEl.textContent = session.name;

    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) logoutBtn.addEventListener('click', auth.logout);

    sessionStart  = new Date();
    savedSeconds  = getStoredElapsed(currentEmployee, currentDate);
    window.addEventListener('beforeunload', saveElapsedNow);
    startTimer();

    const dow = new Date(currentDate + 'T12:00:00').getDay();
    if (dow === 0 || dow === 6) {
      renderWeekend();
    } else {
      currentContent = getTrainingDay(currentEmployee, currentDate);
      if (!currentContent) {
        renderNoTraining();
      } else {
        const record = tracker.getRecord(currentEmployee, currentDate);
        const config = window.TRAINING_CONTENT && window.TRAINING_CONTENT[currentEmployee];
        const anchor = config ? config.anchor : '2026-03-16';
        const programDay = window.getProgramDay ? window.getProgramDay(anchor, currentDate) : 0;
        const adminModule = window.getAdminModuleForDay ? window.getAdminModuleForDay(programDay) : null;

        if (adminModule && !record.adminModulePassed) {
          renderAdminBlockOnly(adminModule, record);
        } else {
          renderTrainingCard(currentContent, record, adminModule, !!record.adminModulePassed);
        }
        renderWeekPills(currentEmployee, tracker.getMondayStr(currentDate));
      }
    }
  }

  // ── timer ──────────────────────────────────────────────────────────────────

  function startTimer() {
    const timerEl = document.getElementById('session-timer');
    if (!timerEl) return;
    var ticks = 0;
    timerInterval = setInterval(function () {
      const elapsed = savedSeconds + Math.floor((new Date() - sessionStart) / 1000);
      const h = Math.floor(elapsed / 3600);
      const m = Math.floor((elapsed % 3600) / 60);
      const s = elapsed % 60;
      timerEl.textContent = h > 0
        ? h + ':' + pad(m) + ':' + pad(s)
        : pad(m) + ':' + pad(s);
      ticks++;
      if (ticks % 10 === 0) saveElapsedNow(); // persist every ~10 s
    }, 1000);
  }

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  // ── weekend message ────────────────────────────────────────────────────────

  function renderWeekend() {
    const main = document.getElementById('main-content');
    if (!main) return;
    main.innerHTML = `
      <div class="rest-card">
        <div class="rest-icon">🌿</div>
        <h2>It's the weekend — rest up.</h2>
        <p>Training resumes Monday. See you then.</p>
      </div>
    `;
  }

  // ── no training ────────────────────────────────────────────────────────────

  function renderNoTraining() {
    const main = document.getElementById('main-content');
    if (!main) return;
    main.innerHTML = `
      <div class="rest-card">
        <div class="rest-icon">📋</div>
        <h2>No training scheduled today.</h2>
        <p>Check with Jose if you think this is an error.</p>
      </div>
    `;
  }

  // ── shared Administration block (video + quiz); same for Maria, Jorge, Scott ──
  // Video progress is tracked; quiz unlocks at 80% watched. Progress is sent to backend for live manager view.

  const PROGRESS_API = '/.netlify/functions/training-progress';
  const VIDEO_UNLOCK_PERCENT = 80;

  function sendProgress(moduleId, eventType, payload) {
    const body = JSON.stringify({
      employee: currentEmployee,
      moduleId: moduleId,
      eventType: eventType,
      payload: payload || {},
      dateStr: currentDate,
    });
    fetch(PROGRESS_API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: body })
      .catch(function () { /* ignore; backend may not be configured */ });
  }

  function renderAdminBlockOnly(adminModule, record) {
    clearInterval(quizTimerInterval); // stop any orphaned countdown from prior render
    const main = document.getElementById('main-content');
    if (!main) return;

    const quizId = 'admin-quiz';
    const videoFile = adminModule.videoFile || '';
    const videoSrc = videoFile ? 'videos/' + escAttr(videoFile) : '';

    let quizHtml = '';
    (adminModule.quiz || []).forEach(function (q, i) {
      const name = 'q' + i;
      const opts = (q.options || []).map(function (opt, j) {
        return '<label class="admin-quiz-opt"><input type="radio" name="' + name + '" value="' + j + '"> ' + escHtml(opt) + '</label>';
      }).join('');
      quizHtml += '<div class="admin-quiz-q"><div class="admin-quiz-q-text">' + (i + 1) + '. ' + escHtml(q.q) + '</div><div class="admin-quiz-opts">' + opts + '</div></div>';
    });

    const videoHtml = videoSrc
      ? '<div class="admin-video-wrap"><video id="admin-video" src="' + videoSrc + '" controls preload="metadata" playsinline></video><p class="admin-video-missing" id="admin-video-missing" style="display:none;"></p></div><p class="admin-progress-hint" id="admin-progress-hint">Watch at least 80% of the video to unlock the quiz.</p>'
      : adminModule.sourceUrl
        ? '<div class="admin-video-redirect"><p class="admin-video-redirect-label">This video plays on YouTube. Watch it, then come back here and confirm below to unlock the quiz.</p><a id="admin-watch-btn" href="' + escAttr(adminModule.sourceUrl) + '" target="_blank" rel="noopener" class="admin-watch-yt-btn">&#9654; Watch Video on YouTube</a><p class="admin-progress-hint" id="admin-progress-hint">Click Watch first, then confirm below to unlock the quiz.</p><button type="button" id="admin-watched-confirm" class="mark-complete-btn" disabled>I finished watching &mdash; unlock quiz</button></div>'
        : '<div class="admin-video-placeholder"><p>Video will be added to the portal. Place the file at <code>staff/videos/' + (adminModule.videoFile || adminModule.id + '.mp4') + '</code> and refresh.</p></div>';

    main.innerHTML = `
      <div class="training-card" style="--accent: #1C5A8A">
        <div class="week-badge">Administration Training</div>
        <h1 class="topic-title">${escHtml(adminModule.title)}</h1>
        <p class="admin-video-intro">Watch the video, then take the short quiz to continue.</p>
        ${videoHtml}
        <div class="admin-quiz-section">
          <h3 class="section-heading">Quiz — prove you watched</h3>
          <form id="${quizId}" class="admin-quiz-form">${quizHtml}</form>
          <div id="admin-quiz-feedback" class="admin-quiz-feedback" style="display:none;"></div>
          <div id="admin-quiz-timer" style="display:none;"></div>
          <button type="button" id="admin-quiz-submit" class="mark-complete-btn" disabled>Submit quiz</button>
        </div>
      </div>
    `;

    const form = document.getElementById(quizId);
    const feedback = document.getElementById('admin-quiz-feedback');
    const submitBtn = document.getElementById('admin-quiz-submit');
    const progressHint = document.getElementById('admin-progress-hint');
    const videoEl = document.getElementById('admin-video');

    var lastSentPercent = -1;
    var quizUnlocked = false;

    function unlockQuiz() {
      if (quizUnlocked) return;
      quizUnlocked = true;
      if (submitBtn) submitBtn.disabled = false;
      if (progressHint) progressHint.textContent = 'Quiz unlocked. You have 5 minutes to complete and submit.';
      sendProgress(adminModule.id, 'quiz_unlocked', { percentWatched: VIDEO_UNLOCK_PERCENT });
      startQuizTimer(adminModule.id); // fresh 5-min window
    }

    if (videoEl) {
      videoEl.addEventListener('loadedmetadata', function () {
        if (videoEl.duration && !isNaN(videoEl.duration) && videoEl.duration > 0) {
          videoEl.addEventListener('timeupdate', function () {
            var pct = Math.floor((100 * videoEl.currentTime) / videoEl.duration);
            if (pct >= VIDEO_UNLOCK_PERCENT) unlockQuiz();
            if (pct >= 25 && lastSentPercent < 25) { lastSentPercent = 25; sendProgress(adminModule.id, 'video_progress', { percentWatched: 25 }); }
            if (pct >= 50 && lastSentPercent < 50) { lastSentPercent = 50; sendProgress(adminModule.id, 'video_progress', { percentWatched: 50 }); }
            if (pct >= 75 && lastSentPercent < 75) { lastSentPercent = 75; sendProgress(adminModule.id, 'video_progress', { percentWatched: 75 }); }
            if (pct >= VIDEO_UNLOCK_PERCENT && lastSentPercent < VIDEO_UNLOCK_PERCENT) { lastSentPercent = VIDEO_UNLOCK_PERCENT; sendProgress(adminModule.id, 'video_progress', { percentWatched: VIDEO_UNLOCK_PERCENT }); }
            if (pct >= 100 && lastSentPercent < 100) { lastSentPercent = 100; sendProgress(adminModule.id, 'video_progress', { percentWatched: 100 }); }
          });
          videoEl.addEventListener('ended', function () {
            if (lastSentPercent < 100) { lastSentPercent = 100; sendProgress(adminModule.id, 'video_progress', { percentWatched: 100 }); }
            unlockQuiz();
          });
        } else {
          unlockQuiz();
        }
      });
      videoEl.addEventListener('error', function () {
        var missingEl = document.getElementById('admin-video-missing');
        if (missingEl) {
          missingEl.style.display = 'block';
          missingEl.textContent = 'Video not in portal yet. Add ' + (adminModule.videoFile || adminModule.id + '.mp4') + ' to staff/videos/ and deploy (or contact Jose).';
          missingEl.className = 'admin-video-missing';
        }
        unlockQuiz();
      });
    } else {
      var _ytBtn = document.getElementById('admin-watch-btn');
      if (!_ytBtn) unlockQuiz(); // only fallback if no YouTube flow either
    }

    // YouTube redirect flow — no local video file
    const watchYtBtn = document.getElementById('admin-watch-btn');
    const watchedConfirmBtn = document.getElementById('admin-watched-confirm');
    if (watchYtBtn && watchedConfirmBtn) {
      watchYtBtn.addEventListener('click', function () {
        watchedConfirmBtn.disabled = false;
        if (progressHint) progressHint.textContent = 'Good — when you\'re done watching, click the button below.';
        sendProgress(adminModule.id, 'video_started', { method: 'youtube_redirect' });
      });
      watchedConfirmBtn.addEventListener('click', function () {
        watchedConfirmBtn.disabled = true;
        watchedConfirmBtn.textContent = 'Quiz unlocked \u2713';
        sendProgress(adminModule.id, 'video_progress', { percentWatched: 100, method: 'youtube_redirect' });
        unlockQuiz();
      });
    }

    // Resume quiz timer if they left the page mid-quiz and came back
    (function () {
      var savedStart = getQuizTimerStart(currentEmployee, currentDate, adminModule.id);
      if (!savedStart) return;
      var remaining = QUIZ_TIMER_SECONDS - Math.floor((Date.now() - savedStart) / 1000);
      if (remaining > 0) {
        if (!quizUnlocked) {
          quizUnlocked = true;
          if (submitBtn) submitBtn.disabled = false;
          if (progressHint) progressHint.textContent = 'Quiz unlocked. ' + Math.ceil(remaining / 60) + ' min remaining — submit before time runs out.';
        }
        startQuizTimer(adminModule.id, savedStart);
      } else {
        // Time already expired — show message, keep submit locked
        clearQuizTimerStart(currentEmployee, currentDate, adminModule.id);
        var timerEl = document.getElementById('admin-quiz-timer');
        if (timerEl) {
          timerEl.style.display = 'block';
          timerEl.textContent = '\u23f1 Time expired — re-watch the video to try again.';
          timerEl.style.cssText = 'display:block;padding:.5rem .75rem;border-radius:4px;font-weight:700;font-size:.9rem;background:#f8d7da;color:#842029;margin-bottom:.75rem;';
        }
      }
    })();

    if (submitBtn && form) {
      submitBtn.addEventListener('click', function () {
        const answers = [];
        (adminModule.quiz || []).forEach(function (q, i) {
          const el = form.querySelector('input[name="q' + i + '"]:checked');
          answers.push(el ? parseInt(el.value, 10) : -1);
        });
        const correct = answers.reduce(function (n, a, i) {
          return n + (a === adminModule.quiz[i].answer ? 1 : 0);
        }, 0);
        const total = (adminModule.quiz || []).length;
        const pass = total > 0 && correct >= Math.min(2, total);

        feedback.style.display = 'block';
        if (pass) {
          clearInterval(quizTimerInterval);
          clearQuizTimerStart(currentEmployee, currentDate, adminModule.id);
          feedback.className = 'admin-quiz-feedback admin-quiz-pass';
          feedback.textContent = 'You passed (' + correct + '/' + total + '). Saving…';
          sendProgress(adminModule.id, 'quiz_passed', { score: correct, total: total });
          sendProgress(adminModule.id, 'module_complete', {});
          tracker.saveRecord(currentEmployee, currentDate, { adminModulePassed: true });
          setTimeout(function () { init(); }, 800);
        } else {
          feedback.className = 'admin-quiz-feedback admin-quiz-fail';
          feedback.textContent = 'Not quite (' + correct + '/' + total + '). Watch the video again and try again. Need at least 2 correct.';
        }
      });
    }
  }

  // ── training card ──────────────────────────────────────────────────────────

  function renderTrainingCard(content, record, adminModule, adminPassed) {
    if (content && content.mozaik) {
      renderTrainingCardThreeBlock(content, record, adminModule, adminPassed);
      return;
    }

    const main = document.getElementById('main-content');
    if (!main) return;

    const config   = TRAINING_CONTENT[currentEmployee];
    const accentColor = config ? config.color : '#C4622D';
    const dateObj  = new Date(currentDate + 'T12:00:00');
    const dayName  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dateObj.getDay()];

    const isComplete = record && record.completed;

    const adminBadgeHtml = (adminModule && adminPassed) ? '<div class="admin-done-badge"><span class="checkmark">✓</span> Administration done</div>' : '';

    const objectivesHtml = (content.objectives || []).map(function (obj) {
      return '<li>' + escHtml(obj) + '</li>';
    }).join('');

    const completionHtml = isComplete
      ? `<div class="completion-badge">
           <span class="checkmark">✓</span>
           Completed at ${escHtml(record.completedAt || '')}
         </div>`
      : '';

    const btnClass = isComplete ? 'mark-complete-btn done' : 'mark-complete-btn';
    const btnText  = isComplete ? '✓ Completed' : 'Mark Complete';

    main.innerHTML = `
      <div class="training-card" style="--accent: ${accentColor}">
        ${adminBadgeHtml}
        <div class="week-badge">
          Week ${content.week} &middot; Day ${content.day} &middot; ${dayName}
        </div>

        <h1 class="topic-title">${escHtml(content.topic)}</h1>

        ${completionHtml}

        <div class="card-columns">
          <div class="card-left">
            <h3 class="section-heading">Objectives</h3>
            <ul class="objectives-list">
              ${objectivesHtml}
            </ul>

            <a href="${escAttr(content.resourceUrl)}" target="_blank" rel="noopener" class="resource-btn">
              <span class="resource-icon">📚</span>
              ${escHtml(content.resourceLabel)}
            </a>
          </div>

          <div class="card-right">
            <div class="task-box">
              <h3 class="section-heading">Today's Task</h3>
              <p>${escHtml(content.task)}</p>
            </div>

            <blockquote class="tip-blockquote">
              <span class="tip-label">Tip from Jose</span>
              <p>${escHtml(content.tip)}</p>
            </blockquote>
          </div>
        </div>

        <div class="notes-section">
          <h3 class="section-heading">Notes</h3>
          <textarea
            id="notes-area"
            class="notes-area"
            placeholder="Write your notes here…"
            rows="4"
          >${escHtml((record && record.notes) || '')}</textarea>
        </div>

        <div class="complete-row">
          <button id="btn-complete" class="${btnClass}">
            ${btnText}
          </button>
        </div>
      </div>
    `;

    // Bind events
    const notesEl = document.getElementById('notes-area');
    if (notesEl) {
      notesEl.addEventListener('input', handleNoteInput);
    }

    const completeBtn = document.getElementById('btn-complete');
    if (completeBtn) {
      if (!isComplete) {
        completeBtn.addEventListener('click', handleMarkComplete);
      }
    }
  }

  // ── three-block card (Maria) ────────────────────────────────────────────────

  function renderBlock(block, colors) {
    const objectivesHtml = (block.objectives || []).map(function (obj) {
      return '<li>' + escHtml(obj) + '</li>';
    }).join('');
    return `
      <div class="training-block" style="border-left: 4px solid ${colors.border}; background: ${colors.bg}; padding: 16px; margin-bottom: 16px; border-radius: 6px;">
        <div class="block-header" style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
          <span class="block-label" style="font-weight:700; color:${colors.border}; font-size:13px; text-transform:uppercase; letter-spacing:.05em;">${escHtml(block.label)}</span>
          <span style="color:#888; font-size:12px;">${escHtml(block.duration)}</span>
        </div>
        <h2 style="font-size:18px; margin:0 0 10px; color:#1C2B4A;">${escHtml(block.topic)}</h2>
        <div class="card-columns">
          <div class="card-left">
            <h3 class="section-heading">Objectives</h3>
            <ul class="objectives-list">${objectivesHtml}</ul>
            <a href="${escAttr(block.resourceUrl)}" target="_blank" rel="noopener" class="resource-btn">
              <span class="resource-icon">📚</span>
              ${escHtml(block.resourceLabel)}
            </a>
          </div>
          <div class="card-right">
            <div class="task-box">
              <h3 class="section-heading">Today's Task</h3>
              <p>${escHtml(block.task)}</p>
            </div>
            <blockquote class="tip-blockquote">
              <span class="tip-label">Tip from Jose</span>
              <p>${escHtml(block.tip)}</p>
            </blockquote>
          </div>
        </div>
      </div>
    `;
  }

  function renderTrainingCardThreeBlock(content, record, adminModule, adminPassed) {
    const main = document.getElementById('main-content');
    if (!main) return;

    const dateObj  = new Date(currentDate + 'T12:00:00');
    const dayName  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dateObj.getDay()];
    const isComplete = record && record.completed;

    const adminBadgeHtml = (adminModule && adminPassed) ? '<div class="admin-done-badge"><span class="checkmark">✓</span> Administration done</div>' : '';

    const mozaikBlock = Object.assign({ label: 'Mozaik', duration: '1 hour' }, content.mozaik);
    const adminBlock  = Object.assign({ label: 'Office Admin', duration: '45 min' }, content.admin);
    const designBlock = Object.assign({ label: 'Design Awareness', duration: '45 min' }, content.design);

    const completionHtml = isComplete
      ? `<div class="completion-badge"><span class="checkmark">✓</span> Completed at ${escHtml(record.completedAt || '')}</div>`
      : '';

    const btnClass = isComplete ? 'mark-complete-btn done' : 'mark-complete-btn';
    const btnText  = isComplete ? '✓ Completed' : 'Mark Complete';

    main.innerHTML = `
      <div class="training-card" style="--accent: #5F8062">
        ${adminBadgeHtml}
        <div class="week-badge">Week ${content.week} &middot; Day ${content.day} &middot; ${dayName}</div>
        <h1 class="topic-title" style="font-size:20px;">Daily Training — 2.5 Hours</h1>
        ${completionHtml}

        ${renderBlock(mozaikBlock, { border: '#5F8062', bg: '#F2F7F2' })}
        ${renderBlock(adminBlock,  { border: '#1C5A8A', bg: '#F0F5FA' })}
        ${renderBlock(designBlock, { border: '#8B5E8B', bg: '#F7F0F7' })}

        <div class="notes-section">
          <h3 class="section-heading">Notes</h3>
          <textarea id="notes-area" class="notes-area" placeholder="Write your notes here…" rows="4">${escHtml((record && record.notes) || '')}</textarea>
        </div>

        <div class="complete-row">
          <button id="btn-complete" class="${btnClass}">${btnText}</button>
        </div>
      </div>
    `;

    const notesEl = document.getElementById('notes-area');
    if (notesEl) notesEl.addEventListener('input', handleNoteInput);

    const completeBtn = document.getElementById('btn-complete');
    if (completeBtn && !isComplete) {
      completeBtn.addEventListener('click', handleMarkComplete);
    }
  }

  // ── week pills ─────────────────────────────────────────────────────────────

  function renderWeekPills(employee, mondayStr) {
    const container = document.getElementById('week-pills-container');
    if (!container) return;

    const monday  = new Date(mondayStr + 'T12:00:00');
    const today   = tracker.todayStr();
    const records = tracker.getWeekRecords(employee, mondayStr);

    let html = '<div class="week-pills">';
    for (let i = 0; i < 5; i++) {
      const d  = new Date(monday);
      d.setDate(monday.getDate() + i);
      const ds = tracker.localDateStr(d);
      const rec = records[ds] || {};

      let pillClass = 'pill upcoming';
      if (ds === today)          pillClass = 'pill today';
      if (rec.completed)         pillClass = 'pill complete';
      // Past + not complete + not today = missed
      if (ds < today && !rec.completed && ds !== today) pillClass = 'pill missed';

      html += `<div class="${pillClass}" title="${ds}">
        <span class="pill-day">${DAY_SHORT[i]}</span>
        ${rec.completed ? '<span class="pill-check">✓</span>' : ''}
      </div>`;
    }
    html += '</div>';
    container.innerHTML = html;
  }

  // ── mark complete ──────────────────────────────────────────────────────────

  function handleMarkComplete() {
    if (!currentContent) return;
    tracker.markComplete(
      currentEmployee,
      currentDate,
      currentContent.week,
      currentContent.day,
      currentContent.topic
    );
    // Re-render
    const record = tracker.getRecord(currentEmployee, currentDate);
    renderTrainingCard(currentContent, record);
    renderWeekPills(currentEmployee, tracker.getMondayStr(currentDate));

    // Re-bind notes (renderTrainingCard rebuilds the DOM)
    const notesEl = document.getElementById('notes-area');
    if (notesEl) notesEl.addEventListener('input', handleNoteInput);
  }

  // ── notes ──────────────────────────────────────────────────────────────────

  function handleNoteInput(e) {
    const text = e.target.value;
    clearTimeout(noteDebounce);
    noteDebounce = setTimeout(function () {
      tracker.saveNote(currentEmployee, currentDate, text);
    }, 500);
  }

  // ── html helpers ───────────────────────────────────────────────────────────

  function escHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escAttr(str) {
    return String(str || '').replace(/"/g, '&quot;');
  }

  // ── boot ───────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', init);
})();
