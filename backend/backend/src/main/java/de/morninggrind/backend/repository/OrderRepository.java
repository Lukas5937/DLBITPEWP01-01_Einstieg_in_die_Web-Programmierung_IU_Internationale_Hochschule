package de.morninggrind.backend.repository;

import de.morninggrind.backend.domain.Order;
import de.morninggrind.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<Order, UUID> {
    List<Order> findByUser(User user);
}
