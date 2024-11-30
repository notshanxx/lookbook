import Book from "../component/Book.js";
export default function showGoogleBooks(book) {
  // display user google book favorites

  const searchEl = document.getElementById("search-result");
  const oldGoogleBooks = document.getElementById("google-books");

  // clear old google books
  if (oldGoogleBooks) {
    searchEl.removeChild(oldGoogleBooks);
  }
  const oldGoogleBookHeading = document.querySelector("#search-result h2");
  if (oldGoogleBookHeading) {
    searchEl.removeChild(oldGoogleBookHeading);
  }

  if (book.length === 0) {
    const noFavorite = document.createElement("h2");
    noFavorite.textContent = "NO BOOKS IN YOUR GOOGLE LIBRARY";
    searchEl.appendChild(noFavorite);
    return;
  }

  //creating the book list and heading
  const googleBooks = document.createElement("div");
  googleBooks.id = "google-books";
  const googleBookHeading = document.createElement("h2");
  googleBookHeading.textContent = "Google Books";

  searchEl.insertBefore(googleBooks, searchEl.firstChild);
  searchEl.insertBefore(googleBookHeading, searchEl.firstChild);
  book.forEach((data) => {
    //get the book structure in BOOK.js by passing the data
    const BOOK = Book(data, true);
    //add in html
    googleBooks.appendChild(BOOK);
  });
}
