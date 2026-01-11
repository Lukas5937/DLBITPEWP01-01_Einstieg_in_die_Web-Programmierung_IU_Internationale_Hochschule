package de.morninggrind.backend.domain;

import lombok.Data;

@Data
public class CartItem {
    private Long id;
    private int quantity;
    private Long cartId;
    private Long productId;

}
