// import
import displayBook from "./display-book.js";
import showSearch from "./showSearch.js";
import Loading from "./component/Loading.js";

//variables
const input = document.querySelector("#input");
const button = document.getElementById("search-btn");
const resultSpan = document.getElementById("result-span");
const matchedEl = document.getElementById("matched-book");
const relatedEl = document.querySelector("#related-book");
const apiKey = "AIzaSyB_GlUk4NE5CrL_b7mwEHYOZqo_Ed9jyzM";
export let isbn = "";

let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;


button.addEventListener("click", () => {
  //remove all non-digit characters
  let inputISBN = input.value.replace(/[^0-9]/g, "");
  input.value = "";
  if (!inputISBN) {
    resultSpan.innerHTML = "inputted isbn seems <b style='color:red'> invalid</b>";
    console.error("inputted isbn seems invalid, try again");
    openDetailEl()
    return "invalid ISBN";
  }

  checkISBN(inputISBN);
  checkISBN(inputISBN) ? (isbn = inputISBN) : "";
  // add dashes
  let dashedISBN = inputISBN.length === 10 
    ? inputISBN.replace(/(\d{1})(\d{3})(\d{5})(\d{1})/, "$1-$2-$3-$4")
    : inputISBN.replace(/(\d{3})(\d{1})(\d{2})(\d{6})(\d{1})/, "$1-$2-$3-$4-$5");
 
  resultSpan.innerHTML = `<mark> Your inputted ISBN_${
    isbn.length === 13 ? "13" : "10"
  }: ${dashedISBN} is ${
    checkISBN(inputISBN) ? "valid" : "invalid"
  }</mark>`;
  // if isbn is valid change url else show detail
  checkISBN(inputISBN)
    ? (url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${inputISBN}&key=${apiKey}`)
    : openDetailEl();
    //fetching if theres this isbn in databse
  checkISBN(inputISBN) ? fetchBook(url) : "";

});

// source ko https://www.instructables.com/How-to-verify-a-ISBN/
function checkISBN(isbn) {
  //isbn = isbn.replace(/[^0-9]/g, "");

  let mod;
  let sum;
  // check isbn
  if (isbn.length === 10) {
    console.log("ISBN-10");
    mod = 11;
    sum = caculateISBN10(isbn);
  } else if (isbn.length === 13) {
    console.log("ISBN-13");
    mod = 10;
    sum = caculateISBN13(isbn);
  } else {
    console.log("Invalid ISBN");
    return false;
  }
  console.log("mod =" + mod);
  console.log("sum =" + sum);
  console.log("sum % mod =" + (sum % mod));

  // check if isbn remainder is 0
  sum % mod ? console.log("Invalid ISBN") : console.log("Valid ISBN");
  // return true if valid false if invalid
  return sum % mod ? false : true;
}

function caculateISBN10(isbn) {
  // multiply each digit by its position
  let sum = 0;
  let formula = "" ;
  for (let i = 0; i < isbn.length; i++) {
    console.log(
      `${Number(isbn[i])} * ${isbn.length - i} = ${
        Number(isbn[i]) * (isbn.length - i)
      }`
      
      
    );
    formula += `(${Number(isbn[i])} * ${isbn.length - i})`;
    if (isbn.length - i != 1) {
      formula += " + ";
      
    }
    sum += Number(isbn[i]) * (isbn.length - i);
    console.log(sum);
  }
  formula += ` = ${sum} (mod 11) = ${sum % 11} ${sum % 11 === 0 ? "valid" : "invalid"}`;

  displayFormula(formula, "ISBN_10");

  return sum;
}

function caculateISBN13(isbn) {
  // multiply each digit by 1 and 3 odd even
  let sum = 0;
  let formula = "";
  for (let i = 0; i < isbn.length; i++) {
    console.log(
      `${Number(isbn[i])} * ${i % 2 === 0 ? 1 : 3} = ${
        Number(isbn[i]) * (i % 2 === 0 ? 1 : 3)
      }`
      
    );
    formula += `(${Number(isbn[i])} * ${i % 2 === 0 ? 1 : 3})`;
    if (isbn.length - i != 1) {
      formula += " + ";
      
    }
    sum += Number(isbn[i]) * (i % 2 === 0 ? 1 : 3);
    console.log(sum);
  }
  formula+= ` = ${sum} (mod 10) = ${sum % 10} ${sum % 10 === 0 ? "valid" : "invalid"}`;
  displayFormula(formula, "ISBN_13");

  return sum;
}

function displayFormula(formula, type) {
  let formulaElement = document.getElementById("isbn-formula");
  formulaElement.innerHTML = formula;
  let typeElement = document.getElementById("isbn-type");
  typeElement.innerHTML = `ISBN type: ${type}`;
  
}



async function fetchBook(url) {
  Loading(true);

  console.log("fetching");
  fetch(url)
    .then((response) => response.json())
    .then(async (data) => {
      if (!data.items) {
        relatedEl.innerHTML = "no books found";
        return console.error("no data");
      }
      showSearch(false)
     await displayBook(data.items);
      console.log(data);
      console.log(data.items[0]);

      sessionStorage.setItem("apiData", JSON.stringify(data));

      // Use the stored data
      console.log(
        "Stored API Data:",
        JSON.parse(sessionStorage.getItem("apiData"))
      );
      Loading(false)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    

}


// open isbn check

function openDetailEl(){
  const detailEl = document.getElementById("isbn-info-div");
  detailEl.open = true
}
