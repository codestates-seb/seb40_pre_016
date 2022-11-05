import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../../atoms/atom';
import * as S from '../../style/question/QuestionHeader.style';

function QuestionHeader({ title, createdAt, modifiedAt, view }) {
  const loginState = useRecoilValue(isLoginState);

  return (
    <>
      <S.QHeader>
        <h1>{title}</h1>
        <Link to={'/askquestion'}>
          <button>Ask Question</button>
        </Link>
      </S.QHeader>
      <S.QHeaderr>
        <div>
          <span>Asked</span>
          <strong>{createdAt}</strong>
        </div>
        <div>
          <span>Modified</span>
          <strong>{modifiedAt}</strong>
        </div>
        <div>
          <span>Viewed</span>
          <strong>{view}</strong>
        </div>
      </S.QHeaderr>
    </>
  );
}

export default QuestionHeader;
