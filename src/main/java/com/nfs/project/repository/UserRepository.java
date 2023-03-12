package com.nfs.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nfs.project.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);

  

}
