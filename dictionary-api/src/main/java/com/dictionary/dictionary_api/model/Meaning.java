package com.dictionary.dictionary_api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "meanings")
public class Meaning {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "VARCHAR(50)")
    private String english;
}
