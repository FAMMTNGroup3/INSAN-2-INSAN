'use strict';

let organizationsList = [];

function Organization(imagePath, name, services, location, phoneNumber, email, description) {
    this.name = name;
    this.imagePath = imagePath;
    this.services = services;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.description = description;
    organizationsList.push(this)
}


function setItem() {
    localStorage.setItem("newOrganization", JSON.stringify(organizationsList))
}

function getItem() {
    let ItemsBack = localStorage.getItem("newOrganization")
    let objectBack = JSON.parse(ItemsBack)
    
    if (objectBack !== null) {
        organizationsList = objectBack  
    }
}

// Organization.prototype.takeTheDateFromFrom = function () {

//     let orgName = organizationsFrom.target.orgName.value
//     let services = organizationsFrom.target.serviceType.value
//     let orgLocation = organizationsFrom.target.location.value
//     let orgPhoneNumber = organizationsFrom.target.ContactNumber.value
//     let orgDescription = organizationsFrom.target.orgDescription.value
//     let orgEmail = organizationsFrom.target.Email.value
//     let orgImage = organizationsFrom.target.orgImage.value
//     let orgConsent = organizationsFrom.target.consent.checked

// }

Organization.prototype.sendInfoButton = function () {
    let createButton = document.createElement("input")
    let attribute = document.createAttribute("type")
    attribute.value = "submit";
    createButton.setAttributeNodeNS(attribute)
    // console.log(createButton);}
}

let organizationsFrom = document.getElementById('organizationsForm')
organizationsFrom.addEventListener('submit', addOrganization)


function addOrganization(event) {
    event.preventDefault();

    let orgName = event.target.orgName.value
    let services = event.target.serviceType.value
    let orgLocation = event.target.location.value
    let orgPhoneNumber = event.target.ContactNumber.value
    let orgDescription = event.target.orgDescription.value
    let orgEmail = event.target.Email.value
    let orgImage = event.target.orgImage.value
    let orgConsent = event.target.consent.checked

    let getUnorderdList = document.getElementById("availableOrg");
    let createList = document.createElement('li');

    let createImg = document.createElement('img');
    let createSrc = document.createAttribute('src')
    createImg.setAttributeNodeNS(createSrc)

    createImg.src = orgImage
    // createImg.textContent = orgImage;


    let createH2 = document.createElement('h2');
    createH2.textContent = orgName

    let createP = document.createElement('p');
    createP.textContent = orgDescription

    let createInfo = document.createElement('P');
    createInfo.textContent = "Services Provided:  " + services + ", " + "Location: " + orgLocation + ", " + "Phone Number:  " + orgPhoneNumber + ", " + "Email Address:  " + orgEmail

    // let createButton = document.createElement("input") 
    //    let attribute = document.createAttribute("type")   
    //     attribute.value = "submit";
    //      let attribute2 = document.createAttribute("value")   
    //       attribute2.value = "Send your info to this organization"
    // createButton.setAttributeNodeNS(attribute)
    //     createButton.setAttributeNodeNS(attribute2)


    createList.appendChild(createImg);
    createList.appendChild(createH2);
    createList.appendChild(createP);
    createList.appendChild(createInfo);
    getUnorderdList.appendChild(createList);
    // getUnorderdList.appendChild(createButton)


    window.alert("Thank you for registering in our website!\nThe organization details will appear down in the list")

    new Organization(orgImage, orgName, services, orgLocation, orgPhoneNumber, orgEmail, orgDescription)
    
   
    setItem();

    getUnorderdList.appendChild(organizationsList);

}

getItem();