package com.shopping.model;

import java.util.Date;
import java.util.List;

import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.shopping.util.Role;

public class UserModel {
	@NotEmpty
	@Size(min = 8, max = 30, message = "Your username invalid")
	private String username;

	@NotEmpty
	@Size(min = 8, max = 36, message = "Your password invalid")
	private String password;

	private String fullname;

	@NotNull
	private Date birthday;

	@NotEmpty
	@Digits(fraction = 0, message = "Your phone is not correct", integer = 10)
	private String phone;

	@NotEmpty
	@Email
	private String email;

	private String notes;

	@NotEmpty
	private Role role;

	private int point;

	@NotEmpty
	private List<String> images;

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public String getFullname() {
		return fullname;
	}

	public Date getBirthday() {
		return birthday;
	}

	public String getPhone() {
		return phone;
	}

	public String getEmail() {
		return email;
	}

	public String getNotes() {
		return notes;
	}

	public int getPoint() {
		return point;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public void setPoint(int point) {
		this.point = point;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public List<String> getImages() {
		return images;
	}

	public void setImages(List<String> images) {
		this.images = images;
	}

}
