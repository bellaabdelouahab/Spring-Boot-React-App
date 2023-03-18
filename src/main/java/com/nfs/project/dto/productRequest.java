package com.nfs.project.dto;


import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class productRequest {
    @NotBlank
    private String name;

    private String imagesrc;

    @Min(value = 1)
    private long price;

    @NotBlank
    private String type;

    @NotBlank
    private String description;
}
