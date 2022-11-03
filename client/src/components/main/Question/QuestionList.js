import React, { useCallback, useEffect } from "react";
import * as S from "../../../style/main/QuestionList.style";
import Question from "./Question";
import { useRecoilState } from "recoil";
import { questionList } from "../../../atoms/atom";
import { useAxios } from "../../../util/useAxios";
import axios from "axios";

const QuestionList = ({ questionLists }) => {

  const { response, loading, error } = useAxios({
    method: 'GET',
    url: 'api/questions',
    headers: {
      "ngrok-skip-browser-warning": "69420",
    },
  })
  // console.log(loading)
  // console.log(error)
  // console.log(response)

  const [questions, setQuestions] = useRecoilState(questionList);


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
