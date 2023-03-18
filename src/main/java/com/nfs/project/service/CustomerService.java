package com.nfs.project.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nfs.project.dao.CustomerServiceDAO;
import com.nfs.project.model.customer;
import com.nfs.project.repository.CustomerRepository;
import com.nfs.project.dto.customerRequest;
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
    public customer AddCustomer(customerRequest customerObj) {
        var customerValue=customer.builder().Address(customerObj.getAddress()).FirstName(customerObj.getFirstname())
                .LastName((customerObj.getLastname())).city(customerObj.getCity()).postalcode(customerObj.getPostalcode())
                .JoinDate(LocalDate.now()).phoneNumber(customerObj.getPhoneNumber()).build();
        Repository.save(customerValue);
        return customerValue;
    }

    @Override
    public List<customer> AddCustomersList(List<customerRequest> List) {
        List<customer> ListCustomers=null;
        for(customerRequest Req:List){
            ListCustomers.add(AddCustomer(Req));
        }
        return ListCustomers;
    }

    @Transactional
    @Override
    public void updatePhoneNumber(int id, String phoneNumber) {
        customer customer=Repository.findById(id).get();
        customer.setPhoneNumber(phoneNumber);
    }
}
