import React from "react";
import Question from "./Question";

const QuestionList = ({ questionList }) => {
  return (
    <ul>
      {questionList.map(el => {
        return (
          <li>
            <Question question={el} />
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionList;