// imports
import { searchedBookIndiv} from "./searchedBookIndiv.js";
import { isbn } from "./validate-isbn.js";


//export that display search result per book
export default function displayBook(response) {
  const mainEl = document.querySelector("main");
  const matchedEl = document.getElementById("matched-book");
  mainEl.innerHTML = "";
  matchedEl.innerHTML = "";
  response.forEach((book) => {
    // let formatData = {
    //   title: book.volumeInfo.title,
    //   authors: book.volumeInfo.authors
    //     ? book.volumeInfo.authors.join(", ")
    //     : "Unknown",
    //   publishedDate: book.volumeInfo.publishedDate || "Unknown",

    //   ISBN10:
    //     book.volumeInfo.industryIdentifiers &&
    //     book.volumeInfo.industryIdentifiers[0]
    //       ? book.volumeInfo.industryIdentifiers[0].identifier
    //       : "N/A",
    //   ISBN13:
    //     book.volumeInfo.industryIdentifiers &&
    //     book.volumeInfo.industryIdentifiers[1]
    //       ? book.volumeInfo.industryIdentifiers[1].identifier
    //       : "N/A",
 
    //   description: book.volumeInfo.description || "No description available.",
    //   shortDescription:
    //     book.volumeInfo.shortDescription || "No short description available.",
    //   imageUrl: book.volumeInfo.imageLinks
    //     ? book.volumeInfo.imageLinks.thumbnail
    //     : "https://via.placeholder.com/128x192?text=No+Image+Available",
    // };

    const identifiers = book.volumeInfo.industryIdentifiers || [];
    const isMatch = identifiers.some((identifier) => {
      console.log(identifier.identifier + "     " + isbn);
      return identifier.identifier === isbn;
    });

    if (isMatch) {
      console.log("found");
      // display searched book
      searchedBookIndiv(book, true);
    } else {
      console.log(book.volumeInfo.title);
      console.log(matchedEl);
      // display searched book
      searchedBookIndiv(book, false);
    }
  });
}
