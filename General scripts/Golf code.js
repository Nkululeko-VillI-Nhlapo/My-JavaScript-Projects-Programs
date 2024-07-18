//Nhlapo Nkululeko, villicentnkululeko@gmail.com

 console.log("\nIn the game of Golf, each hole has a par, meaning, the average number of strokes\na golfer is expected to make in order to sink the ball in the hole to complete the play.\nDepending on how far above or below par your strokes are, there is a different nickname.\n");


// Different nicknames for different strokes

 const nicknames = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) { //parameters, par and strokes arguments will be passed here

//if a stroke condition is met, the correct nickname will be displayed on the console.

    if (strokes == 1){
        console.log("Hole  Par:" + par + " Number of Strokes: " + strokes + "\n")
       console.log( "Hole-in-one!");
    } 
    else if (strokes == 2){
        console.log("Hole  Par:" + par + " Number of Strokes: " + strokes + "\n")  
       console.log(  "Eagle");
    } 
    else if (strokes == 3){
        console.log("Hole  Par:" + par + " Number of Strokes: " + strokes + "\n")
       console.log( "Birdie");
    } 
    else if (par == strokes){
        console.log("Hole  Par:" + par + " Number of Strokes: " + strokes + "\n")
       console.log( "Par");
    } 
    else if (/*par != strokes &&*/ strokes == 4 ){
        console.log("Hole  Par:" + par + " Number of Strokes: " + strokes + "\n")
       console.log( "Par");
    } 
    else if (par != strokes && strokes == 5){
        console.log("Hole  Par:" + par + " Number of Strokes: " + strokes + "\n")
       console.log( "Bogey");
    } 
    else if (strokes == 6) {
        console.log("Hole  Par:" + par + " Number of Strokes: " + strokes + "\n")
       console.log( "Double Bogey");
    } 
    else if (strokes >= 6) {
        console.log("Hole  Par:" + par + " Number of Strokes: " + strokes + "\n")
       console.log( "Go Home!");
    }

}

golfScore(5, 1); // calling the golfScore function, with arguments 5 for par and 1 for strokes

