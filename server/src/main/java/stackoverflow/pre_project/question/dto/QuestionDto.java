package stackoverflow.pre_project.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class QuestionDto {

    @Getter
    @Builder
    public static class Post {
        private String title;
        private String content;
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response {
        private String title;
        private String content;
    }
}
