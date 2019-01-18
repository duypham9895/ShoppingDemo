package com.shopping.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.DAO.ProductDAO;
import com.shopping.DAO.UserDAO;
import com.shopping.model.GeneralModel;

@Service
public class GeneralService {

	@Autowired
	ProductDAO productDAO;
	
	@Autowired
	UserDAO userDAO;
	
	public GeneralModel getGeneralModel() {
		GeneralModel model = new GeneralModel();
		model.setProductList(productDAO.getList());
		return model;
	}
}
