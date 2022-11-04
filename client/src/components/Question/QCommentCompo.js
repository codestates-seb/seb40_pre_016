import { useState } from 'react';
import * as S from '../../style/question/QCommentCompo.style';
import Answer from './Answer';

function QCommentCompo({ questionId, answers}) {
  const [filterValue, setFilterValue] = useState(1)
  const showValue = (e) => {
    if(e.target.value === 1){
      answers.sort((a,b) => a.voteCount - b.voteCount)
      setFilterValue(1)
    }
    if(e.target.value === 2){
      answers.sort((a,b) => a.createdAt - b.createdAt)
      setFilterValue(2)
    }
    console.log(answers)
  }
  
  return (
    <S.QComment>
      <S.QCHeader>
        <h2>{answers.length === undefined ? "0 Answers" : `${answers.length} Answers`}</h2>
        <div>
          Sorted by:
          <select onChange={showValue}>
            <option value={1}>Highest Score (default)</option>
            <option value={2}>Date Created (newest first)</option>
          </select>

        </div>
      </S.QCHeader>
      {/* {filterValue === 1 ? "hi" : "hello"} */}
      {answers.map((el) => (
        <Answer key={el.answerId} answerId={el.answerId} vote={el.voteCount} content={el.content} user={el.user.username} modifiedAt={el.modifiedAt} comment={el.comments} />
      ))}
    
    </S.QComment>
  );
}

export default QCommentCompo;
