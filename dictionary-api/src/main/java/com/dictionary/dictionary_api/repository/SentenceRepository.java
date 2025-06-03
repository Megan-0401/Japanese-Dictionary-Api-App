package com.dictionary.dictionary_api.repository;

import com.dictionary.dictionary_api.model.Sentence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SentenceRepository extends JpaRepository<Sentence, Integer> {
}
