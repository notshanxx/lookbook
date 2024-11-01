// imports

import initializeBarcodeScanner from "./scripts/barcode-scanning.js";
import showScanner from "./scripts/showScanner.js";

//VARIABLES
const barcodeEl = document.getElementById("barcode-scanner");
const scannerBtn = document.getElementById("scanner");
const stopScannerButton = document.getElementById("stop-scanner-btn")
const scannerContainer = document.querySelector(".scanner-container");
//EVENT LISTENER
scannerBtn.addEventListener('click', ()=>{
    const display = barcodeEl.style.display;
    
    
    if (display === "none" || display === "") {
        showScanner(true)
        initializeBarcodeScanner();
    }else{
        showScanner(false)
        
    }
    
    
})               
stopScannerButton.addEventListener(('click'), ()=>{
    Quagga.stop()
    showScanner(false)

})