package com.nfs.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nfs.project.model.OrderBasket;

public interface OrderBasketRepository extends JpaRepository<OrderBasket,Integer> {
    @Query("SELECT s FROM OrderBasket s WHERE s.product.id=?1")
    List<OrderBasket> findOrderBasketByProduct(int productId);
    @Query("SELECT s FROM OrderBasket s WHERE s.ordersOperation.id=?1")
    List<OrderBasket> findOrderBasketByOrder(int opId);
}
