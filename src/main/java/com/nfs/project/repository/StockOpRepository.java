package com.nfs.project.repository;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nfs.project.model.OrdersOperation;
import com.nfs.project.model.StockOperation;


public interface StockOpRepository extends JpaRepository<StockOperation,Integer> {
    @Query("SELECT s FROM stock_operation s where  s.productId=?1")
    Optional<OrdersOperation> findAllByProductId(int id);
    @Query("SELECT s FROM stock_operation s where  s.EnteredDate=?1")
    Optional<OrdersOperation> findAllByEnteredDate(LocalDate dateEntered);

}
