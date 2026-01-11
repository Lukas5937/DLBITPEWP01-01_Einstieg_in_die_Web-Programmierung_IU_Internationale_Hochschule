package de.morninggrind.backend.domain;

import lombok.Data;

import java.time.OffsetDateTime;

@Data
public class User {
    private Long id;
    private String email;
    private String passwordHash;

    // change to enum later
    private String role;

    private OffsetDateTime createdAt;

}
