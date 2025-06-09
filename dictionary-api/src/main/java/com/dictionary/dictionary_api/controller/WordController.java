package com.dictionary.dictionary_api.controller;

import com.dictionary.dictionary_api.model.Word;
import com.dictionary.dictionary_api.service.WordService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/words")
public class WordController {
    public final WordService wordService;

    public WordController(WordService wordService) {
        this.wordService = wordService;
    }

    //METHODS//

    @GetMapping
    public List<Word> getAllWords() {
        return wordService.getAllWords();
    }

    @GetMapping("/byclass/{word_class}")
    public List<Word> getWordByClass(@PathVariable String word_class) {
        return wordService.getWordByWordClass(word_class);
    }

}
