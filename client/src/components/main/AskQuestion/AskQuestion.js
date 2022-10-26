import React from "react";
import AskButton from "../Button/AskButton";
import * as S from '../../../style/main/AskQuestion.style';


const AskQuestion = ({ onClick }) => {
  return (
    <S.AskQuestionContainer>
      <h1>All Questions</h1>
      <AskButton>Ask Question</AskButton>
    </S.AskQuestionContainer>
  );
};

export default AskQuestion;