package com.nfs.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nfs.project.model.customer;
import com.nfs.project.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://codemaster.ninja", allowCredentials = "true")
@RequestMapping("/api/v1/app/customer")
public class CustomerController {

    @Autowired
    private CustomerService Service;

    @GetMapping
    public List<customer> getAllCustomers(){
        return Service.getAllCustomers();
    }

    @PostMapping
    public customer saveCustomer(@RequestBody customer customer){
        Service.AddCustomer(customer);
        return customer;
    }
    @PostMapping(path = "/list")
    public List<customer> saveCustomers(@RequestBody List<customer> listofCustomers){
        for(customer customer:listofCustomers){
            Service.AddCustomer(customer);
        }
        return listofCustomers;
    }

    @GetMapping(path = "{id}")
    public customer getCustomerById(@PathVariable int id){
        return Service.getCustomerById(id);
    }
    @PutMapping
    public void UpdateCustomerInfo(@RequestParam String phonenumber,@RequestParam int id){
        Service.updatePhoneNumber(id,phonenumber);
    }
}
