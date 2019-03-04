package com.shopping.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.DAO.UserDAO;
import com.shopping.entity.User;
import com.shopping.model.UserModel;
import com.shopping.util.Message;
import com.shopping.util.Role;
import com.shopping.util.ServiceResult;
import com.shopping.util.ServiceStatus;

@Service
public class UserService {

	@Autowired
	private UserDAO userDAO;

	@Autowired
	private MailService mailService;

	public ServiceResult sendForgotPasswordMail(String username) {
		User user = userDAO.find(username);
		ServiceResult result = new ServiceResult();
		if (user == null) {
			result.setMessage(Message.DATA_NOT_EXSIT);
			result.setStatus(ServiceStatus.FAIL);
			result.setObject(null);
			return result;
		}
		String code = mailService.sendMailWhenForgotPassword(user.getEmail());

		result.setMessage("");
		result.setStatus(ServiceStatus.SUCCESS);
		result.setObject(code);
		return result;
	}

	public ServiceResult getUser(String username) {
		User user = userDAO.find(username);
		ServiceResult result = new ServiceResult();

		if (user == null) {
			result.setMessage(Message.DATA_NOT_EXSIT);
			result.setStatus(ServiceStatus.FAIL);
			result.setObject(null);
			return result;
		}
		result.setMessage("");
		result.setStatus(ServiceStatus.SUCCESS);
		result.setObject(user);

		return result;

	}

	public User getUser(String field, String value) {
		return userDAO.find(field, value);
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
		user.setRole(model.getRole());

		return user;
	}

	public ServiceResult updateUser(UserModel model) {
		ServiceResult result = new ServiceResult();
		User user = userDAO.find(model.getUsername());

		if (user == null) {
			result.setMessage(Message.DATA_NOT_EXSIT);
			result.setStatus(ServiceStatus.FAIL);
			result.setObject(null);
			return result;
		}

		user = extract(model);

		userDAO.update(user);

		result.setMessage(Message.DATA_SUCCESS);
		result.setStatus(ServiceStatus.SUCCESS);
		result.setObject(user);
		return result;

	}

	@SuppressWarnings("null")
	public ServiceResult createUser(UserModel model) {
		ServiceResult result = new ServiceResult();
		User user = userDAO.find(model.getUsername());
		User userByEmail = userDAO.find("email",model.getEmail());
		User userByPhone = userDAO.find("phone",model.getPhone());

		if (user == null && userByEmail == null & userByPhone == null) {
			model.setFullname(model.getUsername());
			model.setNotes("");
			model.setPoint(0);
			model.setRole(Role.Admin);
			user = userDAO.insert(extract(model));

			result.setMessage(Message.DATA_SUCCESS);
			result.setStatus(ServiceStatus.SUCCESS);
			result.setObject(user);
			System.out.println("success");
			System.out.println(user.getUsername());
			return result;
		}
		
		
		result.setMessage(Message.DATA_EXIST);
		result.setStatus(ServiceStatus.FAIL);
		result.setObject(null);
		System.out.println("fail");
		return result;

	}
}
