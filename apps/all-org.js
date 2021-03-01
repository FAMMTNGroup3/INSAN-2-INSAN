'use strict';

let organizationsList = [];

function Organization(imagePath, name, info, services, description) {
    this.name = name;
    this.imagePath = imagePath;
    this.info = info;
    this.services = services;
    this.description = description;
    organizationsList.push(this)
}


Organization.prototype.sendInfoButton = function () {
    let createButton = document.createElement("input")
    let attribute = document.createAttribute("type")
    attribute.value = "submit";
    let attribute2 = document.createAttribute("value")
    attribute2.value = "Send your info to this organization"
    createButton.setAttributeNodeNS(attribute)
    createButton.setAttributeNodeNS(attribute2)
    // console.log(createButton);}
}

getItem();

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
    
    
    // let createButton = document.createElement("input") 
    //    let attribute = document.createAttribute("type")   
    //     attribute.value = "submit";
    // createButton.setAttributeNodeNS(attribute)
    // getUnorderdList.appendChild(createButton)
    
    new Organization(orgImage, orgName, ("Organization Location: " + orgLocation + ", Organization Phone Number: " + orgPhoneNumber + ", Organization Email Address: " + orgEmail), services, orgDescription);
    
    renderTheList();
    setItem();
    window.alert("Thank you for registering in our website!\nThe organization details will appear down in the list");
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




function renderTheList() {
    let getUnorderdList = document.getElementById("availableOrg");
    for (let i = 0; i < organizationsList.length; i++) {
        
        let createList = document.createElement('li');
        
        let createImg = document.createElement('img');
        let createSrc = document.createAttribute('src')
        createImg.setAttributeNodeNS(createSrc)
        
        let createH2ForName = document.createElement('h2');
        let createParaForDescription = document.createElement('p');
        let serviceType = document.createElement('p')
        let createParaForInfo = document.createElement('p');
        
        createH2ForName.textContent = organizationsList[i].name
        createParaForDescription.textContent = organizationsList[i].description
        serviceType.textContent = organizationsList[i].services
        createParaForInfo.textContent = organizationsList[i].info
        createImg.src = organizationsList[i].imagePath
        
        createList.appendChild(createImg);
        createList.appendChild(createH2ForName);
        createList.appendChild(createParaForDescription);
        createList.appendChild(serviceType);
        createList.appendChild(createParaForInfo);
        getUnorderdList.appendChild(createList)
        
    }
    
}
// renderTheList();





