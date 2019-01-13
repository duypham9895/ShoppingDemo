package com.shopping.entity;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("stock")
public class Stock {
	private Product product;
	private int qty;
	@Field("stocked_date")
	private Date stockedDate;

	public Product getProduct() {
		return product;
	}

	public int getQty() {
		return qty;
	}

	public Date getStockedDate() {
		return stockedDate;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public void setStockedDate(Date stockedDate) {
		this.stockedDate = stockedDate;
	}

}
