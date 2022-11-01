package stackoverflow.pre_project.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import stackoverflow.pre_project.comment.dto.CommentDto;
import stackoverflow.pre_project.user.dto.UserDto;

import java.time.LocalDateTime;
import java.util.List;

public class AnswerDto {

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Request {
        private String content;
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response {
        private Long answerId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private int voteCount;
        private UserDto.Response user;
        private List<CommentDto.Response> comments;
    }
}
