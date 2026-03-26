function ContactPage() {
  return (
    <>
      <section className="section page-top split">
        <div>
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h1>Let’s discuss your goals</h1>
            <p className="lead">Share your priorities and we’ll connect you with the right team within one business day.</p>
          </div>
          <div className="card">
            <h3>General enquiries</h3>
            <p>contact@northstar-digital.com</p>
            <h3>Careers enquiries</h3>
            <p>careers@northstar-digital.com</p>
            <h3>Media enquiries</h3>
            <p>media@northstar-digital.com</p>
          </div>
        </div>
        <form className="card contact-form">
          <label>
            Full name
            <input type="text" placeholder="Jane Doe" />
          </label>
          <label>
            Work email
            <input type="email" placeholder="jane@company.com" />
          </label>
          <label>
            Company
            <input type="text" placeholder="Company name" />
          </label>
          <label>
            How can we help?
            <textarea placeholder="Tell us about your project, timeline, and expected outcomes." rows="5" />
          </label>
          <button type="button" className="btn-primary">Submit request</button>
        </form>
      </section>
    </>
  );
}

export default ContactPage;
