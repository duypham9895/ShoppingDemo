package com.shopping.entity;

public class Item {
	private Product product;
	private int qty;
	private float total;

	public Product getProduct() {
		return product;
	}

	public int getQty() {
		return qty;
	}

	public float getTotal() {
		return total;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public void setTotal(float total) {
		this.total = total;
	}

}
