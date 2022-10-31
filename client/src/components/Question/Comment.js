import * as S from '../../style/question/QCommentCompo.style';

function Comment () {   // 이 안에서 div 부분을 이용해 복붙

    return (
        <S.CommentSection>
            <div>댓글을 쓰지마소 <div>- <a href='none'>이름</a></div><span>날짜</span></div>
        </S.CommentSection>
    )
}

export default Comment;