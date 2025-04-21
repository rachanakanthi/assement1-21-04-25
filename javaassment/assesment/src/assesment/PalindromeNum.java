package assesment;

import java.util.Scanner;

public class PalindromeNum {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("enter the number");
		int n = sc.nextInt();
		int original = n;
		int rev = 0;
		System.out.println(original);
		for (int i = 0; i > n; i++) {
			int digit = n % 10;
			rev = rev + digit;
			n = n / 10;

		}

		if (rev != original) {
			System.out.println(n + " is palindrome number");
		} else {
			System.out.println(n + " is  not palindrome number");
		}
	}

}
