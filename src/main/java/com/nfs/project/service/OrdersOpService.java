package com.nfs.project.service;


import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nfs.project.dao.OrderOpServiceDAO;
import com.nfs.project.model.OrdersOperation;
import com.nfs.project.repository.CustomerRepository;
import com.nfs.project.repository.OrderOpRepository;
import com.nfs.project.repository.ProductRepository;

@Service
public class OrdersOpService implements OrderOpServiceDAO {
    private OrderOpRepository Repository;
    private ProductRepository productRepository;
    private CustomerRepository customerRepository;
    public OrdersOpService(OrderOpRepository repository,ProductRepository ProductRepository,
        CustomerRepository CustomerRepository
    ){
        Repository=repository;
        productRepository=ProductRepository;
        customerRepository=CustomerRepository;
    }
    @Override
    public List<OrdersOperation> getAllOrders() {
        return Repository.findAll();
    }

    @Override
    public OrdersOperation getOrderById(int id) {
        return Repository.findById(id).get();
    } 

    @Override
    public List<OrdersOperation> getOrderByProductId(int productid) {
        return Repository.findAllByProductId(productid);
    }

    @Override
    public List<OrdersOperation> getOrderByCustomerId(int customerId) {
        return Repository.findAllByCustomerId(customerId);
    }

    @Override
    public List<OrdersOperation> getConfirmedOrders() {
        return Repository.findAllByConfirmedOrdersValue(true);
    }

    @Override
    public List<OrdersOperation> getOrdersByOrderDate(LocalDate date) {
        return Repository.findAllByOrOrderDate(date);
    }

    @Override
    public List<OrdersOperation> getShippedOrders() {
        return Repository.findAllByShippedOrdersValue(true);
    }

    @Override
    public List<OrdersOperation> getNonConfirmedOrders() {
        return Repository.findAllByConfirmedOrdersValue(false);
    }

    @Override
    public List<OrdersOperation> getNonShippedOrders() {
        return Repository.findAllByShippedOrdersValue(false);
    }

    @Override
    public void SaveOrdersOperations(List<OrdersOperation> orders) {
        if(validateOrders(orders)){
            for(OrdersOperation op:orders){
                op.setOrderDate(LocalDate.now());
                op.setReceived(false);
                op.setShipped(false);
                Repository.save(op);
            }
        }
        else{
            throw new IllegalStateException("non valid data");
        }
    }

    public boolean validateOrders(List<OrdersOperation> orders) {
        long completed = orders.stream()
                .filter(op -> isOrderCompleted(op))
                .count();

        return completed == orders.size();
    }

    private boolean isOrderCompleted(OrdersOperation op) {
        if (op.getLabel().isEmpty() || op.getPriceperunit() <= 0 ||
                !customerRepository.existsById(op.getId())  || op.getTotalOrderPrice() <= 0) {
            return false;
        }

        return true;
    }

    @Override
    public void SaveOrderOperation(OrdersOperation order) {
        System.out.println(order.getLabel() + "\n"
                + order.getPriceperunit()
                + "\n" + (customerRepository.findById(order.getId()).isPresent())
                + "\n" +"\n"+order.getTotalOrderPrice());

        if(order.getLabel()!="" && order.getPriceperunit()>0
                && customerRepository.findById(order.getId()).isPresent()
                && order.getTotalOrderPrice()>0
        ){
            Repository.save(order);
        }
        else{
            throw new IllegalStateException("non valid data");
        }
    }

    @Override
    public void setConfirmedOrderById(int OrderId) {
        if(Repository.findById(OrderId).isPresent()){
            OrdersOperation op=Repository.findById(OrderId).get();
            op.setConfirmed(true);
        }
        else{
            throw new IllegalStateException("non existed id");
        }
    }

    @Override
    public void setShippedOrderById(int Orderid) {
        if(Repository.findById(Orderid).isPresent()){
            OrdersOperation op=Repository.findById(Orderid).get();
            op.setShipped(true);
        }
        else{
            throw new IllegalStateException("non existed value");
        }
    }

    @Override
    public void SetReceivedOrderById(int Orderid) {
        if(Repository.findById(Orderid).isPresent()){
            OrdersOperation op=Repository.findById(Orderid).get();
            op.setReceived(true);
        }
        else{
            throw new IllegalStateException("non existed value");
        }
    }
}
