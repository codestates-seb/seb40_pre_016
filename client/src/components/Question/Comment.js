import axios from 'axios';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loginIdstorige } from '../../atoms/atom';
import { timeCal } from '../../pages/Question';
import * as S from '../../style/question/QCommentCompo.style';

function Comment({ commentId, userId, content, createdAt }) {
  const [check, setCheck] = useState(false);
  const [changeComment, setChangeComment] = useState('');
  const loginId = useRecoilValue(loginIdstorige);

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

  const showEdit = () => {
    setCheck(true);
  };

  const onBlur = () => {
    setCheck(false);
  };
  const onChange = (e) => {
    setChangeComment(e.target.value);
    console.log(changeComment);
  };

  const onSubmit = () => {
    // commentValue 보내기
    axios
      .patch(
        `/api/comments/${commentId}`,
        {
          content: changeComment,
        },
        {
          headers: {
            'Content-Type': `application/json`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res) {
          window.location.reload();
        }
      });
    setCheck(false);
  };

  return (
    <S.CommentSection>
      {loginId === userId ?
      <>
      <div>
        {content}
        <div>
          -<a href='none'>{userId}</a>
        </div>
        <span>{timeCal(createdAt)}</span>
        <button onClick={showEdit}>Edit</button>
        <button onClick={delBtn}>Del</button>
      </div>
      {check ? (
        <form onSubmit={onSubmit}>
          <input
            defaultValue={content}
            placeholder={'수정할 내용을 써주십쇼'}
            onChange={onChange}
            onBlur={onBlur}
          />
        </form>
      ) : null}
      </> : 
      <div>
      {content}
      <div>
        -<a href='none'>{userId}</a>
      </div>
      <span>{timeCal(createdAt)}</span>
    </div>
      }
    </S.CommentSection>
  );
}

export default Comment;
