import { renderNavbar, initNavbar }            from './components/navbar.js';
import { renderHero }                          from './components/hero.js';
import { renderProjectsGrid, initProjectsGrid } from './components/projects-grid.js';
import { renderSkills }                        from './components/skills.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${renderNavbar()}
  <main>
    <section id="about">${renderHero()}</section>
    <section id="projects">${renderProjectsGrid()}</section>
    <section id="skills">${renderSkills()}</section>
  </main>
  <footer>
    <p>
      <a href="mailto:sumarianakadek@gmail.com">sumarianakadek@gmail.com</a>
      &nbsp;·&nbsp;
      <a href="https://www.linkedin.com/in/sumariana-made-b3402b128" target="_blank">LinkedIn</a>
      &nbsp;·&nbsp;
      © 2026 I Gusti Made Sumariana
    </p>
  </footer>
`;

initNavbar();
initProjectsGrid();
