package com.shopping.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.DAO.UserDAO;
import com.shopping.entity.User;
import com.shopping.model.LoginUserModel;
import com.shopping.model.UserModel;
import com.shopping.util.Message;
import com.shopping.util.ServiceResult;
import com.shopping.util.ServiceStatus;

@Service
public class LoginService {

	@Autowired
	UserDAO userDAO;

	public ServiceResult insert(UserModel model) {
		ServiceResult result = new ServiceResult();
		User user = userDAO.find(model.getUsername());
		if (user != null) {
			result.setMessage(Message.DATA_EXIST);
			result.setStatus(ServiceStatus.FAIL);
			result.setObject(null);
			return result;
		}
		result.setMessage(Message.DATA_SUCCESS);
		result.setStatus(ServiceStatus.SUCCESS);
		result.setObject(extract(model));
		
		userDAO.insert(extract(model));
		return result;
	}

	public User extract(UserModel model) {
		User user = new User();
		user.setUsername(model.getUsername());
		user.setPassword(model.getPassword());
		user.setFullname(model.getFullname());
		user.setEmail(model.getEmail());
		user.setPhone(model.getPhone());
		user.setBirthday(model.getBirthday());
		user.setNotes(model.getNotes());
		user.setPoint(model.getPoint());

		return user;
	}
	
	public List<User> getList(){
		return userDAO.getList();
	}
	
	public ServiceResult find(UserModel model) {
		
		ServiceResult result = new ServiceResult();
		User user = userDAO.find(model.getUsername());
		if (user != null) {
			result.setMessage(Message.DATA_EXIST);
			result.setStatus(ServiceStatus.FAIL);
			result.setObject(null);
			return result;
		}

		result.setMessage(Message.DATA_SUCCESS);
		result.setStatus(ServiceStatus.SUCCESS);
		result.setObject(extract(model));
		return result;
	}
	
	public ServiceResult getDataUserOnClient(LoginUserModel model) {
		ServiceResult result = new ServiceResult();
		System.out.println(model.getUsername());
		System.out.println(model.getPassword());
		User user = userDAO.find(model.getUsername());
		
		
		if(user == null) {
			System.out.println("not found");
			result.setMessage(Message.DATA_NOT_EXSIT);
			result.setStatus(ServiceStatus.FAIL);
			result.setObject(null);
			
			return result;
		}
		
		if(model.getPassword().equals(user.getPassword())) {
			System.out.println("ok");
			result.setMessage(Message.DATA_EXIST);
			result.setStatus(ServiceStatus.SUCCESS);
			result.setObject(user);
			return result;
		}
		System.out.println("invalid password");
		result.setMessage(Message.INFORMATION_INCORRECT);
		result.setStatus(ServiceStatus.FAIL);
		result.setObject(null);
		
		return result;
		
	}
}
