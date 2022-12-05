import tengeIcon from "../../assets/landing/icons/tenge.svg";

export const CourseCard = (props) => {
  const toManager = () => {
    window.open("https://t.me/codemodekz", "_blank");
  };
  const { course } = props;

  return (
    <section className="course-card glass">
      <img
        src={`./assets/courses/${course.img}`}
        alt="Course Image"
        className={`course-card-image ${
          course.img === "algo.png" ? "algo" : ""
        }`}
        draggable="false"
      />
      <p className="course-card-title">{course.title}</p>
      {course.tutors.map((tutor, index) => (
        <p key={index} className="course-card-tutor">
          {tutor.includes(',') ? (
            <i className="fa-solid fa-user-group"></i>
          ) : (
            <i className="fa-solid fa-user"></i>
          )}
          {tutor}
        </p>
      ))}
      <p className="course-card-time">
        <i className="fa-solid fa-stopwatch"></i>
        {course.time}
      </p>
      <p className="course-card-price glass">
        <img src={tengeIcon} alt="Tenge Icon" draggable="false" />
        {!course.isFuture ? (
          <span>{course.price} T/мес</span>
        ) : (
          <span>Nobody knows</span>
        )}
      </p>
      <button className="course-card-btn" onClick={toManager}>
        Записаться на курс
      </button>
    </section>
  );
};
