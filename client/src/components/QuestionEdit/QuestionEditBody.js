import React, { useState, useRef } from "react";
import { QuestionBodyContainer } from "../../style/QuestionWrite/QuestionWriteBody.style";

import { useRecoilState } from "recoil";
import { newQuestionState } from "../../atoms/atom";
import styled from "styled-components";
import YourAnswer from "../Question/YourAnswer";
import QuestionWriteEditor from "../QuestionWrite/QuestionWriteEditor";
import QuestionEditFooter from "./QuestionEditFooter";

const QuestionEditBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;
  flex-basis: 800px;
  background-color: white;
  max-width: 800px;
  & h1 {
    font-size: 15px;
    margin-bottom: 6px;
  }

  & p {
    color: hsl(210, 8%, 35%);
    font-size: 13px;
    margin-bottom: 7px;
  }

  & input {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px 10px;
  }

  & .tagInput-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    > ol {
      display: flex;
    }
  }

  & .tag-container {
    display: flex;
    color: #39739d;
    background-color: #e1ecf4;
    padding: 4.8px 6px;
    margin: 2px;
    gap: 5px;
    border-radius: 3px;
  }

  & .tag-name {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #39739d;
    font-size: 12px;
    white-space: nowrap;
  }

  & .tagInput-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;

    color: #39739d;
    background-color: #e1ecf4;
    border: none;
  }

  & .tag-input {
    margin-bottom: 0px;
  }
`;

const QuestionEditBody = () => {
  const [newQuestion, setNewQuestion] = useRecoilState(newQuestionState);
  // const [tagInput, setTagInput] = useState('');
  const tagInputContent = useRef();
  let tagId = useRef(0);

  const titleHandler = (e) => {
    setNewQuestion({ ...newQuestion, title: e.target.value });
  };

  // const tagsHandler = (e) => {
  //   setTagInput(e.target.value)
  // };

  const tagsAddHandler = (e) => {
    if (e.key === "Enter") {
      const tempArr = newQuestion.tags.slice();
      const tempTag = {
        id: tagId.current,
        content: e.target.value,
      };
      tagId.current++;
      tempArr.push(tempTag);
      setNewQuestion({ ...newQuestion, tags: tempArr });
      // setTagInput('');
      tagInputContent.current.value = "";
    }
  };

  const tagsDelHandler = (idx) => {
    const tempArr = newQuestion.tags.slice().filter((tag) => {
      return tag.id !== idx;
    });
    setNewQuestion({ ...newQuestion, tags: tempArr });
  };

  return (
    <QuestionEditBodyContainer>
      <div className="footer-container">
        <p>Your edit will be placed in a queue until it is peer reviewed.</p>
        <p>
          We welcome edits that make the post easier to understand and more
          valuable for readers. Because community members review edits, please
          try to make the post substantially better than how you found it, for
          example, by fixing grammar or adding additional resources and
          hyperlinks.
        </p>
      </div>

      <div className="title">
        <h1>Title</h1>
        <p>
          Be specific and imagine you’re asking a question to another person
        </p>
        <input
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          value={newQuestion.title}
          onChange={titleHandler}
        ></input>
      </div>

      <div className="body">
        <h1>Body</h1>
        <p>
          Include all the information someone would need to answer your question
        </p>
        <QuestionWriteEditor></QuestionWriteEditor>
      </div>

      <div className="tags">
        <h1>Tag</h1>
        <p>Add up to 5 tags to describe what your question is about</p>
        <div className="tagInput-container">
          <ol>
            {newQuestion.tags.map((tag) => {
              return (
                <li key={tag.id}>
                  <div className="tag-container">
                    <div className="tag-name">{tag.content}</div>
                    <button
                      className="tagInput-button"
                      onClick={() => tagsDelHandler(tag.id)}
                    >
                      X
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>
          <input
            className="tag-input"
            // value={tagInput}
            onKeyPress={tagsAddHandler}
            // onChange={tagsHandler}
            placeholder="e.g. (angular sql-server string)"
            ref={tagInputContent}
          ></input>
        </div>
      </div>
      <QuestionEditFooter />
    </QuestionEditBodyContainer>
  );
};

export default QuestionEditBody;

//태그 입력창
//태그 내용 입력  -> 엔터 입력 -> 태그 버튼 생성 후 input 안에 들어가서 표시 -> 반복 ->
