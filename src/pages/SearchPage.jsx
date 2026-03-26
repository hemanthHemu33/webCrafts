import { insightItems, serviceCards } from '../data/siteData';

function SearchPage() {
  const combined = [...serviceCards.map((s) => ({ type: 'Capability', title: s.title })), ...insightItems.map((i) => ({ type: i.type, title: i.title }))];

  return (
    <section className="section page-top">
      <div className="section-head">
        <p className="eyebrow">Search</p>
        <h1>Find capabilities, insights, and stories</h1>
      </div>
      <div className="card search-box">
        <input type="text" placeholder="Search topics, services, industries..." />
      </div>
      <div className="news-list">
        {combined.map((item) => (
          <article key={item.title} className="card">
            <p className="chip">{item.type}</p>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SearchPage;
