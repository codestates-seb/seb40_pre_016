import React from "react";
import * as S from "../../../style/main/QuestionList.style";
import Question from "./Question";
import { useRecoilState } from "recoil";
import { questionList } from "../../../atoms/atom";

const QuestionList = ({ questionLists }) => {
  const [questions, setQuestions] = useRecoilState(questionList);
  console.log("퀘스쳔리스트쪽", questions);

  return (
    <S.QuestionListContainer>
      <ul>
        {questions.map((el, idx) => {
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
