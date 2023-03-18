package com.nfs.project.repository;

import com.nfs.project.dto.orderBasketRequest;
import com.nfs.project.model.OrderBasket;
import com.nfs.project.model.OrdersOperation;
import com.nfs.project.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface OrderBasketRepository extends JpaRepository<OrderBasket,Integer> {
    @Query("SELECT s FROM OrderBasket s WHERE s.product.id=?1")
    Optional<OrderBasket> findOrderBasketByProduct(int productId);
    @Query("SELECT s FROM OrderBasket s WHERE s.ordersOperation.id=?1")
    Optional<Product> findOrderBasketByOrder(int opId);
}
