package stackoverflow.pre_project.config.oauth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import stackoverflow.pre_project.config.auth.CustomUserDetails;
import stackoverflow.pre_project.user.entity.User;
import stackoverflow.pre_project.user.repository.UserRepository;

import java.util.Map;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class Oauth2DetailsService extends DefaultOAuth2UserService{

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException{
        OAuth2User oAuth2User = super.loadUser(userRequest);
        Map<String, Object> userInfo = oAuth2User.getAttributes();
        String username = "google_" + userInfo.get("id");
        String email = (String) userInfo.get("email");
        String password = new BCryptPasswordEncoder().encode(UUID.randomUUID().toString());

        User userEntity = userRepository.findByUsername(username);

        if(userEntity == null){
            User user = User.builder()
                    .username(username)
                    .password(password)
                    .email(email)
                    .role("ROLE_USER")
                    .build();
            return new CustomUserDetails(userRepository.save(user), oAuth2User.getAttributes());
        }else return new CustomUserDetails(userEntity, oAuth2User.getAttributes());
    }
}
