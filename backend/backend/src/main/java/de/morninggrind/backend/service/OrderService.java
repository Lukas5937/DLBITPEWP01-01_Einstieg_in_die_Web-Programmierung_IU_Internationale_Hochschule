package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.Order;
import de.morninggrind.backend.repository.OrderRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
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
}
