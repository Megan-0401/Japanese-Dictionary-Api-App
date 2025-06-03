package com.dictionary.dictionary_api.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "words")
public class Word {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String kanji;
    private String hiragana;
    private String katakana;
    private String romanji;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "class_id")
    private WordClass word_class;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "sentence_id")
    private Sentence sentence;

    @ManyToMany(cascade=CascadeType.ALL)
    @JoinTable(
            name = "word_meanings",
            joinColumns = @JoinColumn(name = "word_id"),
            inverseJoinColumns = @JoinColumn(name = "meaning_id")
    )
    List<Meaning> meanings = new ArrayList<>();

    @ManyToMany(cascade=CascadeType.ALL)
    @JoinTable(
            name = "word_categories",
            joinColumns = @JoinColumn(name = "word_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    List<Category> categories = new ArrayList<>();

    public Integer getId() {
        return id;
    }

    public String getKanji() {
        return kanji;
    }

    public String getHiragana() {
        return hiragana;
    }

    public String getKatakana() {
        return katakana;
    }

    public String getRomanji() {
        return romanji;
    }

    public WordClass getWord_class() {
        return word_class;
    }

    public Sentence getSentence() {
        return sentence;
    }

    public List<Meaning> getMeanings() {
        return meanings;
    }

    public List<Category> getCategories() {
        return categories;
    }
}
