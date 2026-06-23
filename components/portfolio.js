import { projects }                             from '../data/projects.js';
import { renderProjectsGrid, initProjectsGrid } from './projects-grid.js';

export function renderPortfolio() {
  return `
    <article class="portfolio" data-page="portfolio">
      <header><h2 class="article-title">Portfolio</h2></header>
      ${renderProjectsGrid()}

      <div class="modal-container project-modal-container" data-project-modal-container>
        <div class="overlay" data-project-overlay></div>
        <section class="project-modal">
          <button class="modal-close-btn" data-project-modal-close>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div class="project-modal-media" data-project-modal-media></div>
          <div class="project-modal-info">
            <h3 class="project-modal-title" data-project-modal-title></h3>
            <p class="project-modal-meta" data-project-modal-meta></p>
            <div class="project-modal-badges" data-project-modal-badges></div>
            <span class="project-modal-period" data-project-modal-period></span>
            <p class="project-modal-desc" data-project-modal-desc></p>
            <ul class="project-modal-points" data-project-modal-points></ul>
            <div class="project-modal-links" data-project-modal-links></div>
          </div>
        </section>
      </div>
    </article>
  `;
}

export function initPortfolio() {
  initProjectsGrid();

  const container = document.querySelector('[data-project-modal-container]');
  const overlay   = document.querySelector('[data-project-overlay]');
  const closeBtn  = document.querySelector('[data-project-modal-close]');
  const mediaEl   = document.querySelector('[data-project-modal-media]');
  const titleEl   = document.querySelector('[data-project-modal-title]');
  const metaEl    = document.querySelector('[data-project-modal-meta]');
  const badgesEl  = document.querySelector('[data-project-modal-badges]');
  const periodEl  = document.querySelector('[data-project-modal-period]');
  const descEl    = document.querySelector('[data-project-modal-desc]');
  const pointsEl  = document.querySelector('[data-project-modal-points]');
  const linksEl   = document.querySelector('[data-project-modal-links]');

  function openProjectModal(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const typeClass = project.type === 'mobile' ? 'mobile' : 'web';

    let mediaHTML = '';
    if (project.video) {
      mediaHTML += `<div class="media-item ${typeClass}">
        <video src="${project.video}" poster="${project.thumbnail}" muted loop playsinline autoplay></video>
      </div>`;
    }
    (project.screenshots || []).forEach(src => {
      mediaHTML += `<div class="media-item ${typeClass}">
        <img src="${src}" alt="${project.title} screenshot">
      </div>`;
    });
    mediaEl.innerHTML = mediaHTML;

    titleEl.textContent = project.title;
    metaEl.textContent  = project.subtitle;
    badgesEl.innerHTML  = project.tech.map(t => `<span class="badge">${t}</span>`).join('');
    periodEl.textContent = project.period;
    descEl.textContent  = project.description;

    const points = project.description_points || [];
    pointsEl.innerHTML = points.map(p => `<li>${p}</li>`).join('');
    pointsEl.style.display = points.length ? '' : 'none';

    let linksHTML = '';
    if (project.appStoreUrl)  linksHTML += `<a href="${project.appStoreUrl}" target="_blank" class="overlay-btn">App Store ↗</a>`;
    if (project.playStoreUrl) linksHTML += `<a href="${project.playStoreUrl}" target="_blank" class="overlay-btn">Play Store ↗</a>`;
    linksEl.innerHTML = linksHTML;

    container.classList.add('active');
  }

  function closeProjectModal() {
    const video = mediaEl.querySelector('video');
    if (video) { video.pause(); video.src = ''; }
    mediaEl.innerHTML = '';
    container.classList.remove('active');
  }

  document.querySelector('.projects-grid').addEventListener('click', e => {
    const btn = e.target.closest('[data-open-modal]');
    if (btn) openProjectModal(btn.dataset.openModal);
  });

  closeBtn.addEventListener('click', closeProjectModal);
  overlay.addEventListener('click', closeProjectModal);
}
