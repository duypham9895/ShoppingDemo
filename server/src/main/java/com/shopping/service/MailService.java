package com.shopping.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

	@Autowired
	private JavaMailSender mailSender;

	public void sendMail(String to, String subject, String text) {
		SimpleMailMessage message = new SimpleMailMessage();

		message.setSubject(subject);
		message.setText(text);
		message.setTo(to);

		mailSender.send(message);
	}

	public String sendMailWhenForgotPassword(String to) {

		String code = codeConfirm();

		SimpleMailMessage message = new SimpleMailMessage();

		String subject = "MyWebSite.com: Forgot Password";
		String text = "Seems like you forgot your password for MyWebSite.com. If this is true, there is a code for reset your password.";
		text += "\nYour code: " + code;
		text += "\n If you did not forget your password you can safely ignore this email.";

		message.setSubject(subject);
		message.setText(text);
		message.setTo(to);

		mailSender.send(message);

		return code;
	}

	public String codeConfirm() {
		Random rnd = new Random();
		int[] lettersArr = new int[52];
		int j;

		// numberical order of array letters
		int i = 0;

		// have an array contain alphabet
		for (j = 0; j < 52; j++, i++) {
			if (j > 25) {
				lettersArr[i] = j + 65 + 6;
			} else {
				lettersArr[i] = j + 65;
			}
		}

		@SuppressWarnings("unused")
		String textLetters = "";
		for (i = 0; i < 2; i++) {
			textLetters += (char) lettersArr[rnd.nextInt((51 - 0) + 1) + 0];
		}

		char textCode[] = new char[5];

		int temp;
		int count = 0;
		for (i = 0; i < 5;) {
			temp = rnd.nextInt((4 - 0) + 1) + 0;
			if ((int) textCode[temp] != 0) {
				continue;
			}

			if (count > 1) {
				textCode[temp] = (char) (rnd.nextInt((57 - 48) + 1) + 48);
				count += 1;
			} else {
				textCode[temp] = (char) lettersArr[rnd.nextInt((51 - 0) + 1) + 0];
				count += 1;
			}
			i++;

		}

		String codeComplete = "";
		for (i = 0; i < 5; i++) {
			codeComplete += textCode[i];
		}
		return codeComplete;
	}
}
