package com.dictionary.dictionary_api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "word_classes")
public class WordClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "VARCHAR(50)")
    private String word_class;
}
