import { TutorCard } from "./TutorCard";
import api from "../../api";
import { useState, useEffect } from "react";
export const Tutor = () => {
  const [isLoading, setLoading] = useState(true);
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRaw] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);

  const initPage = async () => {
    setLoading(true);
    try {
      const tutors = await api.getTutors();
      if (tutors) {
        setFirstRow(tutors.filter((i) => i.row === 0));
        setSecondRaw(tutors.filter((i) => i.row === 1));
        setThirdRow(tutors.filter((i) => i.row === 2));
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
    <section className="page tutor animate slide">
      <h1 className="tutor-title">Наши преподаватели</h1>
      <section className="tutor-list">
        {firstRow.map((tutor, ind) => (
          <TutorCard key={ind} tutor={tutor} />
        ))}
      </section>
      <section className="tutor-list">
        {secondRow.map((tutor, ind) => (
          <TutorCard key={ind} tutor={tutor} />
        ))}
      </section>
      <section className="tutor-list">
        {thirdRow.map((tutor, ind) => (
          <TutorCard key={ind} tutor={tutor} />
        ))}
      </section>
    </section>
  ) : (
    <section className="page tutor animate slide">
      <h1 className="tutor-title">Загрузка</h1>
    </section>
  );
};
