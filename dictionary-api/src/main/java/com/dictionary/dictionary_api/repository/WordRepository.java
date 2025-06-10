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

    //FILTERS//
    @Query(nativeQuery = true, value = "SELECT words.* FROM words\n" +
            "WHERE words.class_id = :class_id")
    Optional<List<Word>> findWordByWordClass(@Param("class_id") Integer class_id);

    @Query(nativeQuery = true, value = "SELECT words.* FROM words, word_categories\n" +
            "WHERE words.id = word_categories.word_id\n" +
            "AND word_categories.category_id = :category_id")
    Optional<List<Word>> findWordByCategory(@Param("category_id") Integer category_id);

    @Query(nativeQuery = true, value = "SELECT words.* FROM words, word_categories\n" +
            "WHERE words.id = word_categories.word_id\n" +
            "AND words.class_id = :class_id\n" +
            "AND word_categories.category_id = :category_id")
    Optional<List<Word>> findWordByClassAndCategory(@Param("class_id") Integer class_id,
                                                    @Param("category_id") Integer category_id);

    //SEARCH//
    @Query(nativeQuery = true, value = "SELECT words.* FROM words, meanings, word_meanings\n" +
            "WHERE word_meanings.word_id = words.id\n" +
            "AND word_meanings.meaning_id = meanings.id\n" +
            "AND meanings.english LIKE %:eng_search%")
    Optional<List<Word>> findWordByEnglish(@Param("eng_search") String eng_search);

    @Query(nativeQuery = true, value = "SELECT words.* FROM words\n" +
            "WHERE words.romanji LIKE %:roman_search%")
    Optional<List<Word>> findWordByRomanji(@Param("roman_search") String roman_search);

    @Query(nativeQuery = true, value="SELECT words.* FROM words\n" +
            "WHERE words.kanji LIKE %:jp_search%\n" +
            "OR words.hiragana LIKE %:jp_search%\n" +
            "OR words.katakana LIKE %:jp_search%")
    Optional<List<Word>> findWordByJapanese(@Param("jp_search") String jp_search);
}
