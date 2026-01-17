package de.morninggrind.backend.repository;

import de.morninggrind.backend.domain.Product;
import de.morninggrind.backend.domain.ProductDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ProductDetailsRepository extends JpaRepository<ProductDetails, UUID> {
    Optional<ProductDetails> findByProduct(Product product);
}
