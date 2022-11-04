package stackoverflow.pre_project.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.config.auth.CustomUserDetails;
import stackoverflow.pre_project.dto.MultiResponseDto;
import stackoverflow.pre_project.user.dto.UserProfileDto;
import stackoverflow.pre_project.user.dto.UserUpdateDto;
import stackoverflow.pre_project.user.service.UserService;
import stackoverflow.pre_project.user.dto.UserDto;
import stackoverflow.pre_project.user.entity.User;
import stackoverflow.pre_project.user.mapper.UserMapper;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
@Validated
public class UserApiController {

    private final UserMapper userMapper;
    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<?> select(@AuthenticationPrincipal CustomUserDetails customUserDetails, @PathVariable @Positive long id){
        UserProfileDto userProfileDto = userService.profile(customUserDetails.getUser().getId(), id);
        return new ResponseEntity<>(userProfileDto, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable @Positive long id, @Valid UserUpdateDto userUpdateDto,
                                    BindingResult bindingResult, @AuthenticationPrincipal CustomUserDetails customUserDetails){
        User userEntity = userService.update(customUserDetails.getUser().getId(), userUpdateDto.toEntity(), id);
        customUserDetails.setUser(userEntity);
        return new ResponseEntity<>(userEntity, HttpStatus.OK);
    }

    @GetMapping
    public MultiResponseDto<UserDto.Response> userLists(@PageableDefault(size = 30, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable) { //
        Page<User> pages = userService.pageList(pageable);
        return MultiResponseDto.of(pages.stream()
                .map(userMapper::userToUserResponse)
                .collect(Collectors.toList()), pages);
    }
}
