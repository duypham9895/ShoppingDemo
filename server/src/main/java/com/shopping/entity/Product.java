package com.shopping.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("products")
public class Product {
	@Id
	private String id;
	private String name;
	private String description;
	private List<String> image;
	private float price;
	private int qty;
	private Category category;
	private String origin;
	private String unit;
	private String color;
	private String size;
	private String weight;

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

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public String getOrigin() {
		return origin;
	}

	public String getUnit() {
		return unit;
	}

	public String getColor() {
		return color;
	}

	public String getSize() {
		return size;
	}

	public String getWeight() {
		return weight;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

}
