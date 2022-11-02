import React from 'react';
import { modalState } from '../atoms/atom';
import Modal from '../components/QuestionWrite/modal/Modal';
import { useRecoilState } from 'recoil';
import QuestionWriteBody from '../components/QuestionWrite/QuestionWriteBody';
import QuestionWriteHeader from '../components/QuestionWrite/QuestionWriteHeader';
import QuestionWriteSidebar from '../components/QuestionWrite/QuestionWriteSidebar';
import QuestionWriteFooter from '../components/QuestionWrite/QuestionWriteFooter';
import { QuestionWriteContainer } from '../style/QuestionWrite/QuestionWrite.style';

const QuestionWrite = () => {
  const [isOpen, setIsopen] = useRecoilState(modalState);

  return (
    <>
      {isOpen ? <Modal /> : ''}

      <QuestionWriteContainer>
        <div className='questionWrite-body-flex'>
          <QuestionWriteHeader />
          <div className='body-sidebar-container'>
            <QuestionWriteBody />
            <QuestionWriteSidebar />
          </div>
          <QuestionWriteFooter />
        </div>
      </QuestionWriteContainer>
    </>
  );
};

export default QuestionWrite;
