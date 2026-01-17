package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.Cart;
import de.morninggrind.backend.domain.CartItem;
import de.morninggrind.backend.domain.ProductDetails;
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

    public CartService(CartRepository cartRepository, CartItemRepository cartItemRepository, ProductDetailsRepository productDetailsRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.productDetailsRepository = productDetailsRepository;
    }

    public List<Cart> getAll() {
        return this.cartRepository.findAll();
    }


    private CartResponseDto mapToDto(Cart cart, List<CartItem> items) {

        List<CartItemDto> itemDtos = items.stream().map(item -> {
            CartItemDto dto = new CartItemDto();
            ProductDetails details = productDetailsRepository.findByProduct(item.getProduct());

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

    public CartResponseDto getById(UUID id) {
        Cart cart = cartRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cart mit ID " + id + " nicht gefunden"));

        List<CartItem> items = cartItemRepository.findByCart(cart);
        return mapToDto(cart, items);
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
