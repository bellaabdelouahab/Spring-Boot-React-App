package com.nfs.project.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity(name = "stock_operation")
@Table
@NoArgsConstructor
@AllArgsConstructor
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

    public StockOperation(int productId, int quantity, String label) {
        this.productId = productId;
        this.quantity = quantity;
        this.Label = label;
        this.quantityConsumed=0;
    }
}
