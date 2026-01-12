package de.morninggrind.backend.controller;

import de.morninggrind.backend.domain.Cart;
import de.morninggrind.backend.service.CartService;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/carts")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("{id}")
    public Cart getCart(@PathVariable UUID id) {
        return this.cartService.getById(id);
    }

    @DeleteMapping("{id}")
    public void deleteCart(@PathVariable UUID id) {
        this.cartService.delete(id);
    }
}
