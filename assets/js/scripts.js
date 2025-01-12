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
      // display.value = result > 0 ? "∞" : "-∞";
      display.value = "∞";
    } else if (result === -Infinity) {
      // display.value = "undefined (Invalid operation)";
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

// Fungsi untuk menambahkan angka atau koma
function appendValue(value) {
  if (
    display.value === "" ||
    display.value === "0"
    // display.value === "0/" ||
    // display.value === "0*" ||
    // display.value === "0-" ||
    // display.value === "0+"
  ) {
    if (value === ".") {
      display.value = "0.";
    }
    // else if (value === "+") {
    //   display.value = "0+";
    // } else if (value === "-") {
    //   display.value = "0-";
    // } else if (value === "*") {
    //   display.value = "0*";
    // } else if (value === "/") {
    //   display.value = "0/";
    // } else if (value === "=") {
    //   display.value = "0";
    // }
    else if (["+", "-", "*", "/"].includes(value)) {
      display.value = "0" + value;
    } else {
      display.value = value;
    }
  } else {
    // display.value += value;
    // Cek jika tombol yang ditekan adalah operator dan jika sudah ada operator sebelumnya
    if (["+", "-", "*", "/"].includes(value)) {
      // Jika operator sudah ada, jangan menggantinya, hanya tambahkan operator berikutnya
      if (
        ["+", "-", "*", "/"].includes(display.value[display.value.length - 1])
      ) {
        display.value = display.value.slice(0, -1) + value; // Gantikan operator sebelumnya dengan yang baru
      } else {
        display.value += value; // Tambahkan operator ke belakang
      }
    } else {
      // Untuk angka, tambahkan ke display
      display.value += value;
    }
  }
}

// Fungsi khusus untuk tombol "0"
function appendZero() {
  if (display.value === "" || display.value === "0") {
    display.value = "0";
  } else {
    display.value += "0";
  }
}

// Fungsi untuk tombol "00"
function appendDoubleZero() {
  if (display.value === "" || display.value === "0") {
    display.value = "0";
  } else {
    display.value += "00";
  }
}
