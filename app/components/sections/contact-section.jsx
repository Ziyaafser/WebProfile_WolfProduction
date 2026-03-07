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
          <button className="cta" type="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
