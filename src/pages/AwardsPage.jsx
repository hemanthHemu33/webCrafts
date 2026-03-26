import { awards } from '../data/siteData';

function AwardsPage() {
  return (
    <section className="section page-top">
      <div className="section-head">
        <p className="eyebrow">Global recognition and awards</p>
        <h1>Industry acknowledgments for impact and innovation</h1>
      </div>
      <div className="grid-insights">
        {awards.map((award) => (
          <article key={award.title} className="card">
            <h3>{award.title}</h3>
            <p>{award.detail}</p>
            <a href="#">See related awards →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AwardsPage;
