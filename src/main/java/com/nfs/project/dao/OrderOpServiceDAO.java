package com.nfs.project.dao;

import java.time.LocalDate;
import java.util.List;
import com.nfs.project.dto.orderOpRequest;
import com.nfs.project.model.OrdersOperation;

public interface OrderOpServiceDAO {
    public List<OrdersOperation> getAllOrders();
    public OrdersOperation getOrderById(int id);
    public List<OrdersOperation> getOrderByCustomerId(int customerId);
    public List<OrdersOperation> getConfirmedOrders();
    public List<OrdersOperation> getOrdersByOrderDate(LocalDate date);
    public List<OrdersOperation> getShippedOrders();
    public List<OrdersOperation> getNonConfirmedOrders();
    public List<OrdersOperation> getNonShippedOrders();
    public List<OrdersOperation> SaveOrdersOperations(List<orderOpRequest> orders);
    public OrdersOperation SaveOrderOperation(orderOpRequest order);
    public void setConfirmedOrderById(int OrderId);
    public void setShippedOrderById(int Orderid);
    public void SetReceivedOrderById(int OrderId);
}
