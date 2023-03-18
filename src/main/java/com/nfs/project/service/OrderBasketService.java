package com.nfs.project.service;

import com.nfs.project.dao.OrderBasketServiceDAO;
import com.nfs.project.dto.orderBasketRequest;
import com.nfs.project.model.OrderBasket;
import com.nfs.project.model.OrdersOperation;
import com.nfs.project.model.Product;
import com.nfs.project.repository.OrderBasketRepository;
import com.nfs.project.repository.OrderOpRepository;
import com.nfs.project.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderBasketService implements OrderBasketServiceDAO {


    private OrderOpRepository OrderOpRepository;
    private OrderBasketRepository OrderBasketRepository;
    private ProductRepository ProductRepository;

    public OrderBasketService(OrderOpRepository OrderOpRepository,OrderBasketRepository OrderBasketRepository){
        this.OrderBasketRepository=OrderBasketRepository;
        this.OrderOpRepository=OrderOpRepository;
    }

    @Override
    public OrderBasket saveOrderBasket(orderBasketRequest orderBasket) {

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

        return (List<OrderBasket>) OrderBasketRepository.findOrderBasketByOrder(orderId).get();
    }

    @Override
    public List<OrderBasket> getOrderBasketByProductId(int productId) {
        return (List<OrderBasket>) OrderBasketRepository.findOrderBasketByProduct(productId).get();
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
