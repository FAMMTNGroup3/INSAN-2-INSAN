'use strict';


let raised = 0;

let raised1 = 0;
let raised2 = 0;


//getting Doanation for Schools
let getdonationButton = document.getElementById('donateSc');
console.log();
let counterContainer = document.getElementById('counterContainer');
let newCounter = document.createElement('h3');
counterContainer.appendChild(newCounter);
getdonationButton.addEventListener('click', donationsCounter);

function donationsCounter(event) {
    event.preventDefault();
    let donate = parseInt(Sc.value);
    raised = raised + donate;
    settingItem();
    newCounter.textContent = raised + '$';
}
gettingItems();
newCounter.textContent = raised + '$';

function settingItem() {
    localStorage.setItem("money", JSON.stringify(raised));
}

function gettingItems() {
    let ItemsBack = localStorage.getItem("money");
    let objectBack = JSON.parse(ItemsBack);

    if (objectBack !== null) {
        raised = objectBack;
    }
}
//getting donations for food
let getFoodDonation = document.getElementById('donatefood');
let counterContainer2 = document.getElementById('counterContainer2');
let newCounter2 = document.createElement('h3');
counterContainer2.appendChild(newCounter2);
getFoodDonation.addEventListener('click', donationsCounter2);

function donationsCounter2(event) {
    event.preventDefault();

    let donate1 = parseInt(food.value);
    raised1 = raised1 + donate1;
    settingItem1();
    newCounter2.textContent = raised1 + '$';
}
gettingItems1();
newCounter2.textContent = raised1 + '$';

function settingItem1() {
    localStorage.setItem("money1", JSON.stringify(raised1));
}

function gettingItems1() {
    let ItemsBack = localStorage.getItem("money1");
    let objectBack = JSON.parse(ItemsBack);
    if (objectBack !== null) {
        raised1 = objectBack;
    }
}
// getting donation for Orphans
let getSponserShip = document.getElementById('donateOr');
let counterContainer3 = document.getElementById('counterContainer3');
let newcounter3 = document.createElement('h3');
counterContainer3.appendChild(newcounter3);
getSponserShip.addEventListener('click', donationCounter3);

function donationCounter3(event) {
    event.preventDefault();
    let donate2 = parseInt(Or.value);
    raised2 = raised2 + donate2;
    settingItem2();
    newcounter3.textContent = raised2 + '$';
}
gettingItems2();
newcounter3.textContent = raised2 + '$';

function settingItem2() {
    localStorage.setItem("money2", JSON.stringify(raised2));
}

function gettingItems2() {
    let ItemsBack = localStorage.getItem("money2");
    let objectBack = JSON.parse(ItemsBack);
    if (objectBack !== null) {
        raised2 = objectBack;
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("donateSc");
var btn2 = document.getElementById("donatefood");
var btn3 = document.getElementById("donateOr");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}