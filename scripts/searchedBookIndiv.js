// export that display search result per book

export function searchedBookIndiv(book, matched) {
  let formatData = {
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors
      ? book.volumeInfo.authors.join(", ")
      : "Unknown",
    publishedDate: book.volumeInfo.publishedDate || "Unknown",

    ISBN10:
      book.volumeInfo.industryIdentifiers &&
      book.volumeInfo.industryIdentifiers[0]
        ? book.volumeInfo.industryIdentifiers[0].identifier
        : "N/A",
    ISBN13:
      book.volumeInfo.industryIdentifiers &&
      book.volumeInfo.industryIdentifiers[1]
        ? book.volumeInfo.industryIdentifiers[1].identifier
        : "N/A",

    description: book.volumeInfo.description || "No description available.",
    shortDescription:
      book.volumeInfo.shortDescription || "No short description available.",
    imageUrl: book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.thumbnail
      : "https://via.placeholder.com/128x192?text=No+Image+Available",
  };

  const mainEl = document.querySelector("main");
  const matchedEl = document.getElementById("matched-book");
  const identifiers = book.volumeInfo.industryIdentifiers || [];

  if (matched) {
    matchedEl.innerHTML += `
      <div class="book">

      <h3> Most Match: ${formatData.title} (${
      book.volumeInfo.publishedDate
    })</h3>

      <i>${formatData.authors}</i> 

      <p>${identifiers
        .map((identifier) => `${identifier.type} ${identifier.identifier}`)
        .join("  ")}</p>

      <img src="${formatData.imageUrl}"> 

      <p>${matched ? formatData.description : formatData.shortDescription}</p>

      </div>`;
  } else {
    mainEl.innerHTML += `
      <div class="book">
      <h3>${book.volumeInfo.title} (${book.volumeInfo.publishedDate})</h3> 
      <i>${formatData.authors}</i> 
      <p>${identifiers
        .map((identifier) => `${identifier.type} ${identifier.identifier}`)
        .join("  ")}</p>
      <img src="${formatData.imageUrl}"> 
      <p>${
        book.searchInfo ? book.searchInfo.textSnippet : "No snippet available."
      }</p>
      </div>`;
  }
}
