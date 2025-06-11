package com.dictionary.dictionary_api.controller;

import com.dictionary.dictionary_api.model.User;
import com.dictionary.dictionary_api.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //METHODS//

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/login/{username},{password}")
    public ResponseEntity<User> getLoggedInUser(@PathVariable String username,
                                          @PathVariable String password) {
        return userService.getLoggedInUser(username, password);
    }

    @PostMapping("/signup/{username},{password}")
    public ResponseEntity<User> createUser(@PathVariable String username,
                                           @PathVariable String password) {
        return userService.createUser(username, password);
    }
}
