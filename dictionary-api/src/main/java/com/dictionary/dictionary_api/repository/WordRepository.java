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

    @Query(nativeQuery = true, value = "SELECT words.* FROM words\n" +
            "WHERE words.class_id = :class_id")
    Optional<List<Word>> findWordByWordClass(@Param("class_id") Integer class_id);

    @Query(nativeQuery = true, value = "SELECT words.* FROM words, word_categories\n" +
            "WHERE words.id = word_categories.word_id\n" +
            "AND word_categories.category_id = :category_id")
    Optional<List<Word>> findWordByCategory(@Param("category_id") Integer category_id);
}
