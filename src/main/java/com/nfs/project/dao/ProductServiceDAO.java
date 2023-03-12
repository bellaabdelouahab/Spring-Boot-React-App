package com.nfs.project.dao;
import com.nfs.project.model.Product;

import java.util.List;
public interface ProductServiceDAO {
    public List<Product> getAllProduct();
    public Product getById(int id);
    public void saveProduct(Product product);
    public void updateProduct(int id,String name, long price,String desc);
    public void deleteProduct(int id);

}
