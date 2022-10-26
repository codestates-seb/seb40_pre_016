package stackoverflow.pre_project.comment.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class CommentDto {

    @Getter
    public static class Request {
        private String content;
    }

    @Getter
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder
    public static class Response {
        private Long commentId;
        private String content;
    }

}
