package stackoverflow.pre_project.comment.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.comment.dto.CommentDto;
import stackoverflow.pre_project.comment.entity.Comment;
import stackoverflow.pre_project.comment.entity.CommentType;
import stackoverflow.pre_project.comment.mapper.CommentMapper;
import stackoverflow.pre_project.comment.service.CommentService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class CommentController {

    private final CommentMapper commentMapper;
    private final CommentService commentService;

    @PostMapping("/questions/{question-id}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public CommentDto.Response postQuestionComment(@Positive @PathVariable("question-id") Long questionId,
                                                   @Valid @RequestBody CommentDto.Request commentDto) {
        Comment comment = commentService.createComment(
                CommentType.QUESTION, questionId, commentDto.getContent());
        return commentMapper.of(comment);
    }

    @PostMapping("/answers/{answer-id}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public CommentDto.Response postAnswerComment(@PathVariable("answer-id") Long answerId,
                                                 @RequestBody CommentDto.Request commentDto) {
        Comment comment = commentService.createComment(
                CommentType.ANSWER, answerId, commentDto.getContent());
        return commentMapper.of(comment);
    }

    @PatchMapping("/comments/{comment-id}")
    public CommentDto.Response patchAnswerComment(@PathVariable("comment-id") Long commentId,
                                                  @RequestBody CommentDto.Request commentDto) {
        Comment comment = commentService.updateComment(commentId, commentDto.getContent());
        return commentMapper.of(comment);
    }

    @DeleteMapping("/comments/{comment-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAnswerComment(@PathVariable("comment-id") Long commentId) {
        commentService.deleteComment(commentId);
    }

}
