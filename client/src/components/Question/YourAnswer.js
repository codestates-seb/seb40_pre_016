import * as S from '../../style/question/YourAnswer.style';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { answer, answerFocus } from '../../atoms/questionATom';
import { useState } from 'react';
import styled from 'styled-components';
import { useAxios } from '../../util/useAxios';
import axios from 'axios';

const ErrorBox = styled.div`
  margin-top: 15px;
  font-size: 13px;
  color: red;
  border: none;
`;

function YourAnswer({ questionId }) {
  const editorRef = useRef();
  const [check, isCheck] = useRecoilState(answerFocus);
  const [answerContent, isAnswerContent] = useRecoilState(answer);
  const [subError, setSubError] = useState('');

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();

    if (data.length > 30) {
      setSubError('');
    }
    isAnswerContent(data);
  };

  const onSubmit = (event) => {
    if (answerContent.length < 30) {
      //조건 30자 넘어야됨
      isCheck(2);
      setSubError('Body must be at least 30 characters.');
      event.preventDefault();
    } else {
      axios
        .post(
          `/api/questions/${questionId}/answers`,
          {
            content: answerContent,
          },
          {
            headers: {
              'Content-Type': `application/json`,
            },
            withCredentials: true,
          }
        )
        .then(event.preventDefault())
        .then((res) => {
          if (res) {
            window.location.reload();
          }
        });
    }
  };

  const onFocus = () => {
    isCheck(1);
  };

  const onBlur = () => {
    isCheck(0);
  };

  return (
    <S.QYourAnswer>
      <form onSubmit={onSubmit}>
        <h3>Your Answer</h3>
        <S.EditorBox check={check}>
          <Editor
            initialValue=' '
            placeholder='Write Your Answers'
            previewStyle='tab' // 미리보기 스타일 지정
            height='300px' // 에디터 창 높이
            initialEditType='markdown'
            ref={editorRef}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            autofocus={false}
          />
        </S.EditorBox>
        {subError !== '' ? <ErrorBox>{subError}</ErrorBox> : null}
        <button type={'submit'}>Post Your Answer</button>
      </form>
    </S.QYourAnswer>
  );
}

export default YourAnswer;
