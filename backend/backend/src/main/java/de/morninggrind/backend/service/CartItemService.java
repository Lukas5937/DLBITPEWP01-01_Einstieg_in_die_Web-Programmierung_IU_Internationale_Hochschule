package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.Cart;
import de.morninggrind.backend.domain.CartItem;
import de.morninggrind.backend.repository.CartItemRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CartItemService {
    private final CartItemRepository cartItemRepository;

    public CartItemService(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    public List<CartItem> getAll() {
        return this.cartItemRepository.findAll();
    }

    public CartItem getById(UUID id) {
        return cartItemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("CartItem mit ID " + id + " nicht gefunden"));
    }

    public CartItem save(CartItem cartItem) {
        return this.cartItemRepository.save(cartItem);
    }

    public void delete(UUID id) {
        if (cartItemRepository.existsById(id)) {
            cartItemRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("CartItem mit ID " + id + " nicht gefunden");
        }
    }
}
