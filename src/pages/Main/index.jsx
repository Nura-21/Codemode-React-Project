import { Link } from 'react-router-dom';
import bgImg from '../../assets/landing/ide.png';

export const HomePage = () => {
  const redirectToTelegram = () => window.open("https://t.me/codemodekz", "_blank");

  return (
    <section className="page home animate blur">
      <div className="home-content">
        <h1 className="home-content-title">
          <i className="fa-solid fa-graduation-cap"></i>Codemode - IT School
        </h1>
        <h3 className="home-content-subtitle">
          <i className="fa-solid fa-lightbulb"></i>Дорогу осилит идущий
        </h3>
        <div className="home-content-controls">
          <Link to="/courses"><button>Каталог курсов</button></Link>
          <button onClick={redirectToTelegram}>Записаться</button> 
        </div>
      </div>
      <div className="home-image">
        <img src={bgImg} alt="Home image" />
      </div>
    </section>
  );
};