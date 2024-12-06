// SAERCH HISTORY

window.onload = () => {
    const searchHistoryList = document.getElementById("search-history");
    const historyArr = JSON.parse(localStorage.getItem("history")) || [];

    historyArr.forEach((isbn) => {
        const li = document.createElement("li");
        li.textContent = isbn;

        searchHistoryList.appendChild(li);
    });
};

const clearHistoryButton = document.getElementById("clear-history");

clearHistoryButton.addEventListener("click", () => {
    localStorage.removeItem("history");
    const searchHistoryList = document.getElementById("search-history");
    searchHistoryList.innerHTML = "";
});

export default function searchHistory(isbn) {
    // Add the ISBN to the history array
    let historyArr = JSON.parse(localStorage.getItem("history")) || [];
    const searchHistoryContainer = document.getElementById("search-history");

    if (!historyArr.includes(isbn)) {
        historyArr.push(isbn);
        localStorage.setItem("history", JSON.stringify(historyArr));

        // Append the new ISBN to the search history container

        const li = document.createElement("li");
        li.textContent = isbn;
        searchHistoryContainer.appendChild(li);
    } else {
        //clear
        searchHistoryContainer.innerHTML = "";
        // Remove the existing ISBN from the search history
        const index = historyArr.indexOf(isbn);
        if (index > -1) {
            historyArr.splice(index, 1);
        }
        historyArr.push(isbn);
        localStorage.setItem("history", JSON.stringify(historyArr));

        // Reenter the ISBN at the end of the search history container
        historyArr.forEach((isbn) => {
            const li = document.createElement("li");
            li.textContent = isbn;

            searchHistoryContainer.appendChild(li);
        });
    }
}
