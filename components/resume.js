const education = [
  {
    school: 'Universitas Atma Jaya YogyaKarta',
    degree: 'Bachelor of Computer Science',
    period: '2016 — 2020',
    note: 'Studied computer science fundamentals, software engineering, and database systems.',
  },
];

const experience = [
  {
    role: 'Mobile Developer',
    company: 'PT. Timedoor Indonesia — Denpasar, Bali',
    period: 'Aug 2020 – Present',
    points: [
      'Lead mobile development using Flutter, building scalable apps across iOS & Android.',
      'Experienced with React Native (TypeScript), applying clean architecture principles.',
      'Develop native modules and custom Flutter plugins using Kotlin and Swift.',
      'Co-built the Timedoor Design System (React Native template), reducing project setup by ~40%.',
      'Serve as Training & Mentoring Subleader: create training modules, hiring tests, and coding standards.',
      'Active in code reviews and internal tech discussions for quality and knowledge sharing.',
    ],
  },
];

const skills = [
  { name: 'Flutter',                    level: 95 },
  { name: 'React Native',               level: 95 },
  { name: 'Kotlin / Swift',             level: 80 },
  { name: 'TypeScript / JavaScript',    level: 90 },
  { name: 'Firebase',                   level: 90 },
  { name: 'BLE / WebSocket / IoT',      level: 80 },
  { name: 'Git & CI/CD',                level: 75 },
];

export function renderResume() {
  return `
    <article class="resume" data-page="resume">
      <header><h2 class="article-title">Resume</h2></header>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box"><ion-icon name="book-outline"></ion-icon></div>
          <h3 class="timeline-section-title">Education</h3>
        </div>
        <ol class="timeline-list">
          ${education.map(e => `
            <li class="timeline-item">
              <h4 class="timeline-item-title">${e.school}</h4>
              <p class="timeline-degree">${e.degree}</p>
              <span class="timeline-period">${e.period}</span>
              <p class="timeline-text">${e.note}</p>
            </li>
          `).join('')}
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box"><ion-icon name="briefcase-outline"></ion-icon></div>
          <h3 class="timeline-section-title">Experience</h3>
        </div>
        <ol class="timeline-list">
          ${experience.map(e => `
            <li class="timeline-item">
              <h4 class="timeline-item-title">${e.role}</h4>
              <p class="timeline-company">${e.company}</p>
              <span class="timeline-period">${e.period}</span>
              <ul class="timeline-points">
                ${e.points.map(p => `<li>${p}</li>`).join('')}
              </ul>
            </li>
          `).join('')}
        </ol>
      </section>

      <section class="skill">
        <h3 class="section-title">My Skills</h3>
        <ul class="skills-list">
          ${skills.map(s => `
            <li class="skills-item">
              <div class="title-wrapper">
                <h5 class="skill-name">${s.name}</h5>
                <data value="${s.level}">${s.level}%</data>
              </div>
              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: ${s.level}%"></div>
              </div>
            </li>
          `).join('')}
        </ul>
      </section>
    </article>
  `;
}
