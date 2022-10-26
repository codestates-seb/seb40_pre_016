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
        <div>TO DO</div>
        <br />
        <div>0 css </div>
        <div>0-1 border-bottom 선 </div>
        <div>0-2 margin-left 관리 </div>
        <br />
        <br />
        <div>1 기능 without api</div>
        <br />
        <div>1-1 Header</div>
        <div>1-1-1 버튼 onClick</div>
        <div>1-1-2 AMV - ago / hover</div>
        <br />
        <div>1-2 Question</div>
        <div>1-2-1 추천</div>
        <div>1-2-2 Delete</div>
        <div>1-2-3 Following</div>
        <br />
        <div>1-3 Comment</div>
        <div>1-3-1 추천</div>
        <div>1-3-2 Delete</div>
        <div>1-3-2 Following</div>
        <br />
        <div>1-4 Your Answer</div>
        <div>1-4-1 submit</div>
        <br />
        <br />
        <div>DONE</div>
        <br />
        <div>✅ Q 상세 페이지 마크업 완료하기</div>
        <div>✅ Question</div>
        <div>✅ Comment</div>
        <div>✅ Your Answer</div>
        <div>✅ Q 상세 페이지 컴포넌트 refactoring</div>
        <S.QCRTag>
          <span>JavaScript</span>
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
