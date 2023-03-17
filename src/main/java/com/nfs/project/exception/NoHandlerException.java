/**
 * @author abdelouahabella
 * Date: Mar 17, 2023
 * Time: 12:17:45 PM
*/
package com.nfs.project.exception;

import java.sql.Date;
import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

import com.nfs.project.payload.ResponseData;

@ControllerAdvice
public class NoHandlerException {

    @ExceptionHandler(NoHandlerFoundException.class)
    public String handleNoHandlerFoundException(NoHandlerFoundException ex) {
        System.out.println("NoHandlerFoundException");
        return "forward:/index.html";
    }
    @ExceptionHandler(org.springframework.web.bind.MethodArgumentNotValidException.class)
    public ResponseEntity<ResponseData> index(org.springframework.web.bind.MethodArgumentNotValidException ex) {
        return ResponseEntity.badRequest().body(ResponseData.builder().date(LocalDate.now()).message(ex.getMessage()).build());
    }
}
