import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "2d988fb6-911d-4f89-96f1-9baf53d7954c",
        authority: `https://login.microsoftonline.com/common`,
        redirectUri: "http://localhost:3000",
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);


