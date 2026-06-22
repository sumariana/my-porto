export function renderHero() {
  return `
    <div class="hero">
      <div class="hero-photo">
        <img
          src="assets/profile.jpg"
          alt="I Gusti Made Sumariana"
          onerror="this.parentElement.style.background='var(--bg-card)'"
        >
      </div>
      <h1 class="hero-name">I Gusti Made Sumariana</h1>
      <p class="hero-title">Mobile Engineer</p>
      <p class="hero-subtitle">Flutter · React Native · 6+ Years</p>
      <div class="hero-contacts">
        <a href="https://www.linkedin.com/in/sumariana-made-b3402b128"
           target="_blank" class="contact-link">LinkedIn</a>
        <a href="mailto:sumarianakadek@gmail.com"
           class="contact-link">Email</a>
      </div>
      <p class="hero-summary">
        I'm a Mobile Engineer with over 6 years of industry experience, specializing in both
        development and design of mobile applications. Beyond writing code, I architect specs,
        APIs, and ensure seamless app performance. With expertise in React Native &amp; Flutter,
        I build scalable, high-quality apps that enhance user experiences. I thrive in
        problem-solving and collaborating with teams to turn ideas into great products.
      </p>
    </div>
  `;
}
