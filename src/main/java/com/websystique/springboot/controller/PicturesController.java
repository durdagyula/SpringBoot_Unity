package com.websystique.springboot.controller;

import com.websystique.springboot.model.Account;
import com.websystique.springboot.model.Picture;
import com.websystique.springboot.persistence.AccountRepository;
import com.websystique.springboot.persistence.PicturesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PicturesController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private PicturesRepository picturesRepository;

    @Autowired
    public PicturesController(PicturesRepository picturesRepository) {
        this.picturesRepository = picturesRepository;
    }

    @RequestMapping(value = "listPictures", method = RequestMethod.GET)
    public List<Picture> listPictures() {
        return picturesRepository.findAll();
    }

    @PostMapping("createPicture")
    public void createPicture(Picture picture) {
        picturesRepository.saveAndFlush(picture);
    }

    @RequestMapping(value = "getUserPictures/{userId}", method = RequestMethod.POST)
    public List<Picture> getUserPictures(@PathVariable("userId") long userId) {
        return getCurrentUserPictures(userId);
    }

    //get user pictures
    private List<Picture> getCurrentUserPictures(long userId) {
        List<Picture> lp = picturesRepository.findAll();
        for (int i = 0; i < lp.size(); i++) {
            if (lp.get(i).getUserId() != userId) {
                lp.remove(i);
            }
        }
        return lp;
    }

    public long getTestUser() {
        List<Account> accounts = accountRepository.findAll();
        for (int i = 0; i < accounts.size(); i++) {
            if (accounts.get(i).getUsername() == "Unity1") {
                return accounts.get(i).getId();
            }
        }
        return 0;
    }

}
