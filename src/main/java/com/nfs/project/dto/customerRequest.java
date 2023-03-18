package com.nfs.project.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class customerRequest {
   
    private String firstname;

    private String lastname;
    private String Address;

    private String city;

    private String postalcode;

    private String phoneNumber;

}
