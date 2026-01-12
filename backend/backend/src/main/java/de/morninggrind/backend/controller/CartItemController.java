package de.morninggrind.backend.controller;

import de.morninggrind.backend.domain.CartItem;
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
    public CartItem createCartItem(@RequestBody CartItem cartItem) {
        return this.cartItemService.save(cartItem);
    }

    @PutMapping("/{id}")
    public CartItem updateCartItem(@PathVariable UUID id, @RequestBody CartItem cartItem) {
        return this.cartItemService.update(id, cartItem);
    }

    @DeleteMapping("/{id}")
    public void deleteCartItem(@PathVariable UUID id) {
        this.cartItemService.delete(id);
    }
}
