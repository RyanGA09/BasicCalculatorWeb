const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const result = eval(display.value);

    if (result === Infinity) {
      display.value = "∞";
    } else if (result === -Infinity) {
      display.value = "-∞";
    } else if (isNaN(result)) {
      display.value = "undefined";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Invalid expression";
  }
}

// Functions to add numbers or commas
function appendValue(value) {
  if (display.value === "" || display.value === "0") {
    if (value === ".") {
      display.value = "0.";
    } else if (["+", "-", "*", "/"].includes(value)) {
      display.value = "0" + value;
    } else {
      display.value = value;
    }
  } else {
    // Check if the button pressed is an operator and if there is already a previous operator
    if (["+", "-", "*", "/"].includes(value)) {
      // If the operator already exists, do not replace it, just add the next operator
      if (
        ["+", "-", "*", "/"].includes(display.value[display.value.length - 1])
      ) {
        display.value = display.value.slice(0, -1) + value; // Replace the previous operator with a new one
      } else {
        display.value += value; // Add back operator
      }
    } else {
      // For numbers, add them to the display
      display.value += value;
    }
  }
}

// Function for button “0”
function appendZero() {
  if (display.value === "" || display.value === "0") {
    display.value = "0";
  } else {
    display.value += "0";
  }
}

// Function for button “00”
function appendDoubleZero() {
  if (display.value === "" || display.value === "0") {
    display.value = "0";
  } else {
    display.value += "00";
  }
}
