package com.websystique.springboot.controller;

import com.websystique.springboot.model.Picture;
import com.websystique.springboot.persistence.AccountRepository;
import com.websystique.springboot.persistence.PicturesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@RestController
public class PicturesController {

    @Autowired
    private PicturesRepository picturesRepository;
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    public PicturesController(AccountRepository accountRepository,PicturesRepository picturesRepository){
        this.accountRepository = accountRepository;
        this.picturesRepository = picturesRepository;
    }

    @RequestMapping(value = "/listPictures", method = RequestMethod.GET)
    public List<Picture> listPictures() {
        return picturesRepository.findAll();
    }

    @RequestMapping(value = "/addPicture/{title}/{url}")
    public void addPicture(@PathVariable("title") String title,  @PathVariable("url") String url){
        LocalDate now = LocalDate.now();
        String date = now.format(DateTimeFormatter.ISO_LOCAL_DATE).toString();
        Picture picture = new Picture();
        picture.setUploadDate(date);
        picture.setTitle(title);
        picture.setURL(url.replaceAll("@",".").replaceAll("_","/"));
        picturesRepository.save(picture);
    }

}
