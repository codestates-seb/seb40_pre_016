import * as S from '../../style/question/QCommentCompo.style';
import polygon from '../../assets/img/polygon.png';
import user from '../../assets/img/user.png';
import Comment from './Comment';

function Answer () {
    return (
        <S.QContent>
        <S.QContentLeft>
          <img alt='Polygon' src={polygon} />
          <div>0</div>
          <img alt='Polygon' src={polygon} />
        </S.QContentLeft>
        <S.QContentRight>
          <div>여기는 답변입니다</div>
          <S.QCREdit>
            <S.QCRELeft>
              <button>Share</button>
              <button>Edit</button>
              <button>Delete</button>
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
    )
}

export default Answer;