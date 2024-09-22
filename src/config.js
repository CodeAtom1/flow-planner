// src/config.js
export const msalConfig = {
    auth: {
        clientId: "7c4e0cd8-9ccd-42ca-999e-2c15f6a18801", // Replace with your Azure AD app's client ID
        authority: "https://login.microsoftonline.com/d318b178-0883-41fb-8b28-1628d46d086e", // Replace with your tenant ID
        redirectUri: "https://localhost:3000", // Your redirect URI
        postLogoutRedirectUri: window.location.protocol + '//' + window.location.host + '/login'
    },
    cache: {
        cacheLocation: "sessionStorage", // Configure where the cache is stored
        storeAuthStateInCookie: false, // Set to true for IE11/Edge support
    },
    system: {
        loggerOptions: {
            logLevel: "info", // You can adjust this to log different levels
        },
    },
};
