/**
 * Created by anthonymcclay on 5/11/17.
 */


/*console.log("Train1 is active");
console.log("Train2 is active");
console.log("Train3 is active");
console.log("Train4 is active");
console.log("Train5 is active");
console.log("Train6 is active");

console.log("car1 is active");
console.log("car2 is active");
console.log("car3 is active");
console.log("car4 is active");
console.log("car5 is active");
console.log("car6 is active");


var operationalTrains = 11;
var trainNumber = 1
while( trainNumber <= operationalTrains ) {
    console.log("train " + trainNumber + " is active");
    trainNumber++;
}

var num = 10;
console.log("Counting backwards")
while (num >= 1 ) {
    console.log(num);
    num--;
}*/


/*

var gotName = false;
while ( gotName == false) {
    var userName = prompt("Yo Passenger, what's your name ?");
    if ( confirm("Yo is your name really :" + userName + " ?")) {
        alert("'sup " + userName);
        gotName = true;
    }
}
*/



function sumOfCubes( a, b ) {

    var aCubed = a * a * a;
    var bCubed = b * b * b;
    var total = aCubed + bCubed

    return total;

}


function countE() {

    var charValue;
    var total = 0 ;
    var phrase = prompt("what phrase would you like to evaluate for E's ?");
    if ( typeof(phrase) != "string" ) {
        alert("that is not a valid entry")
        return false;
    } else {
        for ( var counter = 0; counter < phrase.length; counter++) {
            charValue = phrase.charAt(counter);
            if (charValue == 'E' || charValue == 'e') {
                total++;
            }
        }
        console.log("Total number of E's is :"  + total);
        return true;
    }
}


console.log ("sum of cubes 1 " + sumOfCubes(4,9));

console.log ("sum of cubes 2 " + sumOfCubes(5,6));

//  countE();



function newArray () {


// Arrays
    var passengers = ["Tony McClay", "Maria Dennis", "Albert Eistien", "Donald Trump",
        "Tyanne Cantuaria", "Maxine McClay"];

    var mom = passengers[5];
    console.log("mom : " + mom)
    console.log("Lengat of passengers :" + passengers.length );
    var poped = passengers.pop();
    console.log("Popped : " + poped )
    console.log("Lengat of passengers :" + passengers.length );
    passengers.push("tony McCLy");

    var numberList = [ 1,2,3,4,5,6,7,6,5,4,3,2,1];
    console.log("numberlist");
    numberList[5] = undefined;
    for (var  i = 0 ; i < numberList.length ; i++) {

        console.log("Number list value : " + i + " Value : " + numberList[i]);
    }

}


newArray();






