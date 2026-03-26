import { serviceCards } from '../data/siteData';

const partnerLogos = ['AWS', 'Microsoft', 'Google Cloud', 'SAP', 'Oracle', 'Salesforce', 'ServiceNow', 'Adobe'];

function ServicesPage() {
  return (
    <>
      <section className="section page-top">
        <div className="section-head">
          <p className="eyebrow">What we do</p>
          <h1>Capabilities that connect strategy, technology, and operations</h1>
          <p className="lead">From reinvention strategy to build and run, we combine deep expertise with ecosystem partnerships.</p>
        </div>
        <div className="grid-services">
          {serviceCards.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="section-head">
          <p className="eyebrow">Ecosystem partners</p>
          <h2>Co-innovating with the world’s leading technology platforms</h2>
        </div>
        <div className="logo-strip">
          {partnerLogos.map((logo) => (
            <span key={logo} className="chip">{logo}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">How we deliver</p>
          <h2>Outcome-driven model from vision to value</h2>
        </div>
        <div className="grid-insights">
          <article className="card"><h3>Discover</h3><p>Define business outcomes, value targets, and strategic options.</p></article>
          <article className="card"><h3>Design</h3><p>Architect the target experience, data, and operating model.</p></article>
          <article className="card"><h3>Build</h3><p>Rapidly deliver solutions with cross-functional product teams.</p></article>
          <article className="card"><h3>Scale</h3><p>Industrialize value with adoption, governance, and managed services.</p></article>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
