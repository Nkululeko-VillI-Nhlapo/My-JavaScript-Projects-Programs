//Nhlapo Nkululeko Villicent, villicentnkululeko@gmail.com

/*In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over
 the house by keeping track of the relative number of high and low cards remaining in the deck. This is 
 called Card Counting*/

 /*I've created a card counting function. It will receive a card parameter,which can be a number or a string, 
 and increment or decrement the global count variable according to the card's value */

 console.log("Welcome User. Counting Cards for you since 1920")
 console.log("As you know When the count is positive, the player should bet high\nand When the count is zero or negative, the player should bet low.")

let count = 0; //initialising variable count

function cc(card) { // the function takes in differnt arguments
    
  switch(card){  // if argument passed is anywhere between (2 and 6), count will be increamented
          case 2:
          case 3:           
          case 4:
          case 5:
          case 6:
            count++;  // increament 
            break;
          case 10:  //if argument passed equals either of (10,J,K,Q,A) , count will be Decreamented
          case "J":
          case "Q":
          case "K":
          case "A":
            count--;
            break;
    //if it happens that the arguments passed is between (7, 8 and 9), count will remain unchanched.
  }
  if (count > 0){
    console.log(count + " Bet") //Displaying number of counts and Bet, provided that count is > 0, the player is told to bet
  
  } else{
    console.log(count + " Hold")//Displaying number of counts and Hold, provided that count is <= 0, the player is told to Hold their cards
  }
  
  
   
  }
  
  cc(2); cc(3); cc(7); cc('K'); cc('A'); // assigning different arguments to our function.