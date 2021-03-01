'use strict';

let organizationsList = [];

function Organization(imagePath, name, info, services, description) {
    this.name = name;
    this.imagePath = imagePath;
    this.info = info;
    this.services = services;
    this.description = description;
    organizationsList.push(this);
}


Organization.prototype.sendInfoButton = function () {
    let createButton = document.createElement("input");
    let attribute = document.createAttribute("type");
    attribute.value = "submit";
    let attribute2 = document.createAttribute("value");
    attribute2.value = "Send your info to this organization"
    createButton.setAttributeNodeNS(attribute);
    createButton.setAttributeNodeNS(attribute2);
    // console.log(createButton);}
}
new Organization("../img/logo (1).png", "Madrasati Initiative", "Location: Amman, Phone Number:(06) 461 2554, Email Address: info@madrasati.jo", 'education', 'Madrasati means “my school” in Arabic. The initiative was launched in 2008 to connectindividuals private companies and organizations and provide them with support for improving the physical and educational learning environments of Jordans most neglected public schools.');

new Organization("../img/cropped-favicon.png", "International Medical Corps", "Location: Amman, Mafraq, Phone Number:+962 6 5530856/0779760678 , Email Address: pr@imc.com.jo", "health", 'International Medical Corps provdes emergenciy relief to those struck by disaster, no matterwhere they are, no matter what the conditions working with them to recover, rebuild, and gainthe skills and tools required for self-reliance. International Medical Corps provdes emergenciy relief to those struck by disaster, no matterwhere they are, no matter what the conditions working with them to recover, rebuild, and gainthe skills and tools required for self-reliance.');

new Organization("../img/logo (2).png", "Jordan River Foundation", ' Location: Amman, Phone Number:(06) 492 5096, Email Address: info@jrf.org.jo',"livelihood", "Since its launch in 1997, the Jordan River Community Empowerment Program (JRCEP) has worked diligently to provide local community members with economic opportunities to improve their livelihoods and that of their families. JRCEP has benefited thousands of individuals and families by implementing programs and projects that empower communities to articulate their needs and facilitate their contribution to their own economic and social development.");




let organizationsFrom = document.getElementById('organizationsForm');
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
    localStorage.setItem("newOrganization", JSON.stringify(organizationsList));
}


function getItem() {
    let ItemsBack = localStorage.getItem("newOrganization");
    let objectBack = JSON.parse(ItemsBack);
    
    if (objectBack !== null) {
        organizationsList = objectBack
    }   
}




function renderTheList() {
    let getUnorderdList = document.getElementById("availableOrg");
    getUnorderdList.textContent = '';
    for (let i = 0; i < organizationsList.length; i++) {
        
        let createList = document.createElement('li');
        
        let createImg = document.createElement('img');
        let createSrc = document.createAttribute('src')
        let createWidth = document.createAttribute('width');
        let createHight = document.createAttribute('hight');
        createImg.setAttributeNodeNS(createSrc);
        createImg.setAttributeNodeNS(createHight);
        createImg.setAttributeNodeNS(createWidth);
        createWidth.value= '200px';
        createHight.value = '200px';
       
        
        let createH2ForName = document.createElement('h2');
        let createParaForDescription = document.createElement('p');
        let serviceType = document.createElement('p');
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
        getUnorderdList.appendChild(createList);
        
    }
    
}
getItem();

renderTheList();





