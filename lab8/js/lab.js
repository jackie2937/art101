/*
 * Author: Jackie and Aidan
 * created wed. 26th
 * License: Public Domain
*/

//create array
var arrayNum = [9182, 238, -23, 3];
//create function multiplicator
function Multiplicator(x){
    var results = (x*2);
    return results;
}

//run function on 2
console.log(Multiplicator(2));
//4

//run function of 7324
console.log(Multiplicator(7324));
//14648

//map function to arrayNum
console.log(arrayNum.map(Multiplicator));
//(4) [18364, 476, -46, 6]0: 183641: 4762: -463: 6length: 4[[Prototype]]: Array(0)


//run map on anon function
console.log(arrayNum.map(function(x){
    return x/83;
}))
//(4) [110.62650602409639, 2.8674698795180724, -0.27710843373493976, 0.03614457831325301]
