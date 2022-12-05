import { useEffect, useState } from "react";
import api from "../../api";
import { CourseCard } from "./CourseCard";
import { Loader } from  "../../components/Loader";

export const Course = () => {
  const [isLoading, setIsLoading] = useState(true);
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

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error happened</p>;
  }

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
