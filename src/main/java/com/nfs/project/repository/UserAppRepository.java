package com.nfs.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nfs.project.model.userApp;

public interface UserAppRepository extends JpaRepository<userApp,Integer> {

}
