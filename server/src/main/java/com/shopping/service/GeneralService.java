package com.shopping.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.DAO.ProductDAO;
import com.shopping.entity.Product;
import com.shopping.model.GeneralModel;

@Service
public class GeneralService {

	@Autowired
	ProductDAO productDAO;
	
	public List<Product> getListGeneral(){
		return getGeneralModel().getProduct();
	}
	
	public GeneralModel getGeneralModel() {
		GeneralModel model = new GeneralModel();
		model.setProduct(productDAO.getList());
		return model;
	}
}
