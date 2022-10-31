import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { editQuestionState } from "../../atoms/atom";

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
  const saveEditHandler = () => {
    //수정된 질문 fetch 요청
    console.log("수정 요청 완료");
  };

  return (
    <QuestionEditFooterContainer>
      <button onClick={saveEditHandler} className="saveEdit">
        Save Edits
      </button>
      <button className="cancel">Cancel</button>
    </QuestionEditFooterContainer>
  );
};

export default QuestionEditFooter;
