package com.nfs.project.dao;

import java.time.LocalDate;
import java.util.List;

import com.nfs.project.model.OrdersOperation;

public interface OrderOpServiceDAO {
    public List<OrdersOperation> getAllOrders();
    public OrdersOperation getOrderById(int id);
    public List<OrdersOperation> getOrderByProductId(int productid);
    public List<OrdersOperation> getOrderByCustomerId(int customerId);
    public List<OrdersOperation> getConfirmedOrders();
    public List<OrdersOperation> getOrdersByOrderDate(LocalDate date);
    public List<OrdersOperation> getShippedOrders();
    public List<OrdersOperation> getNonConfirmedOrders();
    public List<OrdersOperation> getNonShippedOrders();
    public void SaveOrdersOperations(List<OrdersOperation> orders);
    public void SaveOrderOperation(OrdersOperation order);
    public void setConfirmedOrderById(int OrderId);
    public void setShippedOrderById(int Orderid);
    public void SetReceivedOrderById(int OrderId);
}
