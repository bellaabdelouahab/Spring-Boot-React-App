package com.nfs.project.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nfs.project.dto.orderOpRequest;
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
    public ResponseEntity<OrdersOperation> SaveOrder(@Valid @RequestBody orderOpRequest operation) {
        System.out.println(operation.toString());
        return ResponseEntity.created(null).body(Service.SaveOrderOperation(operation));

    }

    @PostMapping(path = "/list")
    public List<OrdersOperation> SaveOrderList(@RequestBody List<orderOpRequest> ListOperation) {
        return Service.SaveOrdersOperations(ListOperation);
    }

    @GetMapping
    public List<OrdersOperation> getAllOrderOperations(){
        return Service.getAllOrders();
    }
    @GetMapping(path = "{id}")
    public OrdersOperation getOrdersById(@PathVariable int id){
        return Service.getOrderById(id);
    }

    @GetMapping("/customer")
    public List<OrdersOperation> getAllByCustomerId(@RequestParam int customerid){
        return Service.getOrderByCustomerId(customerid);

    }

}
