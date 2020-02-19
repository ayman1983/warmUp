// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(string) {
    var str = "";
    var i = 1;

    while (i <= string.length + 1) {
        str = str + string.slice(string.length - 1) + i;
        string = string.slice(0, string.length - 1);
        i++;
    }
    return str;
}

function inverseMyWord ( string ){

var wordFinal ="0";
var j = string.length;
var k = 1;
while (string.length>0){

    wordFinal = wordFinal + k+string.slice(0,j)
    j = j-1
    k=k+1


}

return wordFinal

}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

<<<<<<< HEAD
function sameLength (  array ){

var arr = [];

for ( i = 0 ; i< array.length ; i++){

  for ( j= 0 ; j<array.length ; j ++) {

    if (array[i].length=array[j].length){

        arr.push(array[i]);
        arr.push(array[j])
    }
}

}

return arr;

}





=======
function sameLength(arrayOfStrings) {
    var arraySameLength = [];

    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length === arrayOfStrings[i + 1].length) {
            arraySameLength.push(arrayOfStrings[i], arrayOfStrings[i + 1]);
        }
    }
    return arraySameLength;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
