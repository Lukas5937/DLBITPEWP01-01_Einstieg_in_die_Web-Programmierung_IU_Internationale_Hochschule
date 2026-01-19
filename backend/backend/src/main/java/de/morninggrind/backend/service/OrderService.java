package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.*;
import de.morninggrind.backend.repository.CartItemRepository;
import de.morninggrind.backend.repository.CartRepository;
import de.morninggrind.backend.repository.OrderRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final UserService userService;

    public OrderService(OrderRepository orderRepository,
                        CartRepository cartRepository,
                        CartItemRepository cartItemRepository, UserService userService) {
        this.orderRepository = orderRepository;
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.userService = userService;
    }

    public List<Order> getAll() {
        User currentUser = userService.getCurrentUser();
        if (currentUser.getRole() == UserRole.ADMIN) {
            return orderRepository.findAll();
        }
        return orderRepository.findByUser(currentUser);
    }

    public Order getById(UUID id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Order mit ID " + id + " nicht gefunden"));

        User currentUser = userService.getCurrentUser();
        if (!order.getUser().equals(currentUser) && currentUser.getRole() != UserRole.ADMIN) {
            throw new RuntimeException("Zugriff verweigert");
        }

        return order;
    }

    public Order save(Order order) {
        return this.orderRepository.save(order);
    }

    @Transactional
    public Order checkout(UUID cartId) {
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new EntityNotFoundException(
                        "Cart mit ID " + cartId + " nicht gefunden"
                ));

        User currentUser = userService.getCurrentUser();
        if (!cart.getUser().equals(currentUser) && currentUser.getRole() != UserRole.ADMIN) {
            throw new RuntimeException("Zugriff verweigert");
        }

        List<CartItem> items = cartItemRepository.findByCart(cart);

        if (items.isEmpty()) {
            throw new IllegalStateException("Cart is empty");
        }

        BigDecimal total = items.stream()
                .map(item ->
                        item.getProduct().getPrice()
                                .multiply(BigDecimal.valueOf(item.getQuantity()))
                )
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        Order order = new Order();
        order.setUser(cart.getUser());
        order.setStatus("CREATED");
        order.setTotalPrice(total);

        Order savedOrder = orderRepository.save(order);

        cartItemRepository.deleteAll(items);

        return savedOrder;
    }

}

