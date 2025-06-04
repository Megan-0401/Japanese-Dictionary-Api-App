package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.model.Bookmark;
import com.dictionary.dictionary_api.repository.BookmarkRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookmarkService {
    private final BookmarkRepository bookmarkRepository;

    public BookmarkService(BookmarkRepository bookmarkRepository) {
        this.bookmarkRepository = bookmarkRepository;
    }

    //METHODS//

    public List<Bookmark> getAllBookmarks () {
        return bookmarkRepository.findAll();
    }
}
