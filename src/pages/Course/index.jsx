import { useEffect, useState } from "react";
import api from "@/api";
import { CourseCard } from "./CourseCard";
import { Loader } from "@/components/Loader";

export const Course = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [courses, setCourses] = useState();

  const initPage = async () => {
    setIsLoading(true);
    try {
      const courses = await api.getCourses();
      if (courses) {
        setCourses(courses);
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    initPage();
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
        {courses
          .filter((course) => course.isActive)
          .map((course, ind) => (
            <CourseCard key={ind} course={course} />
          ))}
      </section>
      <h1 className="course-title">Скоро ...</h1>
      <section className="course-list">
        {courses
          .filter((course) => !course.isActive)
          .map((course, ind) => (
            <CourseCard key={ind} course={course} />
          ))}
      </section>
    </section>
  );
};
