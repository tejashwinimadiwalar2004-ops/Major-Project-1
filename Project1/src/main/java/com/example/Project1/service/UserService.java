package com.example.Project1.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Project1.entity.User;
import com.example.Project1.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    // Create
    public User saveUser(User user) {
        return repo.save(user);
    }

    // Read
    public List<User> getAllUsers() {
        return repo.findAll();
    }

    // Read by ID
    public User getUserById(int id) {
        return repo.findById(id).orElse(null);
    }

    // Update
    public User updateUser(int id, User newUser) {
        User user = repo.findById(id).orElse(null);
        if (user != null) {
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            return repo.save(user);
        }
        return null;
    }

    // Delete
    public String deleteUser(int id) {
        repo.deleteById(id);
        return "User deleted!";
    }
}
