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
        <div>221027 오늘도 화이팅 !!</div>
        <br />
        <div>TO DO</div>
        <br />
        <div>after merge</div>
        <br />
        <div>ask question 이동</div>
        <div>answer filter 정리</div>
        <br />
        <div>기능 without API</div>
        <br />
        <br />
        <div>유효성검사</div>
        <br />
        <div>answer 제출시 30자 이상</div>
        <div>유효성검사</div>
        <br />
        <div>기능 with API</div>
        <br />
        <br />
        <div>READ</div>
        <div>CREATE</div>
        <div>DELETE</div>
        <div>UPDATE</div>
        <br />
        <br />
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
