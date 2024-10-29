
const barcodeEl = document.getElementById("barcode-scanner");

  function initializeBarcodeScanner() {
    Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#barcode-scanner')
    },
    decoder : {
      readers : ["code_128_reader", "ean_reader", "upc_reader"] // Add the barcode formats you need
    }
  }, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    Quagga.start();
  });
  }
  

  Quagga.onDetected(function(result) {
    const barcode = result.codeResult.code;
    console.log("Detected barcode:", barcode);
    const input = document.querySelector("input");
    input.value = barcode
    document.querySelector('#barcode-scanner').style.display = 'none'
    Quagga.stop()


    
    // Handle barcode data (e.g., display, store, etc.)
  });