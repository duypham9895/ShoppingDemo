package com.shopping.util;

public class Test {
	private static final int[] dayAndYear = { 0, 1900, 2, 2000, 1 };

	public static boolean isLeapYear(int year) {
		int twoLastDigitsOfYear = year % 100;
		if (twoLastDigitsOfYear % 4 == 0) {
			return true;
		}
		return false;
	}

	public static int dayOfFeb(int year) {
		if (isLeapYear(year)) {
			return 29;
		}
		return 28;
	}

	public static int doomsdayOfYear(int year) {
		int lastTwoDigits = year % 100;
		int temp1, temp2, temp3, temp4;
		int firstTwoDigits = year / 100;
		int i;
		int dateOfYear = 0;

		if (!isLeapYear(year)) {
			System.out.println("first");
			temp1 = lastTwoDigits / 12;
			temp2 = lastTwoDigits % 12;
			temp3 = temp2 / 4;
			temp4 = (temp1 + temp2 + temp3) % 7;
			for (i = 1; i < dayAndYear.length - 1; i += 2) {

				if (dayAndYear[i] / 100 == firstTwoDigits) {
					dayAndYear[i + 1] += temp4;
					dateOfYear = dayAndYear[i + 1];
				}
			}
			return dateOfYear;
		}
		System.out.println("second");
		temp1 = lastTwoDigits / 12;
		temp2 = lastTwoDigits % 12;
		temp3 = temp2 / 4;
		temp4 = (temp1 + temp2 + temp3) % 7;
		for (i = 1; i < dayAndYear.length - 1; i += 2) {

			if (dayAndYear[i] / 100 == firstTwoDigits) {
				dayAndYear[i + 1] += temp4;
				dateOfYear = dayAndYear[i + 1];
			}
		}

		return dateOfYear;
	}

	public static void main(String[] args) {

		// leave empty so that months[1] = "January"
//		String[] month = { "", "January", "February", "March", "April", "May", "June", "July", "August", "September",
//				"October", "November", "December" };

		int[] day = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

		int yearChoose = 2001;

		day[2] = dayOfFeb(yearChoose);

//		int[] date = { 0, 1, 2, 3, 4, 5, 6 };
		String[] letterDate = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

		int monthChoose = 4;

//		System.out.println(letterDate[doomsdayOfYear(yearChoose)]);

		switch (monthChoose) {
		case 1: {
			if (!isLeapYear(yearChoose)) {
				System.out.println(letterDate[(doomsdayOfYear(yearChoose) - 2) % 7]);
				break;
			}
			System.out.println(letterDate[(doomsdayOfYear(yearChoose) - 3) % 7]);
			break;
		}
		case 2: {
			if (!isLeapYear(yearChoose)) {
				System.out.println(letterDate[(doomsdayOfYear(yearChoose) + 1) % 7]);
				break;
			}
			System.out.println(letterDate[doomsdayOfYear(yearChoose)]);
		}

		case 3: {
			System.out.println(letterDate[(doomsdayOfYear(yearChoose) + 1) % 7]);
			break;
		}

		case 4: {
			System.out.println((doomsdayOfYear(yearChoose)));
			System.out.println(letterDate[(Math.abs(doomsdayOfYear(yearChoose) - 6)) % 7]);
			break;
		}
		}

	}

}
