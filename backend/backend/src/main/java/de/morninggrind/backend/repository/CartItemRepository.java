package de.morninggrind.backend.repository;

import de.morninggrind.backend.domain.Cart;
import de.morninggrind.backend.domain.CartItem;
import de.morninggrind.backend.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CartItemRepository extends JpaRepository<CartItem, UUID> {
    List<CartItem> findByCart(Cart cart);

    Optional<CartItem> findByCartAndProduct(Cart cart, Product product);
}
