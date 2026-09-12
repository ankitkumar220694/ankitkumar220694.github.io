(() => {
  'use strict';

  const root = document.documentElement;
  root.classList.add('js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-menu');
  const header = document.querySelector('[data-header]');

  if (menuButton && menu) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    };

    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  let ticking = false;
  const updateScrollState = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    root.style.setProperty('--scroll-progress', progress);
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 28);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  }, { passive: true });
  updateScrollState();

  if (reduceMotion) return;

  document.querySelectorAll('[data-intro]').forEach((element, index) => {
    element.animate(
      [
        { opacity: 0, transform: 'translateY(56px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      { duration: 850, delay: 100 + index * 170, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }
    );
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.animate(
        [
          { opacity: 0.55, transform: 'translateY(34px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }
      );
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

  const hero = document.querySelector('.hero');
  const parallax = document.querySelector('[data-parallax]');
  if (hero && parallax && window.matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('pointermove', (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5).toFixed(3);
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5).toFixed(3);
      parallax.style.setProperty('--pointer-x', x);
      parallax.style.setProperty('--pointer-y', y);
    });
    hero.addEventListener('pointerleave', () => {
      parallax.style.setProperty('--pointer-x', 0);
      parallax.style.setProperty('--pointer-y', 0);
    });
  }

  document.querySelectorAll('[data-pointer-card]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--card-x', `${event.clientX - bounds.left}px`);
      card.style.setProperty('--card-y', `${event.clientY - bounds.top}px`);
    });
  });
})();
