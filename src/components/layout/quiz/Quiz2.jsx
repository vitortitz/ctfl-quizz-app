// Quiz2.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { quizData2 } from "../../../assets/data2";
import QuizProps from "./QuizProps";
function Quiz2() {
  return (
    <div>
      <QuizProps quizData={quizData2} />
    </div>
  );
}

export default Quiz2;
