/* eslint-disable no-unused-vars */
// Quiz2.jsx
import React from "react";
import { quizData } from "../../../assets/data";

import "./QuizProps";
import QuizProps from "./QuizProps";
function Quiz1() {
  return (
    <div>
      <QuizProps quizData={quizData} />
    </div>
  );
}

export default Quiz1;
