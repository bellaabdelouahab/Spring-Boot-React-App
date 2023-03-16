package com.nfs.project.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nfs.project.dao.ProductServiceDAO;
import com.nfs.project.model.Product;
import com.nfs.project.repository.ProductRepository;
@Service
public class ProductService implements ProductServiceDAO {
    private final ProductRepository repository;


    public ProductService(ProductRepository Repository){
        repository=Repository;
    }
    @Override
    public List<Product> getAllProduct() {
        return repository.findAll();
    }

    @Override
    public Product getById(int id) {
        if(repository.findById(id).isPresent()){
            return repository.findById(id).get();
        }
        else throw new IllegalStateException("error try again");
    }

    @Override
    public void saveProduct(Product product) {
        if(product.getDescription()!="" && product.getName()!="" && product.getPrice()!=0 && product.getType()!=""
            && product.getImagesrc()!=""
        ){
            repository.save(product);
        }
        else{
            throw new IllegalStateException("fields are required");
        }
    }

    @Override
    public void updateProduct(int id, String name, long price,String desc) {
        Product product;
        if(id!=0 && name!="" && price!=0 && desc!="" && repository.findById(id).isPresent()){
            product=repository.findById(id).get();
            product.setPrice(price);
            product.setName(name);
            product.setDescription(desc);
        }
        else{
            throw new IllegalStateException("error try again");
        }
    }

    @Override
    public void deleteProduct(int id) {
        if(id>0 && repository.findById(id).isPresent()){
            repository.deleteById(id);
        }
        else{
            throw new IllegalStateException("error try again");
        }
    }
}
