package stackoverflow.pre_project.comment.service;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.AdditionalAnswers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.dao.EmptyResultDataAccessException;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.answer.repository.AnswerRepository;
import stackoverflow.pre_project.comment.entity.Comment;
import stackoverflow.pre_project.comment.entity.CommentType;
import stackoverflow.pre_project.comment.repository.CommentRepository;
import stackoverflow.pre_project.exception.BusinessLogicException;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.repository.QuestionRepository;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;

@ExtendWith(MockitoExtension.class)
class CommentServiceTest {

    @Mock
    private QuestionRepository questionRepository;
    @Mock
    private AnswerRepository answerRepository;
    @Mock
    private CommentRepository commentRepository;
    @InjectMocks
    private CommentService commentService;

    @Test
    void createComment() {
        // given
        Long parentId = 1L;
        Long nonExistId = 2L;
        String content = "댓글입니다.";
        Question question = Question.builder().build();
        Answer answer = Answer.builder().build();

        given(questionRepository.findById(parentId))
                .willReturn(Optional.ofNullable(question));
        given(answerRepository.findById(parentId))
                .willReturn(Optional.ofNullable(answer));
        given(questionRepository.findById(nonExistId))
                .willReturn(Optional.empty());
        given(answerRepository.findById(nonExistId))
                .willReturn(Optional.empty());
        given(commentRepository.save(any(Comment.class)))
                .willAnswer(AdditionalAnswers.returnsFirstArg());

        // when
        Comment questionComment = commentService.createComment(CommentType.QUESTION, parentId, content);
        Comment answerComment = commentService.createComment(CommentType.ANSWER, parentId, content);

        // then
        assertThat(questionComment.getQuestion()).isEqualTo(question);
        assertThat(questionComment.getAnswer()).isNull();
        assertThat(questionComment.getContent()).isEqualTo(content);
        assertThat(answerComment.getQuestion()).isNull();
        assertThat(answerComment.getAnswer()).isEqualTo(answer);
        assertThat(answerComment.getContent()).isEqualTo(content);
        assertThrows(BusinessLogicException.class,
                () -> commentService.createComment(CommentType.QUESTION, nonExistId, content));
        assertThrows(BusinessLogicException.class,
                () -> commentService.createComment(CommentType.ANSWER, nonExistId, content));
    }

    @Test
    void updateComment() {
        // given
        Long commentId = 1L;
        Long nonExistId = 2L;
        String content = "수정된 댓글입니다.";
        Comment comment = Comment.builder().build();
        given(commentRepository.findById(commentId))
                .willReturn(Optional.ofNullable(comment));
        given(commentRepository.findById(nonExistId))
                .willReturn(Optional.empty());

        // when
        Comment updatedComment = commentService.updateComment(commentId, content);

        // then
        assertThat(updatedComment.getContent()).isEqualTo(content);
        assertThrows(BusinessLogicException.class,
                () -> commentService.updateComment(nonExistId, content));
    }

    @Test
    void deleteComment() {
        // given
        Long commentId = 1L;
        Long nonExistId = 2L;
        doNothing().when(commentRepository).deleteById(commentId);
        doThrow(EmptyResultDataAccessException.class).when(commentRepository).deleteById(nonExistId);

        // when
        commentService.deleteComment(commentId);

        // then
        assertThrows(BusinessLogicException.class,
                () -> commentService.deleteComment(nonExistId));
    }
}