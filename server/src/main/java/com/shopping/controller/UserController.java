package com.shopping.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.shopping.entity.User;
import com.shopping.model.UserModel;
import com.shopping.service.UploadImageService;
import com.shopping.service.UserService;
import com.shopping.util.ServiceResult;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	private UploadImageService imageService;
	
	@PutMapping("/update")
	public ServiceResult updateUser(@RequestBody UserModel model) {
		return userService.updateUser(model);
		
	}
	
	@GetMapping("/{username}")
	public ServiceResult getUser(@PathVariable(name="username") String username) {
		return userService.getUser(username);
	}
	
	@GetMapping("/get")
	public User getUser(@RequestParam(name="field", defaultValue="") String field,
			@RequestParam(name="value", defaultValue="") String value) {
		return userService.getUser(field, value);
	}
	
	public ArrayList<String> getImages(@ModelAttribute MultipartFile files[]){
		return imageService.getNameImage(files);
	}
	
	@PostMapping("/new")
	public ServiceResult createUser(@RequestBody UserModel model) {
		return userService.createUser(model);
	}
}
