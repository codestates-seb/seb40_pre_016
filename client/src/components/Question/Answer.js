import * as S from '../../style/question/QCommentCompo.style';
import polygon from '../../assets/img/polygon.png';
import userIMG from '../../assets/img/user.png';
import Comment from './Comment';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { timeCal } from '../../pages/Question';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoginState, loginIdstorige } from '../../atoms/atom';
import { voteAnswerValue } from '../../atoms/questionATom';

function Answer({
  questionId,
  answerId,
  content,
  vote,
  user,
  modifiedAt,
  comment,
  userId
}) {
  const [addComment, setAddComment] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const loginId = useRecoilValue(loginIdstorige);
  const loginState = useRecoilValue(isLoginState);
  const [voteVal, setVoteVal] = useRecoilState(voteAnswerValue);


  const onClick = () => {
    setAddComment(true);
  };
  const onBlur = () => {
    setAddComment(false);
  };
  const onChange = (e) => {
    setCommentValue(e.target.value);
  };
  const onSubmit = () => {
    // commentValue 보내기
    axios
      .post(
        `/api/answers/${answerId}/comments`,
        {
          content: commentValue,
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
    setAddComment(false);
  };
  const delBtn = (event) => {
    axios
      .delete(`/api/answers/${answerId}`, { withCredentials: true })
      .then(event.preventDefault())
      .then((res) => {
        if (res) {
          window.location.reload();
        }
      });
  };

  const voteUpClick = (event) => {
    if (voteVal === 2) {
      // 취소
      
      axios
        .post(
          `/api/answers/${answerId}/vote/3`,
          { data: {} },
          { withCredentials: true }
        )
        .then((res) => {
          if (res) {
            setVoteVal(1);
            window.location.reload();
          }
        });
    }
    // 값 1 올리기
    
    axios
      .post(
        `/api/answers/${answerId}/vote/1`,
        { data: {} },
        { withCredentials: true }
      )
      .then((res) => {
        if (res) {
          setVoteVal(2);
          window.location.reload();
        }
      });
  };

  const voteDownClick = (event) => {
    if (voteVal === 0) {
      // 취소
      axios
        .post(
          `/api/answers/${answerId}/vote/3`,
          { data: {} },
          { withCredentials: true }
        )
        .then((res) => {
          if (res) {
            setVoteVal(1);
            window.location.reload();
          }
        });
    }
    // 값 1 내리기
    axios
      .post(
        `/api/answers/${answerId}/vote/2`,
        { data: {} },
        { withCredentials: true }
      )
      .then((res) => {
        if (res) {
          setVoteVal(0);
          window.location.reload();
        }
      });
  };

  return (
    <S.QContent>
      {loginState ? (
        <S.QContentLeft>
          <img onClick={voteUpClick} alt="Polygon" src={polygon} />
          <div>{vote}</div>
          <img onClick={voteDownClick} alt="Polygon" src={polygon} />
        </S.QContentLeft>
      ) : (
        <S.QContentLeft>
          <img alt="Polygon" src={polygon} />
          <div>{vote}</div>
          <img alt="Polygon" src={polygon} />
        </S.QContentLeft>
      )}
      
      <S.QContentRight>
        <Viewer initialValue={content} />
        <S.QCREdit>
          <S.QCRELeft>
            <button>Share</button>

            {loginId === userId.userId?
            <>
            <Link to={`/questions/${questionId}/answeredit/${answerId}`}>
              <button>
              Edit
              </button>
            </Link>
            <button onClick={delBtn}>Delete</button>
            </>
            :
            null
            }

          </S.QCRELeft>
          <S.QCRERight>
            <span>{timeCal(modifiedAt)}</span>
            <div>
              <img src={userIMG} alt='얼굴'></img>
              <span>{user}</span>
            </div>
          </S.QCRERight>
        </S.QCREdit>
        {comment.length === 0
          ? null
          : comment.map((el) => (
              <Comment
                commentId={el.commentId}
                userId={el.userId}
                content={el.content}
                createdAt={el.createdAt}
              />
            ))}
        <S.QCRComment>
          <button onClick={onClick}>Add a Comment</button>
        </S.QCRComment>
        {addComment ? (
          <form onSubmit={onSubmit}>
            <input onChange={onChange} onBlur={onBlur} />
          </form>
        ) : null}
      </S.QContentRight>
    </S.QContent>
  );
}

export default Answer;
