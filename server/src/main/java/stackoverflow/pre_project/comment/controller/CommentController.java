package stackoverflow.pre_project.comment.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.comment.dto.CommentDto;
import stackoverflow.pre_project.comment.entity.Comment;
import stackoverflow.pre_project.comment.entity.CommentType;
import stackoverflow.pre_project.comment.mapper.CommentMapper;
import stackoverflow.pre_project.comment.service.CommentService;
import stackoverflow.pre_project.config.auth.CustomUserDetails;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
@Validated
public class CommentController {

    private final CommentMapper commentMapper;
    private final CommentService commentService;

    @PostMapping("/questions/{question-id}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public CommentDto.Response postQuestionComment(@Positive @PathVariable("question-id") Long questionId,
                                                   @Valid @RequestBody CommentDto.Request commentDto,
                                                   @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        Comment comment = commentService.createComment(
                CommentType.QUESTION, questionId, commentDto.getContent(), customUserDetails.getUser());
        return commentMapper.commentToResponse(comment);
    }

    @PostMapping("/answers/{answer-id}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public CommentDto.Response postAnswerComment(@Positive @PathVariable("answer-id") Long answerId,
                                                 @Valid @RequestBody CommentDto.Request commentDto,
                                                 @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        Comment comment = commentService.createComment(
                CommentType.ANSWER, answerId, commentDto.getContent(), customUserDetails.getUser());
        return commentMapper.commentToResponse(comment);
    }

    @PatchMapping("/comments/{comment-id}")
    public CommentDto.Response patchAnswerComment(@Positive @PathVariable("comment-id") Long commentId,
                                                  @Valid @RequestBody CommentDto.Request commentDto,
                                                  @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        Comment comment = commentService.updateComment(commentId, commentDto.getContent(), customUserDetails.getUser());
        return commentMapper.commentToResponse(comment);
    }

    @DeleteMapping("/comments/{comment-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAnswerComment(@Positive @PathVariable("comment-id") Long commentId,
                                    @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        commentService.deleteComment(commentId, customUserDetails.getUser());
    }

}
