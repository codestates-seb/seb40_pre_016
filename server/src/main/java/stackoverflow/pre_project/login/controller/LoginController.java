package stackoverflow.pre_project.login.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import stackoverflow.pre_project.login.dto.SignupDto;
import stackoverflow.pre_project.login.service.LoginService;
import stackoverflow.pre_project.user.entity.User;

import javax.validation.Valid;

@RequiredArgsConstructor
@Controller
@RequestMapping("/auth")
public class LoginController {

    private final LoginService loginService;

    @GetMapping("/login")
    public String login(){
        return "/login";
    }

    @GetMapping("/signup")
    public String signup(){
        return "/signup";
    }

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public void signup(@Valid SignupDto signupDto, BindingResult bindingResult) {
        User user = signupDto.toEntity();
        loginService.signup(user);
    }
}
