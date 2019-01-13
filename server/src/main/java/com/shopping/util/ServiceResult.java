package com.shopping.util;

public class ServiceResult {

	private String message;
	private ServiceStatus status;
	private Object object;

	public ServiceResult() {
		super();
	}

	public ServiceResult(String message, ServiceStatus status, Object object) {
		super();
		this.message = message;
		this.status = status;
		this.object = object;
	}

	public String getMessage() {
		return message;
	}

	public ServiceStatus getStatus() {
		return status;
	}

	public Object getObject() {
		return object;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void setStatus(ServiceStatus status) {
		this.status = status;
	}

	public void setObject(Object object) {
		this.object = object;
	}

}
