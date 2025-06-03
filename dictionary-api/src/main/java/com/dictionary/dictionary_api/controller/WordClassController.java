package com.dictionary.dictionary_api.controller;

import com.dictionary.dictionary_api.service.WordClassService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/wordclass")
public class WordClassController {
    private final WordClassService wordClassService;

    public WordClassController(WordClassService wordClassService) {
        this.wordClassService = wordClassService;
    }
}
