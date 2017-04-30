package com.springboot.controller;

import com.springboot.model.Picture;
import com.springboot.model.Result;
import com.springboot.persistence.PicturesRepository;
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

    @PostMapping("createPicture")
    public Result createPicture(Picture picture) {
        Result result;
        picturesRepository.saveAndFlush(picture);
        try {
            result = resultsController.getResultForPicture(picture);
        }catch (Exception e){
            return null;
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

    //TODO delete this
    @RequestMapping(value = "listPictures", method = RequestMethod.GET)
    public List<Picture> listPictures() {
        return picturesRepository.findAll();
    }

}
