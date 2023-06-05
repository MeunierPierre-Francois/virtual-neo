"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../../Utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="lg:w-[80%] w-[100%] mx-auto flex flex-col"
      >
        <TypingText title="| Nos Univers" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choisissez le monde que vous voulez
              <br className="md:block hidden" /> explorer
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex gap-5 lg-flex-row flex-col min-h[70px]"></div>
      </motion.div>
    </section>
  );
};

export default Explore;
