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