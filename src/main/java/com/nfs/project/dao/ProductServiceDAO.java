package com.nfs.project.dao;
import com.nfs.project.model.Product;
import com.nfs.project.dto.productRequest;
import java.util.List;
public interface ProductServiceDAO {
    public List<Product> getAllProduct();
    public Product getById(int id);
    public Product saveProduct(productRequest product);
    public List<Product> SaveProductList(List<productRequest> ProductList);
    public void updateProduct(int id,String name, long price,String desc);
    public void deleteProduct(int id);

}
