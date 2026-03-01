// =============================================
// HEARTHWOOD CABINETRY — Catalog / Product Page
// =============================================
(function () {
  'use strict';

  // --- State ---
  let activeLine = null;
  let activeColorId = null;
  let activeDoorId = null;
  const selection = [];  // { cabinet, line, color, door }

  // --- Init ---
  function init() {
    // Determine which line this page is for
    const lineId = document.body.getAttribute('data-line');
    if (!lineId || !CABINET_LINES[lineId]) return;
    activeLine = CABINET_LINES[lineId];

    renderPageHeader();
    renderDoorStyles();
    renderColorSwatches();
    renderCabinetGrid();
    setupSelectionPanel();
  }

  // --- Page Header ---
  function renderPageHeader() {
    const nameEl = document.getElementById('line-name');
    const descEl = document.getElementById('line-description');
    const tagEl  = document.getElementById('line-tagline');
    if (nameEl) nameEl.textContent = activeLine.name;
    if (tagEl)  tagEl.textContent  = activeLine.tagline;
    if (descEl) descEl.textContent = activeLine.description;
    document.title = activeLine.name + ' — Hearthwood Cabinetry';
  }

  // --- Door Styles ---
  function renderDoorStyles() {
    const container = document.getElementById('door-styles-container');
    if (!container) return;
    container.innerHTML = '';
    activeLine.doorStyles.forEach((style, i) => {
      const btn = document.createElement('button');
      btn.className = 'door-btn' + (i === 0 ? ' active' : '');
      btn.textContent = style.name;
      btn.title = style.description;
      btn.setAttribute('data-door', style.id);
      btn.addEventListener('click', function () {
        document.querySelectorAll('.door-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        activeDoorId = style.id;
        updateDoorLabels();
      });
      container.appendChild(btn);
      if (i === 0) activeDoorId = style.id;
    });
  }

  // --- Color Swatches ---
  function renderColorSwatches() {
    const container = document.getElementById('color-swatches-container');
    if (!container) return;
    container.innerHTML = '';
    activeLine.colors.forEach((color, i) => {
      const btn = document.createElement('button');
      btn.className = 'color-swatch' + (i === 0 ? ' active' : '');
      btn.style.backgroundColor = color.hex;
      btn.setAttribute('data-color', color.id);
      btn.setAttribute('title', color.name);
      btn.setAttribute('aria-label', color.name);
      btn.addEventListener('click', function () {
        document.querySelectorAll('.color-swatch').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        activeColorId = color.id;
        applyColorToAll();
        updateSelectionColorBadge();
      });
      container.appendChild(btn);
      if (i === 0) activeColorId = color.id;
    });
  }

  // --- Cabinet Grid ---
  function renderCabinetGrid() {
    const grid = document.getElementById('cabinet-grid');
    if (!grid) return;
    grid.innerHTML = '';

    activeLine.cabinets.forEach(cabinet => {
      const card = document.createElement('div');
      card.className = 'cabinet-card';
      card.setAttribute('data-cabinet-id', cabinet.id);

      // Image path
      const lineImages = IMAGES[activeLine.id] || {};
      const imgFile    = lineImages[cabinet.name];
      const imgFolder  = 'images/' + activeLine.id + '/';

      let imageHtml;
      if (imgFile) {
        imageHtml =
          '<div class="cabinet-img-wrap">' +
          '<img class="cabinet-img" src="' + imgFolder + imgFile + '"' +
          ' alt="' + cabinet.name + '"' +
          ' loading="lazy"' +
          ' onerror="this.parentElement.classList.add(\'no-image\')">' +
          '<div class="color-overlay" data-cabinet="' + cabinet.id + '"></div>' +
          '</div>';
      } else {
        imageHtml =
          '<div class="cabinet-img-wrap no-image">' +
          _buildPlaceholderSvg(cabinet) +
          '<div class="color-overlay" data-cabinet="' + cabinet.id + '"></div>' +
          '</div>';
      }

      const typeLabel = (typeof CABINET_TYPE_LABELS !== 'undefined' && CABINET_TYPE_LABELS[cabinet.type])
        ? CABINET_TYPE_LABELS[cabinet.type]
        : cabinet.type;

      card.innerHTML =
        imageHtml +
        '<div class="cabinet-card-body">' +
        '<div class="cabinet-card-meta">' + typeLabel + ' &middot; ' + cabinet.widthIn + '"W &times; ' + cabinet.heightIn + '"H &times; ' + cabinet.depthIn + '"D</div>' +
        '<div class="cabinet-card-title">' + cabinet.name + '</div>' +
        '<div class="cabinet-card-desc">' + cabinet.description + '</div>' +
        '<div class="cabinet-card-price">' + cabinet.price + '</div>' +
        '<div class="cabinet-card-actions">' +
        '<button class="btn btn-sm btn-primary add-to-inquiry" data-id="' + cabinet.id + '">Add to Inquiry</button>' +
        '<a href="visualizer.html" class="btn btn-sm btn-outline">Plan Layout</a>' +
        '</div>' +
        '</div>';

      grid.appendChild(card);

      // Add to inquiry event
      card.querySelector('.add-to-inquiry').addEventListener('click', function () {
        addToSelection(cabinet);
      });
    });

    applyColorToAll();
  }

  // --- Color Overlay ---
  function applyColorToAll() {
    if (!activeColorId) return;
    const colorObj = activeLine.colors.find(c => c.id === activeColorId);
    if (!colorObj) return;

    document.querySelectorAll('.color-overlay').forEach(overlay => {
      overlay.style.backgroundColor = colorObj.hex;
      overlay.style.opacity = '0.35';
    });

    document.querySelectorAll('.cabinet-img-wrap.no-image').forEach(wrap => {
      wrap.style.backgroundColor = colorObj.hex;
      wrap.style.opacity = '1';
    });

    document.querySelectorAll('.cabinet-img').forEach(img => {
      img.style.filter = colorObj.cssFilter;
    });
  }

  function updateDoorLabels() {
    const doorObj = activeLine.doorStyles.find(d => d.id === activeDoorId);
    if (!doorObj) return;
    const label = document.getElementById('active-door-label');
    if (label) label.textContent = doorObj.name;
  }

  function updateSelectionColorBadge() {
    const badge = document.getElementById('selection-color-badge');
    if (!badge) return;
    const colorObj = activeLine.colors.find(c => c.id === activeColorId);
    if (colorObj) {
      badge.style.backgroundColor = colorObj.hex;
      badge.title = colorObj.name;
    }
  }

  // --- Placeholder SVG ---
  function _buildPlaceholderSvg(cabinet) {
    const icons = {
      wall:   'fa-square',
      base:   'fa-box',
      tall:   'fa-rectangle-vertical',
      corner: 'fa-corner-down-right',
      island: 'fa-table',
      drawer: 'fa-layer-group',
      sink:   'fa-sink'
    };
    const icon = icons[cabinet.type] || 'fa-square';
    return (
      '<div class="cabinet-img-placeholder">' +
      '<i class="fa-solid ' + icon + '"></i>' +
      '<span>' + cabinet.name + '</span>' +
      '<!-- TODO: Add image to images/' + activeLine.id + '/ and update data/image-manifest.js -->' +
      '</div>'
    );
  }

  // --- Selection Panel ---
  function addToSelection(cabinet) {
    const existing = selection.find(s => s.cabinet.id === cabinet.id);
    if (existing) {
      showToast(cabinet.name + ' is already in your inquiry list.');
      return;
    }
    selection.push({
      cabinet: cabinet,
      line: activeLine.name,
      colorId: activeColorId,
      doorId: activeDoorId
    });
    renderSelectionList();
    updateSelectionTrigger();
    openSelectionPanel();
    showToast(cabinet.name + ' added to your inquiry!');
  }

  function removeFromSelection(cabinetId) {
    const idx = selection.findIndex(s => s.cabinet.id === cabinetId);
    if (idx > -1) selection.splice(idx, 1);
    renderSelectionList();
    updateSelectionTrigger();
  }

  function renderSelectionList() {
    const list = document.getElementById('selection-list');
    if (!list) return;
    if (selection.length === 0) {
      list.innerHTML = '<p class="selection-empty">No items added yet. Click "Add to Inquiry" on any cabinet.</p>';
      return;
    }
    list.innerHTML = selection.map(s => {
      const color = activeLine.colors.find(c => c.id === s.colorId);
      const door  = activeLine.doorStyles.find(d => d.id === s.doorId);
      return (
        '<div class="selection-item">' +
        '<div>' +
        '<div class="selection-item-name">' + s.cabinet.name + '</div>' +
        '<div class="selection-item-detail">' +
        (color ? color.name : '') + (door ? ' &middot; ' + door.name : '') +
        '</div>' +
        '</div>' +
        '<button class="remove-btn" data-id="' + s.cabinet.id + '" aria-label="Remove">' +
        '<i class="fa-solid fa-xmark"></i>' +
        '</button>' +
        '</div>'
      );
    }).join('');

    list.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        removeFromSelection(this.getAttribute('data-id'));
      });
    });
  }

  function setupSelectionPanel() {
    const trigger  = document.getElementById('selection-trigger');
    const panel    = document.getElementById('selection-panel');
    const closeBtn = document.getElementById('selection-close');
    const quoteBtn = document.getElementById('selection-quote-btn');

    if (trigger) {
      trigger.addEventListener('click', () => {
        if (panel) panel.classList.toggle('open');
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (panel) panel.classList.remove('open');
      });
    }
    if (quoteBtn) {
      quoteBtn.addEventListener('click', () => {
        const summary = selection.map(s => {
          const color = activeLine.colors.find(c => c.id === s.colorId);
          const door  = activeLine.doorStyles.find(d => d.id === s.doorId);
          return s.cabinet.name + ' (' + (color ? color.name : '') + ', ' + (door ? door.name : '') + ')';
        }).join('\n');
        const encoded = encodeURIComponent('Cabinet Line: ' + activeLine.name + '\n\nSelected Items:\n' + summary);
        window.location.href = 'contact.html?summary=' + encoded;
      });
    }
    renderSelectionList();
    updateSelectionTrigger();
  }

  function openSelectionPanel() {
    const panel = document.getElementById('selection-panel');
    if (panel) panel.classList.add('open');
  }

  function updateSelectionTrigger() {
    const trigger = document.getElementById('selection-trigger');
    if (!trigger) return;
    const count = document.getElementById('selection-count');
    if (count) count.textContent = selection.length;
    trigger.classList.toggle('hidden', selection.length === 0);
  }

  // --- Toast ---
  function showToast(msg) {
    let toast = document.getElementById('catalog-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'catalog-toast';
      toast.className = 'catalog-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  // --- Start ---
  document.addEventListener('DOMContentLoaded', init);

})();
