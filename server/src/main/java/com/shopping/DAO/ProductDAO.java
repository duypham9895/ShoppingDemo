package com.shopping.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.shopping.entity.Product;

@Repository
public class ProductDAO {
	
	private static final String COLLECTION_NAME = "products";

	@Autowired
	MongoTemplate template;
	
	public Product insert(Product product) {
		return template.insert(product,COLLECTION_NAME);
	}
	
	public List<Product> getList(){
		return template.findAll(Product.class,COLLECTION_NAME);
	}
	
	public Product find(Product product) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(product.getId()));
		return template.findOne(query, Product.class,COLLECTION_NAME);
	}
}
