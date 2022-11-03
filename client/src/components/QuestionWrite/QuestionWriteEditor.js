import * as S from '../../style/question/YourAnswer.style';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { editorFocus, newQuestionState } from '../../atoms/atom';

function QuestionWriteEditor() {
  const editorRef = useRef();
  const [newQuestion, setNewQuestion] = useRecoilState(newQuestionState);
  const [check, isCheck] = useRecoilState(editorFocus);

  const contentHandler = () => {
    // const data = editorRef.current.getInstance().getHTML();
    const data = editorRef.current.getInstance().getMarkdown();
    console.log(data);
    if (data.length < 30) {
      console.log('nope');
    }
    setNewQuestion({ ...newQuestion, content: data });
  };

  const onFocus = () => {
    isCheck(1);
  };

  const onBlur = () => {
    isCheck(0);
  };

  return (
    <>
      <S.EditorBox check={check}>
        <Editor
          initialValue={newQuestion.content}
          initialEditType='markdown'
          // placeholder='Write Your Answers'
          previewStyle='tab' // 미리보기 스타일 지정
          height='500px' // 에디터 창 높이
          ref={editorRef}
          onChange={contentHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          autofocus={false}
        />
      </S.EditorBox>
    </>
  );
}

export default QuestionWriteEditor;
