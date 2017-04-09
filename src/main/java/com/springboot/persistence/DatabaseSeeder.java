package com.springboot.persistence;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeeder implements CommandLineRunner {
    private AccountRepository accountRepository;

    @Autowired
    public DatabaseSeeder(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    //if you wanna put some data into the empty DB
    @Override
    public void run(String... strings) throws Exception {
//        List<Account> accounts = new ArrayList<>();

//        accounts.add(new Account("Unity@Unity.com","Unity"));
//        accounts.add(new Account("Unity1","Unity1"));

//        accountRepository.save(accounts);

    }
}
