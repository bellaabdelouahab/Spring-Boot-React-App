package com.nfs.project.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nfs.project.model.Product;
import com.nfs.project.service.ProductService;

@RestController
@CrossOrigin(origins = "http://codemaster.ninja", allowCredentials = "true")
@RequestMapping("/api/v1/app/product")
public class ProductController {

    @Autowired
    private ProductService Service;

    @PostMapping
    public Product saveProduct(@RequestBody Product product){
        try{

            Service.saveProduct(product);
            return product;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }
    @PostMapping(path = "/list")
    public List<Product> saveProducts(@RequestBody List<Product> listproducts){
        for(Product product:listproducts){
            Service.saveProduct(product);
        }
        return listproducts;
    }
    @GetMapping
    public List<Product> getAllProducts(){
        return Service.getAllProduct();
    }
    @GetMapping(path = "{id}")
    public Product getProductById(@PathVariable int id){
        try{
            return Service.getById(id);
        }
        catch (Exception e){
            System.out.printf(e.getMessage());
            return null;
        }

    }
    @PutMapping(path = "{id}")
    public void updateProduct(
            @PathVariable int id,
            @RequestParam String name,
            @RequestParam long price,
            @RequestParam String desc
    ){
        Service.updateProduct(id,name,price,desc);
    }
    @DeleteMapping(path = "{id}")
    public void DeleteProduct(@PathVariable int id){
        Service.deleteProduct(id);
    }
}
