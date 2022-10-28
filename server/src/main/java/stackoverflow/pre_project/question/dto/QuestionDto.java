package stackoverflow.pre_project.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

public class QuestionDto {

    @Getter
    @Builder
    public static class Request {
        private String title;
        private String content;
        private List<String> tagNames;
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response {
        private String title;
        private String content;
        private List<String> tagNames;
    }
}
