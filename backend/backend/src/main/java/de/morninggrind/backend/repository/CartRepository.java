package de.morninggrind.backend.repository;

import de.morninggrind.backend.domain.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CartRepository extends JpaRepository<Cart, UUID> {
}
