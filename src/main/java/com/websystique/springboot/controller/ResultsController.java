package com.websystique.springboot.controller;

import com.websystique.springboot.model.Picture;
import com.websystique.springboot.model.Result;
import com.websystique.springboot.persistence.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.lang.model.element.NestingKind;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.util.List;

@RestController
public class ResultsController {

    private static final String GOOGLE_API_KEY = "AIzaSyA2trjftijTLkh1IVQf7SWfi1ccQvV8jdw";
    private static final String GOOGLE_SEARCH_URL = "https://www.googleapis.com/customsearch/v1?key=" + GOOGLE_API_KEY + "&cref&q=";
    private final String USER_AGENT = "Mozilla/5.0";

    @Autowired
    private ResultRepository resultRepository;

    @Autowired
    public ResultsController(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    @RequestMapping(value = "listResults", method = RequestMethod.GET)
    public List<Result> listResults() {
        return resultRepository.findAll();
    }

    public void getResultForPicture(Picture picture) throws Exception {
        //String searchURL = GOOGLE_SEARCH_URL + (URLEncoder.encode(picture.getTitle()));

        //String url = "http://www.google.com/search?q=mkyong";
        String url = GOOGLE_SEARCH_URL + picture.getTitle();

        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        // optional default is GET
        con.setRequestMethod("GET");

        //add request header
        con.setRequestProperty("User-Agent", USER_AGENT);

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        System.out.println(response.toString());
    }

}
