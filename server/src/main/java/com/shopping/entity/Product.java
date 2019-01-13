package com.shopping.entity;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("products")
public class Product {
	private String id;
	private String name;
	private String description;
	private List<String> image;
	private float price;

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public List<String> getImage() {
		return image;
	}

	public float getPrice() {
		return price;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setImage(List<String> image) {
		this.image = image;
	}

	public void setPrice(float price) {
		this.price = price;
	}

}
