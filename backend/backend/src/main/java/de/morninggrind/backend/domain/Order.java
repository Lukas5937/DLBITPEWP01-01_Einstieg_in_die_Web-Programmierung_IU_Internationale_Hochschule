package de.morninggrind.backend.domain;

import lombok.Data;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.UUID;

@Data
public class Order {
    private UUID id;
    private OffsetDateTime orderDate;
    private String status;
    private BigDecimal totalPrice;
    private UUID userId;
}
