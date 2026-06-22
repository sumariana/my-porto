const tabs = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

export function renderNavbar() {
  return `
    <nav class="navbar">
      <ul class="navbar-list">
        ${tabs.map((t, i) => `
          <li class="navbar-item">
            <button class="navbar-link${i === 0 ? ' active' : ''}" data-nav-link data-target="${t.toLowerCase()}">
              ${t}
            </button>
          </li>
        `).join('')}
      </ul>
    </nav>
  `;
}

export function initNavbar() {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const articles = document.querySelectorAll('[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.dataset.target;

      articles.forEach(a => a.classList.toggle('active', a.dataset.page === target));
      navLinks.forEach(l => l.classList.toggle('active', l === link));
    });
  });
}
