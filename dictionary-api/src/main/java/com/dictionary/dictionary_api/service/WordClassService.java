package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.model.WordClass;
import com.dictionary.dictionary_api.repository.WordClassRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WordClassService {
    private final WordClassRepository wordClassRepository;

    public WordClassService(WordClassRepository wordClassRepository) {
        this.wordClassRepository = wordClassRepository;
    }

    //METHODS//

    public List<WordClass> getAllWordClasses () {
        return wordClassRepository.findAll();
    }
}
