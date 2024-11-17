// SWITCH TO HOME

export default function toHome() {
  // show search form, isbn formula, google login and change search result
  const searchEl = document.getElementById("search-result");
  const isbnFormula = document.getElementById("isbn-info-div");
  const googleLogin = document.getElementById("google-sign-in-button");
  const searchForm = document.getElementById("search-form");

  searchEl.innerHTML = `
    <h2>MATCHED ISBN</h2>
    <div id="matched-book"></div>
    <h2>RELATED ISBN</h2>
    <div id="related-book"></div>`;
    isbnFormula.style.display = "flex";
    googleLogin.style.display = "none";
    searchForm.style.display = "flex";
}
