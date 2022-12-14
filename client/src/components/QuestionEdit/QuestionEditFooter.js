import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { editQuestionState } from '../../atoms/atom';
import { useAxios } from '../../util/useAxios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const QuestionEditFooterContainer = styled.div`
  /* padding-top: 20px; */
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

const QuestionEditFooter = () => {
  const [editQuestion, setEditQuestion] = useRecoilState(editQuestionState);
  let postData = Object.assign({}, editQuestion);
  const navigate = useNavigate();
  const params = useParams();
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
  const makeNewTagsArray = () => {
    let tempArr = postData.tagNames.map((el) => {
      return el.content;
    });
    postData = { ...postData, tagNames: tempArr };
  };

  const saveEditHandler = () => {
    //수정된 질문 fetch 요청
    makeNewTagsArray();

    clickFetchFunc({
      method: 'PATCH',
      // url: 'tasks.json',
      url: `/api/questions/${params.questionId}`,
      headers: {
        'Content-Type': `application/json`,
      },
      withCredentials: true,
      data: postData,
    });

    setEditQuestion({
      title: '',
      content: ' ',
      tagNames: [],
    });
  };

  const onClick = () =>{
    navigate(-1)
  }

  useEffect(() => {
    //새 질문의 id값으로 페이지 이동
    response && navigate(`/questions/${response + ''}`);
  }, [response]);
  return (
    <QuestionEditFooterContainer>
      <button onClick={saveEditHandler} className='saveEdit'>
        Save Edits
      </button>
      <button onClick={onClick} className='cancel'>Cancel</button>
    </QuestionEditFooterContainer>
  );
};

export default QuestionEditFooter;
