package stackoverflow.pre_project.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class AnswerDto {
    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        private String content;
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response {
        private String content;
    }
}
