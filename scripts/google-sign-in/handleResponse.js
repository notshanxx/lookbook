import showGoogleBooks from "../google-books/showGoogleBooks.js";
import Announce from "../component/Announce.js";
// handling the data from google
export default function handleResponse(response) {
  const connectBtn = document.getElementById("connect-google-btn");

  //fetch the google books using the google access token

  fetch(
    `https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes?maxResults=1000`,
    {
      headers: {
        Authorization: `Bearer ${response.access_token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      Announce("Connected to Google Books");
      //store user google books favorites and show the google books if theres any
      
      if (data.items) {
        localStorage.setItem("googleBooks", JSON.stringify(data.items));
        Announce(`${data.items.length} Books in your Google Library`);
        connectBtn.textContent = "Refresh Google Books";
      } else {
        localStorage.setItem("googleBooks", JSON.stringify([]));
        Announce("No Books in your Google Library");
      }
      showGoogleBooks(data.items);

      
    })
    .catch((error) => {
      console.error("Error fetching user info:", error);
      Announce("Error fetching Google Books. TRY AGAIN :D");
    });
}
