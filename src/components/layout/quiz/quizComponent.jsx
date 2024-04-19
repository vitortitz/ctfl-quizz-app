// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import "./quiz.css";
import { quizData } from "./../../../assets/data";
import ChildComponent from "./QuizProps";

const QuizComponent = () => {
  return (
    <div>
      {/* Passing quizData2 as a prop named "quizData" */}
      <ChildComponent quizData={quizData} />
    </div>
  );
};

export default QuizComponent;
