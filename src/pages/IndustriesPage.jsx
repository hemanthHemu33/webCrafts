import { industryCards } from '../data/siteData';

function IndustriesPage() {
  return (
    <>
      <section className="section page-top">
        <div className="section-head">
          <p className="eyebrow">Industries</p>
          <h1>Unmatched industry expertise to solve sector-specific disruption</h1>
          <p className="lead">Our teams bring domain, data, and technology capabilities tailored to each industry context.</p>
        </div>
        <div className="grid-services">
          {industryCards.map((industry) => (
            <article key={industry} className="card">
              <h3>{industry}</h3>
              <p>Reinvent customer outcomes, operations, and growth models with industry-specific solutions.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="section-head">
          <p className="eyebrow">Spotlight sectors</p>
          <h2>Where we are seeing rapid reinvention momentum</h2>
        </div>
        <div className="stories">
          <article className="card"><h3>Banking</h3><p>AI-native servicing and risk decisions are redefining customer trust and cost economics.</p></article>
          <article className="card"><h3>Health</h3><p>Digital front doors and clinical intelligence are improving outcomes and access at scale.</p></article>
          <article className="card"><h3>Utilities</h3><p>Grid modernization and decarbonization call for resilient digital operations and forecasting.</p></article>
        </div>
      </section>
    </>
  );
}

export default IndustriesPage;
