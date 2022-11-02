import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { editQuestionState } from '../../atoms/atom';
import { useAxios } from '../../util/useAxios';

const AnswerEditFooterContainer = styled.div`
  margin-top: 20px;
  /* padding-bottom: 50px; */
  display: flex;

  & .saveEdit {
    padding: 2px 9px;
    height: 38px;
    background-color: #0a95ff;
    color: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    font-size: 13px;
    margin-bottom: 12px;
    &:hover {
      cursor: pointer;
      background-color: rgb(57, 113, 199);
    }
  }

  & .cancel {
    padding: 10px;
    margin: 0px 0px 0px 10px;
    border: none;
    background-color: white;
    color: hsl(206, 100%, 40%);
    font-size: 13px;
    height: 38px;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background-color: rgb(211, 231, 251);
    }
  }
`;

const AnswerEditFooter = () => {
  const [editQuestion, setEditQuestion] = useRecoilState(editQuestionState);
  let postData = Object.assign({}, editQuestion);
  const { response, loading, error, clickFetchFunc } = useAxios(
    {
      method: 'POST',
      url: 'tasks.json',
      headers: {
        'Content-Type': `application/json`,
      },
      data: JSON.stringify(postData),
    },
    false
  );

  const saveEditHandler = () => {
    //수정된 질문 fetch 요청
    clickFetchFunc({
      method: 'PATCH',
      // url: 'tasks.json',
      url: '/api/questions/1',
      headers: {
        'Content-Type': `application/json`,
      },
      data: postData,
    });
    console.log('수정 요청 완료');
  };

  return (
    <AnswerEditFooterContainer>
      <button onClick={saveEditHandler} className='saveEdit'>
        Save Edits
      </button>
      <button className='cancel'>Cancel</button>
    </AnswerEditFooterContainer>
  );
};

export default AnswerEditFooter;
