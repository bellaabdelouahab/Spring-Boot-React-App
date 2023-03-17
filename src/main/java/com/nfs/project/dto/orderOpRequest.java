package com.nfs.project.dto;

import com.nfs.project.model.customer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class orderOpRequest {
    private int customerId;
    private String label;
    private float totalOrderPrice;
    private float priceperunit;
    private boolean confirmed;
}
