import { renderProjectsGrid, initProjectsGrid } from './projects-grid.js';

export function renderPortfolio() {
  return `
    <article class="portfolio" data-page="portfolio">
      <header><h2 class="article-title">Portfolio</h2></header>
      ${renderProjectsGrid()}
    </article>
  `;
}

export { initProjectsGrid as initPortfolio };
