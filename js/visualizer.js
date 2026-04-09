// =============================================
// HEARTHWOOD CABINETRY — Kitchen Design Planner
// =============================================
(function () {
  'use strict';

  // ---- State ----
  const state = {
    mode:       'photo',    // 'photo' | 'dims'
    dims: {
      wallWidthIn:    120,  // 10 ft
      ceilingHeightIn: 108, // 9 ft
    },
    appliances: {
      sink:   'center',  // left | center | right
      stove:  'none',    // left | right | none
      fridge: 'right',   // left | right | none
    },
    style: {
      lineId:  'line1',
      doorId:  'shaker',
      colorId: 'alabaster',
    },
    products: {
      countertop: 'quartz-white',
      backsplash: 'subway-white',
      floor:      'light-oak',
    },
    layout:    { base: [], wall: [], tall: [] },
    generated: false,
  };

  // ---- Canvas zones (px) ----
  const Z = {
    padX:     50,
    padTop:   28,
    upperH:   145,   // upper cabinet zone height
    splashH:  26,    // backsplash strip
    counterH: 9,     // countertop thickness
    baseH:    175,   // base cabinet zone height
    floorH:   32,    // floor strip
    padBot:   55,    // bottom padding for labels
  };
  // Total canvas height = padTop + upperH + splashH + counterH + baseH + floorH + padBot

  const STANDARD_WIDTHS = [36, 33, 30, 27, 24, 21, 18, 15, 12];
  const FRIDGE_WIDTH_IN = 33;
  const STOVE_WIDTH_IN  = 30;

  let canvas, ctx;

  // ---- Init ----
  function init() {
    canvas = document.getElementById('layout-canvas');
    if (canvas) ctx = canvas.getContext('2d');

    renderDimsForms();
    bindTabs();
    bindPhotoUpload();
    bindGenerateButtons();
    bindProductSelectors();
    bindDownload();
    bindQuote();
    bindRedesign();

    populateCabinetSelectors();
    populateMaterialSwatches('countertop-swatches', COUNTERTOPS,  'countertop');
    populateMaterialSwatches('backsplash-swatches', BACKSPLASH,   'backsplash');
    populateMaterialSwatches('floor-swatches',      FLOORING,     'floor');
  }

  // ==================================================
  // DIMS FORM — inject identical form into both panels
  // ==================================================

  function dimsFormHTML(prefix) {
    return `
      <div class="dims-section">
        <div class="dims-section-title">Wall Measurements</div>
        <div class="dims-row">
          <span class="dims-label">Wall Width</span>
          <div class="dims-inputs">
            <input type="number" class="dims-input" id="${prefix}-wall-ft" min="4" max="40" value="10" placeholder="10">
            <span class="dims-unit">ft</span>
            <input type="number" class="dims-input" id="${prefix}-wall-in" min="0" max="11" value="0" placeholder="0">
            <span class="dims-unit">in</span>
          </div>
        </div>
        <div class="dims-row">
          <span class="dims-label">Ceiling Height</span>
          <div class="dims-inputs">
            <input type="number" class="dims-input" id="${prefix}-ceil-ft" min="7" max="16" value="9" placeholder="9">
            <span class="dims-unit">ft</span>
            <input type="number" class="dims-input" id="${prefix}-ceil-in" min="0" max="11" value="0" placeholder="0">
            <span class="dims-unit">in</span>
          </div>
        </div>
      </div>
      <div class="dims-section">
        <div class="dims-section-title">Appliance Positions</div>
        <div class="dims-row">
          <span class="dims-label">Sink</span>
          <div class="pos-btn-group">
            <button class="pos-btn" data-prefix="${prefix}" data-appliance="sink" data-pos="left">Left</button>
            <button class="pos-btn active" data-prefix="${prefix}" data-appliance="sink" data-pos="center">Center</button>
            <button class="pos-btn" data-prefix="${prefix}" data-appliance="sink" data-pos="right">Right</button>
          </div>
        </div>
        <div class="dims-row">
          <span class="dims-label">Stove / Range</span>
          <div class="pos-btn-group">
            <button class="pos-btn active" data-prefix="${prefix}" data-appliance="stove" data-pos="none">None</button>
            <button class="pos-btn" data-prefix="${prefix}" data-appliance="stove" data-pos="left">Left</button>
            <button class="pos-btn" data-prefix="${prefix}" data-appliance="stove" data-pos="right">Right</button>
          </div>
        </div>
        <div class="dims-row">
          <span class="dims-label">Refrigerator</span>
          <div class="pos-btn-group">
            <button class="pos-btn" data-prefix="${prefix}" data-appliance="fridge" data-pos="none">None</button>
            <button class="pos-btn" data-prefix="${prefix}" data-appliance="fridge" data-pos="left">Left end</button>
            <button class="pos-btn active" data-prefix="${prefix}" data-appliance="fridge" data-pos="right">Right end</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderDimsForms() {
    const photoForm  = document.getElementById('dims-form-photo');
    const manualForm = document.getElementById('dims-form-manual');
    if (photoForm)  photoForm.innerHTML  = dimsFormHTML('pf');
    if (manualForm) manualForm.innerHTML = dimsFormHTML('mf');
  }

  function readDims(prefix) {
    const ft = v => parseInt(document.getElementById(prefix + '-' + v)?.value || 0, 10) || 0;
    return {
      wallWidthIn:    ft('wall-ft') * 12 + ft('wall-in'),
      ceilingHeightIn: ft('ceil-ft') * 12 + ft('ceil-in'),
    };
  }

  function fillDimsForm(prefix, wallWidthIn, ceilingHeightIn) {
    const wFt = Math.floor(wallWidthIn / 12);
    const wIn = Math.round(wallWidthIn % 12);
    const cFt = Math.floor(ceilingHeightIn / 12);
    const cIn = Math.round(ceilingHeightIn % 12);
    const set = (id, val) => { const el = document.getElementById(prefix + '-' + id); if (el) el.value = val; };
    set('wall-ft', wFt);
    set('wall-in', wIn);
    set('ceil-ft', cFt);
    set('ceil-in', cIn);
  }

  // ==================================================
  // TABS
  // ==================================================

  function bindTabs() {
    document.querySelectorAll('.entry-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        document.querySelectorAll('.entry-tab').forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('.entry-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        document.getElementById('panel-' + target)?.classList.add('active');
        state.mode = target;
      });
    });
  }

  // ==================================================
  // PHOTO UPLOAD + AI ANALYSIS
  // ==================================================

  function bindPhotoUpload() {
    const input    = document.getElementById('photo-input');
    const zone     = document.getElementById('photo-upload-zone');
    const retryBtn = document.getElementById('btn-retry-photo');
    const switchBtn = document.getElementById('btn-switch-to-dims');

    if (input) input.addEventListener('change', e => handlePhotoFile(e.target.files[0]));

    if (zone) {
      zone.addEventListener('dragover',  e => { e.preventDefault(); zone.classList.add('drag-over'); });
      zone.addEventListener('dragleave', ()  => zone.classList.remove('drag-over'));
      zone.addEventListener('drop', e => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        const f = e.dataTransfer.files[0];
        if (f && f.type.startsWith('image/')) handlePhotoFile(f);
      });
    }

    if (retryBtn) {
      retryBtn.addEventListener('click', () => resetPhotoPanel());
    }

    if (switchBtn) {
      switchBtn.addEventListener('click', () => {
        document.querySelector('.entry-tab[data-tab="dims"]')?.click();
      });
    }
  }

  function handlePhotoFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      const dataUrl = e.target.result;
      showPhotoState('loading');

      // Show thumb early
      const thumb = document.getElementById('photo-preview');
      if (thumb) thumb.src = dataUrl;

      analyzePhoto(dataUrl, file.type);
    };
    reader.readAsDataURL(file);
  }

  async function analyzePhoto(dataUrl, fileType) {
    try {
      const res = await fetch('/.netlify/functions/kitchen-analyze', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ image: dataUrl, mediaType: fileType || 'image/jpeg' }),
      });

      if (!res.ok) throw new Error('API error ' + res.status);

      const data = await res.json();

      if (data.error) throw new Error(data.error);

      // Pre-fill form
      fillDimsForm('pf', data.wallWidthIn || 120, data.ceilingHeightIn || 108);

      // Pre-fill appliances from AI result
      if (data.sinkSide   && data.sinkSide   !== 'unknown') setAppliancePos('pf', 'sink',  data.sinkSide);
      if (data.stoveSide  && data.stoveSide  !== 'unknown') setAppliancePos('pf', 'stove', data.stoveSide);
      if (data.fridgeSide && data.fridgeSide !== 'unknown') setAppliancePos('pf', 'fridge', data.fridgeSide);

      // Show confidence badge
      const badge = document.getElementById('analysis-badge');
      const confText = document.getElementById('analysis-confidence-text');
      if (badge && confText) {
        badge.className = 'analysis-badge ' + (data.confidence || 'medium');
        confText.textContent =
          data.confidence === 'high'   ? 'High confidence estimate' :
          data.confidence === 'medium' ? 'Moderate confidence — review dimensions' :
                                         'Low confidence — please verify dimensions';
      }

      const notesEl = document.getElementById('analysis-notes');
      if (notesEl && data.notes) notesEl.textContent = data.notes;

      showPhotoState('result');

    } catch (err) {
      console.error('Photo analysis failed:', err);
      const errEl = document.getElementById('analysis-error-text');
      if (errEl) errEl.textContent = 'Couldn\'t analyze the photo. ' + (err.message || 'Please enter your dimensions manually.');
      showPhotoState('error');
    }
  }

  function showPhotoState(state) {
    const states = { upload: 'photo-upload-zone', loading: 'analysis-loading', result: 'analysis-result', error: 'analysis-error' };
    Object.entries(states).forEach(([key, id]) => {
      const el = document.getElementById(id);
      if (el) el.style.display = key === state ? '' : 'none';
    });
  }

  function resetPhotoPanel() {
    showPhotoState('upload');
    const input = document.getElementById('photo-input');
    if (input) input.value = '';
  }

  function setAppliancePos(prefix, appliance, pos) {
    document.querySelectorAll(`[data-prefix="${prefix}"][data-appliance="${appliance}"]`).forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-pos') === pos);
    });
    state.appliances[appliance] = pos;
  }

  // ==================================================
  // POSITION BUTTONS (appliances)
  // ==================================================

  function bindPositionButtons() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('.pos-btn');
      if (!btn) return;
      const prefix    = btn.getAttribute('data-prefix');
      const appliance = btn.getAttribute('data-appliance');
      const pos       = btn.getAttribute('data-pos');
      if (!prefix || !appliance || !pos) return;

      // Update buttons in same group
      document.querySelectorAll(`[data-prefix="${prefix}"][data-appliance="${appliance}"]`).forEach(b => {
        b.classList.toggle('active', b === btn);
      });
      state.appliances[appliance] = pos;
    });
  }

  // ==================================================
  // GENERATE BUTTONS
  // ==================================================

  function bindGenerateButtons() {
    bindPositionButtons();

    const btnPhoto = document.getElementById('btn-generate-photo');
    const btnDims  = document.getElementById('btn-generate-dims');

    if (btnPhoto) btnPhoto.addEventListener('click', () => generate('pf'));
    if (btnDims)  btnDims.addEventListener('click',  () => generate('mf'));
  }

  function generate(prefix) {
    const dims = readDims(prefix);
    if (!dims.wallWidthIn || dims.wallWidthIn < 48) {
      alert('Please enter a wall width of at least 4 feet.');
      return;
    }
    if (!dims.ceilingHeightIn || dims.ceilingHeightIn < 84) {
      alert('Please enter a ceiling height of at least 7 feet.');
      return;
    }

    state.dims = dims;
    computeLayout();
    state.generated = true;

    const layoutSection = document.getElementById('planner-layout');
    if (layoutSection) {
      layoutSection.style.display = '';
      layoutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    drawCanvas();
    updateSummary();
  }

  // ==================================================
  // LAYOUT ALGORITHM (greedy bin-packing)
  // ==================================================

  function computeLayout() {
    const { wallWidthIn, ceilingHeightIn } = state.dims;
    state.layout = { base: [], wall: [], tall: [] };

    let runStart = 0;
    let runWidth = wallWidthIn;

    // Fridge at one end — remove its space from the run
    const hasFridge = state.appliances.fridge !== 'none';
    if (hasFridge) {
      if (state.appliances.fridge === 'left') {
        state.layout.tall.push({ x: 0, widthIn: FRIDGE_WIDTH_IN, isFridge: true });
        runStart = FRIDGE_WIDTH_IN;
      } else {
        state.layout.tall.push({ x: wallWidthIn - FRIDGE_WIDTH_IN, widthIn: FRIDGE_WIDTH_IN, isFridge: true });
      }
      runWidth -= FRIDGE_WIDTH_IN;
    }

    // Pantry if tall ceilings (≥84") and no fridge on that end
    const usePantry = ceilingHeightIn >= 84 && !hasFridge;
    if (usePantry) {
      state.layout.tall.push({ x: runStart, widthIn: 24, isPantry: true });
      runStart += 24;
      runWidth -= 24;
    }

    if (runWidth < 12) return; // nothing to fill

    // Stove positioning — will be flagged on a base cabinet
    const hasStove = state.appliances.stove !== 'none';

    // Bin-pack base cabinets
    state.layout.base = packCabinets(runStart, runWidth);
    // Bin-pack wall cabinets (same widths, different heights)
    state.layout.wall = packCabinets(runStart, runWidth);

    // Mark sink cabinet
    markApplianceCabinet(state.layout.base, state.appliances.sink,  'sink',  runStart, runWidth, 36);
    // Mark stove cabinet
    if (hasStove) markApplianceCabinet(state.layout.base, state.appliances.stove, 'stove', runStart, runWidth, 30);
  }

  function packCabinets(startX, availableWidth) {
    const cabs = [];
    let x = startX;
    let rem = availableWidth;

    while (rem >= 12) {
      let placed = false;
      for (const w of STANDARD_WIDTHS) {
        if (w <= rem) {
          cabs.push({ x, widthIn: w });
          x += w;
          rem -= w;
          placed = true;
          break;
        }
      }
      if (!placed) {
        if (rem > 0) cabs.push({ x, widthIn: rem, isFiller: true });
        break;
      }
    }
    return cabs;
  }

  function markApplianceCabinet(cabs, position, applianceType, runStart, runWidth, preferredWidth) {
    if (!cabs.length) return;
    let targetIdx;

    if (position === 'left') {
      targetIdx = 0;
    } else if (position === 'right') {
      targetIdx = cabs.length - 1;
    } else {
      // center — pick cabinet closest to middle of run
      const midX = runStart + runWidth / 2;
      let bestDist = Infinity;
      cabs.forEach((c, i) => {
        const d = Math.abs((c.x + c.widthIn / 2) - midX);
        if (d < bestDist) { bestDist = d; targetIdx = i; }
      });
    }

    if (targetIdx !== undefined) cabs[targetIdx][applianceType] = true;
  }

  // ==================================================
  // CANVAS DRAWING
  // ==================================================

  function drawCanvas() {
    if (!canvas || !ctx) return;

    const container = document.getElementById('canvas-wrap');
    const maxW = container ? container.offsetWidth - 24 : 900;
    const canvasW = Math.min(maxW, 940);
    const canvasH = Z.padTop + Z.upperH + Z.splashH + Z.counterH + Z.baseH + Z.floorH + Z.padBot;

    canvas.width  = canvasW;
    canvas.height = canvasH;

    const innerW = canvasW - Z.padX * 2;
    const wallW  = state.dims.wallWidthIn;
    const scaleX = innerW / wallW;

    // ---- Wall background ----
    ctx.fillStyle = '#FAF8F5';
    ctx.fillRect(0, 0, canvasW, canvasH - Z.padBot);

    // Wall above upper cabs (slightly darker)
    ctx.fillStyle = '#F0ECE6';
    ctx.fillRect(Z.padX, Z.padTop, innerW, 10);

    // ---- Compute Y positions ----
    const upperTop    = Z.padTop;
    const upperBot    = upperTop + Z.upperH;
    const splashTop   = upperBot;
    const splashBot   = splashTop + Z.splashH;
    const counterTop  = splashBot;
    const counterBot  = counterTop + Z.counterH;
    const baseTop     = counterBot;
    const baseBot     = baseTop + Z.baseH;
    const floorTop    = baseBot;
    const floorBot    = floorTop + Z.floorH;

    // ---- Floor ----
    drawFloor(ctx, Z.padX, floorTop, innerW, Z.floorH);

    // ---- Backsplash ----
    drawBacksplash(ctx, Z.padX, splashTop, innerW, Z.splashH);

    // ---- Countertop ----
    drawCountertop(ctx, Z.padX, counterTop, innerW, Z.counterH);

    // ---- Cabinet line data ----
    const line     = CABINET_LINES[state.style.lineId];
    const colorObj = line ? line.colors.find(c => c.id === state.style.colorId) : null;
    const cabHex   = colorObj ? colorObj.hex : '#C2B5A5';

    // ---- Tall cabinets (fridge or pantry) ----
    state.layout.tall.forEach(cab => {
      const x = Z.padX + cab.x * scaleX;
      const w = cab.widthIn * scaleX;

      if (cab.isFridge) {
        drawFridge(ctx, x, upperTop, w, baseBot - upperTop);
      } else {
        // Pantry cabinet — floor to ceiling-ish
        ctx.fillStyle = cabHex;
        ctx.fillRect(x, upperTop, w, baseBot - upperTop);
        drawDoorDetailCanvas(ctx, x, upperTop, w, baseBot - upperTop, state.style.doorId, cabHex);
        ctx.strokeStyle = '#1C2B4A';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, upperTop, w, baseBot - upperTop);
        drawLabel(ctx, 'Pantry', x + w / 2, upperTop + (baseBot - upperTop) / 2, cabHex);
      }
    });

    // ---- Upper cabinets ----
    const wallCabH = (state.style.lineId === 'line2' ? 42 : 30);
    const wallCabPx = Math.min(wallCabH / wallW * innerW, Z.upperH - 10);

    state.layout.wall.forEach(cab => {
      const x = Z.padX + cab.x * scaleX;
      const w = cab.widthIn * scaleX;
      const y = upperBot - wallCabPx;

      // Skip if this position is occupied by fridge
      if (isUnderFridge(cab.x, cab.widthIn)) return;
      // Skip if stove is here (hood goes here instead)
      if (isAboveStove(cab.x, cab.widthIn)) return;

      ctx.fillStyle = cab.isFiller ? '#E8E4DE' : cabHex;
      ctx.fillRect(x, y, w, wallCabPx);
      if (!cab.isFiller) drawDoorDetailCanvas(ctx, x, y, w, wallCabPx, state.style.doorId, cabHex);
      ctx.strokeStyle = '#1C2B4A';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, w, wallCabPx);
      if (!cab.isFiller) drawLabel(ctx, cab.widthIn + '"', x + w / 2, y + wallCabPx / 2, cabHex);
    });

    // ---- Hood (above stove position) ----
    const stoveCab = state.layout.base.find(c => c.stove);
    if (stoveCab) {
      drawHood(ctx, Z.padX + stoveCab.x * scaleX, upperTop, stoveCab.widthIn * scaleX, Z.upperH);
    }

    // ---- Base cabinets ----
    state.layout.base.forEach(cab => {
      const x = Z.padX + cab.x * scaleX;
      const w = cab.widthIn * scaleX;

      if (isUnderFridge(cab.x, cab.widthIn)) return;

      ctx.fillStyle = cab.isFiller ? '#E8E4DE' : cabHex;
      ctx.fillRect(x, baseTop, w, Z.baseH);
      if (!cab.isFiller && !cab.sink && !cab.stove) {
        drawDoorDetailCanvas(ctx, x, baseTop, w, Z.baseH, state.style.doorId, cabHex);
      }
      ctx.strokeStyle = '#1C2B4A';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, baseTop, w, Z.baseH);

      if (cab.sink) {
        drawSink(ctx, x, baseTop, w, Z.baseH);
        drawLabel(ctx, 'Sink', x + w / 2, baseTop + Z.baseH / 2 + 28, cabHex);
      } else if (cab.stove) {
        drawStove(ctx, x, baseTop, w, Z.baseH, cabHex);
        drawLabel(ctx, 'Stove', x + w / 2, baseTop + Z.baseH / 2 + 28, cabHex);
      } else if (!cab.isFiller) {
        drawLabel(ctx, cab.widthIn + '"', x + w / 2, baseTop + Z.baseH / 2, cabHex);
      }
    });

    // ---- Wall outline ----
    ctx.strokeStyle = 'rgba(28,43,74,0.15)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(Z.padX, upperTop, innerW, baseBot - upperTop);

    // ---- Dimension arrows ----
    drawDimArrow(ctx, Z.padX, Z.padX + innerW, floorBot + 12,
      _inchesToFtIn(wallW) + '  total wall width');

    // ---- Section labels (left side) ----
    drawSideLabel(ctx, 'UPPER', Z.padX - 6, upperBot - wallCabPx / 2);
    drawSideLabel(ctx, 'BASE',  Z.padX - 6, baseTop + Z.baseH / 2);

    // ---- Empty msg ----
    const emptyMsg = document.getElementById('canvas-empty-msg');
    if (emptyMsg) {
      emptyMsg.style.display = (state.layout.base.length === 0) ? '' : 'none';
    }
  }

  // ---- Helper: is this position under fridge? ----
  function isUnderFridge(cabX, cabW) {
    return state.layout.tall.some(t => t.isFridge && overlaps(t.x, t.widthIn, cabX, cabW));
  }

  function isAboveStove(cabX, cabW) {
    return state.layout.base.some(b => b.stove && overlaps(b.x, b.widthIn, cabX, cabW));
  }

  function overlaps(ax, aw, bx, bw) {
    return ax < bx + bw && ax + aw > bx;
  }

  // ==================================================
  // INDIVIDUAL DRAW FUNCTIONS
  // ==================================================

  function drawCountertop(ctx, x, y, w, h) {
    const ct = COUNTERTOPS.find(c => c.id === state.products.countertop) || COUNTERTOPS[0];
    ctx.fillStyle = ct.hex;
    ctx.fillRect(x, y, w, h);
    // Top edge highlight
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(x, y, w, 2);
    // Bottom edge shadow
    ctx.fillStyle = ct.edgeHex;
    ctx.fillRect(x, y + h - 2, w, 2);
    // Subtle grain
    ctx.strokeStyle = ct.grainHex;
    ctx.lineWidth = 0.4;
    ctx.setLineDash([8, 12]);
    ctx.beginPath();
    ctx.moveTo(x + 20, y + h / 2);
    ctx.lineTo(x + w - 20, y + h / 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  function drawBacksplash(ctx, x, y, w, h) {
    const bs = BACKSPLASH.find(b => b.id === state.products.backsplash) || BACKSPLASH[0];

    ctx.fillStyle = bs.hex;
    ctx.fillRect(x, y, w, h);

    ctx.strokeStyle = bs.groutHex;
    ctx.lineWidth = 0.5;

    if (bs.pattern === 'brick') {
      const tileH = h * 0.9;
      const tileW = tileH * 2.8;
      for (let row = 0; row * tileH < h; row++) {
        const offset = row % 2 === 0 ? 0 : tileW / 2;
        for (let col = -1; col * tileW < w; col++) {
          const tx = x + col * tileW + offset;
          const ty = y + row * tileH;
          ctx.strokeRect(tx, ty, tileW, tileH);
        }
      }
    } else if (bs.pattern === 'grid') {
      const size = h * 0.85;
      for (let gx = x; gx < x + w; gx += size) ctx.strokeRect(gx, y, size, size);
    } else if (bs.pattern === 'hex') {
      // Simplified: just draw a grid with rotated look
      ctx.strokeStyle = bs.groutHex;
      ctx.lineWidth = 0.7;
      const sz = h * 0.8;
      for (let gx = x; gx < x + w + sz; gx += sz * 0.87) {
        for (let gy = y - sz; gy < y + h + sz; gy += sz) {
          const cx2 = gx; const cy2 = gy + sz / 2;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
            const px = cx2 + (sz / 2 - 1) * Math.cos(a);
            const py = cy2 + (sz / 2 - 1) * Math.sin(a);
            if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
  }

  function drawFloor(ctx, x, y, w, h) {
    const fl = FLOORING.find(f => f.id === state.products.floor) || FLOORING[0];
    ctx.fillStyle = fl.hex;
    ctx.fillRect(x, y, w, h);

    ctx.lineWidth = 0.5;
    if (fl.pattern === 'plank') {
      const plankW = 48;
      ctx.strokeStyle = fl.grainHex;
      for (let px = x; px < x + w; px += plankW) {
        ctx.beginPath(); ctx.moveTo(px, y); ctx.lineTo(px, y + h); ctx.stroke();
        // grain lines
        ctx.setLineDash([6, 10]);
        ctx.beginPath();
        ctx.moveTo(px + plankW * 0.3, y + 4);
        ctx.lineTo(px + plankW * 0.7, y + h - 4);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    } else {
      // tile
      const sz = h * 0.85;
      ctx.strokeStyle = fl.groutHex;
      for (let px = x; px < x + w + sz; px += sz) ctx.strokeRect(px, y, sz, h);
    }
  }

  function drawSink(ctx, x, y, w, h) {
    ctx.fillStyle = '#C8CDCF';
    ctx.fillRect(x, y, w, h);

    // Basin
    const bx = x + w * 0.12;
    const bw = w * 0.76;
    const by = y + h * 0.18;
    const bh = h * 0.55;
    ctx.fillStyle = '#9EA8AA';
    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, 4);
    ctx.fill();
    // Drain
    ctx.fillStyle = '#6E7880';
    ctx.beginPath();
    ctx.arc(bx + bw / 2, by + bh / 2, 5, 0, Math.PI * 2);
    ctx.fill();
    // Faucet
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(bx + bw / 2, by - 6);
    ctx.lineTo(bx + bw / 2, by - 14);
    ctx.arc(bx + bw / 2 + 6, by - 14, 6, Math.PI, 0);
    ctx.stroke();
  }

  function drawStove(ctx, x, y, w, h, cabHex) {
    ctx.fillStyle = '#3A3A3A';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, w, h);

    // 4 burners
    const bOffX = [0.27, 0.73, 0.27, 0.73];
    const bOffY = [0.28, 0.28, 0.65, 0.65];
    bOffX.forEach((bx2, i) => {
      ctx.strokeStyle = '#888';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x + w * bx2, y + h * bOffY[i], Math.min(w, h) * 0.1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(x + w * bx2, y + h * bOffY[i], Math.min(w, h) * 0.06, 0, Math.PI * 2);
      ctx.stroke();
    });
  }

  function drawFridge(ctx, x, y, w, fullH) {
    ctx.fillStyle = '#D0D4D8';
    ctx.fillRect(x, y, w, fullH);
    // Handle
    ctx.fillStyle = '#A0A8B0';
    ctx.fillRect(x + w * 0.75, y + fullH * 0.1, 4, fullH * 0.35);
    ctx.fillRect(x + w * 0.75, y + fullH * 0.55, 4, fullH * 0.35);
    // Split line
    ctx.strokeStyle = '#B0B8C0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y + fullH * 0.4);
    ctx.lineTo(x + w, y + fullH * 0.4);
    ctx.stroke();
    ctx.strokeStyle = '#A0A8B0';
    ctx.strokeRect(x, y, w, fullH);
    // Label
    ctx.fillStyle = '#5A6068';
    ctx.font = 'bold 10px Lato, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('FRIDGE', x + w / 2, y + fullH * 0.7);
  }

  function drawHood(ctx, x, y, w, h) {
    // Trapezoid hood shape
    const padX = w * 0.1;
    ctx.fillStyle = '#8A8E94';
    ctx.beginPath();
    ctx.moveTo(x + padX,     y + h * 0.15);
    ctx.lineTo(x + w - padX, y + h * 0.15);
    ctx.lineTo(x + w * 0.85, y + h * 0.85);
    ctx.lineTo(x + w * 0.15, y + h * 0.85);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#6A6E74';
    ctx.lineWidth = 1;
    ctx.stroke();
    // Vent lines
    ctx.strokeStyle = '#9A9EA4';
    ctx.lineWidth = 0.5;
    for (let i = 1; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(x + padX, y + h * 0.15 + h * 0.7 * (i / 4));
      ctx.lineTo(x + w - padX, y + h * 0.15 + h * 0.7 * (i / 4));
      ctx.stroke();
    }
    // Label
    ctx.fillStyle = '#fff';
    ctx.font = '9px Lato, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('HOOD', x + w / 2, y + h * 0.5);
  }

  function drawDoorDetailCanvas(ctx, x, y, w, h, doorId, cabHex) {
    const inset = Math.max(4, Math.min(10, w * 0.09));
    const ri = x + inset, ti = y + inset, wi = w - inset * 2, hi = h - inset * 2;
    const col = adjustColor(cabHex, -18);
    ctx.strokeStyle = col;
    ctx.lineWidth = 1;

    if (doorId === 'shaker' || doorId === 'raised-panel') {
      ctx.strokeRect(ri, ti, wi, hi);
      if (doorId === 'raised-panel') {
        ctx.strokeStyle = adjustColor(cabHex, 15);
        ctx.strokeRect(ri + 1, ti + 1, wi - 2, hi - 2);
      }
    } else if (doorId === 'beadboard') {
      const lines = Math.max(2, Math.floor(w / 12));
      for (let i = 1; i < lines; i++) {
        const lx = ri + (wi / lines) * i;
        ctx.beginPath(); ctx.moveTo(lx, ti); ctx.lineTo(lx, ti + hi); ctx.stroke();
      }
    } else if (doorId === 'arch') {
      ctx.strokeRect(ri, ti + wi * 0.3, wi, hi - wi * 0.3);
      ctx.beginPath();
      ctx.arc(ri + wi / 2, ti + wi * 0.3, wi / 2, Math.PI, 0);
      ctx.stroke();
    }
    // flat-panel: no detail
  }

  function drawLabel(ctx, text, cx, cy, bgHex) {
    ctx.fillStyle = getContrastColor(bgHex);
    ctx.font = 'bold 10px Lato, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, cx, cy);
  }

  function drawSideLabel(ctx, text, x, y) {
    ctx.save();
    ctx.translate(x - 4, y);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = 'rgba(74,79,92,0.4)';
    ctx.font = '700 9px Lato, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '2px';
    ctx.fillText(text, 0, 0);
    ctx.restore();
  }

  function drawDimArrow(ctx, x1, x2, y, label) {
    ctx.strokeStyle = 'rgba(28,43,74,0.5)';
    ctx.lineWidth = 1;
    ctx.setLineDash([]);

    // Line
    ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
    // Arrowheads
    [[x1, 1], [x2, -1]].forEach(([ax, dir]) => {
      ctx.beginPath();
      ctx.moveTo(ax, y);
      ctx.lineTo(ax + dir * 8, y - 4);
      ctx.lineTo(ax + dir * 8, y + 4);
      ctx.closePath();
      ctx.fillStyle = 'rgba(28,43,74,0.5)';
      ctx.fill();
    });
    // Label
    ctx.fillStyle = 'rgba(28,43,74,0.7)';
    ctx.font = '700 11px Lato, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(label, (x1 + x2) / 2, y + 6);
  }

  // ==================================================
  // PRODUCT SELECTORS
  // ==================================================

  function bindProductSelectors() {
    // Cabinet line
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-line]');
      if (!btn) return;
      document.querySelectorAll('[data-line]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.style.lineId = btn.getAttribute('data-line');
      populateCabinetSelectors();
      if (state.generated) drawCanvas();
    });

    // Door style
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-door]');
      if (!btn) return;
      document.querySelectorAll('[data-door]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.style.doorId = btn.getAttribute('data-door');
      if (state.generated) drawCanvas();
    });

    // Cabinet color
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-color]');
      if (!btn) return;
      document.querySelectorAll('[data-color]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.style.colorId = btn.getAttribute('data-color');
      if (state.generated) drawCanvas();
    });

    // Material swatches (countertop / backsplash / floor)
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-material]');
      if (!btn) return;
      const category = btn.getAttribute('data-category');
      document.querySelectorAll(`[data-category="${category}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.products[category] = btn.getAttribute('data-material');
      if (state.generated) drawCanvas();
    });
  }

  function populateCabinetSelectors() {
    const line = CABINET_LINES[state.style.lineId];
    if (!line) return;

    // Door buttons
    const doorGroup = document.getElementById('pl-door-btns');
    if (doorGroup) {
      doorGroup.innerHTML = '';
      line.doorStyles.forEach((style, i) => {
        const btn = document.createElement('button');
        btn.className = 'door-btn' + (i === 0 ? ' active' : '');
        btn.setAttribute('data-door', style.id);
        btn.textContent = style.name;
        btn.title = style.description;
        doorGroup.appendChild(btn);
      });
      if (line.doorStyles.length) state.style.doorId = line.doorStyles[0].id;
    }

    // Color dots
    const colorGroup = document.getElementById('pl-color-dots');
    if (colorGroup) {
      colorGroup.innerHTML = '';
      line.colors.forEach((color, i) => {
        const btn = document.createElement('button');
        btn.className = 'color-dot' + (i === 0 ? ' active' : '');
        btn.style.background = color.hex;
        btn.setAttribute('data-color', color.id);
        btn.setAttribute('aria-label', color.name);
        btn.title = color.name;
        colorGroup.appendChild(btn);
      });
      if (line.colors.length) state.style.colorId = line.colors[0].id;
    }
  }

  function populateMaterialSwatches(containerId, items, category) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    items.forEach((item, i) => {
      const btn = document.createElement('button');
      btn.className = 'material-swatch' + (i === 0 ? ' active' : '');
      btn.setAttribute('data-material', item.id);
      btn.setAttribute('data-category', category);
      btn.title = item.name;

      // Pattern class for swatch preview
      const patternClass = item.pattern ? 'swatch-pattern-' + item.pattern : '';

      btn.innerHTML =
        '<div class="swatch-block ' + patternClass + '" style="background:' + item.hex + '"></div>' +
        '<span class="swatch-name">' + item.name + '</span>';

      container.appendChild(btn);
    });
  }

  // ==================================================
  // LAYOUT SUMMARY
  // ==================================================

  function updateSummary() {
    const el = document.getElementById('layout-summary');
    if (!el) return;

    const total = state.dims.wallWidthIn;
    const baseCt = state.layout.base.filter(c => !c.isFiller).length;
    const wallCt = state.layout.wall.filter(c => !c.isFiller).length;
    const tallCt = state.layout.tall.length;

    el.innerHTML =
      `<div class="summary-item"><i class="fa-solid fa-ruler-horizontal"></i> ${_inchesToFtIn(total)} wall run</div>` +
      `<div class="summary-item"><i class="fa-solid fa-table-cells"></i> ${baseCt} base cabinets</div>` +
      `<div class="summary-item"><i class="fa-solid fa-layer-group"></i> ${wallCt} upper cabinets</div>` +
      (tallCt ? `<div class="summary-item"><i class="fa-solid fa-arrows-up-down"></i> ${tallCt} tall unit(s)</div>` : '');
  }

  // ==================================================
  // DOWNLOAD
  // ==================================================

  function bindDownload() {
    const btn = document.getElementById('btn-download');
    if (!btn) return;
    btn.addEventListener('click', () => {
      if (!canvas) return;
      const link    = document.createElement('a');
      link.download = 'hearthwood-kitchen-plan.png';
      link.href     = canvas.toDataURL('image/png');
      link.click();
    });
  }

  // ==================================================
  // REQUEST QUOTE
  // ==================================================

  function bindQuote() {
    const btn = document.getElementById('btn-quote');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const line     = CABINET_LINES[state.style.lineId];
      const colorObj = line ? line.colors.find(c => c.id === state.style.colorId) : null;
      const doorObj  = line ? line.doorStyles.find(d => d.id === state.style.doorId) : null;
      const ctObj    = COUNTERTOPS.find(c => c.id === state.products.countertop);
      const bsObj    = BACKSPLASH.find(b => b.id === state.products.backsplash);
      const flObj    = FLOORING.find(f => f.id === state.products.floor);

      const summary =
        'From Kitchen Planner:\n' +
        'Wall run: ' + _inchesToFtIn(state.dims.wallWidthIn) + '\n' +
        'Cabinet line: ' + (line     ? line.name      : '') + '\n' +
        'Door style: '   + (doorObj  ? doorObj.name   : '') + '\n' +
        'Color: '        + (colorObj ? colorObj.name  : '') + '\n' +
        'Countertop: '   + (ctObj    ? ctObj.name     : '') + '\n' +
        'Backsplash: '   + (bsObj    ? bsObj.name     : '') + '\n' +
        'Flooring: '     + (flObj    ? flObj.name     : '') + '\n' +
        'Base cabinets: '+ state.layout.base.filter(c => !c.isFiller).length + '\n' +
        'Upper cabinets: '+ state.layout.wall.filter(c => !c.isFiller).length;

      window.location.href = 'contact.html?summary=' + encodeURIComponent(summary);
    });
  }

  // ==================================================
  // START OVER
  // ==================================================

  function bindRedesign() {
    const btn = document.getElementById('btn-redesign');
    if (!btn) return;
    btn.addEventListener('click', () => {
      document.getElementById('planner-layout').style.display = 'none';
      document.getElementById('planner-entry').scrollIntoView({ behavior: 'smooth' });
      state.generated = false;
      resetPhotoPanel();
    });
  }

  // ==================================================
  // HELPERS
  // ==================================================

  function getContrastColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.55 ? '#1C2B4A' : '#FFFFFF';
  }

  function adjustColor(hex, amount) {
    const r = Math.max(0, Math.min(255, parseInt(hex.slice(1, 3), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.slice(3, 5), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.slice(5, 7), 16) + amount));
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  }

  function _inchesToFtIn(inches) {
    const ft  = Math.floor(inches / 12);
    const ins = Math.round(inches % 12);
    return ft > 0 ? ft + '\u2019 ' + (ins > 0 ? ins + '"' : '') : ins + '"';
  }

  // ==================================================
  // START
  // ==================================================
  document.addEventListener('DOMContentLoaded', init);

})();
