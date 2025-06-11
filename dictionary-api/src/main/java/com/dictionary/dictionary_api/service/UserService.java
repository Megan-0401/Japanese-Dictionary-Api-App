package com.dictionary.dictionary_api.service;

import com.dictionary.dictionary_api.model.User;
import com.dictionary.dictionary_api.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    //METHODS//

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public ResponseEntity<User> getLoggedInUser(String username, String password) {
        List<User> userList = userRepository.findAll();
        User userInDatabase = getUserByUsername(username);
        if(userInDatabase != null){
            String passwordInDatabase = userInDatabase.getPassword();
            if(bCryptPasswordEncoder.matches(password,passwordInDatabase)) {
                return new ResponseEntity<>(userInDatabase, HttpStatus.OK);
            } else{
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

    private String encryptPassword(String password){
        return bCryptPasswordEncoder.encode(password);
    }
}
