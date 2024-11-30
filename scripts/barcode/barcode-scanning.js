// imports
import showScanner from "./showScanner.js";

//export
export default function initializeBarcodeScanner() {
  const barcodeEl = document.getElementById("barcode-scanner");
  // Start the barcode scanner
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: barcodeEl,
      },
      decoder: {
        readers: ["code_128_reader", "ean_reader", "upc_reader"], // Add the barcode formats you need
      },
    },
    function (err) {
      if (err) {
        console.log(err);
        return;
      }
      Quagga.start();
    }
  );

  // Handle barcode detection
  Quagga.onDetected(function (result) {
    const barcode = result.codeResult.code;
    console.log("Detected barcode:", barcode);
    const input = document.querySelector("input");
    input.value = barcode;
    // document.querySelector("#barcode-scanner").style.display = "none";
    // Make the Scanner hidden
    showScanner(false);
    Quagga.stop();
    // automatically click the search button
    const button = document.getElementById("search-btn");
    button.click();

  });
}
