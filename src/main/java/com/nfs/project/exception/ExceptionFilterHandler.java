package com.nfs.project.exception;
import java.io.IOException;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Data;

@Component
public class ExceptionFilterHandler {

    private static final DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm Z");

    // handle filter exception
    public void handleFilterException(HttpServletResponse response, Exception ex) throws ServletException, IOException {

            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            System.out.println("expired"+HttpStatus.UNAUTHORIZED.value());
            ObjectMapper mapper = new ObjectMapper();
            String jsonString = mapper.writeValueAsString(
                new ResponseDetails(
                            fmt.format(ZonedDateTime.now()),
                            HttpStatus.UNAUTHORIZED.value(),
                            HttpStatus.UNAUTHORIZED.getReasonPhrase(),
                            ex.getMessage(),
                            "/api/v1/auth/login"
                    ));
            response.getWriter().write(jsonString);
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