import Logo from "../assets/landing/logo.svg";
import Telegram from "../assets/landing/icons/telegram.svg";
import Insta from "../assets/landing/icons/insta.svg";
import Mail from "../assets/landing/icons/mail.svg";
import Arrow from "../assets/landing/arrow-up.svg";

export const Footer = () => {
  const scrollToTop = () => {
    console.log("scrool");
  };

  return (
    <footer className="footer">
      <section className="footer-section">
        {/* <router-link to="/"> */}
        <a href="">
          <img
            className="footer-logo"
            src={Logo}
            alt="Logo"
            draggable="false"
            onClick={scrollToTop}
          />
        </a>

        {/* </router-link> */}

        <img
          v-if="hasScroll"
          className="footer-arrow"
          src={Arrow}
          alt="arrow"
          onClick={scrollToTop}
          draggable="false"
        />

        <nav className="footer-nav">
          <a
            className="footer-nav-icon"
            href="https://www.instagram.com/codemodekz/"
            target="_blank"
          >
            <img src={Insta} alt="Insta logo" draggable="false" />
          </a>
          <a
            className="footer-nav-icon"
            href="https://t.me/codemodekz"
            target="_blank"
          >
            <img src={Telegram} alt="Telegram logo" draggable="false" />
          </a>
          <a className="footer-nav-icon" href="mailto: codemode.02@gmail.com">
            <img src={Mail} alt="Email logo" draggable="false" />
          </a>
        </nav>
      </section>
    </footer>
  );
};
