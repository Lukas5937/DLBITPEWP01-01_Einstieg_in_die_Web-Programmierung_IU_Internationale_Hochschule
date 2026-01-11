package de.morninggrind.backend.domain;

import lombok.Data;

@Data
public class OrderItem {
    private Long id;
    private int quantity;
    private float priceAtPurchase;
    private Long orderId;
    private Long productId;
}
