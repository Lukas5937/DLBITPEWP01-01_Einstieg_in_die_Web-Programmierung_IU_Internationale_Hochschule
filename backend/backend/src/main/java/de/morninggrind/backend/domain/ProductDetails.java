package de.morninggrind.backend.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Entity
@Data
public class ProductDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String origin;
    private String roastLevel;
    private String processing;
    private int sizeGrams;

    @ElementCollection
    private List<String> flavorNotes;

    private String description;

    @OneToOne
    @JoinColumn(name = "product_id", nullable = false, unique = true)
    private Product product;
}
