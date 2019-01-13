package com.shopping.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.entity.Product;
import com.shopping.model.ProductModel;
import com.shopping.service.GeneralService;
import com.shopping.service.ProductService;
import com.shopping.util.ServiceResult;

@RestController
@RequestMapping("/product")
@CrossOrigin("http://localhost:3000")
public class ProductController {
	
	@Autowired
	ProductService productSerive;
	
	@Autowired
	GeneralService generalService;
	
	@GetMapping("/all")
	public List<Product> getList(){
		System.out.println("list product");
		return generalService.getGeneralModel().getProduct();
	}
	
	@GetMapping("/new")
	public ServiceResult insert(ProductModel model) {
		List<String> image = new ArrayList<>();
		image.add("image 3");
		model.setId("pd3");
		model.setName("name3");
		model.setDescription("desciption 3");
		model.setImage(image);
		model.setPrice(3333);
		return productSerive.insert(model);
	}
}
