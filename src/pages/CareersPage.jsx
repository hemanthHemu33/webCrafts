import { jobs } from '../data/siteData';

function CareersPage() {
  return (
    <>
      <section className="section page-top split">
        <div>
          <p className="eyebrow">Careers</p>
          <h1>Join us to build technology that creates meaningful impact</h1>
          <p className="lead">
            We hire strategists, architects, engineers, analysts, designers, and operators who thrive in complex problem-solving.
          </p>
          <div className="card">
            <h3>Why join Northstar</h3>
            <ul>
              <li>Learning programs with AI, cloud, and leadership tracks.</li>
              <li>Hybrid work model with global collaboration opportunities.</li>
              <li>Clear growth frameworks and mentorship support.</li>
            </ul>
          </div>
        </div>
        <div className="jobs-panel">
          {jobs.map((job) => (
            <a href="#" key={job} className="job-link">
              {job} <span>→</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="section-head">
          <p className="eyebrow">Career areas</p>
          <h2>Explore opportunities across our business</h2>
        </div>
        <div className="grid-insights">
          <article className="card"><h3>Technology</h3><p>Engineering, architecture, platform operations, and cyber security roles.</p></article>
          <article className="card"><h3>Strategy & Consulting</h3><p>Industry, growth, operating model, and transformation advisory roles.</p></article>
          <article className="card"><h3>Operations</h3><p>Business process, managed services, and digital operations careers.</p></article>
        </div>
      </section>
    </>
  );
}

export default CareersPage;
