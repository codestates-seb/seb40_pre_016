package stackoverflow.pre_project.user.dto;

import lombok.*;
import stackoverflow.pre_project.user.entity.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class UserUpdateDto {

    @NotBlank
    @Size(min = 3, max = 20)
    public String username;
    @NotBlank
    @Size(min = 3, max = 100)
    public String password;
    @Email
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
