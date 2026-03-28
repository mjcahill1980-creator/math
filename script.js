function updateSecondDropdown() {
    const first = document.getElementById("firstDropdown").value;
    const second = document.getElementById("secondDropdown");

    second.innerHTML = "";

    if (first === "algebra") {
        second.style.display = "inline";

        second.innerHTML += "<option value=''>-- Choose a lesson --</option>";
        second.innerHTML += "<option value='Exponents.html'>Exponents</option>";
        second.innerHTML += "<option value='Expressions.html'>Expressions</option>";
        second.innerHTML += "<option value='Sci_notation.html'>Scientific Notation</option>";
    } 
    else if (first === "calculus") {
        second.style.display = "inline";

        second.innerHTML += "<option value=''>-- Choose a lesson --</option>";
        second.innerHTML += "<option value=''>Coming soon</option>";
    } 
    else {
        second.style.display = "none";
    }
}

function selectFromDropdown() {
    const selected = document.getElementById("secondDropdown").value;

    if (selected) {
        window.location.href = selected;
    }
}