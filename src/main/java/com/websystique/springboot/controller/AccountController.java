package com.websystique.springboot.controller;

import com.websystique.springboot.persistence.Account;
import com.websystique.springboot.persistence.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountController {
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    public AccountController(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
    }

    @RequestMapping(value = "listAccounts", method = RequestMethod.GET)
    public List<Account> getAll() {
        return accountRepository.findAll();
    }

    @RequestMapping(value = "createAccount", method = RequestMethod.POST)
    public List<Account> create(@RequestBody Account account){
        accountRepository.save(account);
        return accountRepository.findAll();
    }
}
