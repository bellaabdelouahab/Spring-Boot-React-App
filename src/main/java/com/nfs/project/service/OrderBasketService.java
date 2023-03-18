package com.nfs.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nfs.project.dao.OrderBasketServiceDAO;
import com.nfs.project.dto.orderBasketRequest;
import com.nfs.project.model.OrderBasket;
import com.nfs.project.repository.OrderBasketRepository;
import com.nfs.project.repository.OrderOpRepository;
import com.nfs.project.repository.ProductRepository;

@Service
public class OrderBasketService implements OrderBasketServiceDAO {

    @Autowired
    private OrderOpRepository OrderOpRepository;
    @Autowired
    private OrderBasketRepository OrderBasketRepository;
    @Autowired
    private ProductRepository ProductRepository;

    public OrderBasketService(OrderOpRepository OrderOpRepository,OrderBasketRepository OrderBasketRepository){
        this.OrderBasketRepository=OrderBasketRepository;
        this.OrderOpRepository=OrderOpRepository;
    }

    @Override
    public OrderBasket saveOrderBasket(orderBasketRequest orderBasket) {

        System.out.println(ProductRepository.findById(orderBasket.getProductId()).get()
        );
        System.out.println(OrderOpRepository.findById(orderBasket.getOrderId()).get());
        var orderBasketValue=OrderBasket.builder().ordersOperation(OrderOpRepository.findById(orderBasket.getOrderId()).get())
                .product(ProductRepository.findById(orderBasket.getProductId()).get())
                .priceperunit(orderBasket.getPriceperunit()).quantity(orderBasket.getQuantity()).build();
        OrderBasketRepository.save(orderBasketValue);
        return orderBasketValue;
    }

    @Override
    public List<OrderBasket> saveListOrderBasket(List<orderBasketRequest> ListOrderBasket) {
        List<OrderBasket> ListBaskets=null;
        for(orderBasketRequest basket:ListOrderBasket){
            ListBaskets.add(saveOrderBasket(basket));
        }
        return ListBaskets;
    }

    @Override
    public List<OrderBasket> getOrderBasketByOrderId(int orderId) {

        return OrderBasketRepository.findOrderBasketByOrder(orderId);
    }

    @Override
    public List<OrderBasket> getOrderBasketByProductId(int productId) {
        return OrderBasketRepository.findOrderBasketByProduct(productId);
    }

    @Override
    public List<OrderBasket> getAllOrderBasket() {
        return OrderBasketRepository.findAll();
    }

    @Override
    public OrderBasket getBasketById(int id) {
        return OrderBasketRepository.findById(id).get();
    }
}
