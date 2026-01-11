package de.morninggrind.backend.domain;

import lombok.Data;

import java.time.OffsetDateTime;
import java.util.UUID;

@Data
public class Cart {
    private UUID id;
    private OffsetDateTime createdAt;
    private Long userId;

}
