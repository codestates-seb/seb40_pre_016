import * as S from '../../style/question/QCommentCompo.style';
import polygon from '../../assets/img/polygon.png';
import userIMG from '../../assets/img/user.png';
import Comment from './Comment';
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import {Viewer} from '@toast-ui/react-editor'
import { timeCal } from '../../pages/Question';
import { useState } from 'react';


function Answer ({content, vote, user, modifiedAt, comment}) {
  const [addComment, setAddComment] = useState(false)
  const [commentValue, setCommentValue] = useState('')
  const onClick = () =>{
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

    return (
        <S.QContent>
        <S.QContentLeft>
          <img alt='Polygon' src={polygon} />
          <div>{vote}</div>
          <img alt='Polygon' src={polygon} />
        </S.QContentLeft>
        <S.QContentRight>
          <Viewer initialValue={content} />
          <S.QCREdit>
            <S.QCRELeft>
              <button>Share</button>
              <button>Edit</button>
              <button>Delete</button>
            </S.QCRELeft>
            <S.QCRERight>
              <span>{timeCal(modifiedAt)}</span>
              <div>
                <img src={userIMG} alt='얼굴'></img>
                <span>{user}</span>
              </div>
            </S.QCRERight>
          </S.QCREdit>
          {comment.length === 0 ? null : 
          comment.map((el) => (
            <Comment commentId={el.commentId} userId={el.userId} content={el.content} createdAt={el.createdAt} />
          ))
        }          <S.QCRComment><button onClick={onClick}>Add a Comment</button></S.QCRComment>
          {addComment ? <form onSubmit={onSubmit}><input onChange={onChange} onBlur={onBlur} /></form> : null}
        </S.QContentRight>
      </S.QContent>
    )
}

export default Answer;