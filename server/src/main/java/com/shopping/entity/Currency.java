package com.shopping.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("currencies")
public class Currency {

	private int id;
	private String name;
	private double unit;

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public double getUnit() {
		return unit;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setUnit(double unit) {
		this.unit = unit;
	}

}
