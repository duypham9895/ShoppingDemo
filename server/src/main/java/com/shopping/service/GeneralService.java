package com.shopping.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.DAO.ProductDAO;
import com.shopping.DAO.UserDAO;
import com.shopping.entity.Product;
import com.shopping.entity.User;
import com.shopping.model.GeneralModel;

@Service
public class GeneralService {

	@Autowired
	ProductDAO productDAO;
	
	@Autowired
	UserDAO userDAO;
	
	public List<Product> getListProduct(){
		return getGeneralModel().getProduct();
	}
	
	public List<User> getListUser(){
		return getGeneralModel().getUser();
	}
	
	public GeneralModel getGeneralModel() {
		GeneralModel model = new GeneralModel();
		model.setProduct(productDAO.getList());
		model.setUser(userDAO.getList());
		return model;
	}
}
