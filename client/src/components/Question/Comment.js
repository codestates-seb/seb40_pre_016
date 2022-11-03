import { timeCal } from '../../pages/Question';
import * as S from '../../style/question/QCommentCompo.style';

function Comment ({commentId, userId, content, createdAt}) {
    return (
        <S.CommentSection>
            <div>{content}<div>- <a href='none'>{userId}</a></div><span>{timeCal(createdAt)}</span><button>Edit</button><button>Del</button></div>
        </S.CommentSection>
    )
}

export default Comment;

