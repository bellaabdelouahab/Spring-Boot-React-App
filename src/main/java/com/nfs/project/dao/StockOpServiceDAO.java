package com.nfs.project.dao;

import com.nfs.project.model.StockOperation;

import java.time.LocalDate;
import java.util.List;
import com.nfs.project.dto.stockOpRequest;

public interface StockOpServiceDAO {
    public List<StockOperation> getAllStockOperations();
    public StockOperation getStockOpById(int id);
    public List<StockOperation> getStockOperationsByProductId(int productId);
    public List<StockOperation> getStockOperationsByEnterDate(LocalDate Date);
    public StockOperation SaveStockOp(stockOpRequest StockOp);
    public List<StockOperation> SaveListStockOps(List<stockOpRequest> StockOpList);

    public void updateConsumedQuantity(int id,int quantity);


}
