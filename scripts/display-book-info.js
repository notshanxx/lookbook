import addToFavorite from "./favorite/addToFavorite.js";
import removeToFavorite from "./favorite/removeToFavorite.js";
export default function displayBookInfo(passedData) {
  const data = JSON.parse(passedData);
  console.log(data);

  console.log(data);
  document.getElementById("book-info").innerHTML = "";

  // console.log(bookHTML);

  /**
   * Creates the HTML structure for the book content
   */
  const bookContent = document.createElement("div");
  bookContent.classList.add("book-content");

  /**
   * Creates the title container with title and year
   */
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");
  const bookTitle = document.createElement("h1");
  bookTitle.classList.add("book-title");
  bookTitle.textContent = data.volumeInfo.title || "No title";
  const publishYear = document.createElement("span");
  publishYear.classList.add("publish-year");
  publishYear.textContent = `(${new Date(
    data.volumeInfo.publishedDate || new Date()
  ).getFullYear()})`;
  titleContainer.appendChild(bookTitle);
  titleContainer.appendChild(publishYear);

  /**
   * Creates the back button
   */
  const backButton = document.createElement("button");
  backButton.classList.add("back-btn");
  backButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  backButton.onclick = closeBookInfo;

  /**
   * Creates the card background container
   */
  const cardBG = document.createElement("div");
  cardBG.classList.add("card-bg");
  const bookThumbnail = document.createElement("img");
  bookThumbnail.classList.add("book-thumbnail");
  bookThumbnail.src = data.volumeInfo.imageLinks?.thumbnail
    ? data.volumeInfo.imageLinks.thumbnail
    : "https://via.placeholder.com/128x192?text=No+Image+Available";
  bookThumbnail.width = 128;
  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = data.volumeInfo.authors
    ? data.volumeInfo.authors.join(", ")
    : "No authors";
  const category = document.createElement("p");
  category.classList.add("category");
  category.textContent = data.volumeInfo.categories || "No categories";
  const buttonContainer = document.createElement("div");

  buttonContainer.classList.add("button-container");
  const favoriteButton = document.createElement("button");
  const isFavorite = JSON.parse(localStorage.getItem("favorite") || "[]").some(
    (book) => book.id === data.id
  );
  favoriteButton.classList.add(isFavorite ? "remove-favorite" : "add-favorite");
  favoriteButton.innerHTML = `<div class="svg-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-${isFavorite ? "trash" : "heart"}">${
    isFavorite
      ? '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>'
      : '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>'
  }</svg></div><span class="text">${
    isFavorite ? "Remove Favorite" : "Add Favorite"
  }</span>`;
  favoriteButton.onclick = () => {
    if (isFavorite) {
      removeToFavorite(data);
      closeBookInfo()

    } else {
      addToFavorite(data);
      closeBookInfo()
    }
  };



    // window.localStorage.setItem("favoriteBook", JSON.stringify(data));
  const moreInfoButton = document.createElement("button");

  moreInfoButton.classList.add("more-info");
  moreInfoButton.innerHTML = '<div class="svg-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></div><span class="text">More Info</span>';
  moreInfoButton.onclick = () => window.open(data.volumeInfo.previewLink, "_blank");
  buttonContainer.appendChild(favoriteButton);
  buttonContainer.appendChild(moreInfoButton);

  /**
   * Creates the description paragraph
   */
  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = data.volumeInfo.description || "No description";

  /**
   * Creates the additional information paragraph
   */

  const additionalInfo = document.createElement("p");
  additionalInfo.classList.add("additional-info");
  additionalInfo.innerHTML = `
      <b>ISBN 10:</b> ${
        data.volumeInfo.industryIdentifiers[0]
          ? data.volumeInfo.industryIdentifiers[0].identifier
          : "N/A"
      } <br />
      <b>ISBN 13:</b> ${
        data.volumeInfo.industryIdentifiers[1]
          ? data.volumeInfo.industryIdentifiers[1].identifier
          : "N/A"
      } <br />
      <b>Publisher: </b>${data.volumeInfo.publisher || "No publisher"} <br />
      
      <b>Book:</b> ${data.volumeInfo.pageCount ? data.volumeInfo.pageCount + " pages" : "No page count"} <br />
    `;

  bookContent.appendChild(titleContainer);
  bookContent.appendChild(backButton);
  bookContent.appendChild(cardBG);
  cardBG.appendChild(bookThumbnail);
  cardBG.appendChild(author);
  cardBG.appendChild(category);
  cardBG.appendChild(buttonContainer);
  cardBG.appendChild(description);
  cardBG.appendChild(additionalInfo);

  document.getElementById("book-info").appendChild(bookContent);
  document.getElementById("book-info").style.display = "block";

  /**
   * Closes the book info container
   */
  function closeBookInfo() {
    document.getElementById("book-info").innerHTML = "";
    document.getElementById("book-info").style.display = "none";
    // return margin
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const matchedBook = document.getElementById("matched-book");
      const relatedBook = document.getElementById("related-book");
      matchedBook.style.margin = "0 25%";
      relatedBook.style.margin = "0 25%";
    }
  
  }
}
