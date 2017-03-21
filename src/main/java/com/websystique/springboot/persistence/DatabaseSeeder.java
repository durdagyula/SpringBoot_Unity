package com.websystique.springboot.persistence;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DatabaseSeeder implements CommandLineRunner {
    private AccountRepository accountRepository;

    @Autowired
    public DatabaseSeeder(AccountRepository accountRepository){
        this.accountRepository=accountRepository;
    }

    @Override
    public void run(String... strings) throws Exception{
        //List<Account> accounts = new ArrayList<Account>();

        //accounts.add(new Account("Unity","Unity"));
        //accounts.add(new Account("Unity1","Unity1"));

        //accountRepository.save(accounts);

    }
}
