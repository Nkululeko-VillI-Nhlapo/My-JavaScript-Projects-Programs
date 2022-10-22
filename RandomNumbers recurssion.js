//Nhalpo Nkululeko Villicent - villicentnkuleko@gmail.com

// the function accepts two numbers from the user, then it generates numbers that are between the two
// given and displays them as an array.

function rangeOfNumbers(startNum, endNum) {
  
 
    if (endNum < startNum){
      return [];
    } else{
      const countArray = rangeOfNumbers(startNum,endNum - 1);
      countArray.push(endNum);
      return countArray;
    }
}
console.log(rangeOfNumbers(1,6));
