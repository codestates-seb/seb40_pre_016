import * as S from '../../style/question/QuestionCompo.style';
import polygon from '../../assets/img/polygon.png';
import user from '../../assets/img/user.png';
import { useRecoilState } from 'recoil';
import { followQ } from '../../atoms/atom';
import Comment from './Comment';

function QuestionCompo() {
  const [follow, isFollow] = useRecoilState(followQ)
  const onClick = () => {
    isFollow(!follow)
  }

  return (
    <S.QContent>
      <S.QContentLeft>
        <img alt='Polygon' src={polygon} />
        <div>0</div>
        <img alt='Polygon' src={polygon} />
      </S.QContentLeft>
      <S.QContentRight>
        <div>221030 오늘도 화이팅 !!</div>
        <br />
        <div>TO DO</div>
        <br />
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
            {follow ? <button onClick={onClick}>Following</button> : <button onClick={onClick}>Follow</button>}
          </S.QCRELeft>
          <S.QCRERight>
            <span>21 years ago</span>
            <div>
              <img src={user} alt='얼굴'></img>
              <span>ID</span>
            </div>
          </S.QCRERight>
        </S.QCREdit>
        <Comment />
        <S.QCRComment>Add a Comment</S.QCRComment>
      </S.QContentRight>
    </S.QContent>
  );
}

export default QuestionCompo;
