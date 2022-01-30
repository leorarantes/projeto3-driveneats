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
}