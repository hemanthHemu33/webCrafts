import { newsroom } from '../data/siteData';

function NewsroomPage() {
  return (
    <section className="section page-top">
      <div className="section-head">
        <p className="eyebrow">Newsroom</p>
        <h1>Company announcements and media updates</h1>
      </div>
      <div className="news-list">
        {newsroom.map((news) => (
          <article key={news} className="card">
            <h3>{news}</h3>
            <p>Published by Northstar Media Relations</p>
            <a href="#">Read more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsroomPage;
