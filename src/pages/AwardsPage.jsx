import { awards } from '../data/siteData';
import PageHero from '../components/PageHero';
import { cardMedia, heroMedia } from '../data/pageMedia';

function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global recognition and awards"
        title="Industry acknowledgments for impact and innovation"
        description="Recognized by analysts and industry groups for measurable transformation outcomes."
        image={heroMedia.awards}
      />
      <section className="section">
        <div className="grid-insights">
          {awards.map((award, index) => (
            <article key={award.title} className="card reveal-on-scroll">
              <img src={cardMedia.awards[index % cardMedia.awards.length]} alt="Award placeholder" className="card-image" />
              <h3>{award.title}</h3>
              <p>{award.detail}</p>
              <a href="#">See related awards →</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default AwardsPage;
