import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { editAnswerState } from '../../atoms/atom';
import { questionData } from '../../atoms/questionATom';
import { useParams } from 'react-router-dom';

function AnswerEditEditor() {
  const [data, setData] = useRecoilState(questionData);
  const editorRef = useRef();
  const [editAnswer, setEditAnswer] = useRecoilState(editAnswerState);
  const params = useParams();
  console.log('현재 답변아이디는', params.answerId);
  //에디터에 초기값 설정
  let currentAnswer = [];
  currentAnswer = data.answers.filter((el) => {
    return +params.answerId === el.answerId;
  });
  const initVal = currentAnswer[0].content;

  const contentHandler = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log('댓글수정내용', data);
    if (data.length < 30) {
      console.log('nope');
    }
    setEditAnswer({ ...editAnswer, content: data });
  };

  // const onFocus = () => {
  //   isCheck(true)
  // }

  // const onBlur = () => {
  //   isCheck(false)
  // }

  return (
    <>
      <div>
        <Editor
          initialValue={initVal}
          initialEditType='markdown'
          // placeholder='Write Your Answers'
          previewStyle='tab' // 미리보기 스타일 지정
          height='500px' // 에디터 창 높이
          ref={editorRef}
          onChange={contentHandler}
          autofocus={false}
        />
      </div>
    </>
  );
}

export default AnswerEditEditor;
