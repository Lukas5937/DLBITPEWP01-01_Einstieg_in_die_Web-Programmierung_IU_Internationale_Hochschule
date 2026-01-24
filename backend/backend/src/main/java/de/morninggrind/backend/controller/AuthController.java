package de.morninggrind.backend.controller;

import de.morninggrind.backend.domain.User;
import de.morninggrind.backend.dto.LoginRequestDto;
import de.morninggrind.backend.dto.RegistrationRequestDto;
import de.morninggrind.backend.dto.UserResponseDto;
import de.morninggrind.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

     @PostMapping("/register")
    public UserResponseDto register(@RequestBody RegistrationRequestDto request) {
        User user = userService.register(request);
        return userService.toDto(user);
    }

    @PostMapping("/login")
    public UserResponseDto login(@RequestBody LoginRequestDto request) {
        User user = userService.login(request);
        return userService.toDto(user);
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
