import { testimonials } from '../data/testimonials.js';

const services = [
  {
    icon: 'phone-portrait-outline',
    title: 'Mobile App Development',
    desc: 'Building production-grade iOS & Android apps with Flutter and React Native, from architecture to App Store release.',
  },
  {
    icon: 'hardware-chip-outline',
    title: 'Agentic AI Development',
    desc: 'Designing and building AI agent workflows — from tool orchestration to LLM-powered features inside mobile apps.',
  },
  {
    icon: 'code-slash-outline',
    title: 'SDK & Plugin Engineering',
    desc: 'Creating custom Flutter plugins and native modules in Kotlin/Swift for seamless platform-specific integrations.',
  },
  {
    icon: 'people-outline',
    title: 'Developer Mentoring',
    desc: 'Writing training modules, coding standards, and technical hiring tests — coaching junior engineers to level up.',
  },
];

function renderTestimonials() {
  return testimonials.map(t => `
    <li class="testimonial-item">
      <div class="testimonial-card" data-testimonial-item>
        <figure class="testimonial-avatar-box">
          ${t.avatar
            ? `<img src="${t.avatar}" alt="${t.name}" width="60" data-testimonial-avatar>`
            : `<div class="testimonial-avatar-initial" data-testimonial-avatar>${t.name.charAt(0)}</div>`
          }
        </figure>
        <h4 class="testimonial-name" data-testimonial-title>${t.name}</h4>
        <p class="testimonial-role">${t.role}</p>
        <div class="testimonial-text" data-testimonial-text>
          <p>${t.text}</p>
        </div>
      </div>
    </li>
  `).join('');
}

export function renderAbout() {
  return `
    <article class="about active" data-page="about">
      <header><h2 class="article-title">About Me</h2></header>

      <section class="about-text">
        <p>
          I'm a Mobile Engineer with over 6 years of industry experience, specializing in both
          development and design of mobile applications. Beyond writing code, I architect specs,
          APIs, and ensure seamless app performance.
        </p>
        <p>
          With expertise in Flutter and React Native, I build scalable, high-quality apps that
          enhance user experiences. I thrive in problem-solving and collaborating with teams to
          turn ideas into great products — and I enjoy sharing that knowledge through mentoring.
        </p>
      </section>

      <section class="service">
        <h3 class="section-title">What I'm Doing</h3>
        <ul class="service-list">
          ${services.map(s => `
            <li class="service-item">
              <div class="service-icon-box">
                <ion-icon name="${s.icon}"></ion-icon>
              </div>
              <div class="service-content-box">
                <h4 class="service-item-title">${s.title}</h4>
                <p class="service-item-text">${s.desc}</p>
              </div>
            </li>
          `).join('')}
        </ul>
      </section>

      <section class="testimonials">
        <h3 class="section-title">Testimonials</h3>
        <ul class="testimonials-list has-scrollbar">
          ${renderTestimonials()}
        </ul>
      </section>

      <!-- Testimonials modal -->
      <div class="modal-container" data-modal-container>
        <div class="overlay" data-overlay></div>
        <section class="testimonials-modal">
          <button class="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
              <span data-modal-img></span>
            </figure>
          </div>
          <div class="modal-content">
            <h4 class="modal-title" data-modal-title></h4>
            <p class="modal-role" data-modal-role></p>
            <time data-modal-date></time>
            <div data-modal-text></div>
          </div>
        </section>
      </div>

    </article>
  `;
}

export function initAbout() {
  const items     = document.querySelectorAll('[data-testimonial-item]');
  const modal     = document.querySelector('[data-modal-container]');
  const overlay   = document.querySelector('[data-overlay]');
  const closeBtn  = document.querySelector('[data-modal-close-btn]');
  const modalImg  = document.querySelector('[data-modal-img]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalRole = document.querySelector('[data-modal-role]');
  const modalText = document.querySelector('[data-modal-text]');
  const modalDate = document.querySelector('[data-modal-date]');

  function toggleModal() {
    modal.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const avatarEl = item.querySelector('[data-testimonial-avatar]');
      modalImg.innerHTML = avatarEl ? avatarEl.outerHTML : '';
      modalTitle.textContent = item.querySelector('[data-testimonial-title]').textContent;
      const roleEl = item.querySelector('.testimonial-role');
      if (modalRole) modalRole.textContent = roleEl ? roleEl.textContent : '';
      modalText.innerHTML = item.querySelector('[data-testimonial-text]').innerHTML;
      toggleModal();
    });
  });

  closeBtn.addEventListener('click', toggleModal);
  overlay.addEventListener('click', toggleModal);
}
