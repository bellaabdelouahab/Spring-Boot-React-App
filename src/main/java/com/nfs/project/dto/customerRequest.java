package com.nfs.project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class customerRequest {
   
    private String firstName;

    private String lastName;
    private String Address;

    private String city;

    private String postalcode;

    private String phoneNumber;

}
