// SWITCH TO FAVORITES
import showFavorite from "../favorite/showFavorite.js";
export default function toFavorites() {
  // hide search form, isbn formula and change search result
  const searchEl = document.getElementById("search-result");
  const isbnFormula = document.getElementById("isbn-info-div");
  const googleLogin = document.getElementById("google-sign-in-button");
  const searchForm = document.getElementById("search-form");

//   searchEl.style.display = "none";
  isbnFormula.style.display = "none";
  googleLogin.style.display = "block";
  searchForm.style.display = "none";
  showFavorite()
}
