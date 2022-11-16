export const TutorCard = (props) => {
  const parseLogin = (telegramLogin) => {
    return telegramLogin.slice(13);
  };

  const { tutor } = props;

  return (
    <section className="tutor-card glass">
      <img
        src={`/assets/tutors/${tutor.img}`}
        className="tutor-card-image GradientBorder"
        alt="Tutor Image"
        draggable="false"
      />
      <p className="tutor-card-name">{tutor.name}</p>
      <div className="tutor-card-courses-wrapper glass">
        {tutor.courses.map((course, ind) => (
          <p className="tutor-card-courses" key={ind}>
            <img
              src={`/assets/courses/${course.icon}`}
              alt="Course Image"
              className="tutor-card-courses-icon"
              draggable="false"
            />
            {course.title}
          </p>
        ))}
      </div>
      <div className="tutor-card-contacts">
        <a href={"mailto:" + tutor.email}>
          <i className="fa-solid fa-envelope"></i>
          {tutor.email}
        </a>
        <a href={tutor.telegram} target="_blank">
          <i className="fa-solid fa-paper-plane"></i>
          {parseLogin(tutor.telegram)}
        </a>
      </div>
    </section>
  );
};
