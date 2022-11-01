package stackoverflow.pre_project.login.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.config.auth.CustomUserDetails;
import stackoverflow.pre_project.login.dto.UserUpdateDto;
import stackoverflow.pre_project.login.service.UserService;
import stackoverflow.pre_project.user.entity.User;

import javax.validation.Valid;
import javax.websocket.server.PathParam;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserApiController {

    private final UserService userService;

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable long id, @Valid UserUpdateDto userUpdateDto,
                                    BindingResult bindingResult, @AuthenticationPrincipal CustomUserDetails customUserDetails){
        User userEntity = userService.update(id, userUpdateDto.toEntity());
        customUserDetails.setUser(userEntity);
        return new ResponseEntity<>(userEntity, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> userList(@AuthenticationPrincipal CustomUserDetails customUserDetails,
                                      @PageableDefault(size = 30, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable) { //
        Page<User> userList = userService.userList(pageable);
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }
}
