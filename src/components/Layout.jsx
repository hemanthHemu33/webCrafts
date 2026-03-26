import { Link, NavLink } from 'react-router-dom';
import { navItems, quickLinks } from '../data/siteData';

function Layout({ children }) {
  return (
    <div>
      <div className="utility-bar">
        <span>India (English)</span>
        <div className="utility-links">
          {quickLinks.map((item) => (
            <Link key={item.path} to={item.path}>{item.label}</Link>
          ))}
        </div>
      </div>
      <header className="top-nav">
        <Link to="/" className="brand">
          NORTHSTAR<span className="purple">DIGITAL</span>
        </Link>
        <nav>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'} className={({ isActive }) => (isActive ? 'active-nav' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn-secondary nav-cta">
          Contact us
        </Link>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer-grid">
          <div>
            <h4>Northstar Digital</h4>
            <p>Global transformation partner for strategy, technology, and operations.</p>
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
        <p className="copyright">© {new Date().getFullYear()} Northstar Digital. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
