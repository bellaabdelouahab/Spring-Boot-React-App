package com.nfs.project.dao;

import com.nfs.project.model.StockOperation;

import java.time.LocalDate;
import java.util.List;

public interface StockOpServiceDAO {
    public List<StockOperation> getAllStockOperations();
    public StockOperation getStockOpById(int id);
    public List<StockOperation> getStockOperationsByProductId(int productId);
    public List<StockOperation> getStockOperationsByEnterDate(LocalDate Date);
    public void SaveStockOp(StockOperation StockOp);
    public void updateConsumedQuantity(int id,int quantity);


}
