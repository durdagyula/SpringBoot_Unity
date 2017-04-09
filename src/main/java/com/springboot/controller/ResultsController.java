package com.springboot.controller;

import com.springboot.model.Picture;
import com.springboot.model.Result;
import com.springboot.persistence.ResultRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

@RestController
public class ResultsController {

    private static final String GOOGLE_API_KEY = "AIzaSyA2trjftijTLkh1IVQf7SWfi1ccQvV8jdw";
    private static final String GOOGLE_SEARCH_URL = "https://www.googleapis.com/customsearch/v1?key=" + GOOGLE_API_KEY + "&cref&q=";

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

    @PostMapping("getResultByPictureId")
    public Result getResultByPictureId(@RequestBody long pictureId) {
        List<Result> results = resultRepository.findAll();
        Result result = new Result();
        for (int i = 0; i < results.size(); i++) {
            if (results.get(i).getPictureId() == pictureId) {
                result = results.get(i);
                break;
            }
        }
        return result;
    }

    public String getResultForPicture(Picture picture) throws IOException {
        String urlLink = GOOGLE_SEARCH_URL + picture.getTitle();
        URL url = new URL(urlLink);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        StringBuffer sb = new StringBuffer();
        String line;
        String parsed;

        while ((line = in.readLine()) != null) {
            sb.append(line);
        }

        parsed = sb.toString();
        JSONObject myObject = new JSONObject(parsed);
        JSONArray items = myObject.getJSONArray("items");

        String wikiResult = "";

        for (int i = 0; i < items.length(); i++) {
            JSONObject item = items.getJSONObject(i);
            if (item.getString("formattedUrl").contains("wikipedia")) {
                wikiResult = item.getString("snippet");
                break;
            }
        }

        //if there is no wikipedia link we should use the first google first "hit"
        if (wikiResult == "") {
            JSONObject item = items.getJSONObject(0);
            wikiResult = item.getString("snippet");
        }

        in.close();

        Result result = new Result();
        result.setPictureId(picture.getId());
        result.setResult(wikiResult);
        resultRepository.saveAndFlush(result);

        return result.getResult();
    }

}