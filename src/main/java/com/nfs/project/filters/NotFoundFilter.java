package com.nfs.project.filters;



import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class NotFoundFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        if (HttpStatus.NOT_FOUND.value() == response.getStatus()) {
            response.setStatus(HttpStatus.NOT_FOUND.value());
            response.getWriter().write("Resource not found");
            return;
        }
        filterChain.doFilter(request, response);
    }
}
