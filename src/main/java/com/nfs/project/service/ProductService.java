package com.nfs.project.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nfs.project.dao.ProductServiceDAO;
import com.nfs.project.model.Product;
import com.nfs.project.repository.ProductRepository;
import com.nfs.project.dto.productRequest;
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
    public Product saveProduct(productRequest product) {
        var productObj=Product.builder().description(product.getDescription()).type(product.getType())
                .imagesrc(product.getImagesrc()).name(product.getName()).price(product.getPrice())
                .build();
        repository.save(productObj);
        return productObj;
    }

    @Override
    public List<Product> SaveProductList(List<productRequest> ProductList) {
        List<Product> ListProducts_objects=null;
        for(productRequest req:ProductList){
            ListProducts_objects.add(saveProduct(req));
        }
        return ListProducts_objects;
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
