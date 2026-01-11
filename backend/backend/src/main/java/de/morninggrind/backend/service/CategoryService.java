package de.morninggrind.backend.service;

import de.morninggrind.backend.domain.Cart;
import de.morninggrind.backend.domain.Category;
import de.morninggrind.backend.repository.CategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAll() {
        return this.categoryRepository.findAll();
    }

    public Category getById(UUID id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category mit ID " + id + " nicht gefunden"));
    }

    public Category save(Category category) {
        return this.categoryRepository.save(category);
    }

    public void delete(UUID id) {
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Category mit ID " + id + " nicht gefunden");
        }
    }
}
