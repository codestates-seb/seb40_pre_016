import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { useRef } from "react";
import { useRecoilState } from "recoil";
import { editAnswerState, editQuestionState } from "../../atoms/atom";

function AnswerEditEditor() {
  const editorRef = useRef();
  const [editAnswer, setEditAnswer] = useRecoilState(editAnswerState);

  const contentHandler = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
    if (data.length < 30) {
      console.log("nope");
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
          initialValue={editAnswer.content}
          initialEditType="markdown"
          // placeholder='Write Your Answers'
          previewStyle="tab" // 미리보기 스타일 지정
          height="500px" // 에디터 창 높이
          ref={editorRef}
          onChange={contentHandler}
          autofocus={false}
        />
      </div>
    </>
  );
}

export default AnswerEditEditor;
