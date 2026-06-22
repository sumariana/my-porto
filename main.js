import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderHero }               from './components/hero.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${renderNavbar()}
  <main>
    <section id="about">${renderHero()}</section>
    <section id="projects" style="min-height: 100vh;"><p style="color: white; padding: 2rem;">Projects coming soon</p></section>
    <section id="skills"   style="min-height: 50vh;"><p style="color: white; padding: 2rem;">Skills coming soon</p></section>
  </main>
`;

initNavbar();
