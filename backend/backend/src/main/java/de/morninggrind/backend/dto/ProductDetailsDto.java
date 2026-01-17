package de.morninggrind.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class ProductDetailsDto {
    private String origin;
    private String roastLevel;
    private String processing;
    private int sizeGrams;
    private List<String> flavorNotes;
    private String description;
}
