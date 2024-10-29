const scannerBtn = document.getElementById("scanner");
// const barcodeEl =document.getElementById('barcode-scanner')
scannerBtn.addEventListener('click', ()=>{
    const hidden = barcodeEl.getAttribute("hidden")
    if (hidden) {
        barcodeEl.removeAttribute("hidden")
        initializeBarcodeScanner();
    }else{
        barcodeEl.setAttribute("hidden", "hidden")
        Quagga.stop()
    }
    
    
})

function fetchInfo(url) {
    console.log(url + "jhnyhj")
}