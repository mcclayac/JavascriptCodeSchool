/**
 * Created by anthonymcclay on 5/11/17.
 */
/*var currentGen = 1;
var totalGen = 19;
var totalMW = 0;



while ( currentGen <= 4 ) {
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    currentGen++;
}

for ( ;currentGen <= 19; currentGen++ ) {

    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}*/



var totalGen = 19;
var totalMW = 0;

for ( var numTurbine = 1 ; numTurbine <= totalGen; numTurbine = numTurbine + 1) {


    if ( numTurbine % 2 == 1 ) {
        console.log("Generator #" + numTurbine + " is off.");
    } else if ( numTurbine <= 4 ) {
        totalMW = totalMW + 62;
        console.log("Generator #" + numTurbine + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    } else {
        totalMW = totalMW + 124;
        console.log("Generator #" + numTurbine + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
    }
}

