import React from "react";
import * as S from "../../../style/main/QuestionList.style";
import Question from "./Question";
import { useRecoilState } from "recoil";
import { questionList } from "../../../atoms/atom";
import axios from "axios";

const QuestionList = ({ questionLists }) => {
  // const [questions, setQuestions] = useRecoilState(questionList);
  // console.log("퀘스쳔리스트쪽", questions);
  axios({
    url: 'http://702b-218-147-182-45.jp.ngrok.io/api/questions/1', // 통신할 웹문서
    method: 'get', // 통신 방식

  }).then((el) => console.log(el))
  return (
    <S.QuestionListContainer>
      {/* <ul>
        {questions.map((el, idx) => {
          return (
            <li key={idx}>
              <Question question={el} />
            </li>
          );
        })}
      </ul> */}
    </S.QuestionListContainer>
  );
};

export default QuestionList;
