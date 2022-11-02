import React, { useState, useRef } from 'react';
import { QuestionBodyContainer } from '../../style/QuestionWrite/QuestionWriteBody.style';
import QuestionWriteEditor from './QuestionWriteEditor';
import { useRecoilState } from 'recoil';
import { newQuestionState } from '../../atoms/atom';

const QuestionWriteBody = () => {
  const [newQuestion, setNewQuestion] = useRecoilState(newQuestionState);
  // const [tagInput, setTagInput] = useState('');
  const tagInputContent = useRef();
  let tagId = useRef(0);

  const titleHandler = (e) => {
    setNewQuestion({ ...newQuestion, title: e.target.value });
  };

  const tagsAddHandler = (e) => {
    if (e.key === 'Enter') {
      const tempArr = newQuestion.tagNames.slice();
      const tempTag = {
        id: tagId.current,
        content: e.target.value,
      };

      tagId.current++;
      tempArr.push(tempTag);
      setNewQuestion({ ...newQuestion, tagNames: tempArr });
      // setTagInput('');
      tagInputContent.current.value = '';
    }
  };

  const tagsDelHandler = (idx) => {
    const tempArr = newQuestion.tagNames.slice().filter((tag) => {
      return tag.id !== idx;
    });
    setNewQuestion({ ...newQuestion, tagNames: tempArr });
  };

  return (
    <QuestionBodyContainer>
      <div className='title'>
        <h1>Title</h1>
        <p>
          Be specific and imagine you’re asking a question to another person
        </p>
        <input
          placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
          value={newQuestion.title}
          onChange={titleHandler}
        ></input>
      </div>

      <div className='body'>
        <h1>Body</h1>
        <p>
          Include all the information someone would need to answer your question
        </p>
        <QuestionWriteEditor></QuestionWriteEditor>
      </div>

      <div className='tags'>
        <h1>Tag</h1>
        <p>Add up to 5 tags to describe what your question is about</p>
        <div className='tagInput-container'>
          <ol>
            {newQuestion.tagNames.map((tag) => {
              return (
                <li key={tag.id}>
                  <div className='tag-container'>
                    <div className='tag-name'>{tag.content}</div>
                    <button
                      className='tagInput-button'
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
            className='tag-input'
            // value={tagInput}
            onKeyPress={tagsAddHandler}
            // onChange={tagsHandler}
            placeholder='e.g. (angular sql-server string)'
            ref={tagInputContent}
          ></input>
        </div>
      </div>
    </QuestionBodyContainer>
  );
};

export default QuestionWriteBody;

//태그 입력창
//태그 내용 입력  -> 엔터 입력 -> 태그 버튼 생성 후 input 안에 들어가서 표시 -> 반복 ->
