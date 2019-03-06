package com.shopping.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.shopping.service.UploadImageService;

@RestController
@RequestMapping("images")
@CrossOrigin("http://localhost:3000")
public class UploadImageController {

	@Autowired
	UploadImageService imageService;
	
	
	
	@PostMapping("/all")
	public ArrayList<String> getImages(@ModelAttribute MultipartFile files[]){
		return imageService.getNameImage(files);
	}
	
	@GetMapping("/get/{filename}")
	public byte[] getImage(@PathVariable(name="filename") String filename) {
		return imageService.getImage(filename);
	}
}
