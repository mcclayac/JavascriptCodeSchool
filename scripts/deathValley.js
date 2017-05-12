/**
 * Created by anthonymcclay on 5/11/17.
 */


/*var numSheep = 4;
var numSheep2 = 4;
var monthNumber = 1;
var monthsToPrint = 12;

console.log("DeathValley.js");
while( monthNumber <= monthsToPrint) {

    console.log("#1 There will be " + (monthNumber * numSheep) * monthNumber * 4  +" sheep after " + monthNumber +" month(s)!");

    numSheep2 *= 4;
    console.log("#2 There will be " + numSheep2 + " sheep after " + monthNumber + " month(s)!");

    monthNumber++;
}*/


/*

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

    if ( numSheep > 10000) {
        var numSheephalf = numSheep / 2;
        console.log("Removing " + numSheephalf + " sheep from the population.");
        numSheep = numSheep - numSheephalf;
    }

    numSheep *= 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

*/


var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

    if ( monthNumber % 4 == 0 ) {
        var tempNumSheep = numSheep * 75 / 100;
        console.log("Removing " + tempNumSheep + " sheep from the population.");
        numSheep = numSheep - tempNumSheep;
    } else if ( numSheep > 10000) {
        var numSheephalf = numSheep / 2;
        console.log("Removing " + numSheephalf + " sheep from the population.");
        numSheep = numSheep - numSheephalf;
    }

    numSheep *= 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}