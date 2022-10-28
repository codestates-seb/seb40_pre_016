import React from "react";
import AskButton from "../Button/AskButton";
import * as S from '../../../style/main/AskQuestion.style';
import { Link } from "react-router-dom";


const AskQuestion = () => {
  return (
    <S.AskQuestionContainer>
      <h1>All Questions</h1>
      <Link to={'/askquestion'}>
        <AskButton>Ask Question</AskButton>
      </Link>
    </S.AskQuestionContainer>
  );
};

export default AskQuestion;