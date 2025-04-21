package assesment;

import java.util.Scanner;

public class PurshaseSystem {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		while(true){
			System.out.println("choose the option");
			System.out.println("1 Call of Warfare   - ₹1500    ");
			System.out.println("2 Speed Racers      - ₹1200  ");
			System.out.println("3. Mystery Mansion   - ₹1000 ");
			System.out.println("4. Pixel Adventure   - ₹800  ");
			System.out.println("5. Puzzle Mania      - ₹500 ");
			System.out.println("6. Checkout / Exit ");
			int ch=sc.nextInt();
			if(ch==6) {
				break;
			}
			switch(ch)
			{
			case 1,2,3,4,5:System.out.println("how many copies you’d like to purchase. "); 
			       int amount=sc.nextInt();
				   System.out.println("Game(s) added to your cart! ");
				   break;
				   
			      
			}
			
		}

	}

}
