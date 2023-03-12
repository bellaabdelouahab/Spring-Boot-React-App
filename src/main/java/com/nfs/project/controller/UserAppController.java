package com.nfs.project.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nfs.project.model.userApp;
import com.nfs.project.service.UserAppService;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/api/v1/app/user")
public class UserAppController {

    @Autowired
    private UserAppService Service;

    @PostMapping
    public userApp saveUserApp(@RequestBody userApp user){
        Service.saveUser(user);
        return user;
    }
    @GetMapping
    public List<userApp> getAll(){
        return Service.getAll();
    }
    @GetMapping(path = "{id}")
    public userApp getById(int id){
        return Service.getById(id);
    }
    @PutMapping(path = "pwd")
    public void ModifyPassword(
            @RequestParam int id,
            @RequestParam String password
    ){
        Service.updateUserType(id,password);
    }
    @PutMapping(path = "status")
    public void ModifyStatus(
            @RequestParam int id,
            @RequestParam boolean value
    ){
        Service.updateActivation(id,value);
    }
    @PutMapping(path = "type")
    public void ModifyType(
            @RequestParam int id,
            @RequestParam String Type
    ){
        Service.updateUserType(id,Type);
    }
    @PutMapping(path = "email")
    public void ModifyEmail(
            @RequestParam int id,
            @RequestParam String email
    ){
        Service.updateEmail(id,email);
    }

    @DeleteMapping("{id}")
    public void deleteUser(
            @PathVariable int id
    ){
        Service.deleteUserById(id);
    }
}