package com.shopping.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.shopping.entity.User;

@Repository
public class UserDAO {
	private static final String COLLECTION_NAME = "users";
	
	@Autowired
	MongoTemplate template;
	
	
	public User insert(User user) {
		return template.insert(user,COLLECTION_NAME);
	}
	
	public List<User> getList(){
		return template.findAll(User.class,COLLECTION_NAME);
	}
	
	public User find(String username) {
		Query query = new Query();
		query.addCriteria(Criteria.where("username").is(username));
		return template.findOne(query, User.class, COLLECTION_NAME);
	}
	
	public User update( User user) {
		return template.save(user,COLLECTION_NAME);
	}
	

}
