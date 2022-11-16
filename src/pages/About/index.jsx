import { useState } from "react";

import Telegram from "../../assets/landing/icons/telegram.svg";
import Insta from "../../assets/landing/icons/insta.svg";

export const About = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewList, setReviewList] = useState([
    {
      who: "Айтбаева Дарина",
      msg: "Добрый день!Хотела бы сказать большое спасибо команде Кодмода за бесценные знания, потрясающую работу, мотивацию на протяжении всего обучающего процесса и полную отдачу своих сил со стороны наших преподавателей 💗🙏🏼 Пришла на курс совсем не имея базовых знаний, но благодаря нашим сенсеям закрыла дисциплину ПП1 на А 🥳 В будущем планирую продолжать посещать Ваши курсы, спасибо ещё раз! ❣️",
    },
    {
      who: "Бидайбек Даниал",
      msg: "Здравствуйте!  Я очень доволен пройденными курсами, вы очень помогли прокачать свои скиллы😋.",
    },
    {
      who: "Нурмагамбетов Бакытжан",
      msg: "Спасибо большое команде Codemode! Благодаря Вашим курсам я в полной мере смог освоить все азы программирования(как минимум за первый семестр).",
    },
    {
      who: "Жабагин Ракымжан",
      msg: "Было очень классно. После того как начал ходить на эти курсы полюбил программирование. Очень сильно помогли, спасибо большое✨",
    },
    {
      who: "Диас Тулегалиев",
      msg: "Ребята с Сodemode, вы очень крутые! У вас можно научится не только программированию, но и еще очень многому. Реально очень помогли в подготовке к пп1. И конечно, я желаю посещать ваши занятия по пп2",
    },
    {
      who: "Сейткали Алишер",
      msg: "Только благодаря этому курсу и прошёл ПП1.",
    },
    {
      who: "Жагыпар Габдылгазиз",
      msg: "Кодмод - это нечто! Я обожаю кодмод и рекомендовал ваш курс всем своим друзьям, желаю вам дальнейших успехов и развития.",
    },
    {
      who: "Ли Валерия",
      msg: "Здравствуйте, отзывы о курсе только положительные. Спасибо большое учителям за доходчивое объяснение и постоянную готовность помогать и отвечать на все вопросы в любое время. Благодаря курсу я смогла получить шикарные баллы и закрыла предмет с 4.95/37.05/40Codemode дал не только знания и помог поверить в себя, но и новых друзей и прекрасную атмосферу. Я с удовольствием продолжу обучение на курсах ПП2",
    },
    {
      who: "Елдана Неталиева",
      msg: "Отзыв: качество работы я бы оценила как высокое. Я бы определённо посоветовала codemode своим знакомым. Преподатели доступно преподносят материал, всегда готовы ответить на вопросы, что на занятиях, что в личных сообщениях. Очень понравились составленные контесты. Они обхватывали весь учебный материал, развивали критическое и логическое мышление. Я считаю очень хорошая практика перед сдачей экзаменов. ",
    },
    {
      who: "Кусманова Алима",
      msg: "Здраствуйте, хочу оставить отзыв на этот прекрасный курс. К сожалению я пришла только после мидок, но даже за такое малое  количество времени я смогла закрыть предмет на ура. В этом курсе отличные учителя и приятная атмосфера. Круто объясняют тему, помогают если возникли вопросы при решении задач.",
    },
    {
      who: "Райсханов Алишер",
      msg: "Мне очень понравились и помогли занятия по пройденному курсу. Хорошие учителя, лёгкая подача материала, приятное общение. За мидтерм баллов не набрал, за эндтерм 41, за файнал 29. Желаю посещать курсы по ПП2",
    },
  ]);

  const slideNext = () => {
    setCurrentReview((currentReview + 1) % reviewList.length);
  };

  const slidePrev = () => {
    if (currentReview === 0) {
      setCurrentReview(reviewList.length - 1);
    } else {
      setCurrentReview(currentReview - 1);
    }
  };

  return (
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
              {reviewList[currentReview].who}
            </h4>
            <p className="review-block-content-message">
              {reviewList[currentReview].msg}
            </p>
          </div>
          <button onClick={slideNext}>
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </section>
    </section>
  );
};
