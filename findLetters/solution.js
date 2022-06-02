const subLength = (word, letter) => {
  let wordLowerCase = word.toLowerCase();
  let letterPlaces = [];
  
  for(let i=0; i< wordLowerCase.length; i++){
    if(wordLowerCase[i] === letter){
      letterPlaces.push(i);
    }
  }
  if(letterPlaces.length !== 2){
    return 0;
  } else {
   let wordSlice = wordLowerCase.slice(letterPlaces[0], (letterPlaces[1]+1));
   return wordSlice.length;
   }
}
