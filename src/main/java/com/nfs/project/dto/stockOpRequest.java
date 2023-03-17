package com.nfs.project.dto;

import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class stockOpRequest {
    private String label;
    @Min(value = 1)
    private int quantity;
    @Min(value = 1)
    private int productId;
}
