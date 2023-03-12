package com.nfs.project.dao;

import java.util.List;
import com.nfs.project.model.userApp;
public interface UserAppServiceDAO {
    public List<userApp> getAll();
    public userApp getById(int id);
    public void saveUser(userApp user);
    public void updateActivation(int id,boolean value);
    public void updatePassword(int id,String password);
    public void updateUserType(int id,String Type);
    public void updateEmail(int id,String Email);
    public void deleteUserById(int id);
}
