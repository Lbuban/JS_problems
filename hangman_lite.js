(function(){

let letter = "a"
let word = "hangman";
let counter = 0;
let wordArray = word.split("")
  //console.log(wordArray);


for (var i = 0; i < word.length; i++) {
  //console.log(wordArray[i])
  if (wordArray[i] == letter){
    counter = counter + 1
  }
}

if (counter > 0) {console.log("Yeah, the letter A exists " + counter + " in my word")}

else {
  console.log("Nope, that letter doesn't exist in my word")
}

//console.log(counter)

})()







//Create a variable called word that contains a hangman word, and create a second variable called letter that indicates the letter that the player guessed. Print out "Yeah, the letter x exists y times in my word" if the letter exists (but substitute the actual letter and the number of times). If the letter doesn't exist, print out "Nope, that letter doesn't exist in my word."
