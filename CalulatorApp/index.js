const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// Define function to calculate based on button clicked
const calculate = (btnValue) => {
    console.log()
}


// Add eventlistener

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})

console.log("Manish Nishad")

