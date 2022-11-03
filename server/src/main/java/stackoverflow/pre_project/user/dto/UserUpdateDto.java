package stackoverflow.pre_project.user.dto;

import lombok.*;
import stackoverflow.pre_project.user.entity.User;

import javax.validation.constraints.NotBlank;

@Data
public class UserUpdateDto {

    @NotBlank
    public String username;
    @NotBlank
    public String password;
    @NotBlank
    public String email;
    public String message;

    public User toEntity(){
        return User.builder()
                .username(username)
                .password(password)
                .email(email)
                .message(message)
                .build();
    }
}
