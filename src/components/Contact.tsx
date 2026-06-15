import './Contact.css';

const RESUME = '/assets/Michel_Vivier_Resume.pdf';

export default function Contact() {
  return (
    <section id="contact" className="mv-section contact">
      <div className="contact__blob" aria-hidden="true" />
      <div className="contact__shell">
        <div className="mv-eyebrow contact__eyebrow">Get in touch</div>
        <h2 className="contact__h2">Let us turn your data into decisions.</h2>
        <p className="contact__lede">
          I am open to full-time, co-op and internship opportunities in data and business analytics.
          If you are hiring, I would love to talk.
        </p>
        <div className="contact__cta">
          <a className="mv-btn-primary" href="mailto:Mvivier111@gmail.com">
            Email me
          </a>
          <a className="contact__ghost" href={RESUME} target="_blank" rel="noopener noreferrer">
            Download resume
          </a>
        </div>
        <div className="contact__links">
          <a href="mailto:Mvivier111@gmail.com">
            <span className="contact__icon">✉</span>Mvivier111@gmail.com
          </a>
          <a href="tel:6475352589">
            <span className="contact__icon">☎</span>647-535-2589
          </a>
          <a
            href="https://www.linkedin.com/in/michel-vivier-92b963251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__icon contact__icon--in">in</span>LinkedIn
          </a>
          <span className="contact__loc">
            <span className="contact__icon">●</span>Toronto, Ontario
          </span>
        </div>
      </div>
    </section>
  );
}
