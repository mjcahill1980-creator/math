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
        second.innerHTML += "<option value='Evaluating_Expressions.html'>Evaluating Expressions</option>";
    } else {
        second.style.display = "none";
    } 
function updateQuizDropdown() {
    const Quiz_first = document.getElementById("pageSelect").value;
    const second_Quiz = document.getElementById("secondQuizDropdown");
    
    second_Quiz.innerHTML = "";

    if (Quiz_first === "Algebra") {
    second_Quiz.style.display = "inline";

    second_Quiz.innerHtML += "<option value=''>-- Choose a Quiz --</option>";
    second_Quiz.innerHTML += "<option value='Exponents_Quiz.html'>Exponents Quiz</option>";
    second_Quiz.innerHTML += "<option value='Expressions_Quiz.html'>Expressions Quiz</option>";
    second_Quiz.innerHTML += "<option value='Sci_notation_quiz.html'>Scientific notation Quiz</option>";
    second_Quiz.innerHTML += "<option value='Evaluating_quiz.html'>Evaluating Expressions Quiz</option>";
   }
   else {
   second_Quiz.style.display= "none";
}