import { caseStudies } from '../data/siteData';

function CaseStudiesPage() {
  return (
    <section className="section page-top">
      <div className="section-head">
        <p className="eyebrow">Case studies</p>
        <h1>Transformation stories with measurable impact</h1>
      </div>
      <div className="stories">
        {caseStudies.map((story) => (
          <article key={story.client} className="card card-story">
            <p className="chip">{story.client}</p>
            <h3>{story.summary}</h3>
            <p className="result">{story.impact}</p>
            <p>
              Work included strategy definition, platform design, change enablement, and a phased delivery model.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaseStudiesPage;
