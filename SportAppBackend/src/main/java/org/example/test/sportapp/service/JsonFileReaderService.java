package org.example.test.sportapp.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;

@Service
public class JsonFileReaderService {
    public Object readJsonFile(String filePath) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonContent = new String(Files.readAllBytes(Paths.get(filePath)));
            return mapper.readValue(jsonContent, Object.class);
        } catch (IOException e) {
            throw new RuntimeException("Failed to read JSON file from path: " + filePath, e);
        }
    }
}
