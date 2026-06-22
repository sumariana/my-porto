export function renderNavbar() {
  return `
    <nav class="navbar">
      <span class="navbar-brand">IGM Sumariana</span>
      <ul class="navbar-links">
        <li><a href="#about"      class="nav-link active">About</a></li>
        <li><a href="#experience" class="nav-link">Experience</a></li>
        <li><a href="#projects"   class="nav-link">Projects</a></li>
        <li><a href="#skills"     class="nav-link">Skills</a></li>
      </ul>
    </nav>
  `;
}

export function initNavbar() {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: '-50% 0px -50% 0px' }
  );

  sections.forEach(s => observer.observe(s));

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
}
