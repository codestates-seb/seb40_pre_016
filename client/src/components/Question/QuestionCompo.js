import * as S from '../../style/question/QuestionCompo.style';
import polygon from '../../assets/img/polygon.png';
import user from '../../assets/img/user.png';

function QuestionCompo() {
  return (
    <S.QContent>
      <S.QContentLeft>
        <img alt='Polygon' src={polygon} />
        <div>0</div>
        <img alt='Polygon' src={polygon} />
      </S.QContentLeft>
      <S.QContentRight>
        <div>221026 오늘도 화이팅 !!</div>
        <br />
        <div>TO DO</div>
        <br />
        <div>1 기능 without API</div>
        <br />
        <div>1-1 Header</div>
        <div>1-1-1 버튼 onClick = ask question 컴포넌트 완성되면 하자</div>
        <div>1-1-2 AMV - ago / hover</div>
        <br />
        <br />
        <div>2 기능 with API</div>
        <br />
        <br />
        <div>2-1 READ</div>
        <div>2-3 CREATE</div>
        <div>2-3 DELETE</div>
        <div>2-4 UPDATE</div>
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
              <img src={user} alt='얼굴'></img>
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
