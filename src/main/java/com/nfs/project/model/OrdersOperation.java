package com.nfs.project.model;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity(name = "orders_operation")
@Table
public class OrdersOperation implements Serializable {
    @Id
    @SequenceGenerator(
            name="OrdersOPSquence",
            sequenceName = "OrdersOPSquence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "OrdersOPSquence"
    )
    private int id;

    private int ProductId;
    private int customerid;
    private String Label;
    private float TotalOrderPrice;
    private float priceperunit;
    private LocalDate OrderDate;
    private Boolean confirmed,Shipped,Received;
    private int quantity;
    public OrdersOperation(int productId, int customerid, String label,
            float totalOrderPrice, float priceperunit, int quantity, boolean confirmed, LocalDate orderDate) {
        this.ProductId = productId;
        this.customerid = customerid;
        this.Label = label;
        this.TotalOrderPrice = totalOrderPrice;
        this.priceperunit = priceperunit;
        this.OrderDate = orderDate;
        this.quantity = quantity;
        this.confirmed = confirmed;
        this.Shipped = false;
        this.Received = false;

    }

 
}
