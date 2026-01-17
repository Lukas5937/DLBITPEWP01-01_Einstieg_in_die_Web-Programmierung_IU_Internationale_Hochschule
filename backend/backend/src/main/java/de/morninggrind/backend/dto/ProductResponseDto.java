package de.morninggrind.backend.dto;

import de.morninggrind.backend.domain.Category;
import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class ProductResponseDto {
    private UUID productId;
    private String name;
    private BigDecimal price;
    private boolean isActive;
    private boolean isOffer;
    private Category category;
    private ProductDetailsDto details;
}
