package stackoverflow.pre_project.login.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import stackoverflow.pre_project.login.dto.SignupDto;
import stackoverflow.pre_project.login.service.LoginService;
import stackoverflow.pre_project.user.entity.User;

import javax.validation.Valid;

@RequiredArgsConstructor
@Controller
public class LoginController {

    private final LoginService loginService;

    @GetMapping("/auth/login")
    public String login(){
        return "auth/login";
    }

    @GetMapping("/auth/signup")
    public String signup(){
        return "auth/signup";
    }

    @PostMapping("/auth/signup")
    public String signup(@Valid SignupDto signupDto, BindingResult bindingResult){
        User user = signupDto.toEntity();
        loginService.signup(user);
        return "auth/login";
    }
}
