package com.shopping.model;

import java.util.List;

import com.shopping.entity.Product;
import com.shopping.entity.User;

public class GeneralModel {
	private List<Product> product;
	private List<User> user;

	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	public List<User> getUser() {
		return user;
	}

	public void setUser(List<User> user) {
		this.user = user;
	}

}
