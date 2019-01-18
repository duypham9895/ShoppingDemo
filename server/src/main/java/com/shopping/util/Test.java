package com.shopping.util;

import java.util.Random;

public class Test {
	
	static String code() {
		Random rnd = new Random();
		int[] lettersArr = new int[52];
		int j;
		
		//numberical order of array letters
		int i = 0;
		
		//have an array contain alphabet
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

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Random random = new Random();
		System.out.println(code());
	}

}
