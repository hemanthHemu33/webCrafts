import { locations } from '../data/siteData';

function LocationsPage() {
  return (
    <section className="section page-top">
      <div className="section-head">
        <p className="eyebrow">Locations</p>
        <h1>Global delivery and innovation hubs</h1>
        <p className="lead">Find strategy, engineering, and operations teams near your business.</p>
      </div>
      <div className="location-grid">
        {locations.map((city) => (
          <div className="card" key={city}>
            <h3>{city}</h3>
            <p>Client services, design, engineering, and operations teams</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationsPage;
