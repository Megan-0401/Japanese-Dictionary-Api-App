package com.dictionary.dictionary_api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "meanings")
public class Meaning {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String english;

    @ManyToMany(mappedBy = "meanings")
    @JsonIgnore
    List<Word> words = new ArrayList<>();

    public String getEnglish() {
        return english;
    }

    public List<Word> getWords() {
        return words;
    }
}
