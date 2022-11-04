package stackoverflow.pre_project.login.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import stackoverflow.pre_project.user.entity.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Builder
public class SignupDto {

    @NotBlank
    @Size(min = 3, max = 20)
    private String username;
    @NotBlank
    @Size(min = 3, max = 20)
    private String password;
    @Email
    private String email;
    public User toEntity() {
        return User.builder()
                .username(username)
                .password(password)
                .email(email)
                .build();
    }

}
