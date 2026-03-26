import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { companyInfo, navItems, quickLinks } from '../data/siteData';
import companyLogo from '../assets/company-logo-placeholder.svg';

function Layout({ children }) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    elements.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [children]);

  return (
    <div className="app-shell">
      <div className="utility-bar">
        <span>India (English)</span>
        <div className="utility-links">
          {quickLinks.map((item) => (
            <Link key={item.path} to={item.path}>{item.label}</Link>
          ))}
        </div>
      </div>
      <header className="top-nav">
        <Link to="/" className="brand" aria-label={`${companyInfo.name} home`}>
          <img src={companyLogo} alt={`${companyInfo.name} logo`} className="brand-logo" />
        </Link>
        <nav>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'} className={({ isActive }) => (isActive ? 'active-nav' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-right">
          <Link to="/search" className="nav-search" aria-label="Search">
            Search
          </Link>
          <Link to="/contact" className="btn-secondary nav-cta">
            Contact us
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer-grid">
          <div>
            <h4>{companyInfo.name}</h4>
            <p>Global transformation partner for strategy, technology, and operations.</p>
            <p className="footer-contact">{companyInfo.address}</p>
            <p className="footer-contact">Phone: {companyInfo.phone}</p>
          </div>
          <div>
            <h5>What we do</h5>
            <Link to="/services">Capabilities</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/case-studies">Case Studies</Link>
          </div>
          <div>
            <h5>Who we are</h5>
            <Link to="/about">About</Link>
            <Link to="/sustainability">Sustainability</Link>
            <Link to="/awards">Awards</Link>
            <Link to="/locations">Locations</Link>
          </div>
          <div>
            <h5>Latest</h5>
            <Link to="/what-we-think">What we think</Link>
            <Link to="/newsroom">Newsroom</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/search">Search</Link>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
