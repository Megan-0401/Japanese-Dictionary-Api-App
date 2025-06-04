package com.dictionary.dictionary_api.controller;

import com.dictionary.dictionary_api.model.Bookmark;
import com.dictionary.dictionary_api.service.BookmarkService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/bookmarks")
public class BookmarkController {
    private final BookmarkService bookmarkService;

    public BookmarkController(BookmarkService bookmarkService) {
        this.bookmarkService = bookmarkService;
    }

    //METHODS//

    @GetMapping
    public List<Bookmark> getAllBookmarks () {
        return bookmarkService.getAllBookmarks();
    }
}
