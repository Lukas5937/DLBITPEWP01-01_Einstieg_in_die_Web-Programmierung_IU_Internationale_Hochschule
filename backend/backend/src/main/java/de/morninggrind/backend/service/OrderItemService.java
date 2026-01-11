package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.OrderItem;
import de.morninggrind.backend.repository.OrderItemRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class OrderItemService {
    private final OrderItemRepository orderItemRepository;

    public OrderItemService(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    public List<OrderItem> getAll() {
        return this.orderItemRepository.findAll();
    }

    public OrderItem getById(UUID id) {
        return orderItemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("OrderItem mit ID " + id + " nicht gefunden"));
    }

    public OrderItem save(OrderItem orderItem) {
        return this.orderItemRepository.save(orderItem);
    }

    public void delete(UUID id) {
        if (orderItemRepository.existsById(id)) {
            orderItemRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("OrderItem mit ID " + id + " nicht gefunden");
        }
    }
}
