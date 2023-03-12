package com.nfs.project.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity(name = "orders_operation")
@Table
public class OrdersOperation {
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
    private OrdersOperation(){}

    public OrdersOperation(int productId, int customerid, String label,
                           float totalOrderPrice, float priceperunit, int quantity,boolean confirmed) {
        this.ProductId = productId;
        this.customerid = customerid;
        this.Label = label;
        this.TotalOrderPrice = totalOrderPrice;
        this.priceperunit = priceperunit;
        this.OrderDate = LocalDate.now();
        this.quantity = quantity;
        this.confirmed=confirmed;
        this.Shipped=false;
        this.Received=false;

    }
    
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProductId() {
        return ProductId;
    }

    public void setProductId(int productId) {
        ProductId = productId;
    }

    public int getCustomerid() {
        return customerid;
    }

    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }

    public String getLabel() {
        return Label;
    }

    public void setLabel(String label) {
        Label = label;
    }

    public float getTotalOrderPrice() {
        return TotalOrderPrice;
    }

    public void setTotalOrderPrice(float totalOrderPrice) {
        TotalOrderPrice = totalOrderPrice;
    }

    public float getPriceperunit() {
        return priceperunit;
    }

    public void setPriceperunit(float priceperunit) {
        this.priceperunit = priceperunit;
    }

    public LocalDate getOrderDate() {
        return OrderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        OrderDate = orderDate;
    }

    public Boolean getConfirmed() {
        return confirmed;
    }

    public void setConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
    }

    public Boolean getShipped() {
        return Shipped;
    }

    public void setShipped(Boolean shipped) {
        Shipped = shipped;
    }

    public Boolean getReceived() {
        return Received;
    }

    public void setReceived(Boolean received) {
        Received = received;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "OrdersOperation{" +
                "id=" + id +
                ", ProductId=" + ProductId +
                ", customerid=" + customerid +
                ", Label='" + Label + '\'' +
                ", TotalOrderPrice=" + TotalOrderPrice +
                ", priceperunit=" + priceperunit +
                ", OrderDate=" + OrderDate +
                ", confirmed=" + confirmed +
                ", Shipped=" + Shipped +
                ", Received=" + Received +
                ", quantity=" + quantity +
                '}';
    }
}
