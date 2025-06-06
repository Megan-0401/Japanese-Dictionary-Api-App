package com.dictionary.dictionary_api.controller;

import com.dictionary.dictionary_api.model.WordClass;
import com.dictionary.dictionary_api.service.WordClassService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/wordclass")
public class WordClassController {
    private final WordClassService wordClassService;

    public WordClassController(WordClassService wordClassService) {
        this.wordClassService = wordClassService;
    }

    //METHODS//

    @GetMapping
    public List<WordClass> getAllWordClasses() {
        return wordClassService.getAllWordClasses();
    }
}
