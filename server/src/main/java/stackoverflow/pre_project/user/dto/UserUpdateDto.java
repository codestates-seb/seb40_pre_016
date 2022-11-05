package stackoverflow.pre_project.user.dto;

import lombok.Getter;
import stackoverflow.pre_project.user.entity.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
public class UserUpdateDto {

    @NotBlank
    @Size(min = 3, max = 20)
    public String username;
    public String message;

    public User toEntity() {
        return User.builder()
                .username(username)
                .message(message)
                .build();

    }
}
