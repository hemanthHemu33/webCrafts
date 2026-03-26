import { Link } from 'react-router-dom';
import { awards, caseStudies, companyInfo, insightItems, serviceCards } from '../data/siteData';
import { cardMedia } from '../data/pageMedia';

const stats = [
  { value: '16K+', label: 'Transformation experts globally' },
  { value: '99.98%', label: 'Cloud platform uptime delivered' },
  { value: '$12.4B', label: 'Client value unlocked in 2025' },
  { value: '44', label: 'Countries with delivery hubs' },
];

const featuredTopics = [
  {
    title: 'AI innovation is nonstop. Your cloud foundation should be too.',
    tag: 'Research report',
    body: 'New research shows organizations that modernize cloud and data foundations achieve faster AI value realization.',
  },
  {
    title: 'The dawn of the agentic enterprise',
    tag: 'Perspective',
    body: 'Learn how autonomous workflows and human governance combine to scale productivity and trust.',
  },
  {
    title: 'Self-funding supply chains are moving from theory to reality',
    tag: 'Insight',
    body: 'How leaders use intelligence, automation, and control towers to release cash for growth.',
  },
];

const homepageIndustries = ['Banking', 'Health', 'Public Service', 'Retail', 'Energy', 'Software & Platforms'];

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="eyebrow">Technology + Human Ingenuity</p>
          <h1>Let there be measurable change.</h1>
          <p>
            {companyInfo.name} helps organizations reinvent at scale with strategy, AI, cloud, data, and operations—while creating durable value for customers, people, and communities.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Get started</Link>
            <Link to="/case-studies" className="btn-ghost">See client stories</Link>
          </div>
        </div>
      </section>

      <section className="stats reveal-on-scroll" aria-label="Performance highlights">
        {stats.map((stat) => (
          <article key={stat.label}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="section page-anchor">
        <div className="section-head reveal-on-scroll">
          <p className="eyebrow">Featured insights</p>
          <h2>Read our latest research and perspectives</h2>
        </div>
        <div className="grid-insights">
          {featuredTopics.map((item, index) => (
            <article key={item.title} className="card card-insight">
              <img src={cardMedia.insights[index % cardMedia.insights.length]} alt="Insight placeholder" className="card-image" />
              <p className="chip">{item.tag}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a href="#">Read now →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="section-head split-head reveal-on-scroll">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>Capabilities that accelerate reinvention</h2>
          </div>
          <Link to="/services" className="btn-secondary">Explore all services</Link>
        </div>
        <div className="grid-services">
          {serviceCards.slice(0, 6).map((service) => (
            <article key={service.title} className="card reveal-on-scroll">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head split-head reveal-on-scroll">
          <div>
            <p className="eyebrow">Industries</p>
            <h2>Industry depth where it matters most</h2>
          </div>
          <Link to="/industries" className="text-link">See all industries →</Link>
        </div>
        <div className="logo-strip">
          {homepageIndustries.map((name) => (
            <span key={name} className="chip">{name}</span>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="section-head reveal-on-scroll">
          <p className="eyebrow">360° value</p>
          <h2>Impact delivered every day for stakeholders across the ecosystem</h2>
        </div>
        <div className="stories">
          {caseStudies.slice(0, 3).map((item, index) => (
            <article key={item.client} className="card card-story">
              <img src={cardMedia.caseStudies[index % cardMedia.caseStudies.length]} alt="Case study placeholder" className="card-image" />
              <p className="chip">{item.client}</p>
              <h3>{item.summary}</h3>
              <p className="result">{item.impact}</p>
              <a href="#">View case study →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split">
          <article className="card promo-card reveal-on-scroll">
            <p className="eyebrow">Careers</p>
            <h3>Bring your skills to the future of business and technology</h3>
            <p>Join a global team where curiosity, learning, and impact drive every project.</p>
            <Link to="/careers" className="text-link">Explore careers →</Link>
          </article>
          <article className="card promo-card reveal-on-scroll">
            <p className="eyebrow">Sustainability</p>
            <h3>Put sustainability at the center of reinvention</h3>
            <p>Integrate ESG data, decarbonization pathways, and resilient operations for long-term value.</p>
            <Link to="/sustainability" className="text-link">See sustainability work →</Link>
          </article>
        </div>
      </section>

      <section className="section dark">
        <div className="section-head split-head reveal-on-scroll">
          <div>
            <p className="eyebrow">Global recognition and awards</p>
            <h2>Recognized for innovation, delivery, and workplace excellence</h2>
          </div>
          <Link to="/awards" className="text-link">See all awards →</Link>
        </div>
        <div className="grid-insights">
          {awards.map((award) => (
            <article key={award.title} className="card reveal-on-scroll">
              <h3>{award.title}</h3>
              <p>{award.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head split-head reveal-on-scroll">
          <div>
            <p className="eyebrow">From our newsroom</p>
            <h2>What’s new at {companyInfo.name}</h2>
          </div>
          <Link to="/newsroom" className="text-link">Go to newsroom →</Link>
        </div>
        <div className="grid-insights">
          {insightItems.slice(0, 3).map((insight) => (
            <article key={insight.title} className="card reveal-on-scroll">
              <p className="chip">{insight.type}</p>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>Ready to reinvent your business for what’s next?</h2>
        <p>Partner with us to define your roadmap and deliver measurable outcomes with speed.</p>
        <Link to="/contact" className="btn-secondary light">Talk to our team</Link>
      </section>
    </>
  );
}

export default HomePage;
