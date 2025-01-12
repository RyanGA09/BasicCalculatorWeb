const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Ganti operator ^ dengan Math.pow
    const expression = display.value.replace(/\^/g, "**");

    // Evaluasi ekspresi
    const result = eval(expression);

    if (result === Infinity) {
      // display.value = result > 0 ? "∞" : "-∞";
      display.value = "∞";
    } else if (result === -Infinity) {
      // display.value = "undefined (Invalid operation)";
      display.value = "-∞";
    } else if (isNaN(result)) {
      display.value = "undefined (Invalid operation)";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "undefined (Invalid expression)";
  }
}
