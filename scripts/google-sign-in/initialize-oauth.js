function initializeGoogleOauth() {
    // google.accounts.oauth2.initTokenClient({
    //   client_id: "695259268184-fjn31kr2gpj39jks7udk93s1lonvclk6.apps.googleusercontent.com",
    //   scope: 'https://www.googleapis.com/auth/books',
    //   prompt: 'consent',
    //   callback: handleCredentialResponse
    // });
    // google.accounts.id.renderButton(
    //   document.getElementById("google-sign-in-button"),
    //   { theme: "outline", size: "large" }  // customization attributes
    // );
    const client = google.accounts.oauth2.initTokenClient({
        client_id: '695259268184-fjn31kr2gpj39jks7udk93s1lonvclk6.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/books',
        callback: handleCredentialResponse,
      });
    client.requestAccessToken();
    // google.accounts.id.prompt(); // also display the One Tap dialog
  }

