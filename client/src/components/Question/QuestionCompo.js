import * as S from "../../style/question/QuestionCompo.style";
import polygon from "../../assets/img/polygon.png";
import user from "../../assets/img/user.png";

function QuestionCompo() {
  return (
    <S.QContent>
      <S.QContentLeft>
        <img alt="Polygon" src={polygon} />
        <div>0</div>
        <img alt="Polygon" src={polygon} />
      </S.QContentLeft>
      <S.QContentRight>
        <div>221026 오늘도 화이팅 !!</div>
        <br />
        <div>오늘 할일</div>
        <br />
        <div>1 Q 상세 페이지 마크업 완료하기</div>
        <br />
        <div>✅ Question </div>
        <div>✅ Comment</div>
        <div>1-3 Your Answer</div>
        <div>1-3-1 toastUI</div>
        <br />
        <br />
        <div>✅ Q 상세 페이지 컴포넌트 refactoring</div>
        <S.QCRTag>
          <span>java</span>
        </S.QCRTag>
        <S.QCREdit>
          <S.QCRELeft>
            <button>Share</button>
            <button>Edit</button>
            <button>Delete</button>
            <button>Following</button>
          </S.QCRELeft>
          <S.QCRERight>
            <span>21 years ago</span>
            <div>
              <img src={user} alt="얼굴"></img>
              <span>ID</span>
            </div>
          </S.QCRERight>
        </S.QCREdit>
        <S.QCRComment>Add a Comment</S.QCRComment>
      </S.QContentRight>
    </S.QContent>
  );
}

export default QuestionCompo;
