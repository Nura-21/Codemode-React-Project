export const Course = () => {
  return (
    <section className="page course animate slide">
      <h1 className="course-title">Доступные курсы</h1>
      <section className="course-list">
        {/* <course-item
        v-for="(course, courseIndex) of activeCourseList"
        :key="courseIndex"
        :course="course"
      ></course-item> */}
      </section>
      <h1 className="course-title">Coming soon...</h1>
      <section className="course-list">
        {/* <course-item
        v-for="(course, courseIndex) of futureCourseList"
        :key="courseIndex"
        :course="course"
      ></course-item> */}
      </section>
    </section>
  );
};
