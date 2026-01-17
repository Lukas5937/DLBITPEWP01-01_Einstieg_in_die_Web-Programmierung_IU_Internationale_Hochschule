package de.morninggrind.backend.controller;

import de.morninggrind.backend.domain.Order;
import de.morninggrind.backend.service.OrderService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/checkout/{cartId}")
    public Order checkout(@PathVariable UUID cartId) {
        return orderService.checkout(cartId);
    }
}

