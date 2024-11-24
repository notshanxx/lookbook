import showGoogleBooks from "../google-books/showGoogleBooks.js";
import Announce from "../component/Announce.js";
export default function handleResponse(response) {
  const connectBtn = document.getElementById("connect-google-btn");
  
  fetch(`https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes?maxResults=1000`, {
      headers: {
        'Authorization': `Bearer ${response.access_token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      Announce("Connected to Google Books");
      //store user google books favorites
      if (data.items) {
        localStorage.setItem("googleBooks", JSON.stringify(data.items));
        Announce(`${data.items.length} Books in your Google Library`);
      connectBtn.textContent = "Refresh Google Books";
      showGoogleBooks(data.items)
      }else{
        Announce("No Books in your Google Library");
      }
      
    })
    .catch(error => console.error('Error fetching user info:', error));
  
}

