package com.dictionary.dictionary_api.repository;

import com.dictionary.dictionary_api.model.WordClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordClassRepository extends JpaRepository<WordClass, Long> {
}
