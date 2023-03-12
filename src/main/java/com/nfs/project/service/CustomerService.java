package com.nfs.project.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nfs.project.dao.CustomerServiceDAO;
import com.nfs.project.model.customer;
import com.nfs.project.repository.CustomerRepository;

@Service("customerService")
public class CustomerService implements CustomerServiceDAO {

    @Autowired
    private CustomerRepository Repository;


    @Override
    public List<customer> getAllCustomers() {
        return Repository.findAll();
    }

    @Override
    public customer getCustomerById(int id) {
        return Repository.findById(id).get();
    }

    @Override
    public void AddCustomer(customer customer) {
        if(customer.getAddress()!="" && customer.getCity()!="" && customer.getFirstName()!=""
            && customer.getPostalcode()!="" && customer.getLastName()!="" && customer.getPhoneNumber()!=""
        ){
            customer.setJoinDate(LocalDate.now());
            Repository.save(customer);
        }
        else{
            throw new IllegalStateException("Non Valid customer format");
        }

    }

    @Transactional
    @Override
    public void updatePhoneNumber(int id, String phoneNumber) {
        customer customer=Repository.findById(id).get();
        customer.setPhoneNumber(phoneNumber);
    }
}
