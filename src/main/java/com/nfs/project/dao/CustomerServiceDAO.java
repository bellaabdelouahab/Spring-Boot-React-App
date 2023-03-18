package com.nfs.project.dao;


import java.util.List;
import com.nfs.project.model.customer;
import com.nfs.project.dto.customerRequest;
public interface CustomerServiceDAO {
    public List<customer> getAllCustomers();
    public customer getCustomerById(int id);
    public customer AddCustomer(customerRequest customerObj);
    public List<customer> AddCustomersList(List<customerRequest> List);
    public void updatePhoneNumber(int id,String phoneNumber);

}
