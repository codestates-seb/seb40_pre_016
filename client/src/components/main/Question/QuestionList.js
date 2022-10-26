import React from "react";
import * as S from '../../../style/main/QuestionList.style'
import Question from "./Question";




const QuestionList = ({ questionList }) => {
  return (
    <S.QuestionListContainer>
      <ul>
        {questionList.map((el, idx) => {
          return (
            <li key={idx}>
              <Question question={el} />
            </li>
          );
        })}
      </ul>
    </S.QuestionListContainer>
  );
};

export default QuestionList;