// =============================================
// HEARTHWOOD CABINETRY — Kitchen Visualizer
// =============================================
(function () {
  'use strict';

  // ---- State ----
  const state = {
    step: 1,
    roomPhoto: null,
    measurements: {
      wallWidth: 0,
      ceilingHeight: 0,
      upperCabHeight: 0,
      lowerCounterHeight: 0,
      unit: 'imperial'
    },
    layout: { base: [], wall: [], tall: [] },
    style: {
      lineId: 'line1',
      doorId: 'shaker',
      colorId: 'alabaster'
    },
    canvasScale: 8  // pixels per inch
  };

  const CANVAS_PADDING   = 40;   // px
  const BASE_CAB_HEIGHT  = 34.5; // inches
  const WALL_CAB_HEIGHT  = 30;   // inches
  const PRESTIGE_WALL_H  = 42;   // inches (line2)
  const COUNTER_DEPTH    = 1.5;  // counter overhang inches
  const STANDARD_WIDTHS  = [36, 33, 30, 27, 24, 21, 18, 15, 12];

  // ---- DOM Refs ----
  let canvas, ctx;

  // ---- Init ----
  function init() {
    canvas = document.getElementById('layout-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    bindStepNav();
    bindPhotoUpload();
    bindMeasurements();
    bindStyleSelectors();
    bindDownload();
    bindQuote();
    showStep(1);
  }

  // ---- Step Navigation ----
  function bindStepNav() {
    document.querySelectorAll('[data-step-next]').forEach(btn => {
      btn.addEventListener('click', function () {
        const next = parseInt(this.getAttribute('data-step-next'));
        if (validateStep(state.step)) showStep(next);
      });
    });
    document.querySelectorAll('[data-step-back]').forEach(btn => {
      btn.addEventListener('click', function () {
        showStep(parseInt(this.getAttribute('data-step-back')));
      });
    });
  }

  function showStep(n) {
    state.step = n;
    document.querySelectorAll('.viz-step').forEach(el => el.classList.remove('active'));
    const active = document.getElementById('step-' + n);
    if (active) active.classList.add('active');

    document.querySelectorAll('.step-indicator').forEach((el, i) => {
      el.classList.toggle('active', i + 1 === n);
      el.classList.toggle('done', i + 1 < n);
    });

    if (n === 4) drawLayout();
  }

  function validateStep(n) {
    if (n === 2) {
      const m = readMeasurements();
      if (!m.wallWidth || m.wallWidth <= 0) {
        alert('Please enter a valid wall width.');
        return false;
      }
      if (!m.ceilingHeight || m.ceilingHeight <= 0) {
        alert('Please enter a valid ceiling height.');
        return false;
      }
    }
    return true;
  }

  // ---- Photo Upload ----
  function bindPhotoUpload() {
    const input   = document.getElementById('room-photo-input');
    const preview = document.getElementById('room-photo-preview');
    const dropzone = document.getElementById('photo-dropzone');

    if (!input || !preview) return;

    input.addEventListener('change', function () {
      const file = this.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        state.roomPhoto = e.target.result;
        preview.src = e.target.result;
        preview.style.display = 'block';
        if (dropzone) dropzone.classList.add('has-photo');
      };
      reader.readAsDataURL(file);
    });

    if (dropzone) {
      dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.classList.add('drag-over'); });
      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
      dropzone.addEventListener('drop', e => {
        e.preventDefault();
        dropzone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
          input.files = e.dataTransfer.files;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
  }

  // ---- Measurements ----
  function bindMeasurements() {
    const unitToggle = document.querySelectorAll('[data-unit]');
    unitToggle.forEach(btn => {
      btn.addEventListener('click', function () {
        unitToggle.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.measurements.unit = this.getAttribute('data-unit');
        updateUnitLabels();
      });
    });

    const calcBtn = document.getElementById('calculate-btn');
    if (calcBtn) {
      calcBtn.addEventListener('click', () => {
        const m = readMeasurements();
        if (!m.wallWidth || !m.ceilingHeight) {
          alert('Please fill in Wall Width and Ceiling Height.');
          return;
        }
        state.measurements = { ...state.measurements, ...m };
        computeLayout();
        showStep(3);
      });
    }
  }

  function readMeasurements() {
    const unit = state.measurements.unit;

    function getInches(feetId, inchId) {
      const feetEl  = document.getElementById(feetId);
      const inchEl  = document.getElementById(inchId);
      const feet    = parseFloat(feetEl ? feetEl.value : 0) || 0;
      const inches  = parseFloat(inchEl ? inchEl.value : 0) || 0;
      return unit === 'imperial' ? feet * 12 + inches : (feet * 100 + inches) / 2.54;
    }

    function getInchesMetric(meterId) {
      const el = document.getElementById(meterId);
      const val = parseFloat(el ? el.value : 0) || 0;
      return val / 2.54;
    }

    if (unit === 'imperial') {
      return {
        wallWidth:         getInches('wall-width-ft', 'wall-width-in'),
        ceilingHeight:     getInches('ceiling-height-ft', 'ceiling-height-in'),
        upperCabHeight:    getInches('upper-cab-height-ft', 'upper-cab-height-in') || 30,
        lowerCounterHeight: getInches('lower-counter-ft', 'lower-counter-in') || 36,
        unit: 'imperial'
      };
    } else {
      return {
        wallWidth:          getInchesMetric('wall-width-cm'),
        ceilingHeight:      getInchesMetric('ceiling-height-cm'),
        upperCabHeight:     getInchesMetric('upper-cab-height-cm') || 76,
        lowerCounterHeight: getInchesMetric('lower-counter-cm') || 91,
        unit: 'metric'
      };
    }
  }

  function updateUnitLabels() {
    const isMetric = state.measurements.unit === 'metric';
    document.querySelectorAll('.field-imperial').forEach(el => el.style.display = isMetric ? 'none' : 'flex');
    document.querySelectorAll('.field-metric').forEach(el => el.style.display = isMetric ? 'flex' : 'none');
  }

  // ---- Layout Algorithm (greedy bin-packing) ----
  function computeLayout() {
    const m = state.measurements;
    state.layout = { base: [], wall: [], tall: [] };

    const wallW = m.wallWidth;
    if (!wallW) return;

    // Determine if tall cabinets fit
    const useTall = (m.ceilingHeight >= 84);

    if (useTall) {
      // Place tall pantry at start or end
      const pantryW = 24;
      state.layout.tall.push({ x: 0, widthIn: pantryW, heightIn: Math.min(m.ceilingHeight, 96), label: 'Pantry' });
      const remaining = wallW - pantryW;
      if (remaining > 0) {
        state.layout.base = packCabinets(pantryW, remaining, BASE_CAB_HEIGHT, 'Base');
        state.layout.wall = packCabinets(pantryW, remaining, WALL_CAB_HEIGHT, 'Wall');
      }
    } else {
      state.layout.base = packCabinets(0, wallW, BASE_CAB_HEIGHT, 'Base');
      state.layout.wall = packCabinets(0, wallW, WALL_CAB_HEIGHT, 'Wall');
    }
  }

  function packCabinets(startX, availableWidth, cabinetHeight, label) {
    const cabinets = [];
    let x = startX;
    let remaining = availableWidth;

    while (remaining >= 12) {
      // Try to fit the largest standard width that fits
      let placed = false;
      for (const w of STANDARD_WIDTHS) {
        if (w <= remaining) {
          cabinets.push({ x: x, widthIn: w, heightIn: cabinetHeight, label: label });
          x += w;
          remaining -= w;
          placed = true;
          break;
        }
      }
      if (!placed) {
        // Fill rest with filler
        if (remaining > 0) {
          cabinets.push({ x: x, widthIn: remaining, heightIn: cabinetHeight, label: 'Filler' });
        }
        break;
      }
    }
    return cabinets;
  }

  // ---- Style Selectors ----
  function bindStyleSelectors() {
    // Line selector
    document.querySelectorAll('[data-select-line]').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('[data-select-line]').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.style.lineId = this.getAttribute('data-select-line');
        populateDoorStylesViz();
        populateColorsViz();
        drawLayout();
      });
    });

    // Door style selector (populated dynamically)
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-select-door]');
      if (!btn) return;
      document.querySelectorAll('[data-select-door]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.style.doorId = btn.getAttribute('data-select-door');
      drawLayout();
    });

    // Color selector (populated dynamically)
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-select-color]');
      if (!btn) return;
      document.querySelectorAll('[data-select-color]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.style.colorId = btn.getAttribute('data-select-color');
      drawLayout();
    });

    populateDoorStylesViz();
    populateColorsViz();
  }

  function populateDoorStylesViz() {
    const line = CABINET_LINES[state.style.lineId];
    if (!line) return;
    // Populate both step-3 and step-4 containers
    ['viz-door-styles', 'viz-door-styles-4'].forEach(id => {
      const container = document.getElementById(id);
      if (!container) return;
      container.innerHTML = '';
      line.doorStyles.forEach((style, i) => {
        const btn = document.createElement('button');
        btn.className = 'door-btn' + (i === 0 ? ' active' : '');
        btn.textContent = style.name;
        btn.setAttribute('data-select-door', style.id);
        btn.title = style.description;
        container.appendChild(btn);
      });
    });
    if (line.doorStyles.length > 0) state.style.doorId = line.doorStyles[0].id;
  }

  function populateColorsViz() {
    const line = CABINET_LINES[state.style.lineId];
    if (!line) return;
    // Populate both step-3 and step-4 containers
    ['viz-color-swatches', 'viz-color-swatches-4'].forEach(id => {
      const container = document.getElementById(id);
      if (!container) return;
      container.innerHTML = '';
      line.colors.forEach((color, i) => {
        const btn = document.createElement('button');
        btn.className = 'color-swatch' + (i === 0 ? ' active' : '');
        btn.style.backgroundColor = color.hex;
        btn.setAttribute('data-select-color', color.id);
        btn.setAttribute('aria-label', color.name);
        btn.title = color.name;
        container.appendChild(btn);
      });
    });
    if (line.colors.length > 0) state.style.colorId = line.colors[0].id;
  }

  // ---- Canvas Drawing ----
  function drawLayout() {
    if (!canvas || !ctx) return;
    if (!state.measurements.wallWidth) return;

    const m     = state.measurements;
    const wallW = m.wallWidth;
    const wallH = m.ceilingHeight || 96;

    const line  = CABINET_LINES[state.style.lineId];
    const color = line ? line.colors.find(c => c.id === state.style.colorId) : null;
    const cabinetFill = color ? color.hex : '#C2B5A5';

    // Compute scale to fit canvas
    const canvasEl = canvas;
    const availW   = canvasEl.parentElement ? canvasEl.parentElement.offsetWidth - 20 : 900;
    const scale    = Math.min(10, Math.floor((availW - CANVAS_PADDING * 2) / wallW));
    state.canvasScale = Math.max(4, scale);
    const S = state.canvasScale;

    const canvasW  = wallW * S + CANVAS_PADDING * 2;
    const canvasH  = wallH * S + CANVAS_PADDING * 2 + 60; // extra for counter/labels
    canvasEl.width  = canvasW;
    canvasEl.height = canvasH;

    ctx.clearRect(0, 0, canvasW, canvasH);

    // Background (wall)
    ctx.fillStyle = '#FAF8F5';
    ctx.fillRect(0, 0, canvasW, canvasH);

    // Wall outline
    ctx.strokeStyle = '#C2B5A5';
    ctx.lineWidth = 1;
    ctx.strokeRect(CANVAS_PADDING, CANVAS_PADDING, wallW * S, wallH * S);

    // Floor line
    const floorY = CANVAS_PADDING + wallH * S;
    ctx.beginPath();
    ctx.moveTo(CANVAS_PADDING, floorY);
    ctx.lineTo(CANVAS_PADDING + wallW * S, floorY);
    ctx.strokeStyle = '#1C2B4A';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Counter height line
    const counterY = floorY - m.lowerCounterHeight * S;
    ctx.beginPath();
    ctx.setLineDash([4, 3]);
    ctx.moveTo(CANVAS_PADDING, counterY);
    ctx.lineTo(CANVAS_PADDING + wallW * S, counterY);
    ctx.strokeStyle = '#C9A96E';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw tall cabinets
    state.layout.tall.forEach(cab => {
      drawCabinet(cab, floorY, S, cabinetFill, '#1C2B4A', 'tall');
    });

    // Draw base cabinets
    state.layout.base.forEach(cab => {
      drawCabinet(cab, floorY, S, cabinetFill, '#1C2B4A', 'base');
    });

    // Counter surface
    state.layout.base.forEach(cab => {
      const x = CANVAS_PADDING + cab.x * S;
      const y = floorY - m.lowerCounterHeight * S - 2;
      ctx.fillStyle = '#E8E0D4';
      ctx.fillRect(x, y, cab.widthIn * S, 4);
    });

    // Draw wall cabinets
    const wallCabBottomY = counterY - 18 * S; // 18" above counter
    state.layout.wall.forEach(cab => {
      drawWallCabinet(cab, wallCabBottomY, S, cabinetFill, '#1C2B4A');
    });

    // Dimension annotations
    drawDimensions(wallW, wallH, S);

    // Legend
    drawLegend(canvasW, canvasH);
  }

  function drawCabinet(cab, floorY, S, fillColor, strokeColor, type) {
    const x = CANVAS_PADDING + cab.x * S;
    const h = cab.heightIn * S;
    const w = cab.widthIn * S;
    const y = floorY - h;

    // Fill
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, w, h);

    // Door lines (simulate door style)
    const doorStyle = getDoorStyleId();
    drawDoorDetail(ctx, x, y, w, h, doorStyle, fillColor);

    // Stroke
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, w, h);

    // Label
    ctx.fillStyle = getContrastColor(fillColor);
    ctx.font = 'bold ' + Math.max(8, Math.min(11, S * 1.4)) + 'px Lato, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const label = cab.widthIn + '"';
    ctx.fillText(label, x + w / 2, y + h / 2);
  }

  function drawWallCabinet(cab, bottomY, S, fillColor, strokeColor) {
    const wallCabH = (state.style.lineId === 'line2' ? 42 : 30) * S;
    const x = CANVAS_PADDING + cab.x * S;
    const w = cab.widthIn * S;
    const y = bottomY - wallCabH;

    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, w, wallCabH);

    const doorStyle = getDoorStyleId();
    drawDoorDetail(ctx, x, y, w, wallCabH, doorStyle, fillColor);

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, w, wallCabH);

    ctx.fillStyle = getContrastColor(fillColor);
    ctx.font = 'bold ' + Math.max(8, Math.min(11, S * 1.4)) + 'px Lato, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(cab.widthIn + '"', x + w / 2, y + wallCabH / 2);
  }

  function drawDoorDetail(ctx, x, y, w, h, doorStyle, fillColor) {
    const inset = Math.max(3, Math.min(8, w * 0.08));
    const ri = x + inset, ti = y + inset, wi = w - inset * 2, hi = h - inset * 2;
    ctx.strokeStyle = adjustColor(fillColor, -20);
    ctx.lineWidth = 1;

    if (doorStyle === 'shaker' || doorStyle === 'raised-panel') {
      ctx.strokeRect(ri, ti, wi, hi);
    } else if (doorStyle === 'beadboard') {
      const lines = Math.max(2, Math.floor(w / 10));
      for (let i = 0; i <= lines; i++) {
        const lx = ri + (wi / lines) * i;
        ctx.beginPath();
        ctx.moveTo(lx, ti);
        ctx.lineTo(lx, ti + hi);
        ctx.stroke();
      }
    } else if (doorStyle === 'arch') {
      ctx.strokeRect(ri, ti, wi, hi);
      ctx.beginPath();
      ctx.arc(ri + wi / 2, ti, wi / 2, Math.PI, 0);
      ctx.stroke();
    }
    // flat-panel: no detail
  }

  function drawDimensions(wallW, wallH, S) {
    ctx.fillStyle = '#1C2B4A';
    ctx.font = '10px Lato, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const unit = state.measurements.unit;

    // Width dimension
    const wLabel = unit === 'metric'
      ? (wallW * 2.54).toFixed(0) + ' cm'
      : _inchesToFtIn(wallW);
    ctx.fillText('Wall Width: ' + wLabel, CANVAS_PADDING + (wallW * S) / 2, CANVAS_PADDING + wallH * S + 8);

    // Height dimension (rotated)
    ctx.save();
    ctx.translate(CANVAS_PADDING - 25, CANVAS_PADDING + (wallH * S) / 2);
    ctx.rotate(-Math.PI / 2);
    const hLabel = unit === 'metric'
      ? (wallH * 2.54).toFixed(0) + ' cm'
      : _inchesToFtIn(wallH);
    ctx.fillText('Height: ' + hLabel, 0, 0);
    ctx.restore();
  }

  function drawLegend(cW, cH) {
    const items = [
      { color: '#C2B5A5', label: 'Base Cabinet' },
      { color: '#B0A898', label: 'Wall Cabinet' },
      { color: '#8BA888', label: 'Tall Cabinet' },
      { color: '#C9A96E', label: 'Counter Line' }
    ];
    let lx = CANVAS_PADDING;
    const ly = cH - 28;
    ctx.font = '10px Lato, sans-serif';
    ctx.textBaseline = 'middle';
    items.forEach(item => {
      ctx.fillStyle = item.color;
      ctx.fillRect(lx, ly - 5, 12, 10);
      ctx.fillStyle = '#4A4F5C';
      ctx.textAlign = 'left';
      ctx.fillText(item.label, lx + 16, ly);
      lx += 110;
    });
  }

  // ---- Helpers ----
  function getDoorStyleId() {
    return state.style.doorId || 'shaker';
  }

  function getContrastColor(hex) {
    // Returns black or white depending on background luminance
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return lum > 0.5 ? '#1C2B4A' : '#FFFFFF';
  }

  function adjustColor(hex, amount) {
    const r = Math.max(0, Math.min(255, parseInt(hex.slice(1, 3), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.slice(3, 5), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.slice(5, 7), 16) + amount));
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  }

  function _inchesToFtIn(inches) {
    const ft = Math.floor(inches / 12);
    const ins = Math.round(inches % 12);
    return ft > 0 ? ft + '\' ' + (ins > 0 ? ins + '"' : '') : ins + '"';
  }

  // ---- Download ----
  function bindDownload() {
    const btn = document.getElementById('download-layout');
    if (!btn) return;
    btn.addEventListener('click', () => {
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = 'hearthwood-kitchen-layout.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

  // ---- Request Quote ----
  function bindQuote() {
    const btn = document.getElementById('request-quote-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const line  = CABINET_LINES[state.style.lineId];
      const color = line ? line.colors.find(c => c.id === state.style.colorId) : null;
      const door  = line ? line.doorStyles.find(d => d.id === state.style.doorId) : null;
      const m = state.measurements;

      const summary =
        'From Visualizer:\n' +
        'Cabinet Line: ' + (line ? line.name : '') + '\n' +
        'Color: ' + (color ? color.name : '') + '\n' +
        'Door Style: ' + (door ? door.name : '') + '\n' +
        'Wall Width: ' + _inchesToFtIn(m.wallWidth) + '\n' +
        'Ceiling Height: ' + _inchesToFtIn(m.ceilingHeight) + '\n' +
        'Base Cabinets: ' + state.layout.base.length + ' units\n' +
        'Wall Cabinets: ' + state.layout.wall.length + ' units' +
        (state.layout.tall.length ? '\nTall Cabinets: ' + state.layout.tall.length + ' units' : '');

      window.location.href = 'contact.html?summary=' + encodeURIComponent(summary);
    });
  }

  // ---- Start ----
  document.addEventListener('DOMContentLoaded', init);

})();
