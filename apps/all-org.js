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
    // console.log(createButton);
}

new Organization("../img/logo (1).png", "Madrasati Initiative", "Location: Amman, Phone Number:(06) 461 2554, Email Address: info@madrasati.jo", 'education', 'Madrasati means “my school” in Arabic. The initiative was launched in 2008 to connectindividuals private companies and organizations and provide them with support for improving the physical and educational learning environments of Jordans most neglected public schools.');

new Organization("../img/cropped-favicon.png", "International Medical Corps", "Location: Amman, Mafraq, Phone Number:+962 6 5530856/0779760678 , Email Address: pr@imc.com.jo", "health", 'International Medical Corps provdes emergenciy relief to those struck by disaster, no matterwhere they are, no matter what the conditions working with them to recover, rebuild, and gainthe skills and tools required for self-reliance.');

new Organization("../img/logo (2).png", "Jordan River Foundation", ' Location: Amman, Phone Number:(06) 492 5096, Email Address: info@jrf.org.jo',"Livelihood", "Since its launch in 1997, the Jordan River Community Empowerment Program (JRCEP) has worked diligently to provide local community members with economic opportunities to improve their livelihoods and that of their families.");

new Organization("../img/logo-warchild(2).svg", "WAR CHILD", 'Location: Jordan, Phone Number: 07 8555 9662, Email Address: example@gmail.org.jo',"Children Services", "War Child International is a network of three independent non-governmental organisations:  War Child UK, War Child Holland and War Child Canada, each legally, operationally and financially independent but sharing a common brand identity and mission to support children and young people affected by armed conflict and war.");

new Organization("../img/22759-312252599928-3469552-n.jpg", "ACTED", ' Location: Jordan, Phone Number:(06) 463 6275, Email Address: example@gmail.org.jo',"WASH", "Agency for Technical Cooperation and Development, commonly known as ACTED, is a French humanitarian non-governmental organisation. It is a non-governmental, non-political and non-profit organisation committed to supporting vulnerable populations around the world.");

new Organization("../img/rqMlqxSW.jpg", "Caritas Jordan", ' Location: Jordan, Phone Number: + 962 (6) 5939236, Email Address: example@gmail.org.jo',"shelter", "Caritas Jordan was registered in the Ministry of Social Affairs under the number (371) on 15 June 1968, published in the official newsletter and was issued on 15 August 1968 under number (2114). The first Caritas organization in the world was founded in Freiburg, Germany, in 1897.");

new Organization("../img/6bfd3ab5cc925159fab3b6444f12.png", "Save the Children", 'Location: Jordan, Phone Number: (06) 464 0852, Email Address: example@gmail.org.jo',"Children Services", "The Save the Children Fund, commonly known as Save the Children, was established in the United Kingdom in 1919 to improve the lives of children through better education, health care, and economic opportunities, as well as providing emergency aid in natural disasters, war, and other conflicts.");

new Organization("../img/140477440_5319265198114385_446346415554341158_n.jpg", "We Are For You", 'Location: Jordan, Phone Number: 07 9017 5351, Email Address: example@gmail.org.jo',"education", "We are for you initiative established at the end of 2011 Then the initiative (We are for you) was registered in the Ministry of Social Development under the name (We are for you charitable society) and its goals and aspirations were defined in coordination with the Ministry of Social Development and Engineer Adel Ghonim was installed as a president of the association");



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
    setItem();
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





