package de.morninggrind.backend.domain;

import lombok.Data;
import java.util.UUID;

@Data
public class Category {
    private UUID id;
    private String name;
    private String description;
    private boolean isActive;

}
