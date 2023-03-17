/**
 * @author abdelouahabella
 * Date: Mar 17, 2023
 * Time: 12:17:45 PM
*/
package com.nfs.project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class NoHandlerException {

    @ExceptionHandler(NoHandlerFoundException.class)
    public String handleNoHandlerFoundException(NoHandlerFoundException ex) {
        System.out.println("NoHandlerFoundException");
        return "forward:/index.html";
    }
    @ExceptionHandler(org.springframework.web.bind.MethodArgumentNotValidException.class)
    public ResponseEntity<String> index(org.springframework.web.bind.MethodArgumentNotValidException ex) {
        System.out.println("MethodArgumentNotValidException");
        return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
    }
}
