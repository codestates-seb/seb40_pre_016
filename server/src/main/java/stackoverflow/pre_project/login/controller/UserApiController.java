package stackoverflow.pre_project.login.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import stackoverflow.pre_project.config.auth.CustomUserDetails;
import stackoverflow.pre_project.login.dto.UserUpdateDto;
import stackoverflow.pre_project.login.service.UserService;
import stackoverflow.pre_project.user.entity.User;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
public class UserApiController {

    private final UserService userService;

    @PutMapping("/api/user/{id}")
    public ResponseEntity<?> update(@PathVariable long id, @Valid UserUpdateDto userUpdateDto,
                                    BindingResult bindingResult, @AuthenticationPrincipal CustomUserDetails customUserDetails){
        User userEntity = userService.update(id, userUpdateDto.toEntity());
        customUserDetails.setUser(userEntity);
        return new ResponseEntity<>(userEntity, HttpStatus.OK);
    }
}
