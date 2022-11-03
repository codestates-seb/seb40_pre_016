import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { editQuestionState, editAnswerState } from '../../atoms/atom';
import { useAxios } from '../../util/useAxios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [editAnswer, setEditAnswer] = useRecoilState(editAnswerState);
  let postData = Object.assign({}, editAnswer);
  const navigate = useNavigate();
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
    //수정된 댓글 fetch 요청
    console.log('포스트데이터는', postData);
    clickFetchFunc({
      method: 'PATCH',
      // url: 'tasks.json',
      url: `/comments/1`, //코멘트 아이디 넣어야함
      headers: {
        'Content-Type': `application/json`,
      },
      data: postData,
    });
    setEditAnswer({
      content: ' ',
    });
  };

  console.log('수정 요청 완료');

  useEffect(() => {
    //새 질문의 id값으로 페이지 이동
    response && console.log(response);
    response && navigate(`/question/1`);
  }, [response]);
  console.log('답변댓글 수정 요청 응답은', response);
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
