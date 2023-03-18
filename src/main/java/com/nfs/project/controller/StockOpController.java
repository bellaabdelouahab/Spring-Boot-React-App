package com.nfs.project.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nfs.project.model.StockOperation;
import com.nfs.project.service.StockOpService;
import com.nfs.project.dto.stockOpRequest;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://codemaster.ninja" }, allowCredentials = "true")
@RequestMapping("/api/v1/app/stockop")
public class StockOpController {

    @Autowired
    private StockOpService Service;

    @GetMapping
    public List<StockOperation> getAllStockOperations(){
        return Service.getAllStockOperations();
    }
    @GetMapping(path = "{id}")
    public StockOperation getStockOperationsById(@PathVariable int id){
        return Service.getStockOpById(id);
    }
    @GetMapping(path="/product")
    public List<StockOperation> getStockOpertionsByProductId(@RequestParam int productid){
        return Service.getStockOperationsByProductId(productid);
    }
    @GetMapping(path = "entereddate")
    public List<StockOperation> getStockOperationsByEntredDate(@RequestParam LocalDate date){
        return Service.getStockOperationsByEnterDate(date);
    }
    @PutMapping
    public void updateConsumedQuantityById(@RequestParam int id,@RequestParam int quantity){
        Service.updateConsumedQuantity(id,quantity);
    }
    @PostMapping
    public StockOperation saveStockOperation(@RequestBody stockOpRequest Stockop){
        return Service.SaveStockOp(Stockop);
    }
    @PostMapping(path = "/list")
    public List<StockOperation> saveStockOperations(@RequestBody List<stockOpRequest> ListStockops){
        return Service.SaveListStockOps(ListStockops);
    }

}
