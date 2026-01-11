package de.morninggrind.backend.domain;

import lombok.Data;
import java.time.OffsetDateTime;
import java.util.UUID;

@Data
public class User {
    private UUID id;
    private String email;
    private String passwordHash;

    // change to enum later
    private String role;

    private OffsetDateTime createdAt;

}
