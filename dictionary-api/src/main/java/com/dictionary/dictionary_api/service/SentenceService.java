package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.repository.SentenceRepository;
import org.springframework.stereotype.Service;

@Service
public class SentenceService {
    private final SentenceRepository sentenceRepository;

    public SentenceService(SentenceRepository sentenceRepository) {
        this.sentenceRepository = sentenceRepository;
    }
}
