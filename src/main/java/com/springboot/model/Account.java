package com.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Account {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    private String Username;
    private String Password;
    private String Email;

    public Account() {
    }

    public Account(String username, String password) {
        this.Username = username;
        this.Password = password;
    }

    public Account(String username, String password, String email) {
        this.Username = username;
        this.Password = password;
        this.Email = email;
    }

    public long getId() {
        return Id;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }
}