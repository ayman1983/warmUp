// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
<<<<<<< HEAD
function gcd ( num1 , num2 ) {
var b = num2;
if (( num1%b===0 )&& (num2%b===0)){
    return b;
}

 b=b-1;
return gcd (num1,b)

}
   


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum ( num1 , num2){

  var som = 0;

if (num2===0){
    return  som = num1
}
return som= som +sum (num1 , num2-1) + 1;



 return som
=======

function gcd(number1, number2) {
    if ((typeof number1 !== 'number') || (typeof number1 !== 'number') || (number1 < 0) || (number2 < 0)) {
        return "Please enter two positive numbers.";
    }
    else {
        if (number2 === 0) {
            return number1;
        }
        else {
            return gcd(number2, number1 % number2);
        }
    }
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without
// suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(number1, number2) {
    if (number2 !== 0) {
        return sum(number1 + 1, number2 - 1);
    }
    return number1;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}