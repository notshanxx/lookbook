// SWITCH TO FAVORITES
import Announce from "../component/Announce.js";
import showFavorite from "../favorite/showFavorite.js";
export default function toFavorites() {
  // hide search form, isbn formula and change search result
  const searchEl = document.getElementById("search-result");
  const isbnFormula = document.getElementById("isbn-info-div");
  const googleLogin = document.getElementById("google-sign-in-button");
  const searchForm = document.getElementById("search-form");
  const homeBtn = document.getElementById("home");
  const favoriteBtn = document.getElementById("favorite");

  Announce('Youre on favorites');

//   searchEl.style.display = "none";
  isbnFormula.style.display = "none";
  googleLogin.style.display = "flex";
  searchForm.style.display = "none";
  homeBtn.style.pointerEvents = "auto";
  homeBtn.style.backgroundColor = "var(--background)";
  favoriteBtn.style.backgroundColor = "var(--primary)";
  favoriteBtn.style.pointerEvents = "none";
  showFavorite()
}
