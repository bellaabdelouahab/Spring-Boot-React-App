package com.nfs.project.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nfs.project.dao.StockOpServiceDAO;
import com.nfs.project.model.StockOperation;
import com.nfs.project.repository.ProductRepository;
import com.nfs.project.repository.StockOpRepository;
import com.nfs.project.dto.stockOpRequest;

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
    public StockOperation SaveStockOp(stockOpRequest StockOp) {
        var stockOp_obj=StockOperation.builder().Label(StockOp.getLabel()).productId(StockOp.getProductId())
                .quantity(StockOp.getQuantity()).build();
        return stockOp_obj;
    }

    @Override
    public List<StockOperation> SaveListStockOps(List<stockOpRequest> StockOpList) {
        List<StockOperation> ListStockOp_objs=null;
        for (stockOpRequest Req:StockOpList){
            ListStockOp_objs.add(SaveStockOp(Req));
        }
        return ListStockOp_objs;
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


}
