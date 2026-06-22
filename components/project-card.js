export function renderProjectCard(project) {
  const badges = project.tech.map(t => `<span class="badge">${t}</span>`).join('');

  const bannerImg = `<img src="${project.thumbnail}" alt="${project.title}"
    class="card-banner-img" id="thumb-${project.id}"
    onerror="this.style.display='none'">`;

  const videoEl = project.video
    ? `<video src="${project.video}" class="card-banner-img" id="video-${project.id}"
         muted loop playsinline style="display:none"></video>`
    : '';

  return `
    <div class="project-card" data-id="${project.id}" data-has-video="${!!project.video}">
      <div class="card-banner-box">
        ${bannerImg}
        ${videoEl}
        <div class="card-overlay">
          <button class="card-eye-btn" data-open-modal="${project.id}">
            <ion-icon name="eye-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div class="card-info">
        <div class="card-header">
          <h3 class="card-title">${project.title}</h3>
          <span class="card-period">${project.period}</span>
        </div>
        <p class="card-subtitle">${project.subtitle}</p>
        <div class="card-badges">${badges}</div>
        <p class="card-desc">${project.description}</p>
      </div>
    </div>
  `;
}

export function initProjectCards() {
  document.querySelectorAll('.project-card').forEach(card => {
    const id = card.dataset.id;
    const hasVideo = card.dataset.hasVideo === 'true';
    if (!hasVideo) return;

    const thumb = document.getElementById(`thumb-${id}`);
    const video = document.getElementById(`video-${id}`);
    if (!thumb || !video) return;

    card.addEventListener('mouseenter', () => {
      thumb.style.display = 'none';
      video.style.display = 'block';
      video.play().catch(() => {});
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
      video.style.display = 'none';
      thumb.style.display = 'block';
    });
  });
}
