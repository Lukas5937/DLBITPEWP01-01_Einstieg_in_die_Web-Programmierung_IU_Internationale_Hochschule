package de.morninggrind.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowedOrigins(List.of("http://localhost:5173"));
        config.setAllowCredentials(true);
        config.addAllowedMethod("*");
        config.addAllowedHeader("*");

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http
            .cors(cors -> {})
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth

                // public
                .requestMatchers(
                        "/api/auth/register",
                        "/api/auth/login"
                ).permitAll()

                .requestMatchers(
                        HttpMethod.GET,
                        "/api/products/**",
                        "/api/categories/**"
                ).permitAll()

                // auth required
                .requestMatchers(
                        "/api/auth/me",
                        "/api/auth/logout",
                        "/api/orders/**",
                        "/api/carts/**",
                        "/api/cart-items/**"
                ).authenticated()

                // admin
                .requestMatchers(
                        "/api/users/**"
                ).hasRole("ADMIN")

                .requestMatchers(
                        HttpMethod.POST,
                        "/api/products/**",
                        "/api/categories/**"
                ).hasRole("ADMIN")

                .requestMatchers(
                        HttpMethod.PUT,
                        "/api/products/**",
                        "/api/categories/**"
                ).hasRole("ADMIN")

                .requestMatchers(
                        HttpMethod.DELETE,
                        "/api/products/**",
                        "/api/categories/**"
                ).hasRole("ADMIN")

                .anyRequest().authenticated()
            );

        return http.build();
    }
}
