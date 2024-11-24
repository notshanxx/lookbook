import handleResponse from "./handleResponse.js";
// Local Storage to Google Books
const syncToGoogleBtn = document.getElementById("sync-book-btn");


syncToGoogleBtn.addEventListener("click", () => {
  const book = JSON.parse(localStorage.getItem("favorite")) || [];
  if (!book.length) {
    alert("No books to sync. Add Books First");
    return
  }
  if (!confirm("Your Saved Books will be Synced to Google Books. Are you sure you want to continue?")) {
    
    return;
  }
  if (!confirm(book.length + " Books to be added: \n"+(book.map(item => item.volumeInfo.title).join("\n"))) ) {
    return;
  }
  
    
    const client = google.accounts.oauth2.initTokenClient({
      client_id: '695259268184-fjn31kr2gpj39jks7udk93s1lonvclk6.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/books',
      callback: syncToGoogleBook,
    });
    client.requestAccessToken();
  

  // let book = JSON.parse(localStorage.getItem("favorite")) || [];
  // if (book.length === 0) {
  //   return;
  // }
  // syncToGoogleBook();
  


});

function syncToGoogleBook(response) {
  
  const book = JSON.parse(localStorage.getItem("favorite")) || [];
  if (book.length === 0) {
    return;
  }
  book.forEach(data => {
    fetch('https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${response.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'volumeId': data.id
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // show google books
    })
    .catch(error => console.error('Error fetching user info:', error));
  });
  
  //refresh google books
  handleResponse(response)
}