import React from "react";
import { QuestionWriteHeaderContainer } from '../../style/QuestionWrite/QuestionHeader.style';
import { ReactComponent as TitleImage } from "../../assets/img/background.svg";

const QuestionWriteHeader = () => {
  return (
    <QuestionWriteHeaderContainer>
      <div className="title-header-container">
        <h1>Ask a public question</h1>
      </div>
      <TitleImage height='130px' width='600px' />
    </QuestionWriteHeaderContainer>
  );
};


export default QuestionWriteHeader;