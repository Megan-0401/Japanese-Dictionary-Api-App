package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.repository.WordClassRepository;
import org.springframework.stereotype.Service;

@Service
public class WordClassService {
    private final WordClassRepository wordClassRepository;

    public WordClassService(WordClassRepository wordClassRepository) {
        this.wordClassRepository = wordClassRepository;
    }
}
