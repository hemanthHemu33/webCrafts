import { companyInfo } from '../data/siteData';
import PageHero from '../components/PageHero';
import { heroMedia } from '../data/pageMedia';

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your goals"
        description="Share your priorities and we’ll connect you with the right team within one business day."
        image={heroMedia.contact}
      />
      <section className="section split">
        <div>
          <div className="card reveal-on-scroll">
            <h3>General enquiries</h3>
            <p>{companyInfo.email}</p>
            <h3>Phone</h3>
            <p>{companyInfo.phone}</p>
            <h3>Office address</h3>
            <p>{companyInfo.address}</p>
          </div>
        </div>
        <form className="card contact-form reveal-on-scroll">
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
