package com.example.Project1.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Project1.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}