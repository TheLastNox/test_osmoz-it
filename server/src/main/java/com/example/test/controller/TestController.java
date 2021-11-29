package com.example.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.test.service.TestService;

@RestController
public class TestController {
	
	@Autowired
	private TestService testService;
	
	@PostMapping(value="/reverse", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
	public String reverseString(String text) {		
		String reversedString = testService.reverseString(text);
		
		return reversedString;
	}

}
