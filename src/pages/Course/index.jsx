import { useEffect, useState } from "react";
import api from "../../api";
import { CourseCard } from "./CourseCard";

export const Course = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [courses, setCourses] = useState();
  
  const fetchCourses = async () => {
    api.getCourses()
      .then(data => {
        setCourses(data);
      })
      .catch(e => {
        console.log(e);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <section className="page course animate slide">
      <h1 className="course-title">Доступные курсы</h1>
      <section className="course-list">
        {courses.map((course, ind) => (
          <CourseCard key={ind} course={course} />
        ))}
      </section>
    </section>
  );
};
