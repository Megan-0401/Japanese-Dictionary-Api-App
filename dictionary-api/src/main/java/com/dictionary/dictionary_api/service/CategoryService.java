package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.model.Category;
import com.dictionary.dictionary_api.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    //METHODS//

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
}
