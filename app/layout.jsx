"use client";

import "../styles/globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Virtual Neo",
  description: "Jeux en réalité virtuel",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body>
        <div className="bg-primary-black overflow-hidden">
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
