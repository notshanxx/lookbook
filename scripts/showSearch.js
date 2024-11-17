export default function showSearch(show) {
  const searchEl = document.getElementById("search-result");
  const matchedEl = document.getElementById("matched-book");
  if (show) {
    searchEl.style.display = "block";
    matchedEl.style.display = "grid";
  } else {
    searchEl.style.display = "none";
    matchedEl.style.display = "none";
  }
}
