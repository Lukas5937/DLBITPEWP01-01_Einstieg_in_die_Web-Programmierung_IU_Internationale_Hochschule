package de.morninggrind.backend.repository;

import de.morninggrind.backend.domain.ProductDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProductDetailsRepository extends JpaRepository<ProductDetails, UUID> {
}
