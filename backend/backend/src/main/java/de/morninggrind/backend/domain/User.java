package de.morninggrind.backend.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Data
@Table(name = "app_user")
public class User {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "uuid")
    private UUID id;

    private String email;
    private String passwordHash;

    // change to enum later
    private String role;

    private OffsetDateTime createdAt;
}
