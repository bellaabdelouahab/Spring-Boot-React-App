package com.nfs.project.dao;


import java.util.List;
import com.nfs.project.model.customer;
public interface CustomerServiceDAO {
    public List<customer> getAllCustomers();
    public customer getCustomerById(int id);
    public void AddCustomer(customer customer);
    public void updatePhoneNumber(int id,String phoneNumber);

}
