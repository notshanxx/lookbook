// import displayBookInfo from "./display-book-info.js";
// export that display search result per book

import showSearch from "./showSearch.js";
import Book from "./component/Book.js";

export function searchedBookIndiv(book, matched) {

  const relatedEl = document.querySelector("#related-book");
  const matchedEl = document.getElementById("matched-book");

  const BOOK = Book(book);

  if (matched) {
    matchedEl.appendChild(BOOK);
    
  } else {
    // matchedEl.style.display = "none";
    relatedEl.appendChild(BOOK);
  }
  showSearch(true);
}
