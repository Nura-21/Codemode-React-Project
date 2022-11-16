import Logo from "../assets/landing/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
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
          <Link className="header-nav-link" to="/courses">
            Курсы
          </Link>
          <Link className="header-nav-link" to="/tutors">
            Преподаватели
          </Link>
          <Link className="header-nav-link" to="/about">
            О нас
          </Link>
        </nav>
      </section>
    </header>
  );
};
