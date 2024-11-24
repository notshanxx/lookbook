// imports

import initializeBarcodeScanner from "./scripts/barcode/barcode-scanning.js";
import showSearch from "./scripts/showSearch.js";
import showScanner from "./scripts/barcode/showScanner.js";
import showFavorite from "./scripts/favorite/showFavorite.js";
import toHome from "./scripts/switch-content/ToHome.js";
import toFavorites from "./scripts/switch-content/ToFavorites.js";

//VARIABLES
const barcodeEl = document.getElementById("barcode-scanner");
const scannerBtn = document.getElementById("scanner");
const stopScannerButton = document.getElementById("stop-scanner-btn")
const scannerContainer = document.querySelector(".scanner-container");
const favoriteBtn = document.getElementById("favorite");
const homeBtn = document.getElementById("home");
// --------- EVENT LISTENER ------------

window.onload = function() {
    showSearch(false);
}

// Show Favorite

favoriteBtn.addEventListener('click', ()=>{
    console.log("clicked")
    showSearch(true);
    toFavorites();
})

// Show Home

homeBtn.addEventListener('click', ()=>{
    
    toHome();
    showSearch(false);
})


scannerBtn.addEventListener('click', ()=>{
    // const display = barcodeEl.style.display;
    
    
    // if (display === "none" || display === "") {
        initializeBarcodeScanner();
        showScanner(true)
        
    // }else{
    //     showScanner(false)
        
    // }
    
    
})               
stopScannerButton.addEventListener(('click'), ()=>{
    Quagga.stop()
    showScanner(false)

})
