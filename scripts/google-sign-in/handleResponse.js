function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  console.log("res " + JSON.stringify(response));

  document.cookie = `jwt=${response.credential}`;
  getFavorite(response.credential);
}

// let hi = {
//   clientId:
//     "695259268184-iuvphaq04nloh1d32p4lpr9tei0v3tlr.apps.googleusercontent.com",
//   client_id:
//     "695259268184-iuvphaq04nloh1d32p4lpr9tei0v3tlr.apps.googleusercontent.com",
//   credential:
//     "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2OTUyNTkyNjgxODQtaXV2cGhhcTA0bmxvaDFkMzJwNGxwcjl0ZWkwdjN0bHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2OTUyNTkyNjgxODQtaXV2cGhhcTA0bmxvaDFkMzJwNGxwcjl0ZWkwdjN0bHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTY1MDY3ODQxODM1ODI1ODg1MTUiLCJlbWFpbCI6Im1hbnVlbG1hcmt2aW5jZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzMxMzAzNjMwLCJuYW1lIjoiTWFudWVsIE1hcmsgVmluY2UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSnNWemtKa1dQUHczMkZCREdaRC1UbDlhMmtsQ3FwMXRzdTd2VHJUOHI2TkM4Y2ZaM2E9czk2LWMiLCJnaXZlbl9uYW1lIjoiTWFudWVsIiwiZmFtaWx5X25hbWUiOiJNYXJrIFZpbmNlIiwiaWF0IjoxNzMxMzAzOTMwLCJleHAiOjE3MzEzMDc1MzAsImp0aSI6IjUyMDk5MmU4NGJhMjFjNDdhZGI4NzRjODM2OWQ1MDI1ODMwYTBlOTYifQ.lCqIS7cT2iOmUuW1_6GRI0qC6iiPO39x4cu6HkJsUaipVR9ev9EK4v8PxD-MnJvvFdeTuyLZducsuzQRF7Lc16QuqnXdcGxL_xyNkWSJrs4mUzEL0Kzl2HXm0gy2-iboWVKZqJO3ePiZ8npARxuItkIy2Cy8KY_HB-7p-fVGv06Q1wt3YBY0-TO7Tdw3WLIt7WXUmPMgmZDh6t8SS4sm1XXk1ZqRzi8LDqesWcpC-TCiESGPdTTkXG_s7dv8NJMP4iGkNpFT6T2BCfJz2e4gBzIulfnsVM7ohszqCzW-Ewo5z2NpCOFjAovHjathzME5EmgzleLdt0GPKlmrXQUsMQ",
//   select_by: "btn",
// };
// Assuming you have the ID token stored in a variable called 'idToken'
// and the token endpoint is 'https://booksapi.example.com/token'

// Assuming you have the ID token stored in a variable called 'idToken'

function getFavorite(idToken) {
    fetch('https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes', {
        headers: {
          'Authorization': `Bearer ${idToken}`
        }
      })
      .then(response => response.json())
      .then(libraryData => {
        // Display the book list
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = '<h2>Your Book Library:</h2>';

        if (libraryData.items) {
          libraryData.items.forEach(book => {
            const bookTitle = book.volumeInfo.title;
            bookList.innerHTML += `<p>${bookTitle}</p>`;
          });
        } else {
          bookList.innerHTML += '<p>No books found in your library.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching book library:', error);
      });
    
    
}