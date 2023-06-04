"use client";
import { motion } from "framer-motion";
import { navVariants } from "../Utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="mx-auto 2xl:max-w-[1280px] w-full flex justify-between gap-8">
        <img src="/images/menu.svg" alt="" />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          VIRTUAL NEO
        </h2>
        <img src="/images/search.svg" alt="" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
