export function renderProjectCard(project) {
  // Build tech badge HTML
  const badges = project.tech
    .map(t => `<span class="badge">${t}</span>`)
    .join('');

  // Build link buttons — only render if URL is not null
  const links = [
    project.appStoreUrl
      ? `<a href="${project.appStoreUrl}" target="_blank" class="btn">App Store ↗</a>`
      : '',
    project.designUrl
      ? `<a href="${project.designUrl}" target="_blank" class="btn btn-outline">Design ↗</a>`
      : '',
    project.playStoreUrl
      ? `<a href="${project.playStoreUrl}" target="_blank" class="btn">Play Store ↗</a>`
      : '',
  ].filter(Boolean).join('');

  // Build phone frame content — show video element only if video path provided
  const phoneContent = project.video
    ? `
        <img src="${project.thumbnail}" alt="${project.title}" class="phone-media" id="thumb-${project.id}">
        <video src="${project.video}" class="phone-media" id="video-${project.id}"
               muted loop playsinline style="display:none"></video>
      `
    : `<img src="${project.thumbnail}" alt="${project.title}" class="phone-media">`;

  return `
    <div class="project-card" data-id="${project.id}" data-has-video="${!!project.video}">
      <div class="phone-frame">${phoneContent}</div>
      <div class="card-info">
        <div class="card-header">
          <h3 class="card-title">${project.title}</h3>
          <span class="card-period">${project.period}</span>
        </div>
        <p class="card-subtitle">${project.subtitle}</p>
        <div class="card-badges">${badges}</div>
        <p class="card-desc">${project.description}</p>
        <div class="card-links">${links}</div>
      </div>
    </div>
  `;
}

export function initProjectCards() {
  document.querySelectorAll('.project-card').forEach(card => {
    const id = card.dataset.id;
    const hasVideo = card.dataset.hasVideo === 'true';
    const thumb = hasVideo ? document.getElementById(`thumb-${id}`) : null;
    const video = hasVideo ? document.getElementById(`video-${id}`) : null;

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.background = 'var(--bg-card-hover)';
      if (hasVideo) {
        thumb.style.display = 'none';
        video.style.display = 'block';
        video.play().catch(() => {});
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.background = 'var(--bg-card)';
      if (hasVideo) {
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';
        thumb.style.display = 'block';
      }
    });
  });
}
