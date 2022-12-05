import { Link, useLocation } from "react-router-dom";
import { links } from './data';

import Logo from "@/assets/landing/logo.svg";

export const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="header main-gradient">
      <section className="header-section">
        <Link to="/">
          <img
            className="header-logo"
            src={Logo}
            alt="Logo"
            draggable="false"
          />
        </Link>

        <nav className="header-nav">
          {links.map((link, ind) => 
          <Link key={ind} className={`header-nav-link ${pathname === link.pathname ? "router-link-exact-active" : ""}`} 
            to={link.pathname} onClick={() => setActiveLink(ind)}>
            {link.name}
          </Link>)
          }
        </nav>
      </section>
    </header>
  );
};
