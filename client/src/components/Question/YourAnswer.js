import * as S from '../../style/question/YourAnswer.style';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { answerFocus } from '../../atoms/atom';

function YourAnswer() {
  const editorRef = useRef();
  const [check, isCheck] = useRecoilState(answerFocus);


  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    if(data.length < 30) {
      console.log("nope")
    }
    console.log(data)
  }

  const onFocus = () => {
    isCheck(true)
  }

  const onBlur = () => {
    isCheck(false)
  }

  return (
    <S.QYourAnswer check={check}>
      <form>
        <h3>Your Answer</h3>
        <div>
          <Editor
            initialValue='Write Your Answers'
            placeholder='Write Your Answers'
            previewStyle='tab' // 미리보기 스타일 지정
            height='300px' // 에디터 창 높이
            initialEditType='markdown'
            ref={editorRef}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <button>Post Your Answer</button>
      </form>
    </S.QYourAnswer>
  );
}

export default YourAnswer;