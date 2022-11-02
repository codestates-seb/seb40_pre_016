package stackoverflow.pre_project.login.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.login.dto.SignupDto;
import stackoverflow.pre_project.login.service.LoginService;
import stackoverflow.pre_project.user.entity.User;

import javax.validation.Valid;

@Slf4j
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

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/auth/signup")
    public void signup(@Valid @ModelAttribute SignupDto signupDto, BindingResult bindingResult){
        User user = signupDto.toEntity();
        loginService.signup(user);
    }
}
