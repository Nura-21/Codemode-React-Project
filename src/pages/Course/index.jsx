import { CourseCard } from "./CourseCard";
import { activeCourseList, futureCourseList } from './data';

export const Course = () => {
  console.log(activeCourseList);
  return (
    <section className="page course animate slide">
      <h1 className="course-title">Доступные курсы</h1>
      <section className="course-list">
        {activeCourseList.map((course, ind) => <CourseCard key={ind} course={course} />)}
      </section>
      <h1 className="course-title">Coming soon...</h1>
      <section className="course-list">
      {futureCourseList.map((course, ind) => <CourseCard key={ind} course={course} />)}
      </section>
    </section>
  );
};
