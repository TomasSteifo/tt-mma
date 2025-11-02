// Small interactions: mobile menu toggle and footer year
(function () {
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    // Close menu on link click (mobile)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();

