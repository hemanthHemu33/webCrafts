import PageHero from '../components/PageHero';
import { cardMedia, heroMedia } from '../data/pageMedia';

function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Embedding sustainability into growth and transformation"
        description="Make sustainability measurable across operations, supply chain, and product innovation."
        image={heroMedia.sustainability}
      />
      <section className="section">
        <div className="grid-services">
          <article className="card reveal-on-scroll">
            <img src={cardMedia.sustainability[0]} alt="Sustainability placeholder" className="card-image" />
            <h3>Net-zero operations</h3>
            <p>Accelerate decarbonization through efficient infrastructure, cloud optimization, and energy intelligence.</p>
          </article>
          <article className="card reveal-on-scroll">
            <img src={cardMedia.sustainability[1]} alt="Sustainability placeholder" className="card-image" />
            <h3>Sustainable supply chains</h3>
            <p>Build traceability and emissions transparency while improving resilience and cost performance.</p>
          </article>
          <article className="card reveal-on-scroll">
            <img src={cardMedia.sustainability[2]} alt="Sustainability placeholder" className="card-image" />
            <h3>ESG data & reporting</h3>
            <p>Build trusted sustainability data products and reporting controls for regulatory compliance.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default SustainabilityPage;
