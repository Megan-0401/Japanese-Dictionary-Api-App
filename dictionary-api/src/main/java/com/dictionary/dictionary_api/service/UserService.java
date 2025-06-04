package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.model.User;
import com.dictionary.dictionary_api.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //METHODS//

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
