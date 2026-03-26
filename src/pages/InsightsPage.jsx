import { insightItems } from '../data/siteData';

function InsightsPage() {
  return (
    <>
      <section className="section page-top">
        <div className="section-head">
          <p className="eyebrow">Insights</p>
          <h1>Research and perspectives to help leaders make confident moves</h1>
        </div>
        <div className="grid-insights">
          {insightItems.map((insight) => (
            <article key={insight.title} className="card card-insight">
              <p className="chip">{insight.type}</p>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
              <a href="#">Read now →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="section-head">
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
