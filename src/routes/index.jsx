import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/Main";
import { Course } from "../pages/Course";
import { Tutor } from "../pages/Tutor";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<Course />} />
      <Route path="/tutors" element={<Tutor />} />
    </Routes>
  );
};
