package stackoverflow.pre_project.comment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.answer.repository.AnswerRepository;
import stackoverflow.pre_project.comment.entity.Comment;
import stackoverflow.pre_project.comment.entity.CommentType;
import stackoverflow.pre_project.comment.repository.CommentRepository;
import stackoverflow.pre_project.exception.BusinessLogicException;
import stackoverflow.pre_project.exception.ExceptionCode;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.repository.QuestionRepository;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final CommentRepository commentRepository;

    public Comment createComment(CommentType type, Long parentId, String content) {
        Comment.CommentBuilder builder = Comment.builder().content(content);
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

    public Comment updateComment(Long commentId, String content) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        comment.setContent(content);
        return comment;
    }

    public void deleteComment(Long commentId) {
        try {
            commentRepository.deleteById(commentId);
        } catch (IllegalArgumentException exception) {
            throw new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND);
        }
    }

}
