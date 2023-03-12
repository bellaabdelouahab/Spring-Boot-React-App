package com.nfs.project.model;


import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity(name = "user_app")
@Table
public class userApp {
    @Id
    @SequenceGenerator(
            name = "userAppSequence",
            sequenceName = "userAppSequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "userAppSequence"
    )
    private int id;
    private String username,firstname,lastname,password,type,email;
    private boolean activated;
    private LocalDate creationdate;

    private userApp(){

    }

    public userApp(int id, String username, String firstname
            , String lastname, String password, String type, String email
            , boolean activated, LocalDate creationdate) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.type = type;
        this.email = email;
        this.activated = activated;
        this.creationdate = creationdate;
    }

    public userApp(String username, String firstname, String lastname, String password
            , String type, String email, boolean activated) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.type = type;
        this.email = email;
        this.activated = activated;
        this.creationdate=LocalDate.now();
    }

    public userApp(String username, String firstname, String lastname, String password, String type, String email) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.type = type;
        this.email = email;
        this.activated=true;
        this.creationdate=LocalDate.now();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

    public LocalDate getCreationdate() {
        return creationdate;
    }

    public void setCreationdate(LocalDate creationdate) {
        this.creationdate = creationdate;
    }
}
