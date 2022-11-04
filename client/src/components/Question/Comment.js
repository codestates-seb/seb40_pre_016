import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { timeCal } from '../../pages/Question';
import * as S from '../../style/question/QCommentCompo.style';

function Comment({ commentId, userId, content, createdAt }) {
  const delBtn = (event) => {
    axios
      .delete(`/api/comments/${commentId}`, { withCredentials: true })
      .then(event.preventDefault())
      .then((res) => {
        if (res) {
          window.location.reload();
        }
      });
  };
  return (
    <S.CommentSection>
      <div>
        {content}
        <div>
          - <a href='none'>{userId}</a>
        </div>
        <span>{timeCal(createdAt)}</span>
        <button>Edit</button>
        <button onClick={delBtn}>Del</button>
      </div>
    </S.CommentSection>
  );
}

export default Comment;
