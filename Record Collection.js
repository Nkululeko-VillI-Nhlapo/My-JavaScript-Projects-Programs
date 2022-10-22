//Nhlapo Nkululeko Villicent -  villicentnkululeko@gmail.com

//Record Collection, collection consists of an album which is represented by an id and consists of other several properties.
// So here is the record collection as object, and the we gonna update it

const recordCollection = {  //recordCollection object
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  

  function updateRecords(records, id, prop, value) { // function to update the collection based on certain conditions
    if (prop !== 'tracks' && value !== "") { //conditionals for updating the record album
      records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  }
  console.log("##-Record Collection-##\n") 
  console.log(recordCollection); //displaying the record collection

  updateRecords(recordCollection, 5439, 'artist', 'ABBA'); //Updating the record collection by passing in arguments
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
  updateRecords(recordCollection, 2548, "artist", "");
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
  updateRecords(recordCollection, 2468, "tracks", "Free");
  updateRecords(recordCollection, 2548, "tracks", "");
  updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

  
  console.log("\n##-Updated Record Collection-##\n"); //displaying the Updated record collection
  console.log(recordCollection);