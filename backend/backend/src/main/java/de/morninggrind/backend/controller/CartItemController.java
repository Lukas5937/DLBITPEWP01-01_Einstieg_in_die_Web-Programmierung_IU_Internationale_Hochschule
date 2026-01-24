package de.morninggrind.backend.controller;

import de.morninggrind.backend.domain.CartItem;
import de.morninggrind.backend.dto.CartItemRequestDto;
import de.morninggrind.backend.service.CartItemService;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/cart-items")
public class CartItemController {
    private final CartItemService cartItemService;

    public CartItemController(CartItemService cartItemService) {
        this.cartItemService = cartItemService;
    }

    @PostMapping
    public CartItem addToCart(@RequestBody CartItemRequestDto request) {
        return cartItemService.addOrUpdateCartItem(request.getProductId(), request.getQuantity());
    }

    @DeleteMapping("/{id}")
    public void deleteCartItem(@PathVariable UUID id) {
        cartItemService.delete(id);
    }

   
}
