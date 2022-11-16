export const CourseCard = (props) => {
  const toManager = () => {
    window.open("https://t.me/codemodekz", "_blank");
  };
  const { course } = props;

  return (
    <section className="course-card glass">
      <img
        src={`../../assets/landing/icons/${course.img}`}
        alt="Course Image"
        className={`course-card-image ${course.img === 'algo.png' ? "algo" : ""}`}
        draggable="false"
      />
      <p className="course-card-title">{course.title}</p>
      <p className="course-card-tutor">
        {course.hasOneTutor ? <i className="fa-solid fa-user"></i> : 
          <i className="fa-solid fa-user-group"></i>
        }
        {course.firstTutor}
      </p>
      {course.hasSecondTutor && 
        <p className="course-card-tutor">
          {course.hasOneTutor ? <i className="fa-solid fa-user"></i> : 
            <i className="fa-solid fa-user-group"></i>
          }
          {course.secondTutor}
        </p>
      }
      <p className="course-card-time">
        <i className="fa-solid fa-stopwatch"></i>
        {course.time}
      </p>
      <p className="course-card-price glass">
        <img
          src="../../assets/landing/icons/tenge.svg"
          alt="Tenge Icon"
          draggable="false"
        />
        {!course.isFuture ?  
          <span>{course.price} T/мес</span> : 
          <span>Nobody knows</span>
        }
      </p>
      <button className="course-card-btn" onClick={toManager}>
        Записаться на курс
      </button>
    </section>
  )
};
