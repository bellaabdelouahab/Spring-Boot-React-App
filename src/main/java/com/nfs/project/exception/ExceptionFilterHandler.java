package com.nfs.project.exception;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Data;

import java.io.IOException;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class ExceptionFilterHandler {

    private static final DateTimeFormatter dateTimeFormatter = DateTimeFormatter
            .ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ");

    // handle filter exception
    public void handleFilterException(HttpServletResponse response, Exception ex) throws ServletException, IOException {
       if (ex instanceof ExpiredJwtException) {
        // return json response containing ResponseDetails
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.getWriter().write(
        new ResponseEntity<>(new ResponseDetails(
                LocalDateTime.now().format(dateTimeFormatter),
                HttpStatus.UNAUTHORIZED.value(),
                HttpStatus.UNAUTHORIZED.getReasonPhrase(),
                ex.getMessage(),
                "/api/v1/auth/login"
        ), HttpStatus.UNAUTHORIZED).toString());


       }else{
        response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
       }
    }

    @Data
    static class ResponseDetails {
        private final String timestamp;
        private final int status;
        private final String error;
        private final String message;
        private final String path;

        public ResponseDetails(String timestamp, int status, String error, String message, String path) {
            this.timestamp = timestamp;
            this.status = status;
            this.error = error;
            this.message = message;
            this.path = path;
        }
    }

}
// q: when this class be called