/* eslint-disable no-unused-vars */
import { React, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Layout from "../Layout";
import "./quiz.css";
function QuizProps(props) {
  // acessa o props

  const { quizData } = props;
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(quizData[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let option1 = useRef();
  let option2 = useRef();
  let option3 = useRef();
  let option4 = useRef();
  let option_arr = [option1, option2, option3, option4];

  /* checar a resposta, verificar se pode clicar no botao next e somar os pontos de acerto :) */

  const checkAns = (element, answer) => {
    if (!lock) {
      if (question.ans === answer) {
        element.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        element.target.classList.add("wrong");
        setLock(true);
        option_arr[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  /* validaçao para ir para prox pergunta :) */

  const next = () => {
    if (lock) {
      if (index === quizData.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(quizData[index]);
      setLock(false);
      option_arr.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };

  /* Resetar o quiz :) */

  const reset = () => {
    setIndex(0);
    setQuestion(quizData[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  /* reorganizar as perguntas :) */

  useEffect(() => {
    Array.prototype.shuffle = function () {
      var i = this.length,
        j,
        tempi,
        tempj;
      if (i == 0) return this;
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        tempi = this[i];
        tempj = this[j];
        this[i] = tempj;
        this[j] = tempi;
      }
      return this;
    };
    {
      /* receber a lista e mistura-la :) */
    }
    var items = document.getElementById("items"),
      lis = items.getElementsByTagName("li"),
      arr = [],
      max = lis.length;
    for (var i = 0; i < max; i++) {
      arr[i] = lis[i];
    }
    arr = arr.shuffle();
    //  { /* remover itens existentes :) */ }
    while (items.firstChild) {
      items.removeChild(items.firstChild);
    }
    //  { /* devolver o array misturado :) */ }
    for (i = 0; i < max; i++) {
      items.appendChild(arr[i]);
    }
  }, []);
  return (
    <Layout>
      <div className="container">
        <h1 className="title"> Quiz CTFL</h1>
        <hr />
        {result ? (
          <>
            <h2>
              {" "}
              Você acertou {score}/{quizData.length}
            </h2>
            <button onClick={reset}>Recomeçar</button>
          </>
        ) : (
          <>
            <h1 className="question">
              {index + 1}. {question.question}
            </h1>
            {/* Opcoes linkadas as respostas :) */}
            <ul id="items">
              <li
                ref={option1}
                onClick={(element) => {
                  checkAns(element, 1);
                }}
              >
                {" "}
                {question.option1}
              </li>
              <li
                ref={option2}
                onClick={(element) => {
                  checkAns(element, 2);
                }}
              >
                {" "}
                {question.option2}
              </li>
              <li
                ref={option3}
                onClick={(element) => {
                  checkAns(element, 3);
                }}
              >
                {" "}
                {question.option3}
              </li>
              <li
                ref={option4}
                onClick={(element) => {
                  checkAns(element, 4);
                }}
              >
                {" "}
                {question.option4}
              </li>
            </ul>
            <div className="buttonDiv">
              <button
                className="button is-large is-link is-focused is-responsive"
                onClick={next}
              >
                Próximo
              </button>
            </div>

            <div className="points">
              {index + 1}/{quizData.length}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

// PropTypes validation
QuizProps.propTypes = {
  quizData: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      option1: PropTypes.string.isRequired,
      option2: PropTypes.string.isRequired,
      option3: PropTypes.string.isRequired,
      option4: PropTypes.string.isRequired,
      ans: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default QuizProps;
