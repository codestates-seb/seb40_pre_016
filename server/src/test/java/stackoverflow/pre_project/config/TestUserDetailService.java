package stackoverflow.pre_project.config;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import stackoverflow.pre_project.config.auth.CustomUserDetails;
import stackoverflow.pre_project.user.entity.User;
import stackoverflow.pre_project.util.TestConstant;

public class TestUserDetailService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User userEntity = TestConstant.USER;
        return new CustomUserDetails(userEntity);
    }
}
