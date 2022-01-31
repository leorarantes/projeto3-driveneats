let personName = "Nome";
let address = "Endereço";
let dishe = "prato";
let dishePrice = 0;
let drink = "bebida";
let drinkPrice = 0;
let dessert = "sobremesa";
let dessertPrice = 0;
let totalPrice = 0;
var myNamespace = {};

myNamespace.round = function(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};

function buttonReleased() {
    const alreadySelectedDishe = document.querySelector(".dishes" + " " + ".selected");
    const alreadySelectedDrink = document.querySelector(".drinks" + " " + ".selected");
    const alreadySelectedDessert = document.querySelector(".desserts" + " " + ".selected");
    const finishButton = document.querySelector(".finish_button");
    const finishText = document.querySelector(".finish_button p:first-child");

    if((alreadySelectedDishe !== null) && (alreadySelectedDrink !== null) && (alreadySelectedDessert !== null)) {
        finishButton.classList.add("finish_button__green");
        finishText.innerHTML = "Fechar pedido";
        totalPrice = myNamespace.round(dishePrice+drinkPrice+dessertPrice, 1);
        return true;
    }
}

function select(selectedSection, selectedClass) {
    const alreadySelected = document.querySelector(selectedSection + " " + ".selected");
    const alreadyChecked = document.querySelector(selectedSection + " " + ".selected" + " " + ".check");
    if (alreadySelected !== null) {
        alreadySelected.classList.remove("selected");
        alreadyChecked.classList.add("hidden");
    }

    const selectItem = document.querySelector(selectedSection + " " + selectedClass);
    selectItem.classList.toggle("selected");
    const showCheck = document.querySelector(selectedSection + " " + selectedClass + " " + ".check");
    showCheck.classList.remove("hidden");
    let ChosenItem = document.querySelector(selectedSection + " " + selectedClass + " " + ".item_name")
    
    if(selectedSection == ".dishes") {
        dishe = ChosenItem.innerHTML;
        ChosenItem = document.querySelector(selectedSection + " " + selectedClass + " " + ".item_price");
        dishePrice = parseFloat((ChosenItem.innerHTML[3]+ChosenItem.innerHTML[4]+ChosenItem.innerHTML[6])/10);
    }
    else if(selectedSection == ".drinks") {
        drink = ChosenItem.innerHTML;
        ChosenItem = document.querySelector(selectedSection + " " + selectedClass + " " + ".item_price");
        if(ChosenItem.innerHTML.length == 8) {
            drinkPrice = parseFloat((ChosenItem.innerHTML[3]+ChosenItem.innerHTML[4]+ChosenItem.innerHTML[6])/10);
        } else {
            drinkPrice = parseFloat((ChosenItem.innerHTML[2]+ChosenItem.innerHTML[3]+ChosenItem.innerHTML[5])/10);
        }
    }
    else {
        dessert = ChosenItem.innerHTML;
        ChosenItem = document.querySelector(selectedSection + " " + selectedClass + " " + ".item_price");
        if(ChosenItem.innerHTML.length == 8) {
            dessertPrice = parseFloat((ChosenItem.innerHTML[3]+ChosenItem.innerHTML[4]+ChosenItem.innerHTML[6])/10);
        } else {
            dessertPrice = parseFloat((ChosenItem.innerHTML[2]+ChosenItem.innerHTML[3]+ChosenItem.innerHTML[5])/10);
        }        
    }

    buttonReleased();
}

function finishOrder() {
    const whiteBackground = document.querySelector(".white_background");
    const boxConfirmation = document.querySelector(".box__confirmation");
    const disheAux = document.querySelector(".box__confirmation" + " " + ".box__confirmation__first_item_name");
    const dishePriceAux = document.querySelector(".box__confirmation" + " " + ".box__confirmation__first_item_price");
    const drinkAux = document.querySelector(".box__confirmation" + " " + ".box__confirmation__second_item_name");
    const drinkPriceAux = document.querySelector(".box__confirmation" + " " + ".box__confirmation__second_item_price");
    const dessertAux = document.querySelector(".box__confirmation" + " " + ".box__confirmation__third_item_name");
    const dessertPriceAux = document.querySelector(".box__confirmation" + " " + ".box__confirmation__third_item_price");
    const totalPriceAux = document.querySelector(".box__confirmation" + " " + ".box__confirmation__total_price");

    if(buttonReleased() == true) {
        disheAux.innerHTML = dishe;
        dishePriceAux.innerHTML = "R$ " + parseInt(dishePrice) + "," + (dishePrice*10-parseInt(dishePrice)*10) + "0";
        drinkAux.innerHTML = drink;
        drinkPriceAux.innerHTML = "R$ " + parseInt(drinkPrice) + "," + (drinkPrice*10-parseInt(drinkPrice)*10) + "0";
        dessertAux.innerHTML = dessert;
        dessertPriceAux.innerHTML = "R$ " + parseInt(dessertPrice) + "," + (dessertPrice*10-parseInt(dessertPrice)*10) + "0";
        totalPriceAux.innerHTML = "R$ " + parseInt(totalPrice) + "," + (totalPrice*10-parseInt(totalPrice)*10) + "0";

        whiteBackground.classList.remove("hidden");
        boxConfirmation.classList.remove("hidden");
    }
}

function confirmOrder() {
    personName = prompt("Digite seu nome: ");
    address = prompt("Digite seu endereço: ");
}

function cancelOrder() {
    const whiteBackground = document.querySelector(".white_background");
    whiteBackground.classList.add("hidden");
    const boxConfirmation = document.querySelector(".box__confirmation");
    boxConfirmation.classList.add("hidden");
}