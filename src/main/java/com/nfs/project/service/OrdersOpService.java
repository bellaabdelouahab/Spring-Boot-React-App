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
        return (List<OrdersOperation>) Repository.findAllByProductId(productid).get();
    }

    @Override
    public List<OrdersOperation> getOrderByCustomerId(int customerId) {
        return (List<OrdersOperation>) Repository.findAllByCustomerId(customerId).get();
    }

    @Override
    public List<OrdersOperation> getConfirmedOrders() {
        return (List<OrdersOperation>) Repository.findAllByConfirmedOrdersValue(true).get();
    }

    @Override
    public List<OrdersOperation> getOrdersByOrderDate(LocalDate date) {
        return (List<OrdersOperation>) Repository.findAllByOrOrderDate(date).get();
    }

    @Override
    public List<OrdersOperation> getShippedOrders() {
        return (List<OrdersOperation>) Repository.findAllByShippedOrdersValue(true).get();
    }

    @Override
    public List<OrdersOperation> getNonConfirmedOrders() {
        return (List<OrdersOperation>) Repository.findAllByConfirmedOrdersValue(false).get();
    }

    @Override
    public List<OrdersOperation> getNonShippedOrders() {
        return (List<OrdersOperation>) Repository.findAllByShippedOrdersValue(false).get();
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
    public boolean validateOrders(List<OrdersOperation> orders){
        int incompleted=0;
        int completed=0;
        boolean value=false;
        for(OrdersOperation op:orders){
            if(op.getLabel()!="" && op.getPriceperunit()>0
                    && productRepository.findById(op.getProductId()).isPresent()
                    && customerRepository.findById(op.getId()).isPresent()
                    &&  op.getQuantity()>0 && op.getTotalOrderPrice()>0
            ){
                completed++;
            }
            else{
                // incompleted++;
                op.setProductId(1);
                op.setQuantity(1);
                op.setTotalOrderPrice(1);
                op.setPriceperunit(1);
                op.setLabel("incomplete");
                op.setOrderDate(LocalDate.now());
                op.setCustomerid(7);

            }
        }
        if(incompleted==0){
            value=true;
        }
        return value;
    }

    @Override
    public void SaveOrderOperation(OrdersOperation order) {
        System.out.println(order.getLabel() + "\n"
                + order.getPriceperunit()
                + "\n" + (productRepository.findById(order.getProductId()).isPresent())
                + "\n" + (customerRepository.findById(order.getId()).isPresent())
                + "\n" + (order.getQuantity() > 0 )+"\n"+order.getTotalOrderPrice());

        if(order.getLabel()!="" && order.getPriceperunit()>0
                && productRepository.findById(order.getProductId()).isPresent()
                && customerRepository.findById(order.getId()).isPresent()
                &&  order.getQuantity()>0 && order.getTotalOrderPrice()>0
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
