package com.nfs.project.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nfs.project.model.OrdersOperation;
import com.nfs.project.service.OrdersOpService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://codemaster.ninja" }, allowCredentials = "true")
@RequestMapping("/api/v1/app/orders")
public class OrderOpController {

    @Autowired
    private OrdersOpService Service;
    

    @PostMapping
    public OrdersOperation SaveOrder(@Valid @RequestBody OrdersOperation operation) {
        System.out.println(operation);
        Service.SaveOrderOperation(operation);
        return operation;
    }

    @PostMapping(path = "/list")
    public List<OrdersOperation> SaveOrderList(@RequestBody List<OrdersOperation> operation) {

        Service.SaveOrdersOperations(operation);
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
