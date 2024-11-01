// show and hide scanner
export default function showScanner(params) {
  const barcodeEl = document.getElementById("barcode-scanner");
  const stopScannerButton = document.getElementById("stop-scanner-btn");
  const scannerContainer = document.querySelector(".scanner-container");
  if (params) {
    //true
    barcodeEl.style.display = "block";
    scannerContainer.style.display = "flex";
    stopScannerButton.style.display = "block";
  } else {
    barcodeEl.style.display = "none";
    scannerContainer.style.display = "none";
    stopScannerButton.style.display = "none";
  }
}
