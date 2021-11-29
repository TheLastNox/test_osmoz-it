package com.example.test.service;

import org.springframework.stereotype.Service;

@Service
public class TestService {
	
	public String reverseString(String text) {	
		String reversedString = "";
		
		for(int i = text.length() - 1; i >= 0; i--) {
			reversedString += text.charAt(i);
		}
		
		return reversedString;
	}
}
