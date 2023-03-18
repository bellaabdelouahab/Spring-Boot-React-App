package com.nfs.project.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class orderBasketRequest {
    @NotNull
    @Min(value = 1)
    private int orderId;
    @NotNull
    @Min(value = 1)
    private int productId;

    @NotNull
    @Min(value = 1)
    private int quantity;
    @NotNull
    @Min(value = 1)
    private float priceperunit;
}
