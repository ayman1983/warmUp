// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

<<<<<<< HEAD
<<<<<<< HEAD
 // This function take an object as an argument and return an array containg the object's keys.


function objKey(obj) { 
  
  var arr =[];   // Declaring a new array that contains the element of the object

  for (var key in obj){

    arr.push (key);
  }

  return arr ;  // arr is an array that contains the keys of the entered object as elements. 
  
=======
function objKey(obj) {
  return Object.keys(obj);
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2


// This function takes an object as an input and returns its length as an output

function objLength(obj) {
<<<<<<< HEAD

  var size=0;

  for ( key in obj ) {  // We use for loop.(iteration)

    size = size + 1;

  }
     return size ;
  
=======
  return Object.keys(obj).length;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

<<<<<<< HEAD
function objSort(obj) {

  var min = obj[0].id;

  var x = {};

  for ( var i = 0 ; i < obj.length-1 ; i ++  ) {

    for ( var j = i+1 ; j < obj.length ; j ++) {

      if (obj[j].id<= min) { // Switching the two elements

        obj[i] = x ;

        x = obj[j];

        obj[j]=obj[i];

       

      }   
      min = obj[j].id ;

    }
}

    return obj;
}
=======
// function objSort(array) {
//   var arr = [];
//   for (var i = 0; i < array.length - 1; i++) {
//     if (Object.values(array[i])[0] <= Object.values(array[i + 1])[0]) {
//       arr[i] = array[i];
//     }
//     else {
//       arr[i] = array[i];
//     }
//   }
//   return arr;
// }
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
=======
// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
