package com.dictionary.dictionary_api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bookmarks")
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name="word_id")
    private Word word;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public Integer getId() {
        return id;
    }

    public Word getWord() {
        return word;
    }

    public User getUser() {
        return user;
    }

    public void setWord(Word word) {
        this.word = word;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
