import { insightItems } from '../data/siteData';
import PageHero from '../components/PageHero';
import { cardMedia, heroMedia } from '../data/pageMedia';

function WhatWeThinkPage() {
  return (
    <>
      <PageHero
        eyebrow="What we think"
        title="Insights shaping the future of business, technology, and society"
        description="Explore research reports, perspectives, and practical playbooks curated for decision-makers."
        image={heroMedia.whatWeThink}
      />
      <section className="section">
        <div className="grid-insights">
          {insightItems.map((insight, index) => (
            <article key={insight.title} className="card card-insight reveal-on-scroll">
              <img src={cardMedia.insights[index % cardMedia.insights.length]} alt="Insight placeholder" className="card-image" />
              <p className="chip">{insight.type}</p>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
              <a href="#">Expand →</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default WhatWeThinkPage;
