package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.Cart;
import de.morninggrind.backend.repository.CartRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CartService {
    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public List<Cart> getAll() {
        return this.cartRepository.findAll();
    }

    public Cart getById(UUID id) {
        return cartRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cart mit ID " + id + " nicht gefunden"));
    }

    public Cart save(Cart cart) {
        return this.cartRepository.save(cart);
    }

    public void delete(UUID id) {
        if (cartRepository.existsById(id)) {
            cartRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Cart mit ID " + id + " nicht gefunden");
        }
    }
}
