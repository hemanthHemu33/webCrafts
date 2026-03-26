import { insightItems, serviceCards } from '../data/siteData';
import PageHero from '../components/PageHero';
import { heroMedia } from '../data/pageMedia';

function SearchPage() {
  const combined = [...serviceCards.map((s) => ({ type: 'Capability', title: s.title })), ...insightItems.map((i) => ({ type: i.type, title: i.title }))];

  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Find capabilities, insights, and stories"
        description="Quickly explore topics, offerings, industries, and case studies."
        image={heroMedia.search}
      />
      <section className="section">
        <div className="card search-box reveal-on-scroll">
          <input type="text" placeholder="Search topics, services, industries..." />
        </div>
        <div className="news-list">
          {combined.map((item) => (
            <article key={item.title} className="card reveal-on-scroll">
              <p className="chip">{item.type}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default SearchPage;
