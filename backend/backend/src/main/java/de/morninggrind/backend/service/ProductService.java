package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.Product;
import de.morninggrind.backend.domain.ProductDetails;
import de.morninggrind.backend.dto.ProductDetailsDto;
import de.morninggrind.backend.dto.ProductRequestDto;
import de.morninggrind.backend.dto.ProductResponseDto;
import de.morninggrind.backend.repository.ProductDetailsRepository;
import de.morninggrind.backend.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final ProductDetailsRepository productDetailsRepository;

    public ProductService(ProductRepository productRepository, ProductDetailsRepository productDetailsRepository) {
        this.productRepository = productRepository;
        this.productDetailsRepository = productDetailsRepository;
    }

    private ProductResponseDto mapToDto(Product product, ProductDetails details) {
        ProductResponseDto dto = new ProductResponseDto();
        dto.setProductId(product.getId());
        dto.setName(product.getName());
        dto.setPrice(product.getPrice());
        dto.setActive(product.isActive());
        dto.setOffer(product.isOffer());
        dto.setCategory(product.getCategory());

        ProductDetailsDto detailsDto = new ProductDetailsDto();
        detailsDto.setOrigin(details.getOrigin());
        detailsDto.setProcessing(details.getProcessing());
        detailsDto.setRoastLevel(details.getRoastLevel());
        detailsDto.setSizeGrams(details.getSizeGrams());
        detailsDto.setFlavorNotes(details.getFlavorNotes());
        detailsDto.setDescription(details.getDescription());

        dto.setDetails(detailsDto);

        return dto;
    }


    public List<ProductResponseDto> getAll() {
        return productRepository.findAll().stream().map(product -> {
            ProductDetails details = productDetailsRepository.findByProduct(product)
                    .orElseThrow(() -> new EntityNotFoundException(
                            "Details für Product " + product + " nicht gefunden"
                    ));
            return mapToDto(product, details);
        }).toList();
    }

    public ProductResponseDto getById(UUID id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product mit ID " + id + " nicht gefunden"));
        ProductDetails details = productDetailsRepository.findByProduct(product)
                .orElseThrow(() -> new EntityNotFoundException(
                        "Details für Product mit ID " + id + " nicht gefunden"
                ));
        return mapToDto(product, details);
    }

    public ProductResponseDto save(ProductRequestDto dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setPrice(dto.getPrice());
        product.setActive(dto.isActive());
        product.setOffer(dto.isOffer());
        product.setCategory(dto.getCategory());

        product = productRepository.save(product);

        ProductDetails details = new ProductDetails();
        details.setProduct(product);
        details.setOrigin(dto.getDetails().getOrigin());
        details.setProcessing(dto.getDetails().getProcessing());
        details.setRoastLevel(dto.getDetails().getRoastLevel());
        details.setSizeGrams(dto.getDetails().getSizeGrams());
        details.setFlavorNotes(dto.getDetails().getFlavorNotes());
        details.setDescription(dto.getDetails().getDescription());

        productDetailsRepository.save(details);
        return mapToDto(product, details);
    }

    public void delete(UUID id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Product nicht gefunden"));
        productDetailsRepository.findByProduct(product).ifPresent(productDetailsRepository::delete);
        productRepository.delete(product);
    }

    public ProductResponseDto update(UUID id, ProductRequestDto dto) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(
                        "Product mit ID " + id + " nicht gefunden"
                ));
        ProductDetails existingDetails = productDetailsRepository.findByProduct(existingProduct)
                .orElseThrow(() -> new EntityNotFoundException(
                        "Details für Product mit ID " + id + " nicht gefunden"
                ));

        existingProduct.setName(dto.getName());
        existingProduct.setPrice(dto.getPrice());
        existingProduct.setActive(dto.isActive());
        existingProduct.setOffer(dto.isOffer());
        existingProduct.setCategory(dto.getCategory());
        Product updatedProduct = productRepository.save(existingProduct);

        existingDetails.setProduct(updatedProduct);
        existingDetails.setOrigin(dto.getDetails().getOrigin());
        existingDetails.setProcessing(dto.getDetails().getProcessing());
        existingDetails.setRoastLevel(dto.getDetails().getRoastLevel());
        existingDetails.setSizeGrams(dto.getDetails().getSizeGrams());
        existingDetails.setFlavorNotes(dto.getDetails().getFlavorNotes());
        existingDetails.setDescription(dto.getDetails().getDescription());

        ProductDetails updatedDetails = productDetailsRepository.save(existingDetails);
        return mapToDto(updatedProduct, updatedDetails);
    }
}

