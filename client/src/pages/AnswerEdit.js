import React from 'react';
import styled from 'styled-components';
import QuestionEditBody from '../components/QuestionEdit/QuestionEditBody';
import QuestionEditSidebar from '../components/QuestionEdit/QuestionEditSidebar';
import AnswerEditBody from '../components/AnswerEdit/AnswerEditBody';
import { questionData } from '../atoms/questionATom';
import { useRecoilState } from 'recoil';

const AnswerEditStyled = styled.div`
  /* background-color: #f1f2f3; */
  width: 100%;
  height: 100%;

  & .footer-container {
    border: 1px solid rgb(230, 207, 121);
    background-color: rgb(253, 247, 226);
    border-radius: 3px;
    padding: 16px;
    font-size: 13px;
    line-height: 17px;

    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  & .header-body-container {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 800px;
  }

  & .body-sidebar-container {
    display: flex;
    gap: 10px;
  }
`;

const AnswerEdit = () => {
  const [data, setData] = useRecoilState(questionData);
  console.log('datatatad는', data);
  return (
    <AnswerEditStyled>
      <div className='body-sidebar-container'>
        <div className='header-body-container'>
          {/* <div className="footer-container">
              <p>
                Your edit will be placed in a queue until it is peer reviewed.
              </p>
              <p>
                We welcome edits that make the post easier to understand and more
                valuable for readers. Because community members review edits,
                please try to make the post substantially better than how you
                found it, for example, by fixing grammar or adding additional
                resources and hyperlinks.
              </p>
            </div>
            <QuestionWriteBody /> */}
          <AnswerEditBody />
        </div>
        <QuestionEditSidebar />
      </div>
    </AnswerEditStyled>
  );
};

export default AnswerEdit;
