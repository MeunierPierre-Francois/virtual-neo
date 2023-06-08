"use client";

import { motion } from "framer-motion";
import { footerVariants } from "../../Utils/motion";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="footer-gradient" />
      <div className="lg:w-[80%] w-[100%] mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <Link href={"/jeux"}>
            <button
              type="button"
              className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
            >
              <img
                src="/images/headset.svg"
                alt="headset"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">
                Plongez dans une réalité
              </span>
            </button>
          </Link>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              VIRTUAL NEO
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2023 Virtual Neo
            </p>

            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank">
                <img
                  src="/images/twitter.svg"
                  alt="Logo Twitter"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
              <a href="https://instagram.com" target="_blank">
                <img
                  src="/images/instagram.svg"
                  alt="Logo Instagram"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
              <a href="https://facebook.com" target="_blank">
                <img
                  src="/images/facebook.svg"
                  alt="Logo Facebook"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
