const isPalindrome = function(x) {       
    let numArray = Array.from(x.toString()).map(Number);
    let numArrayReversed = [];
    for ( let i = 0; i < numArray.length; i++){
        numArrayReversed.unshift(numArray[i]);
    }
    for (let i = 0; i < numArray.length; i++){
        if(numArray[i] !== numArrayReversed[i]) return false;
    }
    return true;
};

console.log(isPalindrome(121));

/*
1) Split number to string and store in array
2) Reverse the array and store in a new variable
3) Compare each digit seperately
*/