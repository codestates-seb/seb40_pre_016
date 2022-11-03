import * as S from '../../style/question/QuestionCompo.style';
import polygon from '../../assets/img/polygon.png';
import userImg from '../../assets/img/user.png';
import { useRecoilState } from 'recoil';
import { followQ } from '../../atoms/questionATom';
import Comment from './Comment';
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import {Viewer} from '@toast-ui/react-editor'
import { useState } from 'react';
import { useAxios } from '../../util/useAxios';
import { useMemo } from 'react';


function QuestionCompo({questionId, content, tag, vote, createdAt, user, comment}) {
  const [follow, isFollow] = useRecoilState(followQ)
  const [clickUp, setClickUp] = useState(false)
  const [clickDown, setClickDown] = useState(false)
  const onClick = () => {isFollow(!follow)}

  const voteUpClick = () => {
    if(clickDown === true){ // -1 후 클릭인 경우 => 취소
      setClickDown(false)
      // const { response, loading, error } = useAxios({
      //   method: 'POST',
      //   url: `/questions/${questionId}/vote/3`,
      // })
    }
    // 값 1 올리기
    setClickUp(true)
    setClickDown(false)
    // const { response, loading, error } = useAxios({
      //   method: 'POST',
      //   url: `/questions/${questionId}/vote/1`,
      // })
  }


  const voteDownClick = () => { 
    if(clickUp === true){ // +1 후 클릭인 경우 => 취소
      setClickUp(false)
      // const { response, loading, error } = useAxios({
      //   method: 'POST',
      //   url: `/questions/${questionId}/vote/3`,
      // })
    }
    setClickDown(true)
    setClickUp(false)
    // 값 1 내리기
    // const { response, loading, error } = useAxios({
      //   method: 'POST',
      //   url: `/questions/${questionId}/vote/2`,
      // })
  }
  
  const [addComment, setAddComment] = useState(false)
  const [commentValue, setCommentValue] = useState('')
  const onClickk = () =>{
    setAddComment(true)
  }
  const onBlur = () =>{
    setAddComment(false)
  }
  const onChange = (e) => {
    setCommentValue(e.target.value)
  }
  const onSubmit = (event) => {
    // commentValue 보내기
    setAddComment(false);
    event.preventDefault();
  }
  
    const params = useParams();

  const config = useMemo(() => {
    return {
      method: 'GET',
      url: `api/questions/${params.questionId}`,
    };
  }, [params.questionId]);
  const { response, loading, error } = useAxios(config);

  return (
    <S.QContent>
      <S.QContentLeft>
        <img onClick={voteUpClick} alt="Polygon" src={polygon} />
        <div>{vote}</div>
        <img onClick={voteDownClick} alt="Polygon" src={polygon} />

      </S.QContentLeft>
      <S.QContentRight>
        <Viewer initialValue={content} />
        <S.QCRTag>
          {tag.map((el)=> 
            <span key={el}>{el}</span>
          )}
          
        </S.QCRTag>
        <S.QCREdit>
          <S.QCRELeft>
            <button>Share</button>
            <button>Edit</button>
            <button>Delete</button>
            {follow ? (
              <button onClick={onClick}>Following</button>
            ) : (
              <button onClick={onClick}>Follow</button>
            )}
          </S.QCRELeft>
          <S.QCRERight>
            <span>{createdAt}</span>
            <div>

              <img src={userImg} alt="얼굴"></img>
              <span>{user.username}</span>

            </div>
          </S.QCRERight>
        </S.QCREdit>
        {comment.length === 0 ? null : 
          comment.map((el) => (
            <Comment commentId={el.commentId} userId={el.userId} content={el.content} createdAt={el.createdAt} />
          ))
        }
        <S.QCRComment><button onClick={onClickk}>Add a Comment</button></S.QCRComment>
        {addComment ? <form onSubmit={onSubmit}><input onChange={onChange} onBlur={onBlur} /></form> : null}
      </S.QContentRight>
    </S.QContent>
  );
}

export default QuestionCompo;
