import Logo from "../assets/landing/logo.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header main-gradient">
      <section className="header-section">
        <NavLink to={"/"}>
          <img
            className="header-logo"
            src={Logo}
            alt="Logo"
            draggable="false"
          />
        </NavLink>

        <nav className="header-nav">
          <NavLink className="header-nav-link" to={"/courses"}>
            Курсы
          </NavLink>
          <NavLink className="header-nav-link" to={"/tutors"}>
            Преподаватели
          </NavLink>
          <NavLink className="header-nav-link" to={"/about"}>
            О нас
          </NavLink>
        </nav>
      </section>
    </header>
  );
};
