// =============================================
// HEARTHWOOD CABINETRY — Hero Carousel
// =============================================
(function () {
  'use strict';

  class HeroCarousel {
    constructor(el) {
      this.el = el;
      this.slides = [];
      this.current = 0;
      this.timer = null;
      this.delay = 4500;
      this.isAnimating = false;
    }

    init(images) {
      if (!images || images.length === 0) {
        this._showPlaceholder();
        return;
      }
      this._buildSlides(images);
      this._buildDots();
      this._bindArrows();
      this._bindTouch();
      this._show(0, false);
      this._startAuto();
    }

    _buildSlides(images) {
      const track = this.el.querySelector('.carousel-track');
      images.forEach((filename, i) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.setAttribute('role', 'img');
        slide.setAttribute('aria-label', 'Hearthwood Cabinetry kitchen ' + (i + 1));
        slide.innerHTML =
          '<img src="images/hero/' + filename + '"' +
          ' alt="Hearthwood Cabinetry kitchen ' + (i + 1) + '"' +
          ' loading="' + (i === 0 ? 'eager' : 'lazy') + '"' +
          ' onerror="this.style.display=\'none\'">' +
          '<div class="carousel-caption-overlay"></div>';
        track.appendChild(slide);
        this.slides.push(slide);
      });
    }

    _buildDots() {
      const container = this.el.querySelector('.carousel-dots');
      if (!container) return;
      this.slides.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = 'carousel-dot';
        btn.setAttribute('aria-label', 'Slide ' + (i + 1));
        btn.addEventListener('click', () => { this._goTo(i); this._resetAuto(); });
        container.appendChild(btn);
      });
      this._dots = container.querySelectorAll('.carousel-dot');
    }

    _bindArrows() {
      const prev = this.el.querySelector('.carousel-prev');
      const next = this.el.querySelector('.carousel-next');
      if (prev) prev.addEventListener('click', () => { this._goTo(this.current - 1); this._resetAuto(); });
      if (next) next.addEventListener('click', () => { this._goTo(this.current + 1); this._resetAuto(); });
    }

    _bindTouch() {
      let sx = 0, sy = 0;
      this.el.addEventListener('touchstart', e => {
        sx = e.touches[0].clientX;
        sy = e.touches[0].clientY;
      }, { passive: true });
      this.el.addEventListener('touchend', e => {
        const dx = sx - e.changedTouches[0].clientX;
        const dy = sy - e.changedTouches[0].clientY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          this._goTo(dx > 0 ? this.current + 1 : this.current - 1);
          this._resetAuto();
        }
      }, { passive: true });
      this.el.addEventListener('mouseenter', () => this._stopAuto());
      this.el.addEventListener('mouseleave', () => this._startAuto());
    }

    _show(index, animate) {
      this.slides.forEach((s, i) => {
        s.classList.remove('active', 'prev');
        if (i === index) s.classList.add('active');
      });
      if (this._dots) {
        this._dots.forEach((d, i) => d.classList.toggle('active', i === index));
      }
      // Update counter
      const counter = this.el.querySelector('.carousel-counter');
      if (counter) {
        counter.textContent = (index + 1) + ' / ' + this.slides.length;
      }
    }

    _goTo(index) {
      const n = this.slides.length;
      this.current = ((index % n) + n) % n;
      this._show(this.current, true);
    }

    _startAuto() {
      this._stopAuto();
      this.timer = setInterval(() => this._goTo(this.current + 1), this.delay);
    }

    _stopAuto() {
      clearInterval(this.timer);
    }

    _resetAuto() {
      this._stopAuto();
      this._startAuto();
    }

    _showPlaceholder() {
      const track = this.el.querySelector('.carousel-track');
      if (track) {
        track.innerHTML =
          '<div class="carousel-slide active carousel-no-image">' +
          '<div class="carousel-placeholder-content">' +
          '<i class="fa-solid fa-kitchen-set"></i>' +
          '<p>Add images to <code>images/hero/</code> and update <code>data/image-manifest.js</code></p>' +
          '</div></div>';
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const carouselEl = document.querySelector('.hero-carousel');
    if (!carouselEl) return;

    const images = (typeof IMAGES !== 'undefined' && IMAGES.hero) ? IMAGES.hero : [];
    const carousel = new HeroCarousel(carouselEl);
    carousel.init(images);
  });

})();
