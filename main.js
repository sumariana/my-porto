import { renderNavbar, initNavbar } from './components/navbar.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${renderNavbar()}
  <main>
    <section id="about"    style="min-height: 100vh;"><p style="color: white; padding: 2rem;">About</p></section>
    <section id="projects" style="min-height: 100vh;"><p style="color: white; padding: 2rem;">Projects</p></section>
    <section id="skills"   style="min-height: 50vh;"><p style="color: white; padding: 2rem;">Skills</p></section>
  </main>
`;

initNavbar();
