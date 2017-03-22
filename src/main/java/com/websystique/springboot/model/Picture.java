package com.websystique.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    private long userId;
    private String Title;
    private String URL;
    private String UploadDate;

    public Picture(){};

    public Picture(String title, String url, String uploadDate){
        this.Title = title;
        this.URL = url;
        this.UploadDate = uploadDate;
    };

    public Picture(String title, String url, String uploadDate, long userId){
        this.Title = title;
        this.URL = url;
        this.UploadDate = uploadDate;
        this.userId = userId;
    };

    public long getId() {
        return Id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public String getUploadDate() {
        return UploadDate;
    }

    public void setUploadDate(String uploadDate) {
        UploadDate = uploadDate;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }


}
