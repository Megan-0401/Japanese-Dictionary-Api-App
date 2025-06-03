package com.dictionary.dictionary_api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sentences")
public class Sentence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "VARCHAR(100)")
    private String jp_sentence;
    @Column(columnDefinition = "VARCHAR(100)")
    private String eng_sentence;

}
