function buttonReleased() {
    const alreadySelectedDishe = document.querySelector(".dishes" + " " + ".selected");
    const alreadySelectedDrink = document.querySelector(".drinks" + " " + ".selected");
    const alreadySelectedDessert = document.querySelector(".desserts" + " " + ".selected");
    const finishButton = document.querySelector(".finish_button");
    const finishText = document.querySelector(".finish_button p:first-child");

    if((alreadySelectedDishe !== null) && (alreadySelectedDrink !== null) && (alreadySelectedDessert !== null)) {
        finishButton.classList.add("finish_button__green");
        finishText.innerHTML = "Fechar pedido";
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

    buttonReleased();
}