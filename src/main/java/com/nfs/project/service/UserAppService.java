package com.nfs.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nfs.project.dao.UserAppServiceDAO;
import com.nfs.project.model.userApp;
import com.nfs.project.repository.UserAppRepository;

@Service
public class UserAppService implements UserAppServiceDAO {
    private final UserAppRepository repository;

    @Autowired
    public UserAppService(UserAppRepository Repository){
        repository=Repository;
    }
    @Override
    public List<userApp> getAll() {
        return repository.findAll();
    }

    @Override
    public userApp getById(int id) {
        if(repository.findById(id).isPresent()){
            return repository.findById(id).get();
        }
        else throw new IllegalStateException("error id present=false");

    }

    @Override
    public void saveUser(userApp user) {
        if(user.getEmail()!="" && user.getFirstname()!="" &&
            user.getLastname()!="" && user.getType()!="" && user.getUsername()!=""
        ){
            repository.save(user);
        }
        else throw new IllegalStateException("fields are required");
    }

    @Override
    public void updateActivation(int id, boolean value) {
        if (id>0 && repository.findById(id).isPresent()){
            repository.findById(id).get().setActivated(value);
        }
        else throw new IllegalStateException("error try again");
    }

    @Override
    public void updatePassword(int id, String password) {
        if(id>0 && repository.findById(id).isPresent() && password!=""){
            repository.findById(id).get().setPassword(password);
        }
        else throw new IllegalStateException("error try again");
    }

    @Override
    public void updateUserType(int id, String Type) {
        if(id>0 && repository.findById(id).isPresent() && Type!=""){
            repository.findById(id).get().setType(Type);
        }
        else throw new IllegalStateException("error try again");
    }

    @Override
    public void updateEmail(int id, String Email) {
        if(id>0 && repository.findById(id).isPresent() && Email!=""){
            repository.findById(id).get().setEmail(Email);
        }
        else throw new IllegalStateException("error try again");
    }

    @Override
    public void deleteUserById(int id) {
        if(id>0 && repository.findById(id).isPresent()){
            repository.deleteById(id);
        }
    }
}
