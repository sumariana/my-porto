import { renderSidebar, initSidebar }     from './components/sidebar.js';
import { renderNavbar, initNavbar }       from './components/navbar.js';
import { renderAbout, initAbout }         from './components/about.js';
import { renderResume }                   from './components/resume.js';
import { renderPortfolio, initPortfolio } from './components/portfolio.js';
import { renderBlog }                     from './components/blog.js';
import { renderContact, initContact }     from './components/contact.js';

const app = document.getElementById('app');

app.innerHTML = `
  <div class="layout">
    ${renderSidebar()}
    <div class="main-content">
      ${renderNavbar()}
      ${renderAbout()}
      ${renderResume()}
      ${renderPortfolio()}
      ${renderBlog()}
      ${renderContact()}
    </div>
  </div>
`;

initSidebar();
initNavbar();
initAbout();
initPortfolio();
initContact();
