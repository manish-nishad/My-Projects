const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Define function to calculate based on button clicked
const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%", "/100")); 
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;

        output += btnValue
    }

    display.value = output;
}


// Add eventlistener

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})



