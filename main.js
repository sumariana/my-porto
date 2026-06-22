import { renderNavbar, initNavbar }     from './components/navbar.js';
import { renderHero }                   from './components/hero.js';
import { renderProjectsGrid, initProjectsGrid } from './components/projects-grid.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${renderNavbar()}
  <main>
    <section id="about">${renderHero()}</section>
    <section id="projects">${renderProjectsGrid()}</section>
    <section id="skills" style="min-height:50vh;"><p style="color:white;padding:2rem">Skills coming soon</p></section>
  </main>
`;

initNavbar();
initProjectsGrid();
