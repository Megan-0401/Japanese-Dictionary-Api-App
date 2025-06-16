package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.model.Bookmark;
import com.dictionary.dictionary_api.model.Word;
import com.dictionary.dictionary_api.repository.BookmarkRepository;
import com.dictionary.dictionary_api.repository.UserRepository;
import com.dictionary.dictionary_api.repository.WordRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookmarkService {
    private final BookmarkRepository bookmarkRepository;
    private final WordRepository wordRepository;
    private final UserRepository userRepository;

    public BookmarkService(BookmarkRepository bookmarkRepository, WordRepository wordRepository, UserRepository userRepository) {
        this.bookmarkRepository = bookmarkRepository;
        this.wordRepository = wordRepository;
        this.userRepository = userRepository;
    }

    //METHODS//

    public List<Word> getAllUserBookmarks (Integer user_id) {
        return bookmarkRepository.findBookmarkByUser(user_id).orElseThrow();
    }

    public Bookmark createBookmark (Integer user_id, Integer word_id){
        Bookmark bookmark = createBookmarkEntity(user_id, word_id);
        return bookmarkRepository.insertBookmark(bookmark);
    }

    public Bookmark createBookmarkEntity (Integer user_id, Integer word_id){
        Bookmark bookmark = new Bookmark();
        bookmark.setWord(wordRepository.findById(Long.valueOf(word_id)).orElseThrow());
        bookmark.setUser(userRepository.findById(Long.valueOf(user_id)).orElseThrow());
        return bookmark;
    }

    public Bookmark deleteBookmark (Integer user_id, Integer word_id){
        Bookmark bookmark = bookmarkRepository.findUserBookmarkByWord(user_id, word_id).orElseThrow();
        bookmarkRepository.deleteById(Long.valueOf(bookmark.getId()));
        return bookmark;
    }
}
