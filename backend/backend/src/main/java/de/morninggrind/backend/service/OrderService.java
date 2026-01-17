package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.Cart;
import de.morninggrind.backend.domain.CartItem;
import de.morninggrind.backend.domain.Order;
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

    public OrderService(OrderRepository orderRepository, CartRepository cartRepository, CartItemRepository cartItemRepository) {
        this.orderRepository = orderRepository;
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
    }

    public List<Order> getAll() {
        return this.orderRepository.findAll();
    }

    public Order getById(UUID id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Order mit ID " + id + " nicht gefunden"));
    }

    public Order save(Order order) {
        return this.orderRepository.save(order);
    }

    public void delete(UUID id) {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Order mit ID " + id + " nicht gefunden");
        }
    }

    @Transactional
    public Order checkout(UUID cartId) {
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new EntityNotFoundException(
                        "Cart mit ID " + cartId + " nicht gefunden"
                ));
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
