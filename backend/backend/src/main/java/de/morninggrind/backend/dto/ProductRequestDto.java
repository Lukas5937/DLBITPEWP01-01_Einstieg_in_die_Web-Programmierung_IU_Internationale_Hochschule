package de.morninggrind.backend.dto;

import de.morninggrind.backend.domain.Category;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class ProductRequestDto {
    private String name;
    private BigDecimal price;
    private boolean isActive;
    private boolean isOffer;
    private Category category;
    private ProductDetailsDto details;
}
