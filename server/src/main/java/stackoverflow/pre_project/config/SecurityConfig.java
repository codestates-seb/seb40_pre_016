package stackoverflow.pre_project.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import stackoverflow.pre_project.config.auth.CustomUserDetails;
import stackoverflow.pre_project.config.oauth.Oauth2DetailsService;

import java.util.List;

import static org.springframework.http.HttpMethod.GET;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final Oauth2DetailsService oauth2DetailsService;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity.httpBasic().disable()
                .csrf()
                .disable()
                .cors().configurationSource(corsConfiguration())
                .and()
                .headers().frameOptions()
                .disable()
                .and()
                .authorizeRequests()
                .antMatchers(GET, "/**").permitAll()
                .antMatchers("/auth/**").permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .loginProcessingUrl("/auth/login")
                .usernameParameter("email")
                .successHandler((req, res, auth) -> {
                    res.setStatus(200);
                    CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
                    res.getWriter().write(String.valueOf(userDetails.getUser().getId()));
                })
                .failureHandler((req, res, adh) -> {
                    res.setStatus(400);
                    res.getWriter().write("Wrong email or password");
                })
                .and()
                .logout()
                .logoutUrl("/auth/logout")
                .logoutSuccessHandler((req, res, auth) -> {
                    res.setStatus(200);
                    res.getWriter().write("true");
                })
                .deleteCookies("JSESSIONID", "remember-me")
                .and()
                .exceptionHandling()
                .accessDeniedHandler((req, res, adh) -> {
                    res.setStatus(403);
                    res.getWriter().write("Access denied");
                })
                .authenticationEntryPoint((req, res, ae) -> {
                    res.setStatus(401);
                    res.getWriter().write("Unauthorized");
                })
                .and()
                .oauth2Login()
                .userInfoEndpoint()
                .userService(oauth2DetailsService)
                .and()
                .and().build();
    }

    @Bean
    public CorsConfigurationSource corsConfiguration() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.addAllowedHeader(CorsConfiguration.ALL);
        configuration.addAllowedOrigin("http://localhost:3000");
        configuration.addAllowedOrigin("http://localhost:80");
        configuration.addAllowedOrigin("http://localhost");
        configuration.setAllowedMethods(List.of("GET", "POST", "DELETE", "PATCH", "OPTION", "PUT"));
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}

