package com.nfs.project.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nfs.project.model.OrdersOperation;
import com.nfs.project.service.OrdersOpService;

@RestController
@RequestMapping("/api/v1/app/orders")
public class OrderOpController {

    @Autowired
    private OrdersOpService Service;
    

    @PostMapping
    public OrdersOperation SaveOrder(@RequestBody OrdersOperation operation) {

        Service.SaveOrderOperation(operation);
        return operation;
    }

    @PostMapping(path = "/list")
    public OrdersOperation SaveOrderList(@RequestBody OrdersOperation operation) {

        Service.SaveOrderOperation(operation);
        return operation;
    }

    @GetMapping
    public List<OrdersOperation> getAllOrderOperations(){
        return Service.getAllOrders();
    }
    @GetMapping(path = "{id}")
    public OrdersOperation getOrdersById(@PathVariable int id){
        return Service.getOrderById(id);
    }
    @GetMapping(path = "/product")
    public List<OrdersOperation> getAllOrdersByProductId(@RequestParam int productid){
        return Service.getOrderByProductId(productid);

    }
    @GetMapping("/customer")
    public List<OrdersOperation> getAllByCustomerId(@RequestParam int customerid){
        return Service.getOrderByCustomerId(customerid);
    }

}
