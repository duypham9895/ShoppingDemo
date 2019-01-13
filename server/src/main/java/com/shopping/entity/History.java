package com.shopping.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class History {
	private int id;
	private User user;
	private List<Item> purchaseList;
	private Date date;
	private float total;

	public int getId() {
		return id;
	}

	public User getUser() {
		return user;
	}

	public List<Item> getPurchaseList() {
		return purchaseList;
	}

	public Date getDate() {
		return date;
	}

	public float getTotal() {
		return total;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setPurchaseList(ArrayList<Item> purchaseList) {
		this.purchaseList = purchaseList;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public void setTotal(float total) {
		this.total = total;
	}

}
