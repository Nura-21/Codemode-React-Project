import { TutorCard } from "./TutorCard";
import { firstRow, secondRow, thirdRow } from "./data";
export const Tutor = () => {
  return (
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
  );
};
