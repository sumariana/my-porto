export function renderContact() {
  return `
    <article class="contact" data-page="contact">
      <header><h2 class="article-title">Contact</h2></header>

      <section class="contact-form">
        <h3 class="section-title">Contact Form</h3>
        <form action="#" class="form" data-form>
          <div class="input-wrapper">
            <input type="text"  name="fullname" class="form-input"
                   placeholder="Full name" required data-form-input>
            <input type="email" name="email"    class="form-input"
                   placeholder="Email address" required data-form-input>
          </div>
          <textarea name="message" class="form-input"
                    placeholder="Your Message" required data-form-input></textarea>
          <button class="form-btn" type="submit" disabled data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  `;
}

export function initContact() {
  const form    = document.querySelector('[data-form]');
  const inputs  = document.querySelectorAll('[data-form-input]');
  const submitBtn = document.querySelector('[data-form-btn]');

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      submitBtn.disabled = !form.checkValidity();
    });
  });
}
