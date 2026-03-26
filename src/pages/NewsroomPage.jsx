import { newsroom } from '../data/siteData';
import PageHero from '../components/PageHero';
import { cardMedia, heroMedia } from '../data/pageMedia';

function NewsroomPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="Company announcements and media updates"
        description="Official updates, press releases, and perspective from WebCrafts leadership."
        image={heroMedia.newsroom}
      />
      <section className="section">
        <div className="news-list">
          {newsroom.map((news, index) => (
            <article key={news} className="card reveal-on-scroll">
              <img src={cardMedia.newsroom[index % cardMedia.newsroom.length]} alt="News placeholder" className="card-image" />
              <h3>{news}</h3>
              <p>Published by WebCrafts Media Relations</p>
              <a href="#">Read more →</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default NewsroomPage;
