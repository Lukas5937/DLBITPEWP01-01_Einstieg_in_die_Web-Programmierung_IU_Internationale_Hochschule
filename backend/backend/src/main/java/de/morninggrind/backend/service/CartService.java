package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.*;
import de.morninggrind.backend.dto.CartItemDto;
import de.morninggrind.backend.dto.CartResponseDto;
import de.morninggrind.backend.repository.CartItemRepository;
import de.morninggrind.backend.repository.CartRepository;
import de.morninggrind.backend.repository.ProductDetailsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final ProductDetailsRepository productDetailsRepository;
    private final UserService userService;

    public CartService(CartRepository cartRepository, CartItemRepository cartItemRepository, ProductDetailsRepository productDetailsRepository, UserService userService) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.productDetailsRepository = productDetailsRepository;
        this.userService = userService;
    }

    private CartResponseDto mapToDto(Cart cart, List<CartItem> items) {

        List<CartItemDto> itemDtos = items.stream().map(item -> {
            CartItemDto dto = new CartItemDto();
            ProductDetails details = productDetailsRepository.findByProduct(item.getProduct())
                    .orElseThrow(() -> new EntityNotFoundException("Details für Product " + item.getProduct() + " nicht gefunden"));

            dto.setId(item.getId());
            dto.setProductId(item.getProduct().getId());
            dto.setProductName(item.getProduct().getName());
            dto.setCategory(item.getProduct().getCategory());
            dto.setOrigin(details.getOrigin());
            dto.setProcessing(details.getProcessing());
            dto.setPrice(item.getProduct().getPrice());
            dto.setQuantity(item.getQuantity());

            BigDecimal itemTotal =
                    item.getProduct().getPrice()
                            .multiply(BigDecimal.valueOf(item.getQuantity()));
            dto.setItemTotal(itemTotal);

            return dto;
        }).toList();

        BigDecimal cartTotal = itemDtos.stream()
                .map(CartItemDto::getItemTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        CartResponseDto response = new CartResponseDto();
        response.setCartId(cart.getId());
        response.setCreatedAt(cart.getCreatedAt());
        response.setItems(itemDtos);
        response.setCartTotal(cartTotal);

        return response;
    }

    public CartResponseDto getOrCreateForCurrentUser() {
        User user = userService.getCurrentUser();

        Cart cart = cartRepository.findByUser(user)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    return cartRepository.save(newCart);
                });

        List<CartItem> items = cartItemRepository.findByCart(cart);
        return mapToDto(cart, items);
    }


    public void delete(UUID id) {
        Cart cart = cartRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cart mit ID " + id + " nicht gefunden"));

        User currentUser = userService.getCurrentUser();
        if (!cart.getUser().equals(currentUser) && currentUser.getRole() != UserRole.ADMIN) {
            throw new RuntimeException("Zugriff verweigert");
        }

        cartRepository.delete(cart);
    }
}
