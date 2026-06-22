import { projects }                           from '../data/projects.js';
import { renderProjectCard, initProjectCards } from './project-card.js';

export function renderProjectsGrid() {
  const published = projects.filter(p => p.published);
  return `
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      ${published.map(renderProjectCard).join('')}
    </div>
  `;
}

export function initProjectsGrid() {
  initProjectCards();
}
