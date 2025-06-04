package com.dictionary.dictionary_api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bookmarks")
public class Bookmark {
    @Id
    @ManyToOne
    @JoinColumn(name="word_id")
    Word word;

    @Id
    @ManyToOne
    @JoinColumn(name="user_id")
    User user;

}
