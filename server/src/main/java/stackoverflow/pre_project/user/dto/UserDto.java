package stackoverflow.pre_project.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class UserDto {

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response {
        private Long userId;
        private String username;
        private String email;
        private String message;
        private String createdAt;
    }
}
