<<<<<<< HEAD
 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 
 
 function mult(n) {

    if ( n===0){    // edge case
    return 0
     }
        
        var result =1
        
        
           for( var i = 1 ;i<=n ; i++ ){
    
            result = result * i
          }
    
           return result
    }
=======
// 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
//starting from 0, e.g.:
mult(3); // => 6
mult(4); // => 24
function mult(n) {
    var multp = 1;

    while (n >= 1) {
        multp = multp * n;
        n = n - 1;
    }
    return multp;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

<<<<<<< HEAD

function numToString ( number ){
if (number ===0){
    return "Please enter a number more than 0"  // Edge case
}
var word = ""+1
var j = 2
 while ( j<=number ){

    word = word +" "+j+" "+j
    j=j+1
 }
return word

=======
function stringNumbers(n) {
    var str = "1";
    var x = 2;
    while (x <= n) {
        str = str + " " + x + " " + x;
        x = x + 1;
    }
    return str
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}