package de.morninggrind.backend.domain;

import lombok.Data;
import java.time.OffsetDateTime;
import java.util.UUID;

@Data
public class Order {
    private UUID id;
    private OffsetDateTime orderDate;
    private String status;
    private float totalPrice;
    private Long userId;
}
