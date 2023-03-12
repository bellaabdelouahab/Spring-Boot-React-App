package com.nfs.project.repository;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nfs.project.model.OrdersOperation;

public interface OrderOpRepository extends JpaRepository<OrdersOperation,Integer> {
    @Query("SELECT s FROM orders_operation s where  s.confirmed=?1")
    Optional<OrdersOperation> findAllByConfirmedOrdersValue(Boolean confirm);
    @Query("SELECT s FROM orders_operation s where  s.Shipped=?1")
    Optional<OrdersOperation> findAllByShippedOrdersValue(Boolean Shipped);
    @Query("SELECT s FROM orders_operation s where  s.Received=?1")
    Optional<OrdersOperation> findAllByReceivedOrdersValue(Boolean Received);
    @Query("SELECT s FROM orders_operation s where  s.ProductId=?1")
    Optional<OrdersOperation> findAllByProductId(int productId);
    @Query("SELECT s FROM orders_operation s where  s.customerid=?1")
    Optional<OrdersOperation> findAllByCustomerId(int CustomerId);
    @Query("SELECT s FROM orders_operation s where  s.OrderDate=?1")
    Optional<OrdersOperation> findAllByOrOrderDate(LocalDate orderDate);
}