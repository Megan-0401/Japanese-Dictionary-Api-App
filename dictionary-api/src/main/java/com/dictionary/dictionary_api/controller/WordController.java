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

    //FILTERS//
    @GetMapping("/byclass/{class_id}")
    public List<Word> getWordByClass(@PathVariable Integer class_id) {
        return wordService.getWordByWordClass(class_id);
    }

    @GetMapping("/bycategory/{category_id}")
    public List<Word> getWordByCategory(@PathVariable Integer category_id) {
        return wordService.getWordByCategory(category_id);
    }

    @GetMapping("/byfilters/{class_id},{category_id}")
    public List<Word> getWordByClassAndCategory(@PathVariable Integer class_id,
                                                @PathVariable Integer category_id) {
        return wordService.getWordByClassAndCategory(class_id, category_id);
    }

    //SEARCH//
    @GetMapping("/bysearch/{search}")
    public List<Word> getWordByEnglish(@PathVariable String search){
        return wordService.getWordBySearch(search);
    }

}
