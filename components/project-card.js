export function renderProjectCard(project) {
  const badges = project.tech.map(t => `<span class="badge">${t}</span>`).join('');

  // Banner image — same onerror hide behavior as before
  const bannerImg = `<img src="${project.thumbnail}" alt="${project.title}"
    class="card-banner-img" id="thumb-${project.id}"
    onerror="this.style.display='none'">`;

  // Video element — kept dormant for future reuse; only emitted when video path set
  const videoEl = project.video
    ? `<video src="${project.video}" class="card-banner-img" id="video-${project.id}"
         muted loop playsinline style="display:none"></video>`
    : '';

  // Overlay button 1: Design (only if designUrl set)
  const designBtn = project.designUrl
    ? `<a href="${project.designUrl}" target="_blank" class="overlay-btn">Design ↗</a>`
    : '';

  // Overlay button 2: primary action — first non-null of appStoreUrl, playStoreUrl, liveUrl
  let primaryBtn = '';
  if (project.appStoreUrl) {
    primaryBtn = `<a href="${project.appStoreUrl}" target="_blank" class="overlay-btn">App Store ↗</a>`;
  } else if (project.playStoreUrl) {
    primaryBtn = `<a href="${project.playStoreUrl}" target="_blank" class="overlay-btn">Play Store ↗</a>`;
  } else if (project.liveUrl) {
    primaryBtn = `<a href="${project.liveUrl}" target="_blank" class="overlay-btn">Live Demo ↗</a>`;
  }

  // Only render overlay div if at least one button exists
  const hasLinks = designBtn || primaryBtn;
  const overlay = hasLinks
    ? `<div class="card-overlay">${designBtn}${primaryBtn}</div>`
    : '';

  return `
    <div class="project-card" data-id="${project.id}" data-has-video="${!!project.video}">
      <div class="card-banner-box">
        ${bannerImg}
        ${videoEl}
        ${overlay}
      </div>
      <div class="card-info" style="padding: 1.25rem;">
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
