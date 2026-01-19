package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.User;
import de.morninggrind.backend.domain.UserRole;
import de.morninggrind.backend.dto.LoginRequestDto;
import de.morninggrind.backend.dto.RegistrationRequestDto;
import de.morninggrind.backend.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

@SpringBootTest
@Transactional
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Test
    void register_createsUserWithHashedPassword() {
        RegistrationRequestDto request =
                new RegistrationRequestDto("test@test.de", "REMOVED_SECRET123");

        User user = userService.register(request);

        assertNotNull(user.getId());
        assertEquals("test@test.de", user.getEmail());
        assertEquals(UserRole.USER, user.getRole());

        assertNotEquals("REMOVED_SECRET123", user.getPasswordHash());
        assertTrue(userRepository.existsByEmail("test@test.de"));
    }

    @Test
    void login_withWrongPassword_throwsException() {
        String email = "login@test.de";
        String correctPassword = "correct123";
        String wrongPassword = "wrong123";

        User user = new User();
        user.setEmail(email);
        user.setPasswordHash(passwordEncoder.encode(correctPassword));
        user.setRole(UserRole.USER);

        userRepository.save(user);

        LoginRequestDto request = new LoginRequestDto(email, wrongPassword);
        HttpServletRequest httpRequest = mock(HttpServletRequest.class);

        assertThatThrownBy(() ->
                userService.login(request, httpRequest)
        ).isInstanceOf(RuntimeException.class);
    }
}
