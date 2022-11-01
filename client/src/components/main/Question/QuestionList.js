import React, { useCallback, useEffect } from "react";
import * as S from "../../../style/main/QuestionList.style";
import Question from "./Question";
import { useRecoilState } from "recoil";
import { questionList } from "../../../atoms/atom";
import axios from "axios";

const QuestionList = ({ questionLists }) => {
  const [questions, setQuestions] = useRecoilState(questionList);

  const fetchQuestions = useCallback(async () => {
    await axios({
      url: `https://702b-218-147-182-45.jp.ngrok.io/api/questions/1`,
      headers: {
        "ngrok-skip-browser-warning": "111",
      },
      method: 'GET',
    }).then(res => console.log(res.data))

  }, []);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);
  

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
