/* 
CREATE A SYSTEM TO "CAPTURE" AGE AND KM OF USERS
GIVE BACK A TICKET COST BASED ON THOSE VARIABLES
TAKE IN CONSIDERATION AGE TO GIVE DISCOUNTS: 20% UNDER 18, 40% OVER 65
BASIC TRAVEL COST PER KM= 0.21€
*/

//create variables age
const age = parseInt(prompt("Quanti anni hai?"));

//create variables trip
const trip = parseInt(prompt("Quanti chilometri devi percorrere?"));

//create variables cost per km
const costPerKm = .21

//create variables for basic cost
const tripCost = parseInt(trip * costPerKm).toFixed(2)

//create discounted variables
const young = ((tripCost * 80) / 100 ).toFixed(2)

const elder = (((trip * costPerKm) * 60) / 100).toFixed(2)

//create shortcut to print variable
printCost = document.getElementById("trip_cost")

//create variable discount based on age
if(age < 18){
    printCost.innerHTML = `${young}`;
} else if(age >= 65) {
    printCost.innerHTML = `${elder}`;
} else {
    printCost.innerHTML = `${tripCost}`;
}