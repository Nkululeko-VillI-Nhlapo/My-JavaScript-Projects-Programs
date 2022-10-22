//Nhlapo Nkululeko Villicent - villicentnkululeko@gmail.com

//Countdown using recurssion.
function countdown(n){
    if (n < 0){
      return [];
    } else{
      const countArray = countdown(n - 1);
      countArray.unshift(n); //.unshift method will append numbers at the beggining
      return countArray; //The output will be [5,4,3,2,1]
      
  
    }
  }
  console.log(countdown(5)); 
  