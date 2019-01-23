package com.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.entity.User;
import com.shopping.model.LoginUserModel;
import com.shopping.model.UserModel;
import com.shopping.service.LoginService;
import com.shopping.service.UserService;
import com.shopping.util.ServiceResult;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class AuthorizeController {

	@Autowired
	LoginService loginService;

	@Autowired
	UserService userService;

	@GetMapping("/all")
	public List<User> getList() {
		return loginService.getList();
	}

	@GetMapping("/new")
	public ServiceResult insert(UserModel model) {
		model.setUsername("admin");
		model.setPassword("admin");
		model.setEmail("duypham9895@gmail.com");
		model.setPhone("0963769049");
		return loginService.insert(model);
	}

	@PostMapping("/login")
	public ServiceResult login(@RequestBody LoginUserModel model) {
		return loginService.getDataUserOnClient(model);
	}

	@GetMapping("/forgot")
	public ServiceResult forgotPassword(@RequestParam(name="username") String username) {
		System.out.println(username);
		return userService.sendForgotPasswordMail(username);
	}
	

}
