package de.morninggrind.backend.domain;

import lombok.Data;

@Data
public class Product {
    private Long id;
    private String name;
    private float price;
    private boolean isActive;
    private boolean isOffer;
    private Long categoryId;
}
