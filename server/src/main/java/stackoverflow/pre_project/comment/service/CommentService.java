package stackoverflow.pre_project.comment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.answer.repository.AnswerRepository;
import stackoverflow.pre_project.comment.entity.Comment;
import stackoverflow.pre_project.comment.entity.CommentType;
import stackoverflow.pre_project.comment.repository.CommentRepository;
import stackoverflow.pre_project.exception.BusinessLogicException;
import stackoverflow.pre_project.exception.ExceptionCode;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.repository.QuestionRepository;
import stackoverflow.pre_project.user.entity.User;

@Service
@Transactional
@RequiredArgsConstructor
public class CommentService {

    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final CommentRepository commentRepository;

    public Comment createComment(CommentType type, Long parentId, String content, User user) {
        Comment.CommentBuilder builder = Comment.builder().user(user).content(content);
        switch (type) {
            case QUESTION:
                Question question = questionRepository.findById(parentId)
                        .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
                return commentRepository.save(builder.question(question).build());
            case ANSWER:
                Answer answer = answerRepository.findById(parentId)
                        .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
                return commentRepository.save(builder.answer(answer).build());
            default:
                throw new BusinessLogicException(ExceptionCode.COMMENT_TYPE_NOT_FOUND);
        }
    }

    public Comment updateComment(Long commentId, String content, User user) {
        Comment comment = findVerifyComment(commentId);
        verifyUserAndComment(user, comment);

        comment.setContent(content);
        return comment;
    }

    public void deleteComment(Long commentId, User user) {
        Comment comment = findVerifyComment(commentId);
        verifyUserAndComment(user, comment);

        commentRepository.deleteById(commentId);
    }

    private Comment findVerifyComment(Long commentId) {
        return commentRepository.findById(commentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
    }

    private void verifyUserAndComment(User user, Comment comment) {
        if (!comment.getUser().getId().equals(user.getId())) {
            throw new BusinessLogicException(ExceptionCode.FORBIDDEN);
        }
    }

}
