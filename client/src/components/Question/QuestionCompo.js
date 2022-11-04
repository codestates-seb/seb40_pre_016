import * as S from '../../style/question/QuestionCompo.style';
import polygon from '../../assets/img/polygon.png';
import userImg from '../../assets/img/user.png';
import { useRecoilState } from 'recoil';
import { followQ, voteValue } from '../../atoms/questionATom';
import Comment from './Comment';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function QuestionCompo({
  questionId,
  content,
  tag,
  vote,
  createdAt,
  user,
  comment,
}) {
  const [follow, isFollow] = useRecoilState(followQ);
  const [voteVal, setVoteVal] = useRecoilState(voteValue);
  const [addComment, setAddComment] = useState(false);
  const [commentValue, setCommentValue] = useState('');

  const onClick = () => {
    isFollow(!follow);
  };

  const voteUpClick = (event) => {
    if (voteVal === 0 || voteVal === 2) {
      // 취소
      setVoteVal(1);
      axios.post(`/api/questions/${questionId}/vote/3`, {data: {}},
      {withCredentials: true}).then((res) => {if(res){window.location.reload()}})
    }
    // 값 1 올리기
    setVoteVal(2);
    axios.post(`/api/questions/${questionId}/vote/1`, {data: {}},
    {withCredentials: true}).then((res) => {if(res){window.location.reload()}})

  };

  const voteDownClick = (event) => {
    if (voteVal === 0 || voteVal === 2) {
      // 취소
      setVoteVal(1);
      axios.post(`/api/questions/${questionId}/vote/3`, {data: {}},
      {withCredentials: true}).then((res) => {if(res){window.location.reload()}})
    }
    setVoteVal(0);
    // 값 1 내리기
    axios.post(`/api/questions/${questionId}/vote/2`, {data: {}},
    {withCredentials: true}).then((res) => {if(res){window.location.reload()}})

  };
  console.log(voteVal)

  const onClickk = () => {
    setAddComment(true);
  };
  const onBlur = () => {
    setAddComment(false);
  };
  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onSubmit = (event) => {
    // commentValue 보내기
    axios.post(`/api/questions/${questionId}/comments`, {
      content: commentValue,
    }, {headers: {
      'Content-Type': `application/json`,
    },
    withCredentials: true}).then((res) => {if(res){window.location.reload()}})
    setAddComment(false);
  };
  const navigate = useNavigate()

  const delBtn = () => {
    axios.delete(
      `/api/questions/${questionId}`, 
      {withCredentials: true}).then(navigate('/'))
    }

  return (
    <S.QContent>
      <S.QContentLeft>
        <img onClick={voteUpClick} alt='Polygon' src={polygon} />
        <div>{vote}</div>
        <img onClick={voteDownClick} alt='Polygon' src={polygon} />
      </S.QContentLeft>
      <S.QContentRight>
        <Viewer initialValue={content} />
        <S.QCRTag>
          {tag.map((el) => (
            <span key={el}>{el}</span>
          ))}
        </S.QCRTag>
        <S.QCREdit>
          <S.QCRELeft>
            <button>Share</button>
            <Link to={`/questions/${questionId}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={delBtn}>Delete</button>
            {follow ? (
              <button onClick={onClick}>Following</button>
            ) : (
              <button onClick={onClick}>Follow</button>
            )}
          </S.QCRELeft>
          <S.QCRERight>
            <span>{createdAt}</span>
            <div>
              <img src={userImg} alt='얼굴'></img>
              <span>{user.username}</span>
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
          <button onClick={onClickk}>Add a Comment</button>
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

export default QuestionCompo;
