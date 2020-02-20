// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
<<<<<<< HEAD
   
     //The correct comparaison operator is (<)  ( 5 < 7);
   
     
=======
// The correct comparison operator to display "true", when: 5 is less than 7 is: <:
<<<<<<< HEAD
5 < 7;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
=======

>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
<<<<<<< HEAD
//    helloWorld('') ==> 'Hello, World'     

// Function that returns a world greeting in different languages depending on the input argument;
function helloWorld ( languageCode )  {    
      if ( languageCode === "fr"){

          return "Bonjour tout le monde" ;  // return in French

      } else if ( languageCode === "es") { 

        return "Hola,Munde" ;   // returns in Spanish

      } else if ( languageCode=== "ar") {

        return "مرحبا كل العالم" ;  // returns in Arabic

      } else if ( languageCode === '') {
        
        return "Hello , World";    // returns in English

      } return "Sorry, your language does not belong to our DataBase!!!!";  

 } 




=======
//    helloWorld('') ==> 'Hello, World'

<<<<<<< HEAD

// This function returns the traduction of the phrase: 'Hello word' in Frensh ('fr'), Spanish ('es'), and in English ('en'). It is by default is English
function helloWorld(languageCode) {
    if (languageCode === '' || languageCode === 'en') {
        return 'Hello, World';
    }
    else if (languageCode === 'fr') {
        return 'Bonjour tout le monde';
    }
    else if (languageCode === 'es') {
        return 'Hola, Mundo';
    }
    else {
        return "Language not available."
    }
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d



//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]

<<<<<<< HEAD

// This function inverse the elements of an Array regardelss their types.
function inverseMyArray ( array ) {
 
    var arrayTwo =[];

for (i= array.length-1 ; i>= 0 ; i--) {    //For loops is used to ensure the iteration of all the elemnts.
    
    arrayTwo[array.length-1-i] = array[i];

}

       return arrayTwo;

=======
function reverseArray(array) {
    var arr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        arr.push(array[i]);
    }
    return arr;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
=======
//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
