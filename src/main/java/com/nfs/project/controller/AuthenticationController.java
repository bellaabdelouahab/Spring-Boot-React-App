package com.nfs.project.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nfs.project.dto.RegisterRequest;
import com.nfs.project.payload.AuthenticationRequest;
import com.nfs.project.payload.AuthenticationResponse;
import com.nfs.project.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://codemaster.ninja"}, allowCredentials = "true")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;

  @PostMapping("/register")
  public ResponseEntity<AuthenticationResponse> register(
      @RequestBody RegisterRequest request
  ) {
    return ResponseEntity.ok(service.register(request));
  }
  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request
  ) {
    try {
      return ResponseEntity.ok(service.authenticate(request));
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(AuthenticationResponse.builder().message(
          e.getMessage()).status("401").build());
    }
  }
  @GetMapping("/test")
  public ResponseEntity<String> test(){
    System.out.println("Hello from demo controller");
    return ResponseEntity.ok("Hello from secured endpoint");
  }


}
