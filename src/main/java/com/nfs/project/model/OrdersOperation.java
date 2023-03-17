package com.nfs.project.model;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity(name = "orders_operation")
@Table
@NoArgsConstructor

public class OrdersOperation implements Serializable {
    @Id
    @SequenceGenerator(name="OrdersOPSquence",sequenceName = "OrdersOPSquence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "OrdersOPSquence")
    private int id;
    private String Label;
    private String Status;
    private float TotalOrderPrice;
    private LocalDate OrderDate,ConfirmationDate,ShippingDate,ReceivingDate;
    private Boolean confirmed,Shipped,Received;
    @ManyToOne
    @JoinColumn(name="customer_id")
    private customer customerid;
    
    public OrdersOperation(customer customerid, String label,
            float totalOrderPrice, float priceperunit, boolean confirmed) {

        this.customerid = customerid;
        this.Label = label;
        this.TotalOrderPrice = totalOrderPrice;
        this.OrderDate = LocalDate.now();
        this.confirmed = confirmed;
        this.Shipped = false;
        this.Received = false;
        this.Status="pending";


    }

 
}
