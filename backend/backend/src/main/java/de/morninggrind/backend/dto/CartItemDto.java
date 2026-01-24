package de.morninggrind.backend.dto;

import de.morninggrind.backend.domain.Category;
import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class CartItemDto {

    private UUID id;
    private UUID productId;
    private String productName;
    private Category category;
    private String origin;
    private String processing;
    private BigDecimal price;
    private int quantity;
    private BigDecimal itemTotal;
}
