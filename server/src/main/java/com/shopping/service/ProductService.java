package com.shopping.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.DAO.ProductDAO;
import com.shopping.entity.Product;
import com.shopping.model.ProductModel;
import com.shopping.util.Message;
import com.shopping.util.ServiceResult;
import com.shopping.util.ServiceStatus;

@Service
public class ProductService {

	@Autowired
	ProductDAO productDAO;
	
	public ServiceResult insert(ProductModel model) {
		ServiceResult result = new ServiceResult();
		Product temp = productDAO.find(extract(model));
		if(temp != null) {
			result.setMessage(Message.DATA_EXIST);
			result.setStatus(ServiceStatus.FAIL);
			result.setObject(null);
			return result;
		}
		result.setMessage(Message.DATA_SUCCESS);
		result.setStatus(ServiceStatus.SUCCESS);
		result.setObject(model);
		
		productDAO.insert(extract(model));
		
		return result;
	}
	
	public Product extract(ProductModel model) {
		Product product = new Product();
		
		product.setId(model.getId());
		product.setName(model.getName());
		product.setDescription(model.getDescription());
		product.setImage(model.getImage());
		product.setPrice(model.getPrice());
		
		return product;
	}
	
	public List<Product> getList(){
		return productDAO.getList();
	}
}
