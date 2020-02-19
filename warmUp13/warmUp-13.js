//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false


// This function takes two arrays as arguments and return a boolean ( true/false)

function isSubset ( array, sub ){
   
    var k =0;
     
    for ( var i = 0 ; i<sub.length ; i++) {
      for ( var j=0 ; j< array.length ; j++){
        
        if (sub[i]===array[j]){
            k=k+1;
            sub.splice(i,1) // delete the sub.[i]
            array.splice(j,1)  // delete or crush array[j]

            }
        }
    }
        if ( k===sub.length){
            return true
         }

         return false
 }

