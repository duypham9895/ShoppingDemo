package com.shopping.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.shopping.util.Constant;

@Service
public class UploadImageService {

	public ArrayList<String> getNameImage(MultipartFile[] multipartFile) {
		ArrayList<String> fileName = new ArrayList<>();
		byte[] bytes;
		for (MultipartFile files : multipartFile) {
			try {
				bytes = files.getBytes();
				Path path = Paths.get(Constant.UPLOAD_FILE + files.getOriginalFilename());
				Files.write(path, bytes);
				fileName.add(files.getOriginalFilename());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return null;
	}
	public byte[] getImage(String filename) {
		byte[] bytes = null;
		Path path = Paths.get(Constant.UPLOAD_FILE + filename);
		try {
			bytes = Files.readAllBytes(path);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return bytes;
	}

}
