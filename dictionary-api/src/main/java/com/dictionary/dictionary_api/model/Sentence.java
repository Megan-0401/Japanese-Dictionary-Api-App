package com.dictionary.dictionary_api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "sentences")
public class Sentence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String jp_sentence;
    private String eng_sentence;

    @OneToMany(mappedBy = "sentence")
    @JsonIgnore
    private List<Word> words;

    public String getJp_sentence() {
        return jp_sentence;
    }

    public String getEng_sentence() {
        return eng_sentence;
    }

    public List<Word> getWords() {
        return words;
    }
}
