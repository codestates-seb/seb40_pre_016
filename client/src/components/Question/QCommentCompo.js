import * as S from "../../style/question/QCommentCompo.style";
import polygon from "../../assets/img/polygon.png";
import user from "../../assets/img/user.png";

function QCommentCompo() {
  return (
    <S.QComment>
      <S.QCHeader>
        <h2>1 Answers</h2>
        <div>
          Sorted by:
          <select>
            <option>Highest Score (default)</option>
            <option>Date Created (newest first)</option>
          </select>
        </div>
      </S.QCHeader>
      <S.QContent>
        <S.QContentLeft>
          <img alt="Polygon" src={polygon} />
          <div>0</div>
          <img alt="Polygon" src={polygon} />
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
                <img src={user} alt="얼굴"></img>
                <span>ID</span>
              </div>
            </S.QCRERight>
          </S.QCREdit>
          <S.QCRComment>Add a Comment</S.QCRComment>
        </S.QContentRight>
      </S.QContent>
    </S.QComment>
  );
}

export default QCommentCompo;
