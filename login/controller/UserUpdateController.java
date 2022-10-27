package stackoverflow.pre_project.login.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import stackoverflow.pre_project.config.auth.CustomUserDetails;
import stackoverflow.pre_project.login.dto.UserProfileDto;
import stackoverflow.pre_project.login.service.UserService;

@RequiredArgsConstructor
@Controller
public class UserUpdateController {

    private final UserService userService;

    @GetMapping("/user/{id}/profile")
    public String profile(@PathVariable long id,
                          Model model, @AuthenticationPrincipal CustomUserDetails customUserDetails){
        UserProfileDto dto = userService.profile(id, customUserDetails.getUser().getId());
        model.addAttribute("dto", dto);
        return "user/profile";
    }

    @GetMapping("/user/{id}/update")
    public String update(@PathVariable long id, @AuthenticationPrincipal CustomUserDetails customUserDetails){
        return "user/update";
    }
}
