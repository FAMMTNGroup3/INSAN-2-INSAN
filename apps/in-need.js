'use strict';
let userSubmit = document.getElementById("submit");
userSubmit.addEventListener("click", handleUserSubmit);

let typeOfNeed;
let phoneNo;
let description;
let userAgree;
let newUser;
let userInNeed = [];

function handleUserSubmit(event) {
    event.preventDefault();
    typeOfNeed = document.getElementById("typeOfNeed").value;
    // console.log(typeOfNeed);
    phoneNo = document.getElementById("phone").value;
    // console.log(phoneNo);
    description = document.getElementById("description").value;
    // console.log(description);
    userAgree = document.getElementById("agree").checked;
    // console.log(userAgree);
   new InNeedUsers(typeOfNeed, phoneNo, description, userAgree);

}
// userSubmit.setAttribute("onclick", "this.disabled = true");

function InNeedUsers(typeOfNeed, phoneNo, description, userAgree) {
    this.typeOfNeed = typeOfNeed;
    this.phoneNo = phoneNo;
    this.description = description;
    this.userAgree = userAgree;
    userInNeed.push(this);
    console.log(userInNeed);
}