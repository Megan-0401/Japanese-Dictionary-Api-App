package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.model.Word;
import com.dictionary.dictionary_api.repository.WordRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WordService {
    private final WordRepository wordRepository;

    public WordService(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    //METHODS//

    public List<Word> getAllWords() {
        return wordRepository.findAll();
    }

    public List<Word> getWordByWordClass(String wordClass) {
        return wordRepository.findWordByWordClass(wordClass).orElseThrow();
    }
}
