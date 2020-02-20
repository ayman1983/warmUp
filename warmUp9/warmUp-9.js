// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

<<<<<<< HEAD
<<<<<<< HEAD
var  myRbkSisters =["Siwar" , "Nouha"];
var  myRbkBoys= [ " Walla","Ali","Ghazi","Amir","Amin","M.Amin","Mohammed","Firas","Khaireddine","Abdallah","Houssem","MohammedHoussem","Omar","Taha","Afif","BillGates(Belghassem)","Mootaz"," Youssri"]

var myGentilInstructors =["Seif","Walid","Cassel","Matt","Safa","Hadhemi"]

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middle ( array ) {
    
    
     if ( array.length %2 === 0){
        

        return  array[(array.length)/2]
    }  
      return array[Math.floor((array.length)/2)+1]


  

}




// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function multiply ( array ) {

    

    for ( i =0 ; i< array.length ; i++){

        if (i%2 ===0){

            array[i]= array[i]*2
        }
       
    }

    return array;

=======
var arrayFemales = ['Siwar', 'Nouha'];
var arrayMales = ['Houss1', 'Houss2', 'Omar', 'Taha', '..........'];
var arrayInstructors = ['Matt', 'Cassels', 'Walid'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middleArray(array) {
    if (array.length % 2 !== 0) {
        return array[(Math.floor(array.length / 2))];
    }
    else {
        return "Enter an array with an odd length."
    }
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function doubledEvenIndexes(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            arr.push(array[i] * 2);
        }
    }
    return arr;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
=======
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
