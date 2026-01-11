package de.morninggrind.backend.domain;

import lombok.Data;
import java.util.UUID;

@Data
public class OrderItem {
    private UUID id;
    private int quantity;
    private float priceAtPurchase;
    private Long orderId;
    private Long productId;
}
