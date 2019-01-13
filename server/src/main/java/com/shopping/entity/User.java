package com.shopping.entity;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")
public class User {
	private String username;
	private String password;
	private String fullname;
	private Date birthday;
	private String phone;
	private String email;
	private String notes;
	private int point;

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

}
