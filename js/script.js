// Fungsi untuk konversi Celcius ke Fahrenheit
function convertCelsiusToFahrenheit() {
  var celsius = document.getElementById("celcius").value;
  if (isNaN(celsius) || celsius.trim() === "") {
    document.getElementById("fahrenheit").value = "Error";
    document.getElementById("calculate").value = "Error";

    alert("Input invalid (Cek kembali input anda)");
    return;
  }
  celsius = parseFloat(celsius);
  var fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  document.getElementById(
    "calculate"
  ).value = `(${celsius} °C × 9/5 ) + 32 = ${fahrenheit.toFixed(2)} °F`;
}

// Fungsi untuk konversi Fahrenheit ke Celcius
function convertFahrenheitToCelsius() {
  var fahrenheit = document.getElementById("fahrenheit").value;
  if (isNaN(fahrenheit) || fahrenheit.trim() === "") {
    document.getElementById("celcius").value = "Error";
    document.getElementById("calculate").value = "Error";

    alert("Input invalid (Cek kembali input anda)");
    return;
  }
  fahrenheit = parseFloat(fahrenheit);
  var celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("celcius").value = celsius.toFixed(2);
  document.getElementById(
    "calculate"
  ).value = `(${fahrenheit} °F - 32) × 5/9 = ${celsius.toFixed(2)} °C`;
}

// Fungsi untuk mereset nilai semua textbox
function resetValues() {
  document.getElementById("celcius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calculate").value = "";
}

// Tambahkan event listener ke tombol konversi Celsius ke Fahrenheit
document
  .getElementById("convert")
  .addEventListener("click", convertCelsiusToFahrenheit);

// Tambahkan event listener ke tombol konversi Fahrenheit ke Celsius
document
  .getElementById("reverse")
  .addEventListener("click", convertFahrenheitToCelsius);

// Tambahkan event listener ke tombol reset
document.getElementById("reset").addEventListener("click", resetValues);
