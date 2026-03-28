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
        second.innerHTML += "<option value=''>No content yet</option>";
    } 
    else {
        second.style.display = "none";
    }

    second.selectedIndex = 0;

    // hide all videos
    document.querySelectorAll(".video-container iframe").forEach(v => v.style.display = "none");
}

function selectFromDropdown() {
    const selected = document.getElementById("secondDropdown").value;

    document.querySelectorAll(".video-container iframe").forEach(v => v.style.display = "none");

    if (selected) {
        document.getElementById(selected).style.display = "block";
    }
}

function blue() {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "#fff";

    const dropdown = document.querySelector(".dropdown2");
    dropdown.style.backgroundColor = "white";
    dropdown.style.color = "black";        
}

function white() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#000";

    const dropdown = document.querySelector(".dropdown2");
    dropdown.style.backgroundColor = "black";
    dropdown.style.color = "white";
}
