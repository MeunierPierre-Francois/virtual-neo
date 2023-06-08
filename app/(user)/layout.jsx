import "../../styles/globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import InscriptionModal from "./components/modals/InscriptionModal";
import ConnexionModal from "./components/modals/ConnexionModal";
import getCurrentUser from "../actions/getCurrentUser";

export const metadata = {
  title: "Virtual Neo",
  description: "Jeux de réalité virtuel",
};

const RootLayout = async ({ children }) => {
  const currentUser = await getCurrentUser();
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
          as="style"
        />
      </head>
      <body className="bg-primary-black">
        <div className=" min-h-screen overflow-hidden">
          <Navbar currentUser={currentUser} />
          <InscriptionModal />
          <ConnexionModal />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
