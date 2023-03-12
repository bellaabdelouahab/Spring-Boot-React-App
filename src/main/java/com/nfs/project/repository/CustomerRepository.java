package com.nfs.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nfs.project.model.customer;




public interface CustomerRepository extends JpaRepository<customer,Integer> {

}
