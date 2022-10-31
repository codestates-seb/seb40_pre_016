import * as S from '../../style/question/QCommentCompo.style';
import Answer from './Answer';


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
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </S.QComment>
  );
}

export default QCommentCompo;
