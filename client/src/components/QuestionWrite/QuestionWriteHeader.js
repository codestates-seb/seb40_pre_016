import React from 'react';
import { QuestionWriteHeaderContainer } from '../../style/QuestionWrite/QuestionHeader.style';
import { ReactComponent as TitleImage } from '../../assets/img/background.svg';

const QuestionWriteHeader = () => {
  return (
    <QuestionWriteHeaderContainer>
      <div className='title-header-container'>
        <h1>Ask a public question</h1>
      </div>
      {/* <TitleImage height='100px' width='70%' /> */}
    </QuestionWriteHeaderContainer>
  );
};

export default QuestionWriteHeader;
