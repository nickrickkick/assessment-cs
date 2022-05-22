addToZero = (arr) => {
    let counter = 0;
    let ifTrue = false;
    while (counter < arr.length) {
        for (i = 0; i < arr.length; i++){
            if (arr[counter] + arr[i] === 0 && i != counter){
                ifTrue = true;
            } 
        }
    ++counter;
    }
    ifTrue === true ? console.log("True") : console.log("False");
}
// O(n^2)

addToZero([1, 2, 3, -2]);

hasUniqueChars = (str) => {
    let unique = "";
   
  for(let i = 0; i < str.length; i++){

    if(unique.includes(str[i]) === false){
      unique += str[i]
    }
  }
  unique === str ? console.log("True") : console.log("False");
}
// O(n)

hasUniqueChars("cars");

isPangram = (str) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowerCase = str.toLowerCase().trim();
    let isTrue = true;

    for(let i = 0; i < alphabet.length; i++){
        if(lowerCase.indexOf(alphabet[i]) === -1){
         isTrue = false;
        }
       }
       isTrue === true ? console.log("True") : console.log("False");
}
// O(n)

isPangram("The quick brown fox jumps over the lazy dog");

findLongestWord = (arr) => {
    let longestWord = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (longestWord.length < arr[i].length){ 
            longestWord = arr[i];
        }
    }
    console.log(longestWord.length);
}
//O(n)

findLongestWord(["hi", "hello"]);
