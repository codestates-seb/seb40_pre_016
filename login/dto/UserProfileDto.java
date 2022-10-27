package stackoverflow.pre_project.login.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import stackoverflow.pre_project.user.entity.User;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileDto {
    private User user;

    private boolean OwnerState;

    public void setUser(User user) {
        this.user = user;
    }

    public void setOwnerState(boolean b) {
        this.OwnerState = b;
    }
}
