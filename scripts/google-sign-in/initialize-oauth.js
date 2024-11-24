import handleResponse from "../google-sign-in/handleResponse.js";
const connectGoogleBtn = document.getElementById("connect-google-btn");
connectGoogleBtn.addEventListener('click', () => {
  const client = google.accounts.oauth2.initTokenClient({
    client_id: '695259268184-fjn31kr2gpj39jks7udk93s1lonvclk6.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/books',
    callback: handleResponse,
  });
  client.requestAccessToken();
});

