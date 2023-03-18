package com.nfs.project.dao;

import com.nfs.project.dto.orderBasketRequest;
import com.nfs.project.model.OrderBasket;

import java.util.List;

public interface OrderBasketServiceDAO {
    public OrderBasket saveOrderBasket(orderBasketRequest orderBasket);
    public List<OrderBasket> saveListOrderBasket(List<orderBasketRequest> ListOrderBasket);
    public List<OrderBasket> getOrderBasketByOrderId(int orderId);
    public List<OrderBasket> getOrderBasketByProductId(int productId);
    public List<OrderBasket> getAllOrderBasket();
    public OrderBasket getBasketById(int id);
}
