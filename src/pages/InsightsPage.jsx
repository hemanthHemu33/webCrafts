import { insightItems } from '../data/siteData';
import PageHero from '../components/PageHero';
import { cardMedia, heroMedia } from '../data/pageMedia';

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Research and perspectives to help leaders make confident moves"
        description="Curated intelligence on AI, cloud, talent, cyber resilience, and industry reinvention."
        image={heroMedia.insights}
      />
      <section className="section">
        <div className="grid-insights">
          {insightItems.map((insight, index) => (
            <article key={insight.title} className="card card-insight reveal-on-scroll">
              <img src={cardMedia.insights[index % cardMedia.insights.length]} alt="Insight placeholder" className="card-image" />
              <p className="chip">{insight.type}</p>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
              <a href="#">Read now →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="section-head reveal-on-scroll">
          <p className="eyebrow">Trending themes</p>
          <h2>Topics leaders are following right now</h2>
        </div>
        <div className="logo-strip">
          {['Agentic AI', 'Cloud foundation', 'Cyber resilience', 'Digital core', 'Workforce skilling', 'Sustainable growth'].map((topic) => (
            <span key={topic} className="chip">{topic}</span>
          ))}
        </div>
      </section>
    </>
  );
}

export default InsightsPage;
