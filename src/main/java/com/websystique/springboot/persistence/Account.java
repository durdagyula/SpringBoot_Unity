package com.websystique.springboot.persistence;

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

    public Account(){}

    public Account(String username, String password){
        this.Username = username;
        this.Password = password;
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
}