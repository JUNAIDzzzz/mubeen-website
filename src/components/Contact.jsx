export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">VISIT &amp; CONTACT</p>
          <h2>Find us in old Chowk</h2>
        </div>

        <div className="contact-top-grid">
          <div className="card">
            <h3>Location</h3>
            <dl>
              <dt>Address</dt>
              <dd>334/37, Hakim Abdul Aziz Rd, Akbari Gate, Chowk, Lucknow</dd>
              <dt>Landmark</dt>
              <dd>Opposite Ek Minara Masjid</dd>
              <dt>Confirm on map</dt>
              <dd>
                — <span className="ph-tag">verify pin location</span>
              </dd>
            </dl>
          </div>
          <div className="card">
            <h3>Timings</h3>
            <dl>
              <dt>Morning (Nahari service)</dt>
              <dd>
                — <span className="ph-tag">add hours</span>
              </dd>
              <dt>Evening</dt>
              <dd>
                — <span className="ph-tag">add hours</span>
              </dd>
              <dt>Weekly off</dt>
              <dd>
                — <span className="ph-tag">add if any</span>
              </dd>
            </dl>
          </div>
          <div className="card">
            <h3>Reach us</h3>
            <dl>
              <dt>Phone</dt>
              <dd>
                — <span className="ph-tag">add number</span>
              </dd>
              <dt>WhatsApp</dt>
              <dd>
                — <span className="ph-tag">add number</span>
              </dd>
              <dt>Email</dt>
              <dd>
                — <span className="ph-tag">add email</span>
              </dd>
            </dl>
          </div>
          <div className="card">
            <h3>Follow along</h3>
            <dl>
              <dt>Instagram</dt>
              <dd>
                — <span className="ph-tag">add handle</span>
              </dd>
              <dt>Facebook</dt>
              <dd>
                — <span className="ph-tag">add page</span>
              </dd>
            </dl>
          </div>
        </div>

        <div className="contact-form-wrap">
          <div className="section-head" style={{ margin: '0 0 24px' }}>
            <h3 className="form-heading">Send us a message</h3>
            <p>
              This form opens the visitor's own email app — swap in a form service
              later if you'd like it to submit directly.
            </p>
          </div>
          <form action="mailto:info@example.com" method="post" encType="text/plain">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="cf-phone">Phone or email</label>
                <input id="cf-phone" name="contact" type="text" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="cf-msg">Message</label>
              <textarea id="cf-msg" name="message" required />
            </div>
            <button className="btn-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
