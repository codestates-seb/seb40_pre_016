package stackoverflow.pre_project.tag.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class TagDto {

    @Getter
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder
    public static class Response {
        private Long tagId;
        private String name;
        private int questionCount;
    }

}
