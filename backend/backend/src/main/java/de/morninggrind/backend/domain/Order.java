package de.morninggrind.backend.domain;

import lombok.Data;

import java.time.OffsetDateTime;

@Data
public class Order {
    private Long id;
    private OffsetDateTime orderDate;
    private String status;
    private float totalPrice;
    private Long userId;
}
