package com.nfs.project.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity(name = "stock_operation")
@Table
public class StockOperation {
    @Id
    @SequenceGenerator(
            name="stockOpSequence",
            sequenceName = "stockOpSequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "stockOpSequence"
    )


    private int id;
    private int productId;
    private int quantity;
    private int quantityConsumed;
    private LocalDate EnteredDate;
    private String Label;
    private LocalDate ExitedDate;
    private StockOperation(){}

    public StockOperation(int productId, int quantity, String label) {
        this.productId = productId;
        this.quantity = quantity;
        this.Label = label;
        this.EnteredDate=LocalDate.now();
        this.quantityConsumed=0;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public LocalDate getEnteredDate() {
        return EnteredDate;
    }

    public void setEnteredDate(LocalDate enteredDate) {
        EnteredDate = enteredDate;
    }

    public String getLabel() {
        return Label;
    }

    public void setLabel(String label) {
        Label = label;
    }

    public LocalDate getExitedDate() {
        return ExitedDate;
    }

    public void setExitedDate(LocalDate exitedDate) {
        ExitedDate = exitedDate;
    }

    public int getQuantityConsumed() {
        return quantityConsumed;
    }

    public void setQuantityConsumed(int quantityConsumed) {
        this.quantityConsumed = quantityConsumed;
    }

    @Override
    public String toString() {
        return "StockOperation{" +
                "id=" + id +
                ", productId=" + productId +
                ", quantity=" + quantity +
                ", quantityConsumed=" + quantityConsumed +
                ", EnteredDate=" + EnteredDate +
                ", Label='" + Label + '\'' +
                ", ExitedDate=" + ExitedDate +
                '}';
    }
}
