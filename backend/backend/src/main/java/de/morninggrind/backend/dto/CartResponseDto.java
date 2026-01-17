package de.morninggrind.backend.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@Data
public class CartResponseDto {
    private UUID cartId;
    private OffsetDateTime createdAt;
    private List<CartItemDto> items;
    private BigDecimal cartTotal;
}
