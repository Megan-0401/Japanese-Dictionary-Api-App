package com.dictionary.dictionary_api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String category;

    @ManyToMany(mappedBy = "categories")
    @JsonIgnore
    List<Word> words = new ArrayList<>();

    public Integer getId() {
        return id;
    }

    public String getCategory() {
        return category;
    }
}
