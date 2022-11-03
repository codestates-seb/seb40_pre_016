package stackoverflow.pre_project.comment.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class CommentDto {

    @Getter
    public static class Request {
        @NotBlank
        private String content;
    }

    @Getter
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder
    public static class Response {
        private Long commentId;
        private Long userId;
        private String content;
        private LocalDateTime createdAt;
    }
}
