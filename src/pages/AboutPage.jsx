function AboutPage() {
  return (
    <>
      <section className="section page-top">
        <div className="section-head">
          <p className="eyebrow">Who we are</p>
          <h1>We combine strategy, technology, and industry depth to unlock reinvention</h1>
          <p className="lead">
            Northstar Digital operates as one integrated team across consulting, engineering, and operations.
          </p>
        </div>
        <div className="grid-services">
          <article className="card">
            <h3>Our mission</h3>
            <p>Help organizations reinvent with confidence in a rapidly shifting digital economy.</p>
          </article>
          <article className="card">
            <h3>Our values</h3>
            <p>Client value, responsible innovation, inclusion, continuous learning, and bold execution.</p>
          </article>
          <article className="card">
            <h3>Global footprint</h3>
            <p>Delivery and strategy teams across the Americas, Europe, APAC, and the Middle East.</p>
          </article>
        </div>
      </section>

      <section className="section dark">
        <div className="section-head">
          <p className="eyebrow">Leadership commitments</p>
          <h2>Our leaders focus on technology, talent, and trust</h2>
        </div>
        <div className="grid-insights">
          <article className="card"><h3>Ethics by design</h3><p>Responsible innovation principles built into delivery and governance.</p></article>
          <article className="card"><h3>Inclusion and diversity</h3><p>Programs that increase access, belonging, and equitable career growth.</p></article>
          <article className="card"><h3>Community impact</h3><p>Partnerships that improve digital access and skilling in local communities.</p></article>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
