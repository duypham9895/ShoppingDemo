package com.shopping.util;

import java.util.Random;

public class Test {

	static String code() {
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

	public static int day(int month, int day, int year) {
		int y = year - (14 - month) / 12;
		int x = y + y / 4 - y / 100 + y / 400;
		int m = month + 12 * ((14 - month) / 12) - 2;
		int d = ((day + x + (31 * m) / 12) % 7) + 1;
		return d;
	}

	public static boolean isLeapYear(int year) {
		if ((year % 4 == 0) && (year % 100 != 0))
			return true;
		if (year % 400 == 0)
			return true;
		return false;
	}

	public static void main(String[] args) {
		
		System.out.println(day(1,21,2019));
//		int month = Integer.parseInt("1"); // month (Jan = 1, Dec = 12)
//		int year = Integer.parseInt("2019"); // year
//
//		// months[i] = name of month i
//		String[] months = { "", // leave empty so that months[1] = "January"
//				"January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
//				"November", "December" };
//
//		// days[i] = number of days in month i
//		int[] days = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
//
//		// check for leap year
//		if (month == 2 && isLeapYear(year))
//			days[month] = 29;
//
//		// print calendar header
//		System.out.println();
//		System.out.println("   " + months[month] + " " + year);
//		System.out.println(" M Tu  W Th  F  S  S");
//
//		// starting day
//		int d = day(month, 1, year);
//
//		// print the calendar
//		for (int i = 0; i < d; i++)
//			System.out.print("   ");
//		for (int i = 1; i <= days[month]; i++) {
//			System.out.printf("%2d ", i);
//			if (((i + d) % 7 == 0) || (i == days[month]))
//				System.out.println();
//		}
	}

}
