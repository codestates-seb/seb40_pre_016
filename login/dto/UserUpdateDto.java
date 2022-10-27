package stackoverflow.pre_project.login.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import stackoverflow.pre_project.user.entity.User;

import javax.validation.constraints.NotBlank;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
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
