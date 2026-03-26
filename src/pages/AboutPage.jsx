import { companyInfo } from '../data/siteData';
import PageHero from '../components/PageHero';
import { heroMedia } from '../data/pageMedia';

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="We combine strategy, technology, and industry depth to unlock reinvention"
        description={`${companyInfo.name} operates as one integrated team across consulting, engineering, and operations.`}
        image={heroMedia.about}
      />
      <section className="section">
        <div className="section-head reveal-on-scroll">
          <p className="eyebrow">Our identity</p>
          <h2>Built to deliver transformation with responsible execution</h2>
        </div>
        <div className="grid-services">
          <article className="card reveal-on-scroll">
            <h3>Our mission</h3>
            <p>Help organizations reinvent with confidence in a rapidly shifting digital economy.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Our values</h3>
            <p>Client value, responsible innovation, inclusion, continuous learning, and bold execution.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Global footprint</h3>
            <p>Delivery and strategy teams across the Americas, Europe, APAC, and the Middle East.</p>
          </article>
        </div>
      </section>

      <section className="section dark">
        <div className="section-head reveal-on-scroll">
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
