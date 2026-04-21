const form = document.getElementById("SciNotationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let correct = 0;
    let total = 5;

    const answers = {
        q1: "37x10^3",
        q2: "45000",
        q3: "0.23",
        q4: "0.0025",
        q5: "3000000"
    };

    const q1 = document.querySelector('input[name="q1"]:checked')?.value || "";
    const q2 = document.querySelector('input[name="q2"]:checked')?.value || "";
    const q3 = document.querySelector('input[name="q3"]:checked')?.value || "";
    const q4 = document.querySelector('input[name="q4"]:checked')?.value || "";
    const q5 = document.querySelector('input[name="q5"]:checked')?.value || "";

    if (q1 === answers.q1) correct++;
    if (q2 === answers.q2) correct++;
    if (q3 === answers.q3) correct++;
    if (q4 === answers.q4) correct++;
    if (q5 === answers.q5) correct++;

    let score = Math.round((correct / total) * 100);

    alert("Your score is " + score + "%");
});