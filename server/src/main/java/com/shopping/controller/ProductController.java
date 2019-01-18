package com.shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.model.GeneralModel;
import com.shopping.model.ProductModel;
import com.shopping.service.GeneralService;
import com.shopping.service.HomeService;
import com.shopping.util.ServiceResult;

@RestController
@RequestMapping("/product")
@CrossOrigin("http://localhost:3000")
public class ProductController {

	@Autowired
	HomeService productSerive;

	@Autowired
	GeneralService generalService;

	@GetMapping("/all")
	public GeneralModel getList() {
		System.out.println("list product");
		return generalService.getGeneralModel();
	}

	@GetMapping("/new")
	public ServiceResult insert(ProductModel model) {
		return productSerive.insert(model);
	}

}
