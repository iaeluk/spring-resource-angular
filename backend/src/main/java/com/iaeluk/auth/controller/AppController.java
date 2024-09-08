package com.iaeluk.auth.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AppController {

    @GetMapping("/public")
    public Map<String, String> getPublicMessage() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Public message is here!!!");
        return response;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/private")
    public Map<String, String> getPrivateMessage() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Private message is here!!!");
        return response;
    }
}
