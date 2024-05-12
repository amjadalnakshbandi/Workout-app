package org.example.test.sportapp.controller;

import org.example.test.sportapp.service.JsonFileReaderService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin("http://localhost:4200/")
public class fetchController {
    @Autowired
    private JsonFileReaderService jsonFileReaderService;
    private final String BackFilePath = "SportAppBackend\\src\\main\\resources\\static\\data\\back.json";
    private final String cardioFilePath = "SportAppBackend\\src\\main\\resources\\static\\data\\cardio.json";
    private final String chestFilePath = "SportAppBackend\\src\\main\\resources\\static\\data\\chest.json";
    private final String lowerArmsFilePath = "SportAppBackend\\src\\main\\resources\\static\\data\\lower-arms.json";
    private final String lowerLegsFilePath = "SportAppBackend\\src\\main\\resources\\static\\data\\lower-legs.json";
    private final String neckFilePath = "SportAppBackend\\src\\main\\resources\\static\\data\\neck.json";
    private final String shouldersFilePath = "SportAppBackend\\src\\main\\resources\\static\\data\\shoulders.json";

    @GetMapping("/back")
    public Object back() {
        return jsonFileReaderService.readJsonFile(BackFilePath);
    }

    @GetMapping("/cardio")
    public Object cardio() {
        return jsonFileReaderService.readJsonFile(cardioFilePath);
    }

    @GetMapping("/chest")
    public Object chest() {
        return jsonFileReaderService.readJsonFile(chestFilePath);
    }

    @GetMapping("/lower-arms")
    public Object lowerArms() {
        return jsonFileReaderService.readJsonFile(lowerArmsFilePath);
    }

    @GetMapping("/lower-legs")
    public Object lowerLegs() {
        return jsonFileReaderService.readJsonFile(lowerLegsFilePath);
    }

    @GetMapping("/neck")
    public Object neck() {
        return jsonFileReaderService.readJsonFile(neckFilePath);
    }

    @GetMapping("/shoulders")
    public Object shoulders() {
        return jsonFileReaderService.readJsonFile(shouldersFilePath);
    }
}
