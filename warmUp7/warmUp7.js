//1. Write a JavaScript function to check whether an `input` is an array or not
<<<<<<< HEAD

function arrayOrNot ( array ) {
 
     return Array.isArray ( array) //Array.isArray is a predifined function in JavaScript

}



//2-Write a JavaScript function to get the first n element of an array.

// This function takes an array as first argument , a number as second argument and return the number first element of the array in a new one.

function firstElement ( array , number  ) {
   
  var arr =[]; // Declaration of a new array wich we put the number first elements of of the first array.

  for ( var i = 0 ; i < number ; i++ )  {

    arr[i]= array [i] ;

  }

  return arr ;

}





=======
// ex isArray([1,2])=>true
//    isArray(5)=>false
function isArray(input) {
    if (Array.isArray(input)) {
        return true;
    }
    else {
        return false;
    }
}
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]
function first(array, n) {
    var arr = [];
    if (n >= array.length) {
        arr = array;
    }
    else if (n < 0) {
        return "Please enter a positif number"
    }
    else {
        for (var i = 0; i < n; i++) {
            arr.push(array[i]);
        }
    }
    return arr;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]


// This function convert an abject to an array of array
function convertObject ( object ) {

    var arr = [];
    var i = 0;

for ( var key in object) {

    arr[i] = [key , object[key] ]; 

    i = i+1;
} 


 return arr;


}


