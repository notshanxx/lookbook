// import
import displayBook from "./display-book.js";

//variables
const input = document.querySelector("#input");
const button = document.getElementById("search-btn");
const resultSpan = document.getElementById("result-span");
const matchedEl = document.getElementById("matched-book");
const relatedEl = document.querySelector("#related-book");
const apiKey = "AIzaSyB_GlUk4NE5CrL_b7mwEHYOZqo_Ed9jyzM";
export let isbn = "";

let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`;

button.addEventListener("click", () => {
  //remove all non-digit characters
  let inputISBN = input.value.replace(/[^0-9]/g, "");
  input.value = "";
  if (!inputISBN) {
    resultSpan.innerHTML = "inputted isbn seems invalid";
    console.error("inputted isbn seems invalid, try again");
    return "invalid ISBN";
  }

  checkISBN(inputISBN);
  checkISBN(inputISBN) ? (isbn = inputISBN) : "";

  resultSpan.innerHTML = `The ISBN ${inputISBN} is ${
    checkISBN(inputISBN) ? "valid" : "invalid"
  }`;
  checkISBN(inputISBN)
    ? (url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${inputISBN}&key=${apiKey}`)
    : "noway";
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
    return "invalid ISBN";
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
  for (let i = 0; i < isbn.length; i++) {
    console.log(
      `${Number(isbn[i])} * ${isbn.length - i} = ${
        Number(isbn[i]) * (isbn.length - i)
      }`
    );
    sum += Number(isbn[i]) * (isbn.length - i);
    console.log(sum);
  }

  return sum;
}

function caculateISBN13(isbn) {
  // multiply each digit by 1 and 3 odd even
  let sum = 0;
  for (let i = 0; i < isbn.length; i++) {
    console.log(
      `${Number(isbn[i])} * ${i % 2 === 0 ? 1 : 3} = ${
        Number(isbn[i]) * (i % 2 === 0 ? 1 : 3)
      }`
    );
    sum += Number(isbn[i]) * (i % 2 === 0 ? 1 : 3);
    console.log(sum);
  }

  return sum;
}



async function fetchBook(url) {
  console.log("fetching");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (!data.items) {
        relatedEl.innerHTML = "no books found";
        return console.error("no data");
        
      }
    displayBook(data.items);
      console.log(data);
      console.log(data.items[0]);

      sessionStorage.setItem("apiData", JSON.stringify(data));

      // Use the stored data
      console.log(
        "Stored API Data:",
        JSON.parse(sessionStorage.getItem("apiData"))
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

