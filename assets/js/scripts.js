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
      display.value = "undefined (Invalid operation)";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "undefined (Invalid expression)";
  }
}

// Fungsi untuk menambahkan angka atau koma
function appendValue(value) {
  if (display.value === "" || display.value === "0") {
    if (value === ".") {
      // Jika koma ditekan setelah "0"
      display.value = "0.";
    } else {
      // Ganti "0" dengan angka yang ditekan
      display.value = value;
    }
  } else {
    // Tambahkan nilai ke display
    display.value += value;
  }
}

// Fungsi khusus untuk tombol "0"
function appendZero() {
  // Jika display kosong, hanya tambahkan satu "0"
  if (display.value === "" || display.value === "0") {
    display.value = "0";
  } else {
    // Jika tidak kosong, tambahkan "0" biasa
    display.value += "0";
  }
}

// Fungsi untuk tombol "00"
function appendDoubleZero() {
  // Jika display kosong atau hanya "0", tetap hanya menampilkan "0"
  if (display.value === "" || display.value === "0") {
    display.value = "0";
  } else {
    // Jika tidak kosong, tambahkan "00"
    display.value += "00";
  }
}
