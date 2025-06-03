package com.dictionary.dictionary_api.controller;

import com.dictionary.dictionary_api.service.SentenceService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sentences")
public class SentenceController {
    public final SentenceService sentenceService;

    public SentenceController(SentenceService sentenceService) {
        this.sentenceService = sentenceService;
    }
}
