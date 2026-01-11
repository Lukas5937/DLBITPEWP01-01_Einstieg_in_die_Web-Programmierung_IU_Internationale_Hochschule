package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.ProductDetails;
import de.morninggrind.backend.repository.ProductDetailsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductDetailsService {
    private final ProductDetailsRepository productDetailsRepository;

    public ProductDetailsService(ProductDetailsRepository productDetailsRepository) {
        this.productDetailsRepository = productDetailsRepository;
    }

    public List<ProductDetails> getAll() {
        return this.productDetailsRepository.findAll();
    }

    public ProductDetails getById(UUID id) {
        return productDetailsRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("ProductDetails mit ID " + id + " nicht gefunden"));
    }

    public ProductDetails save(ProductDetails productDetails) {
        return this.productDetailsRepository.save(productDetails);
    }

    public void delete(UUID id) {
        if (productDetailsRepository.existsById(id)) {
            productDetailsRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("ProductDetails mit ID " + id + " nicht gefunden");
        }
    }
}
