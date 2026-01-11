package de.morninggrind.backend.domain;

import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class Product {
    private UUID id;
    private String name;
    private BigDecimal price;
    private boolean isActive;
    private boolean isOffer;
    private Long categoryId;
}
