// Nhlapo Nkululeko Villicent - villicentnkululeko@gmail.com
//I have created an array of objects representing different people in  contacts lists.


const contacts = [
    {
      firstName: "Thabo",
      lastName: "Letuka",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Sam",
      lastName: "Mokoena",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Boitumelo",
      lastName: "Hlongwane",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Balulekile",
      lastName: "Xaba",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  

     function lookUpProfile(name, prop) {
//the for loop starts at the first object in the contacts list.
    for (let x = 0; x < contacts.length; x++) { 
/*If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, 
the if statement passes.*/
      if (contacts[x].firstName === name) { 
/*Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument.
 If it’s true, the value of prop is returned*/
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property"; //if the property does'nt exist in the list, the statement is returned
        }
      }
    }
    return "No such contact"; //If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.

  }
     
    
  
  
  lookUpProfile("Balulekile", "likes"); //This function takes a name and a property (prop) as arguments.