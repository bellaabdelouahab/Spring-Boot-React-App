/**
 * @author abdelouahabella
 * Date: Mar 17, 2023
 * Time: 9:49:14 PM
*/
package com.nfs.project.payload;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseData {
    
    private String message;

    private int status;

    private String path;

    private LocalDate date;
}
