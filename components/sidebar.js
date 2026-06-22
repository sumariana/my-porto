export function renderSidebar() {
  return `
    <aside class="sidebar" data-sidebar>

      <div class="sidebar-info">
        <figure class="avatar-box">
          <img src="assets/profile.jpg" alt="I Gusti Made Sumariana" width="80"
               onerror="this.style.display='none'">
        </figure>
        <div class="info-content">
          <h1 class="sidebar-name">I Gusti Made Sumariana</h1>
          <p class="sidebar-title">Mobile Engineer</p>
        </div>
        <button class="info-more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div class="sidebar-info-more">
        <div class="sidebar-separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="contact-icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-label">Email</p>
              <a href="mailto:sumarianakadek@gmail.com" class="contact-link">sumarianakadek@gmail.com</a>
            </div>
          </li>

          <li class="contact-item">
            <div class="contact-icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-label">Birthday</p>
              <time datetime="1996-06-02">May 22, 1998</time>
            </div>
          </li>

          <li class="contact-item">
            <div class="contact-icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-label">Location</p>
              <address>Denpasar, Bali, Indonesia</address>
            </div>
          </li>
        </ul>

        <div class="sidebar-separator"></div>

        <ul class="social-list">
          <li class="social-item">
            <a href="https://www.linkedin.com/in/sumariana-made-b3402b128" target="_blank" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li class="social-item">
            <a href="https://github.com/sumariana" target="_blank" class="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>

    </aside>
  `;
}

export function initSidebar() {
  const sidebar = document.querySelector('[data-sidebar]');
  const btn     = document.querySelector('[data-sidebar-btn]');
  btn.addEventListener('click', () => sidebar.classList.toggle('active'));
}
