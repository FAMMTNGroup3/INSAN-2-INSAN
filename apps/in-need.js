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

   createOrganization();
}
userSubmit.setAttribute("onclick","this.disabled = true");


let gettingItem = localStorage.getItem("newOrganization");

let normal = JSON.parse(gettingItem);
console.log(normal);

function InNeedUsers(typeOfNeed, phoneNo, description, userAgree) {
    this.typeOfNeed = typeOfNeed;
    this.phoneNo = phoneNo;
    this.description = description;
    this.userAgree = userAgree;
    userInNeed.push(this);
    console.log(userInNeed);
}

let parent = document.getElementById('organizationList');

function createOrganization (){
for (let i=0 ; i< normal.length ; i++){


    if (typeOfNeed === normal[i].services){
    
    let createList = document.createElement('li');

        
        let createImg = document.createElement('img');
        let createSrc = document.createAttribute('src')
        createImg.setAttributeNodeNS(createSrc)
        
        let createH2ForName = document.createElement('h2');
        let createParaForDescription = document.createElement('p');
        let serviceType = document.createElement('p')
        let createParaForInfo = document.createElement('p');

        createH2ForName.textContent = normal[i].name
        createParaForDescription.textContent = normal[i].description
        serviceType.textContent = normal[i].services
        createParaForInfo.textContent = normal[i].info
        createImg.src = normal[i].imagePath

        createList.appendChild(createImg);
        createList.appendChild(createH2ForName);
        createList.appendChild(createParaForDescription);
        createList.appendChild(serviceType);
        createList.appendChild(createParaForInfo);
        parent.appendChild(createList);
        
    }

}
}