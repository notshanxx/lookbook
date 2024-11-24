// SWITCH TO HOME

import Announce from "../component/Announce.js";
export default function toHome() {
  // show search form, isbn formula, google login and change search result
  const searchEl = document.getElementById("search-result");
  const isbnFormula = document.getElementById("isbn-info-div");
  const googleLogin = document.getElementById("google-sign-in-button");
  const searchForm = document.getElementById("search-form");
  const homeBtn = document.getElementById("home");
  const favoriteBtn = document.getElementById("favorite");
  Announce('Youre back to home');

  homeBtn.style.pointerEvents = "none";
  favoriteBtn.style.pointerEvents = "auto";
  homeBtn.style.backgroundColor = "var(--primary)";
  favoriteBtn.style.backgroundColor = "var(--background)";

  searchEl.innerHTML = `
    <h2>MATCHED ISBN</h2>
    <div id="matched-book"></div>
    <h2>RELATED ISBN</h2>
    <div id="related-book"></div>`;
    isbnFormula.style.display = "flex";
    googleLogin.style.display = "none";
    searchForm.style.display = "flex";
}
