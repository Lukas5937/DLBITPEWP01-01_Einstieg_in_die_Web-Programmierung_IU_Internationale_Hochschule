package de.morninggrind.backend.controller;

import de.morninggrind.backend.domain.User;
import de.morninggrind.backend.dto.LoginRequestDto;
import de.morninggrind.backend.dto.RegistrationRequestDto;
import de.morninggrind.backend.service.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestBody RegistrationRequestDto request) {
        return userService.register(request);
    }

    @PostMapping("/login")
    public void login(@RequestBody LoginRequestDto request, HttpServletRequest httpRequest) {
        userService.login(request, httpRequest);
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request) throws ServletException {
        request.logout();
    }

    @GetMapping("/me")
    public User getCurrentUser(HttpServletRequest request) {
        User user = (User) request.getSession().getAttribute("user");
        if (user == null) {
            throw new RuntimeException("Not logged in");
        }
        return user;
    }
}
