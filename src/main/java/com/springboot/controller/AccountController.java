package com.springboot.controller;

import com.springboot.model.Account;
import com.springboot.persistence.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {
    private Account CurrentUser;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    public AccountController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @RequestMapping(value = "createAccount", method = RequestMethod.POST)
    public boolean createAccount(@RequestBody Account account) {
        List<Account> accounts = accountRepository.findAll();

        for (int i = 0; i < accounts.size(); i++) {
            if (accounts.get(i).getUsername().toLowerCase().equals(account.getUsername().toLowerCase())) {
                return false;
            }
        }
        accountRepository.save(account);
        return true;
    }

    @RequestMapping(value = "validate", method = RequestMethod.POST)
    public boolean validate(@RequestBody Account account) {
        List<Account> accounts = accountRepository.findAll();
        for (int i = 0; i < accounts.size(); i++) {
            if (accounts.get(i).getUsername().equals(account.getUsername()) && accounts.get(i).getPassword().equals(account.getPassword())) {
                this.setCurrentUser(accounts.get(i));
                return true;
            }
        }
        return false;
    }

    @RequestMapping(value = "getCurrentUser", method = RequestMethod.GET)
    public Account getCurrentUser() {
        return CurrentUser;
    }

    public void setCurrentUser(Account currentUser) {
        CurrentUser = currentUser;
    }

    //TODO delete this
    @RequestMapping(value = "listAccounts", method = RequestMethod.GET)
    public List<Account> listAccounts() {
        return accountRepository.findAll();
    }

}
