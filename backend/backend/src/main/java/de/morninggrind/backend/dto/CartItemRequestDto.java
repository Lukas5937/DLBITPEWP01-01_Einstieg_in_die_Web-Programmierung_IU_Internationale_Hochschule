package de.morninggrind.backend.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class CartItemRequestDto {
    private UUID productId;
    private int quantity;
}
