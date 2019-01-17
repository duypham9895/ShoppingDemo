package com.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.entity.User;
import com.shopping.model.UserModel;
import com.shopping.service.LoginService;
import com.shopping.service.MailService;
import com.shopping.util.ServiceResult;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class LoginController {

	@Autowired
	LoginService loginService;
	
	@Autowired
	MailService mailService;

	@GetMapping("/all")
	public List<User> getList() {
		return loginService.getList();
	}

	@GetMapping("/new")
	public ServiceResult insert(UserModel model) {
		model.setUsername("admin");
		model.setPassword("admin");
		return loginService.insert(model);
	}

	@PostMapping("/login")
	public ServiceResult login(@RequestBody User user) {
		System.out.println(user.getUsername());
		UserModel model = new UserModel();
		model.setUsername(user.getUsername());
		model.setPassword(user.getPassword());
		return loginService.getDataUserOnClient(model);
	}
	
	@GetMapping("/mail")
	public void sendMail() {
		System.out.println("mail");
		mailService.sendMail("duypham9895@gmail.com", "abc", "hello");
	}

}
