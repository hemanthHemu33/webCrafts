function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="page-hero">
      <div className="page-hero-media" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="page-hero-content reveal-on-scroll">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description ? <p className="lead">{description}</p> : null}
      </div>
    </section>
  );
}

export default PageHero;
