package de.morninggrind.backend.controller;

import de.morninggrind.backend.domain.Product;
import de.morninggrind.backend.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return this.productService.getAll();

    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable UUID id) {
        return this.productService.getById(id);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return this.productService.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable UUID id) {
        this.productService.delete(id);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable UUID id, @RequestBody Product product) {
        return this.productService.update(id, product);
    }
}
