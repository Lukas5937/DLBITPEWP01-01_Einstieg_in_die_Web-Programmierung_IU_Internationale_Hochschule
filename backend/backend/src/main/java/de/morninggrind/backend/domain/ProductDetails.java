package de.morninggrind.backend.domain;

import lombok.Data;
import java.util.List;
import java.util.UUID;

@Data
public class ProductDetails {
    private UUID id;
    private String origin;
    private String roastLevel;
    private String processing;
    private int sizeGrams;
    private List<String> flavorNotes;
    private String description;
    private Long productId;
}
