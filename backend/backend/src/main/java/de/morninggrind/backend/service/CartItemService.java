package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.Cart;
import de.morninggrind.backend.domain.CartItem;
import de.morninggrind.backend.domain.User;
import de.morninggrind.backend.domain.UserRole;
import de.morninggrind.backend.repository.CartItemRepository;
import de.morninggrind.backend.repository.CartRepository;
import de.morninggrind.backend.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CartItemService {
    private final CartItemRepository cartItemRepository;
    private final UserService userService;
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;


    public CartItemService(CartItemRepository cartItemRepository, UserService userService, CartRepository cartRepository, ProductRepository productRepository) {
        this.cartItemRepository = cartItemRepository;
        this.userService = userService;
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
    }

    public CartItem addOrUpdateCartItem(UUID productId, int quantity) {
        User currentUser = userService.getCurrentUser();
        System.out.println("Current user: " + currentUser);

        Cart cart = cartRepository.findByUser(currentUser)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(currentUser);
                    return cartRepository.save(newCart);
                });

        var product = productRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Produkt nicht gefunden"));

        var existingItemOpt = cartItemRepository.findByCartAndProduct(cart, product);

        if (existingItemOpt.isPresent()) {
            CartItem existingItem = existingItemOpt.get();
            existingItem.setQuantity(existingItem.getQuantity() + quantity);
            return cartItemRepository.save(existingItem);
        } else {
            CartItem newItem = new CartItem();
            newItem.setCart(cart);
            newItem.setProduct(product);
            newItem.setQuantity(quantity);
            return cartItemRepository.save(newItem);
        }
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
}
