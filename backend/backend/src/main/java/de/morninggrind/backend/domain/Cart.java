package de.morninggrind.backend.domain;

import lombok.Data;

import java.time.OffsetDateTime;

@Data
public class Cart {
    private Long id;
    private OffsetDateTime createdAt;
    private Long userId;

}
