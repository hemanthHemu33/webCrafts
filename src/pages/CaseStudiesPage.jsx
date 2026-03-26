import { caseStudies } from '../data/siteData';
import PageHero from '../components/PageHero';
import { cardMedia, heroMedia } from '../data/pageMedia';

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Transformation stories with measurable impact"
        description="Explore reinvention outcomes delivered with strategy, technology, and operations teams."
        image={heroMedia.caseStudies}
      />
      <section className="section">
        <div className="stories">
          {caseStudies.map((story, index) => (
            <article key={story.client} className="card card-story reveal-on-scroll">
              <img src={cardMedia.caseStudies[index % cardMedia.caseStudies.length]} alt="Case study placeholder" className="card-image" />
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
    </>
  );
}

export default CaseStudiesPage;
