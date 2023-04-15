const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Define function to calculate based on button clicked
const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%", "/100")); 
    } else if(btnValue === "AC") {
        
    }
}


// Add eventlistener

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})

console.log("Manish Nishad")

