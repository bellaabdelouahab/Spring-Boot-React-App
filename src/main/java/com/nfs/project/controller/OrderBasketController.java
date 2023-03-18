package com.nfs.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nfs.project.dto.orderBasketRequest;
import com.nfs.project.model.OrderBasket;
import com.nfs.project.service.OrderBasketService;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://codemaster.ninja" }, allowCredentials = "true")
@RequestMapping("/api/v1/app/orderBasket")
public class OrderBasketController {

    @Autowired
    private OrderBasketService OrderBasketService;

    @GetMapping
    public List<OrderBasket> getAllBasketProducts(){
        return OrderBasketService.getAllOrderBasket();
    }
    @GetMapping(path = "{id}")
    public OrderBasket getBasketById(@PathVariable int id){
        return OrderBasketService.getBasketById(id);
    }
    @GetMapping(path = "/orderNumber/{order}")
    public  List<OrderBasket> getBasketByOrderId(@PathVariable int order){
        return OrderBasketService.getOrderBasketByOrderId(order);
    }

    @GetMapping(path = "/productNumber/{product}")
    public List<OrderBasket> getBasketByProductId(@PathVariable int product){
        return OrderBasketService.getOrderBasketByProductId(product);
    }
    @PostMapping
    public OrderBasket saveOrderBasket(@RequestBody orderBasketRequest Request){
        return OrderBasketService.saveOrderBasket(Request);
    }
    @PostMapping(path = "/list")
    public List<OrderBasket> saveOrderBasketList(@RequestBody List<orderBasketRequest> RequestList){
        return OrderBasketService.saveListOrderBasket(RequestList);
    }
}
