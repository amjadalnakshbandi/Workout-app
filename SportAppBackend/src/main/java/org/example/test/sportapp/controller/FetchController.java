package org.example.test.sportapp.controller;

import org.example.test.sportapp.service.JsonFileReaderService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin("http://localhost:4200/")
public class FetchController {
    @Autowired
    private JsonFileReaderService jsonFileReaderService;
        private final String filePath = "SportAppBackend\\src\\main\\resources\\static\\data\\data.json";

    @GetMapping("/")
    public Object index() {
        return jsonFileReaderService.readJsonFile(filePath);
    }
}
