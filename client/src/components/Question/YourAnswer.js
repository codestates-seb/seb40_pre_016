import * as S from "../../style/question/YourAnswer.style";
import { Editor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from "react";

function YourAnswer() {
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML()
    console.log(data)
  }
  return (
    <S.QYourAnswer>
      <form>
        <h3>Your Answer</h3>
        <Editor
          initialValue="Write Your Answers"
          placeholder="Write Your Answers"
          previewStyle="tab" // 미리보기 스타일 지정
          height="300px" // 에디터 창 높이
          initialEditType="markdown"
          ref={editorRef}
          onChange={onChange}
        />
        <button>Post Your Answer</button>
      </form>
    </S.QYourAnswer>
  );
}

export default YourAnswer;