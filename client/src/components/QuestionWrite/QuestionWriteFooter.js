import { QuestionWriteFooterContainer } from "../../style/QuestionWrite/QuestionWriteFooter.style";
import { newQuestionState } from "../../atoms/atom";
import { useRecoilState } from "recoil";
import AskButton from "../main/Button/AskButton";

const QuestionWriteFooter = () => {
  const [newQuestion, setNewQuestion] = useRecoilState(newQuestionState);
  const addAnswerHandler = () => {
    //fetch post 요청 부분 작성
    console.log("등록 요청 완료");
  };

  return (
    <QuestionWriteFooterContainer>
      <button onClick={addAnswerHandler}>Review your question</button>
    </QuestionWriteFooterContainer>
  );
};

export default QuestionWriteFooter;
