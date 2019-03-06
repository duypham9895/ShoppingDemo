package com.shopping.model;

import java.util.List;

import javax.validation.constraints.NotEmpty;

import com.shopping.entity.Category;

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

	@NotEmpty
	private int qty;

	@NotEmpty
	private Category category;

	@NotEmpty
	private String origin;

	@NotEmpty
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

	public Category getCategory() {
		return category;
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

	public void setQty(int qty) {
		this.qty = qty;
	}

	public void setCategory(Category category) {
		this.category = category;
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

}
