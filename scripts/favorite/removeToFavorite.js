import showFavorite from "./showFavorite.js";
import Announce from "../component/Announce.js";
export default function removeToFavorite(book) {
    let favoriteList = JSON.parse(localStorage.getItem("favorite")) || [];
    const index = favoriteList.findIndex((bookStored) => bookStored.id === book.id);
    if (index !== -1) {
      favoriteList.splice(index, 1);
    }
    localStorage.setItem("favorite", JSON.stringify(favoriteList));

    
    Announce(`removed "${book.volumeInfo.title}" to favorite`);
    console.log("removed from favorite", favoriteList);
    

    const favoriteHeading = document.querySelector("#search-result h2");
    if (favoriteHeading && favoriteHeading.textContent === "Favorites") {
        showFavorite();
    }
}