package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.CartItem;
import de.morninggrind.backend.domain.User;
import de.morninggrind.backend.domain.UserRole;
import de.morninggrind.backend.repository.CartItemRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CartItemService {
    private final CartItemRepository cartItemRepository;
    private final UserService userService;

    public CartItemService(CartItemRepository cartItemRepository, UserService userService) {
        this.cartItemRepository = cartItemRepository;
        this.userService = userService;
    }

    public CartItem save(CartItem cartItem) {
        User currentUser = userService.getCurrentUser();
        if (!cartItem.getCart().getUser().equals(currentUser) && currentUser.getRole() != UserRole.ADMIN) {
            throw new RuntimeException("Zugriff verweigert");
        }
        return this.cartItemRepository.save(cartItem);
    }

    public void delete(UUID id) {
        CartItem item = cartItemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("CartItem mit ID " + id + " nicht gefunden"));

        User currentUser = userService.getCurrentUser();
        if (!item.getCart().getUser().equals(currentUser) && currentUser.getRole() != UserRole.ADMIN) {
            throw new RuntimeException("Zugriff verweigert");
        }

        cartItemRepository.delete(item);
    }

    public CartItem update(UUID id, CartItem updatedCartItem) {
        CartItem existing = cartItemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("CartItem mit ID " + id + " nicht gefunden"));

        User currentUser = userService.getCurrentUser();
        if (!existing.getCart().getUser().equals(currentUser) && currentUser.getRole() != UserRole.ADMIN) {
            throw new RuntimeException("Zugriff verweigert");
        }

        existing.setQuantity(updatedCartItem.getQuantity());
        return cartItemRepository.save(existing);
    }
}
