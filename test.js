// 'node test.js' in command line to run the following code through Node.js

// console.log('Hello world!');
// console.log(2+2);

//fs is a node-module (one of many Node comes with out of the box), short for file-system
var fs = require('fs');

// https node-module
var https = require('https');

//create index.html through automation
   //we give the writeFile() method three arguments
      //location on our computer where we want to create a new file; __dirname tells node to look within the current folder
      //what we want to live/have in that file we created
      //callback function - that will run once our writeFile() action has either succeeded or failed
fs.writeFile(__dirname + '/index.html', '<h1>HTML is great!</h1>', function(error){
   if(error) {
      return console.log('Error');
   } else {
      return console.log('Congrats!');
   }
});

//download a photo through automation
var myPhotoLocation = 'https://external-preview.redd.it/Ak4M0FYrZ3xSFVqVAjV45Gxa8tfcgjI3D1uZcaTxbyI.jpg?auto=webp&s=c4903fb62cac42521a1e3d37c4e88e65ecb5980e';
https.get(myPhotoLocation, function(response){
   response.pipe(fs.createWriteStream(__dirname + '/photo.jpg'));
});