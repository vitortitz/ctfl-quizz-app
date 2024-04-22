/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Quiz2 from "../components/layout/quiz/Quiz2";
import Quiz1 from "../components/layout/quiz/Quiz1";
import Quiz3 from "../components/layout/quiz/Quiz3";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz1" element={<Quiz1 />} />
        <Route path="/" element={<Home />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/quiz3" element={<Quiz3 />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
