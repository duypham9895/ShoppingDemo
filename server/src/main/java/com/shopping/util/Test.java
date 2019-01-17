package com.shopping.util;

import java.util.Random;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Random random = new Random();
		int[] arr = new int[52];
		int i, j;
		i = 0;
		for (j = 0; j < 52; j++, i++) {
			if (j > 25) {
				arr[i] = j + 65 + 6;
			} else {
				arr[i] = j + 65;
			}
		}

		int arrNum[] = new int[10];

		String code = "";
		Random rnd = new Random();
		int count = 0, c;

//		System.out.println((char) arr[5+46]);
		for (c = 0; c < 2; c++) {
			code += (char) arr[rnd.nextInt((51 - 0) + 1) + 0];
		}
		char codefn[] = new char[5];
		int index, temp;
		int countfn = 0;
		int rndNum = rnd.nextInt((57 - 48) + 1) + 48;
		int rnd04 = rnd.nextInt((4 - 0) + 1) + 0;
		int rnd09 = rnd.nextInt((9 - 0) + 1) + 0;
//		System.out.println((char) rndNum);
		for (index = 0; index < 5;) {
			temp = rnd.nextInt((4 - 0) + 1) + 0;
			if ((int) codefn[temp] != 0) {
				
//				System.out.println(temp + " " + codefn[temp] + "abc");
				continue;
			}
			
			if (countfn > 1) {
				codefn[temp] = (char) (rnd.nextInt((57 - 48) + 1) + 48);
				countfn += 1;
			}
			else {
				
				codefn[temp] = (char) arr[rnd.nextInt((51 - 0) + 1) + 0];
				countfn += 1;
			}
//			System.out.println(codefn[index]+" abc");
			index++;
			
		}
		String fn = "";
		for(int e = 0; e < 5 ; e++) {
			fn += codefn[e];
		}
		System.out.println(fn);
//		System.out.println(codefn);
//		System.out.println(codefn[0]);
//		codefn[0] = 'a';
//		if( (int) (codefn[0]) != 0) {
//			System.out.println("null");
//		}
//		else {
//			System.out.println((int) codefn[0]);
//		}
	}

}
