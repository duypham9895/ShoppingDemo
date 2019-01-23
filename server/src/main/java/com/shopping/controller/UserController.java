package com.shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.model.UserModel;
import com.shopping.service.UserService;
import com.shopping.util.ServiceResult;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PutMapping("/update")
	public ServiceResult updateUser(@RequestBody UserModel model) {
		System.out.println(model.getPassword());
		return userService.updateUser(model);
		
	}
	
	@GetMapping("/{username}")
	public ServiceResult getUser(@PathVariable(name="username") String username) {
		return userService.getUser(username);
	}
}
