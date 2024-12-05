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

const clearHistoryButton = document.getElementById("clear-history")

clearHistoryButton.addEventListener('click', ()=>{
    localStorage.removeItem("history");
    const searchHistoryList = document.getElementById("search-history");
    searchHistoryList.innerHTML = "";
})

export default function searchHistory(isbn) {
    
    
    // Add the ISBN to the history array
    let historyArr = JSON.parse(localStorage.getItem("history")) || [];

    


    if (!historyArr.includes(isbn)) {
        historyArr.push(isbn);
        localStorage.setItem("history", JSON.stringify(historyArr));

        // Append the new ISBN to the search history container
        const searchHistoryContainer = document.getElementById("search-history");
        const li = document.createElement('li');
        li.textContent = isbn;
        searchHistoryContainer.appendChild(li);
    }else{
        // Remove the existing ISBN from the search history container
        
        historyArr.forEach((item) => {
            if (item.textContent === isbn) {
                searchHistoryContainer.removeChild(item);
            }
        });

        // Reenter the ISBN at the end of the search history container
        const newLi = document.createElement('li');
        newLi.textContent = isbn;
        searchHistoryContainer.appendChild(newLi);
        
    }
}