package de.morninggrind.backend.repository;

import de.morninggrind.backend.domain.Cart;
import de.morninggrind.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface CartRepository extends JpaRepository<Cart, UUID> {
    Optional<Cart> findByUser(User user);
}
