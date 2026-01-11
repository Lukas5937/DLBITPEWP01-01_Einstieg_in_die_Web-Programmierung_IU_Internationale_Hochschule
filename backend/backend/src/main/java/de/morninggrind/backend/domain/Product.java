package de.morninggrind.backend.domain;

import lombok.Data;
import java.util.UUID;

@Data
public class Product {
    private UUID id;
    private String name;
    private float price;
    private boolean isActive;
    private boolean isOffer;
    private Long categoryId;
}
