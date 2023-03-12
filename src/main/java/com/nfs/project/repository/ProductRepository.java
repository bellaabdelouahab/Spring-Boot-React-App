package com.nfs.project.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nfs.project.model.Product;


public interface ProductRepository extends JpaRepository<Product,Integer> {
    @Query("SELECT s FROM Product s WHERE s.type=?1")
    Optional<Product> findProductByType(String Type);
    @Query("SELECT s FROM Product s WHERE s.name=?1")
    Optional<Product> findProductByName(String name);
}
