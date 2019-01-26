package com.shopping.util;

public class Test {
	private static final int[] dayAndYear = { 0, 1500, 2, 1600, 1, 1700, 6, 1800, 4, 1900, 2, 2000, 1, 2100, 6, 2200, 4,
			2300, 2, 2400, 1, 2500, 6 };

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

		temp1 = lastTwoDigits / 12;
//		System.out.println("temp1: "+temp1);
		temp2 = lastTwoDigits % 12;
//		System.out.println("temp2: "+temp2);
		temp3 = temp2 / 4;
//		System.out.println("temp3: "+temp3);
		temp4 = (temp1 + temp2 + temp3) % 7;
//		System.out.println("temp4: "+temp4);
		for (i = 1; i < dayAndYear.length - 1; i += 2) {

			if ((dayAndYear[i] / 100) == firstTwoDigits) {
				dayAndYear[i + 1] += temp4;
				dateOfYear = dayAndYear[i + 1];
			}
		}

		return dateOfYear;
	}

	public static void main(String[] args) {

		// leave empty so that months[1] = "January"
		String[] month = { "", "January", "February", "March", "April", "May", "June", "July", "August", "September",
				"October", "November", "December" };

		int[] day = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

		/************* Input here ***************/

		// Please enter the year you want
		int yearChoose = 2000;

		day[2] = dayOfFeb(yearChoose);

		// Please enter the month you want
		int monthChoose = 2;

		/************* Input here ***************/

//		int[] date = { 0, 1, 2, 3, 4, 5, 6 };
		String[] letterDate = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

//		System.out.println(letterDate[doomsdayOfYear(yearChoose)]);

		int dayBegin = 0;
		
//		System.out.println(doomsdayOfYear(yearChoose));

		switch (monthChoose) {
		case 1: {
			if (!isLeapYear(yearChoose)) {
				dayBegin = doomsdayOfYear(yearChoose) - 2;
				while (dayBegin < 0) {
					dayBegin = dayBegin + 7;
				}
				System.out.println(letterDate[dayBegin]);
				break;
			}
			dayBegin = doomsdayOfYear(yearChoose) - 3;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}
		case 2: {
			if (!isLeapYear(yearChoose)) {
				dayBegin = (doomsdayOfYear(yearChoose) + 1) % 7;
				System.out.println("asd");
				System.out.println(letterDate[dayBegin]);
				break;
			}
//			System.out.println("zxc");
			dayBegin = doomsdayOfYear(yearChoose);
			System.out.println(letterDate[dayBegin]);
			break;
		}

		case 3: {
			dayBegin = doomsdayOfYear(yearChoose) - 6;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}

		case 4: {
			dayBegin = doomsdayOfYear(yearChoose) - 3;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}

		case 5: {
			dayBegin = doomsdayOfYear(yearChoose) - 8;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}

		case 6: {
			dayBegin = doomsdayOfYear(yearChoose) - 5;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}

		case 7: {
			dayBegin = doomsdayOfYear(yearChoose) - 10;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}

		case 8: {
			dayBegin = doomsdayOfYear(yearChoose) - 7;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}

		case 9: {
			dayBegin = doomsdayOfYear(yearChoose) - 4;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}

		case 10: {
			dayBegin = doomsdayOfYear(yearChoose) - 9;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}

		case 11: {
			dayBegin = doomsdayOfYear(yearChoose) - 6;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}

		case 12: {
			dayBegin = doomsdayOfYear(yearChoose) - 11;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			System.out.println(letterDate[dayBegin]);
			break;
		}
		}
		System.out.println();
//		System.out.println(dayBegin);
		System.out.println(month[monthChoose] + "  " + yearChoose);
		System.out.println(" M Tu  W Th  F  S  S");
		int i;
		for (i = 0; i < dayBegin; i++) {
			System.out.print("   ");
		}
		for (i = 1; i <= day[monthChoose]; i++) {
			System.out.printf("%2d ", i);
			if (((i + dayBegin) % 7 == 0) || (i == day[monthChoose])) {
				System.out.println();
			}
		}

	}

}
