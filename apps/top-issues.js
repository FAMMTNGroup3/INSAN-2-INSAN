'use strict';


let raised = 0;
let raised2 = 0;
let raised3 = 0;

//getting Doanation for Schools
let getdonationButton = document.getElementById('donateSc');
console.log();
let counterContainer = document.getElementById('counterContainer');
let newCounter = document.createElement('h3');
counterContainer.appendChild(newCounter);

getdonationButton.addEventListener('click', donationsCounter);

function donationsCounter(event) {
    event.preventDefault();
    let donationamount = document.getElementById('donAmount');
    let value = parseInt(donationamount.value);
    console.log(value);
    raised = raised + value;
    newCounter.textContent = 'Amount raised ' + raised + '$';
    alert('Thank you for your Donations');
}

//getting donations for food
let getFoodDonation = document.getElementById('donatefood');
let counterContainer2 = document.getElementById('counterContainer2');
let newCounter2 = document.createElement('h3');
counterContainer2.appendChild(newCounter2);
getFoodDonation.addEventListener('click', donationsCounter2);

function donationsCounter2(event) {
    event.preventDefault();
    let donationamount2 = document.getElementById('donAmount2');
    let value = parseInt(donationamount2.value);
    raised2 = raised2 + value;
    newCounter2.textContent = 'Amount raised ' + raised2 + '$';
    alert('Thank you for your Donations');
}

// getting donation for Orphans
let getSponserShip = document.getElementById('donateOr');
let counterContainer3 = document.getElementById('counterContainer3');
let newcounter3 = document.createElement('h3');
counterContainer3.appendChild(newcounter3);
getSponserShip.addEventListener('click', donationCounter3);

function donationCounter3(event) {
    event.preventDefault();
    let donationAmount3 = document.getElementById('donAmount3');
    let value = parseInt(donationAmount3.value);
    raised3 = raised3 + value;
    newcounter3.textContent = 'Amount  ' + raised3 + '$';
    alert('Thank you for your Donations');
}