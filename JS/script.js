/* 
CREATE A SYSTEM TO "CAPTURE" AGE AND KM OF USERS
GIVE BACK A TICKET COST BASED ON THOSE VARIABLES
TAKE IN CONSIDERATION AGE TO GIVE DISCOUNTS: 20% UNDER 18, 40% OVER 65
BASIC TRAVEL COST PER KM= 0.21€
*/

//create variables age
const age = parseFloat(prompt("Quanti anni hai?"));

//create variables trip
const trip = parseFloat(prompt("Quanti chilometri devi percorrere?"));

//create variables cost per km
const costPerKm = 0.21

//create variables for basic cost
const tripCost = parseFloat(trip * costPerKm).toFixed(2)

//create discounted variables
const young = ((tripCost * 80) / 100 ).toFixed(2)

const elder = (((trip * costPerKm) * 60) / 100).toFixed(2)

//create shortcut to print variable
printCost = document.getElementById("trip_cost")
prevCost = document.getElementById("full_price")

//display variable discount based on age
if(age < 18){
    printCost.innerHTML =`Il costo del tuo biglietto è di: €${young}.`;
    prevCost.innerHTML = `Il costo non scontato sarebbe stato di: €${tripCost}`;
} else if(age >= 65) {
    printCost.innerHTML =`Il costo del tuo biglietto è di: €${elder}.`; 
    prevCost.innerHTML =`Il costo non scontato sarebbe stato di: €${tripCost}`;
} else {
    printCost.innerHTML = `Il costo del tuo biglietto è di: €${tripCost}`;
}
