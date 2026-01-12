package de.morninggrind.backend.domain;

import lombok.Data;

import java.util.UUID;

@Data
public class CartItem {
    private UUID id;
    private int quantity;
    private UUID cartId;
    private UUID productId;
}
