package de.morninggrind.backend.controller;

import de.morninggrind.backend.dto.ProductRequestDto;
import de.morninggrind.backend.dto.ProductResponseDto;
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
    public List<ProductResponseDto> getProducts() {
        return this.productService.getAll();
    }

    @GetMapping("/{id}")
    public ProductResponseDto getProductById(@PathVariable UUID id) {
        return this.productService.getById(id);
    }

    @PostMapping
    public ProductResponseDto createProduct(@RequestBody ProductRequestDto product) {
        return this.productService.save(product);
    }

    @PutMapping("/{id}")
    public ProductResponseDto updateProduct(@PathVariable UUID id, @RequestBody ProductRequestDto product) {
        return this.productService.update(id, product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable UUID id) {
        this.productService.delete(id);
    }
}
