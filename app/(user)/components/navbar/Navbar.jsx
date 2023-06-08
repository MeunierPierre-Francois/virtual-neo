"use client";
import { motion } from "framer-motion";
import { navVariants } from "../../../Utils/motion";
import UserMenu from "./UserMenu";
import Link from "next/link";

const Navbar = ({ currentUser }) => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative w-full "
    >
      <div
        className="flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          
             "
      >
        <Link href={"/"}>
          <h2 className="font-extrabold text-lg leading-[30px] text-white ">
            VIRTUAL NEO
          </h2>
        </Link>
        <div className="text-white gap-6 text-md font-semibold flex flex-row items-center justify-between ">
          <Link href={"/jeux"}> Univers</Link>

          <Link href={"/contact"}>Contact</Link>
        </div>

        <UserMenu currentUser={currentUser} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
