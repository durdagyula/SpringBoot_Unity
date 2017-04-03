package com.websystique.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    private long PictureId;
    private String Result;

    public Result(){}

    public Result(long pictureId, String result){
        this.PictureId = pictureId;
        this.Result = result;
    }

    public long getId() {
        return Id;
    }

    public long getPictureId() {
        return PictureId;
    }

    public void setPictureId(long pictureId) {
        PictureId = pictureId;
    }

    public String getResult() {
        return Result;
    }

    public void setResult(String result) {
        Result = result;
    }

}
