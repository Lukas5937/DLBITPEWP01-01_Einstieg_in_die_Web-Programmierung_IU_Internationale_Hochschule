package de.morninggrind.backend.controller;

import de.morninggrind.backend.domain.User;
import de.morninggrind.backend.dto.LoginRequestDto;
import de.morninggrind.backend.dto.RegistrationRequestDto;
import de.morninggrind.backend.dto.UserResponseDto;
import de.morninggrind.backend.security.JwtTokenProvider;
import de.morninggrind.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;
    private final JwtTokenProvider tokenProvider;

    public AuthController(UserService userService, JwtTokenProvider tokenProvider) {
        this.userService = userService;
        this.tokenProvider = tokenProvider;
    }

     @PostMapping("/register")
    public UserResponseDto register(@RequestBody RegistrationRequestDto request) {
        User user = userService.register(request);
        return userService.toDto(user);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequestDto request) {
        User user = userService.login(request);
        String token = tokenProvider.generateToken(user.getEmail());
        return Map.of(
            "token", token,
            "user", userService.toDto(user)
        );
    }

    @PostMapping("/logout")
    public void logout() {
    }

    @GetMapping("/me")
    public UserResponseDto me() {
        User user = userService.getCurrentUser();
        return userService.toDto(user);
    }
}
