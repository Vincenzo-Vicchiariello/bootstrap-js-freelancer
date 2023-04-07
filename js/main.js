let firstName = " "
let workTime = " "
let price = " "
const element = document.getElementById("button");
element.addEventListener("click", priceCalc);

let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

function priceCalc(event) {
    event.preventDefault();
    firstName = document.getElementById("First-name").value;
    lastName = document.getElementById("Last-name").value;
    clientEmail = document.getElementById("email").value;
    hoursReq = document.getElementById("Hours").value;

    let workTime = parseInt(hoursReq);

    let typeOfJob = document.getElementById("jobtype").value;
    console.log(typeOfJob);

    switch (typeOfJob) {
        case "front-end":
            price = workTime * 15.30;
            break;
        case "back-end":
            price = workTime * 20.50;
            break;
        case "project-analysis":
            price = workTime * 33.60;
            break;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(clientEmail);
    console.log(hoursReq);
    console.log(workTime);
    console.log(typeOfJob);
    console.log(price);



}


