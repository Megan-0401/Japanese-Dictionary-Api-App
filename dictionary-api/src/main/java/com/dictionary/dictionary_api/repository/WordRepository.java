package com.dictionary.dictionary_api.repository;

import com.dictionary.dictionary_api.model.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WordRepository extends JpaRepository<Word, Long> {

    @Query(nativeQuery = true, value = "SELECT words.* FROM words, word_classes\n" +
            "WHERE words.class_id = word_classes.id\n" +
            "AND word_classes.word_class = :word_class")
    Optional<List<Word>> findWordByWordClass(@Param("word_class") String word_class);
}
