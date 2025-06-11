package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.config.EncryptionConfig;
import com.dictionary.dictionary_api.model.User;
import com.dictionary.dictionary_api.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final EncryptionConfig encryptionConfig;

    public UserService(UserRepository userRepository, EncryptionConfig encryptionConfig) {
        this.userRepository = userRepository;
        this.encryptionConfig = encryptionConfig;
    }

    //METHODS//

    //GET (READ)//
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public ResponseEntity<User> getLoggedInUser(String username, String password) {
        User userInDatabase = getUserByUsername(username);
        if(userInDatabase != null){
            String passwordInDatabase = userInDatabase.getPassword();
            if(encryptionConfig.passwordEncoder().matches(password, passwordInDatabase)) {
                return new ResponseEntity<>(userInDatabase, HttpStatus.OK);
            } else {
                //password does not match
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }
        } else {
            //username not found
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    public User getUserByUsername(String username){
        if(userRepository.existsByUsername(username)){
            return userRepository.findByUsername(username).orElseThrow();
        }
        return null;
    }

    //POST (CREATE)//

    public ResponseEntity<User> createUser(String username, String password){
        User userInDatabase = getUserByUsername(username);
        if(userInDatabase == null){
            User user = userRepository.insertUser(createUserEntity(username,password));
            return new ResponseEntity<>(user, HttpStatus.OK);

        } else {
            //username already exists
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    private User createUserEntity(String username, String password){
        User user = new User();
        user.setUsername(username);
        user.setPassword(encryptPassword((password)));
        return user;
    }

    private String encryptPassword(String password){
        return encryptionConfig.passwordEncoder().encode(password);
    }
}
