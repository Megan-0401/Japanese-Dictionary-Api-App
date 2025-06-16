package com.dictionary.dictionary_api.repository;

import com.dictionary.dictionary_api.model.Bookmark;
import com.dictionary.dictionary_api.model.User;
import com.dictionary.dictionary_api.model.Word;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {

    //FINDING BOOKMARKS FROM USER//
    @Query(nativeQuery = true, value="SELECT words.* FROM words, users, bookmarks\n" +
            "WHERE bookmarks.word_id = words.id\n" +
            "AND bookmarks.user_id = users.id\n" +
            "AND users.id = :user_id")
    Optional<List<Word>> findBookmarkByUser(@Param("user_id") Integer user_id);

    //FINDING SPECIFIC BOOKMARK FROM USER//
    @Query(nativeQuery = true, value="SELECT bookmarks.* FROM words, users, bookmarks\n" +
            "WHERE bookmarks.word_id = words.id\n" +
            "AND bookmarks.user_id = users.id\n" +
            "AND users.id = :user_id\n" +
            "AND words.id = :word_id")
    Optional<Bookmark> findUserBookmarkByWord(@Param("user_id") Integer user_id,
                                          @Param("word_id") Integer word_id);

    //CREATING BOOKMARK FOR USER//
    @Transactional
    default Bookmark insertBookmark(Bookmark bookmark){
        return save(bookmark);
    }

}
