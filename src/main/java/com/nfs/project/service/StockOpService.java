package com.nfs.project.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nfs.project.dao.StockOpServiceDAO;
import com.nfs.project.model.StockOperation;
import com.nfs.project.repository.ProductRepository;
import com.nfs.project.repository.StockOpRepository;

@Service
public class StockOpService implements StockOpServiceDAO {
    private final StockOpRepository Repository;
    private final ProductRepository productRepository;

    public StockOpService(StockOpRepository repository,ProductRepository ProductRepository){
        Repository=repository;
        productRepository=ProductRepository;
    }

    @Override
    public List<StockOperation> getAllStockOperations() {
        return Repository.findAll();
    }

    @Override
    public StockOperation getStockOpById(int id) {
        return Repository.findById(id).get();
    }

    @Override
    public List<StockOperation> getStockOperationsByProductId(int productId) {
        return (List<StockOperation>) Repository.findAllByProductId(productId);
    }

    @Override
    public List<StockOperation> getStockOperationsByEnterDate(LocalDate Date) {
        return (List<StockOperation>) Repository.findAllByEnteredDate(Date);
    }

    @Override
    public void SaveStockOp(StockOperation StockOp) {
        
        if(productRepository.findById(StockOp.getProductId()).isPresent() &&
            StockOp.getLabel()!=""
        ){
            StockOp.setQuantityConsumed(0);
            StockOp.setEnteredDate(LocalDate.now());
            Repository.save(StockOp);
        }
        else{
            // throw new IllegalStateException("Non Valid Format");
            StockOp.setProductId(1);
            StockOp.setQuantityConsumed(0);
            StockOp.setEnteredDate(LocalDate.now());
            Repository.save(StockOp);
        }
    }

    @Override
    public void updateConsumedQuantity(int id, int quantity) {
        if(Repository.findById(id).isPresent()){
            StockOperation op=Repository.findById(id).get();
            op.setQuantityConsumed(quantity);
        }
        else{
            throw new IllegalStateException("non-existed Key");
        }
    }

    public void SaveStockOps(List<StockOperation> ops) {
        for(StockOperation op:ops){
            SaveStockOp(op);
        }
    }
}
