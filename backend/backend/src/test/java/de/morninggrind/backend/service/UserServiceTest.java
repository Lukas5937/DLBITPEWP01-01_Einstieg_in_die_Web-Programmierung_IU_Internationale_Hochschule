package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.User;
import de.morninggrind.backend.domain.UserRole;
import de.morninggrind.backend.dto.LoginRequestDto;
import de.morninggrind.backend.dto.RegistrationRequestDto;
import de.morninggrind.backend.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
public class UserServiceTest {


    @TestConfiguration
    static class TestConfig {
        @Bean
        public PasswordEncoder passwordEncoder() {
            return new org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder();
        }
    }

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
    }


    @Test
    void register_createsUserWithHashedPassword() {
        RegistrationRequestDto request =
                new RegistrationRequestDto("test@test.de", "secret123");

        User user = userService.register(request);

        assertNotNull(user.getId());
        assertEquals("test@test.de", user.getEmail());
        assertEquals(UserRole.USER, user.getRole());

        assertNotEquals("secret123", user.getPasswordHash());
        assertTrue(userRepository.existsByEmail("test@test.de"));
    }

    @Test
    void login_withWrongPassword_throwsException() {
        String email = "login@test.de";
        String correctPassword = "correct123";
        String wrongPassword = "wrong123";

        de.morninggrind.backend.domain.User user = new de.morninggrind.backend.domain.User();
        user.setEmail(email);
        user.setPasswordHash(passwordEncoder.encode(correctPassword));
        user.setRole(UserRole.USER);

        userRepository.save(user);

        LoginRequestDto request = new LoginRequestDto(email, wrongPassword);

        assertThatThrownBy(() -> userService.login(request))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Bad credentials");
    }
}
