package com.dictionary.dictionary_api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "word_classes")
public class WordClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String word_class;

    @OneToMany(mappedBy = "word_class")
    @JsonIgnore
    private List<Word> words;

    public String getWord_class() {
        return word_class;
    }

    public List<Word> getWords() {
        return words;
    }
}
