import * as S from "../../style/question/QuestionHeader.style";

function QuestionHeader() {
  return (
    <>
      <S.QHeader>
        <h1>안녕하세요 제목이에오</h1>
        <button>Ask Question</button>
      </S.QHeader>
      <S.QHeaderr>
        <div>
          <span>Asked</span>
          <strong>21 hours ago</strong>
        </div>
        <div>
          <span>Modified</span>
          <strong>21 hours ago</strong>
        </div>
        <div>
          <span>Viewed</span>
          <strong>500</strong>
        </div>
      </S.QHeaderr>
    </>
  );
}

export default QuestionHeader;
