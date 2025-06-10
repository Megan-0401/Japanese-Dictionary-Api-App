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
    @GetMapping("/bysearch/eng/{eng_search}")
    public List<Word> getWordByEnglish(@PathVariable String eng_search){
        return wordService.getWordByEnglish(eng_search);
    }

    @GetMapping("/bysearch/roman/{roman_search}")
    public List<Word> getWordByRomanji(@PathVariable String roman_search){
        return wordService.getWordByRomanji(roman_search);
    }

    @GetMapping("/bysearch/jp/{jp_search}")
    public List<Word> getWordByJapanese(@PathVariable String jp_search){
        return wordService.getWordByJapanese(jp_search);
    }

}
