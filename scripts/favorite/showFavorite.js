// THIS CHANGES THE PAGE TO THE FAVORITE PAGE ONCE THE FAVORITE BUTTON IS CLICKED
// this html content will be removed

/* <div class="search-result" id="search-result">
  <h2>MATCHED ISBN</h2>
  <div id="matched-book"></div>
  <h2>RELATED ISBN</h2>
  <div id="related-book"></div>
</div>; */
 
import Book from "../component/Book.js";
import showGoogleBooks from "../google-books/showGoogleBooks.js";
export default function showFavorite() {
  const searchEl = document.getElementById("search-result");
  
  if (searchEl) {
    searchEl.innerHTML = "";
  }
  // Check if theres google books in local storage
  let googleBookList = JSON.parse(localStorage.getItem("googleBooks"));
  console.log(googleBookList)
  if (googleBookList) {
    showGoogleBooks(googleBookList);
  }

  
  

  let favoriteList = JSON.parse(localStorage.getItem("favorite")) || [];

  if (favoriteList.length === 0) {
    const noFavorite = document.createElement("h2");
    noFavorite.textContent = "NO FAVORITE";
    searchEl.appendChild(noFavorite);
    return;
  }

    const favoriteBooks = document.createElement("div");
    favoriteBooks.id = "favorite-books";
    const favoriteHeading = document.createElement("h2");
    favoriteHeading.textContent = "Favorites";
    searchEl.appendChild(favoriteHeading);
    searchEl.appendChild(favoriteBooks);

  favoriteList.forEach(data => {

    const BOOK = Book(data);

    
    

    
    favoriteBooks.appendChild(BOOK);

  });
  
}
