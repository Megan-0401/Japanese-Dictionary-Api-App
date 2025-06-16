package com.dictionary.dictionary_api.controller;

import com.dictionary.dictionary_api.model.Bookmark;
import com.dictionary.dictionary_api.model.Word;
import com.dictionary.dictionary_api.service.BookmarkService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/bookmarks")
public class BookmarkController {
    private final BookmarkService bookmarkService;

    public BookmarkController(BookmarkService bookmarkService) {
        this.bookmarkService = bookmarkService;
    }

    //METHODS//

    @GetMapping("/{user_id}")
    public List<Word> getAllUserBookmarks (@PathVariable Integer user_id) {
        return bookmarkService.getAllUserBookmarks(user_id);
    }

    @PostMapping("/add/{user_id},{word_id}")
    public ResponseEntity<Bookmark> createBookmark (@PathVariable Integer user_id,
                                                    @PathVariable Integer word_id){
        return new ResponseEntity<>(bookmarkService.createBookmark(user_id, word_id), HttpStatus.CREATED);
    }

    @DeleteMapping("/remove/{user_id},{word_id}")
    public ResponseEntity<Bookmark> deleteBookmark (@PathVariable Integer user_id,
                                          @PathVariable Integer word_id){
        Bookmark bookmark = bookmarkService.deleteBookmark(user_id, word_id);
        return new ResponseEntity<>(bookmark, HttpStatus.OK);
    }
}
