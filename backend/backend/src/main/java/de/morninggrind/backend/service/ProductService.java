package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.Cart;
import de.morninggrind.backend.domain.Product;
import de.morninggrind.backend.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAll() {
        return this.productRepository.findAll();
    }

    public Product getById(UUID id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product mit ID " + id + " nicht gefunden"));
    }

    public Product save(Product product) {
        return this.productRepository.save(product);
    }

    public void delete(UUID id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Product mit ID " + id + " nicht gefunden");
        }
    }
}
