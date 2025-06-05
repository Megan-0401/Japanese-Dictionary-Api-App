package com.dictionary.dictionary_api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bookmarks")
public class Bookmark {
    @Id
    private Integer id;

    @ManyToOne
    @JoinColumn(name="word_id")
    private Word word;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public Word getWord() {
        return word;
    }

    public User getUser() {
        return user;
    }
}
