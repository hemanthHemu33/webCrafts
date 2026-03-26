import { insightItems } from '../data/siteData';

function WhatWeThinkPage() {
  return (
    <section className="section page-top">
      <div className="section-head">
        <p className="eyebrow">What we think</p>
        <h1>Insights shaping the future of business, technology, and society</h1>
        <p className="lead">Explore research reports, perspectives, and practical playbooks curated for decision-makers.</p>
      </div>
      <div className="grid-insights">
        {insightItems.map((insight) => (
          <article key={insight.title} className="card card-insight">
            <p className="chip">{insight.type}</p>
            <h3>{insight.title}</h3>
            <p>{insight.description}</p>
            <a href="#">Expand →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhatWeThinkPage;
