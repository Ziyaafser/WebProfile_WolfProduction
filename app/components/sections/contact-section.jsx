export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="section__title center">
        <p>CONTACT US</p>
        <h2>Let's Work Together</h2>
        <span>Ready to start your next project? Get in touch with our team of experts.</span>
      </div>
      <div className="contact__grid">
        <div className="contact__list">
          <div className="contact__item glass">
            <span className="icon">☎</span>
            <div>
              <small>Phone</small>
              <p>011-21230663</p>
            </div>
          </div>
          <div className="contact__item glass">
            <span className="icon">✉</span>
            <div>
              <small>Email</small>
              <p>youngwolfproduction@gmail.com</p>
            </div>
          </div>
          <div className="contact__item glass">
            <span className="icon">⌂</span>
            <div>
              <small>Address</small>
              <p>No.19, Jalan Kiaramas 15, Kluang, Johor</p>
            </div>
          </div>
          <div className="contact__item glass">
            <span className="icon">◎</span>
            <div>
              <small>Instagram</small>
              <p>@youngwolfstudios.one</p>
            </div>
          </div>
        </div>
        <form className="contact__form glass">
          <h3>Send a Message</h3>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="your@email.com" />
          </label>
          <label>
            Message
            <textarea rows={4} placeholder="Tell us about your project..." />
          </label>
          <div className="contact__cta-row">
            <button className="cta" type="button">
              Send Message
            </button>
            <div className="contact__quick-actions" aria-label="Quick contact actions">
              <a
                className="contact__quick-action contact__quick-action--whatsapp"
                href="https://wa.me/601121230663"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.52 3.48A11.77 11.77 0 0 0 12.1 0C5.51 0 .16 5.35.16 11.95c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.79 1.48h.01c6.59 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.18-3.52-8.41Zm-8.43 18.33h-.01a9.95 9.95 0 0 1-5.07-1.38l-.36-.21-3.74.98.99-3.65-.24-.37a9.92 9.92 0 0 1-1.53-5.23c0-5.48 4.47-9.95 9.97-9.95 2.66 0 5.16 1.04 7.03 2.91a9.86 9.86 0 0 1 2.92 7.03c0 5.49-4.47 9.96-9.96 9.96Zm5.46-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.2-.24-.57-.49-.49-.66-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.52.71.31 1.27.5 1.7.64.71.22 1.36.19 1.88.11.57-.09 1.77-.72 2.02-1.42.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>
              <a
                className="contact__quick-action contact__quick-action--call"
                href="tel:01121230663"
                aria-label="Call phone number"
                title="Call"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1.5 1.5 0 0 1 1.54-.36 12.3 12.3 0 0 0 3.86.62A1.5 1.5 0 0 1 22.3 17v3.3a1.5 1.5 0 0 1-1.5 1.5C10.8 21.8 2.2 13.2 2.2 2.5A1.5 1.5 0 0 1 3.7 1h3.3a1.5 1.5 0 0 1 1.5 1.49c.02 1.31.23 2.6.62 3.86a1.5 1.5 0 0 1-.36 1.54l-2.17 2.9Z" />
                </svg>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
