package com.websystique.springboot.controller;

import com.websystique.springboot.model.Picture;
import com.websystique.springboot.persistence.PicturesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PicturesController {

    @Autowired
    private PicturesRepository picturesRepository;

    @Autowired
    private ResultsController resultsController;

    @Autowired
    public PicturesController(PicturesRepository picturesRepository) {
        this.picturesRepository = picturesRepository;
    }

    @RequestMapping(value = "listPictures", method = RequestMethod.GET)
    public List<Picture> listPictures() {
        return picturesRepository.findAll();
    }

    @PostMapping("createPicture")
    public String createPicture(Picture picture) {
        String result;
        picturesRepository.saveAndFlush(picture);
        try {
            result = resultsController.getResultForPicture(picture);
        }catch (Exception e){
            return "Error";
        }
        return result;
    }

    @RequestMapping(value = "getUserPictures/{userId}", method = RequestMethod.POST)
    public List<Picture> getUserPictures(@PathVariable("userId") long userId) {
        return getCurrentUserPictures(userId);
    }

    @PostMapping("deletePictureById")
    public boolean deletePictureById(@RequestBody long pictureId){
        boolean result;
        try{
            picturesRepository.delete(pictureId);
            result = true;
        }catch (Exception e){
            result = false;
        }
        return result;
    }

    //get user pictures
    private List<Picture> getCurrentUserPictures(long userId) {
        List<Picture> lp = picturesRepository.findAll();
        List<Picture> userPictures = new ArrayList<Picture>();
        for (int i = 0; i < lp.size(); i++) {
            // !=  CHANGE TO ==
            if (lp.get(i).getUserId() == userId) {
                userPictures.add(lp.get(i));
            }
        }
        return userPictures;
    }

}
