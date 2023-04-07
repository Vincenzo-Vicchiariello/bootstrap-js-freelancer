let firstName = " ";
let workTime = " ";
let price = " ";



const element = document.getElementById("button");
element.addEventListener("click", priceCalc);

let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

function priceCalc(event) {
    event.preventDefault();
    firstName = document.getElementById("First-name").value;
    lastName = document.getElementById("Last-name").value;
    clientEmail = document.getElementById("email").value;
    hoursReq = document.getElementById("Hours").value;
    userDiscountCode = document.getElementById("Discount-code").value;
    userMessage = document.getElementById("msg").value;


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


    let isDiscountCodeAvailable = discountCodes.includes(userDiscountCode);

    if (isDiscountCodeAvailable) {
        price = price * 0.75;
        discountCodes = removeElementFromArray(discountCodes, userDiscountCode);

        console.log(discountCodes);

        document.getElementById("discount-message").innerHTML = "Congratulazioni! Hai diritto al 25% di sconto!";
    } else if (userDiscountCode != "") {
        document.getElementById("discount-message").innerHTML = "Il codice sconto non è valido o è stato già utilizzato.";
    } else {
        document.getElementById("discount-message").innerHTML = "";
    }


    console.log(firstName);
    console.log(lastName);
    console.log(clientEmail);
    console.log(hoursReq);
    console.log(workTime);
    console.log(typeOfJob);
    console.log(price);
    console.log(userDiscountCode);

    let priceToPrint = price.toFixed(2);

    document.getElementById("price-msg").innerHTML = "Ciao! " + firstName + " " + lastName + " . Il prezzo finale è di " + priceToPrint + " €";


}

function removeElementFromArray(array, elementToRemove) {

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;

}
