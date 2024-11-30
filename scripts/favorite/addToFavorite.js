import Announce from "../component/Announce.js";

// Add book to Favorites using local storage
export default function addToFavorite(book) {
    let favoriteList = JSON.parse(localStorage.getItem("favorite")) || [];
    if (!favoriteList.find((favBook) => favBook.id === book.id)) {
        favoriteList.push(book);
        localStorage.setItem("favorite", JSON.stringify(favoriteList));
        console.log("added to favorite", favoriteList);
    }
    Announce(`added "${book.volumeInfo.title}" to favorite`);
}
