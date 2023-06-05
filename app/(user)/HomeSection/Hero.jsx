"use client";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../../Utils/motion";

const Hero = () => {
  return (
    <section className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className="heroHeading">
            Virtuality
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className="heroHeading">ma</h1>
            <div className="heroDText" />
            <h1 className="heroHeading">ness</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img
            src="/images/cover.png"
            alt="cover"
            className="w-full sm:h-[500] h-[350] object-cover rounded-tl-[140px] z-10 relative"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
