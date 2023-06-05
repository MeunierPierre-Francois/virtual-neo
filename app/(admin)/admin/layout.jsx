"use client";

import AdminNav from "./components/AdminNav";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../../styles/admin.css";
import { useState } from "react";
import Logo from "../admin/components/logo";

const RootLayout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <html>
      <body>
        <div className="bg-bgGray min-h-screen ">
          <div className="block md:hidden flex items-center p-4">
            <button onClick={() => setShowNav(true)}>
              <GiHamburgerMenu className=" w-6 h-6 " />
            </button>
            <div className="flex grow justify-center mr-6">
              <Logo />
            </div>
          </div>
          <div className="flex ">
            <AdminNav show={showNav} setShowNav={setShowNav} />
            <div className=" flex-grow p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
