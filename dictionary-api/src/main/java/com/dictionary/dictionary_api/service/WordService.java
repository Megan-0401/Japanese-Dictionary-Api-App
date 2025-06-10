package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.model.Word;
import com.dictionary.dictionary_api.repository.WordRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

    //FILTERS//
    public List<Word> getWordByWordClass(Integer class_id) {
            return wordRepository.findWordByWordClass(class_id).orElseThrow();
    }

    public List<Word> getWordByCategory(Integer category_id) {
        return wordRepository.findWordByCategory(category_id).orElseThrow();
    }

    public List<Word> getWordByClassAndCategory(Integer class_id, Integer category_id){
        return wordRepository.findWordByClassAndCategory(class_id, category_id).orElseThrow();
    }

    //SEARCH//
    public List<Word> getWordBySearch(String search){
        if(search.matches("[a-zA-Z]+")){
            return getWordByRoman(search);
        }
        return getWordByJapanese(search);
    }

    public List<Word> getWordByRoman(String roman_search){
        Stream<Word> engStream = wordRepository.findWordByEnglish(roman_search).orElseThrow().stream();
        Stream<Word> romanjiStream = wordRepository.findWordByRomanji(roman_search).orElseThrow().stream();
        return Stream.concat(engStream, romanjiStream).distinct().toList();
    }

    public List<Word> getWordByJapanese(String jp_search){
        return wordRepository.findWordByJapanese(jp_search).orElseThrow();
    }
}
