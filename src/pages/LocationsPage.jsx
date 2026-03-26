import { locations } from '../data/siteData';
import PageHero from '../components/PageHero';
import { cardMedia, heroMedia } from '../data/pageMedia';

function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Global delivery and innovation hubs"
        description="Find strategy, engineering, and operations teams near your business."
        image={heroMedia.locations}
      />
      <section className="section">
        <div className="location-grid">
          {locations.map((city, index) => (
            <div className="card reveal-on-scroll" key={city}>
              <img src={cardMedia.locations[index % cardMedia.locations.length]} alt="Location placeholder" className="card-image" />
              <h3>{city}</h3>
              <p>Client services, design, engineering, and operations teams</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default LocationsPage;
