package de.morninggrind.backend.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "uuid")
    private UUID id;

    private String name;
    private BigDecimal price;
    private boolean isActive;
    private boolean isOffer;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
}
