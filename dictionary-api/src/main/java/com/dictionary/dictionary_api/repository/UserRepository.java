package com.dictionary.dictionary_api.repository;

import com.dictionary.dictionary_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    //FINDING USER//
    Optional<User> findByUsername (String username);

    //CHECKING IF USER EXISTS//
    Boolean existsByUsername (String username);
}
