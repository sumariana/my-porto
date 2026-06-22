import { renderNavbar, initNavbar }     from './components/navbar.js';
import { renderHero }                   from './components/hero.js';
import { renderProjectCard, initProjectCards } from './components/project-card.js';
import { projects }                     from './data/projects.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${renderNavbar()}
  <main>
    <section id="about">${renderHero()}</section>
    <section id="projects">
      <h2 class="section-title">Projects</h2>
      ${renderProjectCard(projects[0])}
    </section>
    <section id="skills" style="min-height: 50vh;"><p style="color:white; padding:2rem">Skills coming soon</p></section>
  </main>
`;

initNavbar();
initProjectCards();
