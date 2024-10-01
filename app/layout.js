"use client";
import localFont from "next/font/local";
import "./globals.css";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./utility/msalInstance";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script type="text/javascript" src="https://js.live.net/v7.2/OneDrive.js"></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MsalProvider instance={msalInstance}>
          {children}
        </MsalProvider>
      </body>
    </html>
  );
}
