package com.shopping.model;

import java.util.List;

import javax.validation.constraints.NotEmpty;

public class ProductModel {

	@NotEmpty
	private String id;
	
	@NotEmpty
	private String name;
	
	private String description;
	
	@NotEmpty
	private List<String> image;
	
	@NotEmpty
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
