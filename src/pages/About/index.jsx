import { useState, useEffect } from "react";

import Telegram from "../../assets/landing/icons/telegram.svg";
import Insta from "../../assets/landing/icons/insta.svg";
import api from "../../api";

export const About = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const slideNext = () => {
    setCurrentReview((currentReview + 1) % reviewsList.length);
  };

  const slidePrev = () => {
    if (currentReview === 0) {
      setCurrentReview(reviewsList.length - 1);
    } else {
      setCurrentReview(currentReview - 1);
    }
  };

  const initPage = async () => {
    setLoading(true);
    try {
      const reviews = await api.getReviews();
      if (reviews) {
        setReviewsList(reviews);
      } else {
        setLoading(true);
        return;
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    initPage();
  }, []);

  return isLoading === false ? (
    <section className="page about animate">
      <section className="page-contact">
        <div className="contact-block">
          <h3 className="contact-block-title">Контакты</h3>
          <div className="contact-block-field">
            <i className="fa-solid fa-building"></i>
            <span>
              Мынбаева 53,
              <a
                className="contact-block-field-link"
                href="https://www.instagram.com/16line_coworking/"
              >
                16Line Coworking
              </a>
            </span>
          </div>
          <div className="contact-block-field">
            <i className="fa-solid fa-building"></i>
            <span>Гоголя 86, БЦ "Казжол", 325 каб</span>
          </div>
          <a className="contact-block-field" href="https://t.me/codemodekz">
            <img src={Telegram} alt="Telegram icon" draggable="false" />
            <span className="contact-block-field-telegram">
              Телеграм менеджер
            </span>
          </a>
          <a
            className="contact-block-field"
            href="https://www.instagram.com/codemodekz/"
            target="_blank"
          >
            <img src={Insta} alt="Instagram icon" draggable="false" />
            <span className="contact-block-field-insta">Наш инстаграм</span>
          </a>
        </div>
      </section>
      <section className="page-review review">
        <h3 className="review-title">Отзывы наших студентов</h3>
        <div className="review-block">
          <button onClick={slidePrev}>
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <div className="review-block-content glass">
            <h4 className="review-block-content-title">
              <i className="fa-solid fa-user-astronaut"></i>
              {reviewsList[currentReview].who}
            </h4>
            <p className="review-block-content-message">
              {reviewsList[currentReview].msg}
            </p>
          </div>
          <button onClick={slideNext}>
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </section>
    </section>
  ) : (
    <h3>Загрузка</h3>
  );
};
