package de.morninggrind.backend.dto;

import de.morninggrind.backend.domain.UserRole;

import java.time.OffsetDateTime;
import java.util.UUID;

public record UserResponseDto(UUID id, String email, UserRole role, OffsetDateTime createdAt) {
}
