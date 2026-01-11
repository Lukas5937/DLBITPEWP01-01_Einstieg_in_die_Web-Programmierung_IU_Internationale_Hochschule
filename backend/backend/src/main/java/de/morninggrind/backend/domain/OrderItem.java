package de.morninggrind.backend.domain;

import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class OrderItem {
    private UUID id;
    private int quantity;
    private BigDecimal priceAtPurchase;
    private Long orderId;
    private Long productId;
}
