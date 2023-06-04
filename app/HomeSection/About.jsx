"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components/TextCustom";
import { staggerContainer, fadeIn } from "../Utils/motion";

const About = () => {
  return (
    <section className="relative z-10 sm:p-16 xs:p-8 px-6 py-12">
      <div className="gradient-02 z-0 " />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="lg:w-[80%] w-[100%] mx-auto flex justify-center items-center flex-col"
      >
        <TypingText
          title="| A propos de Virtual Neo"
          textStyles="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Bienvenue</span> dans
          notre univers VR, où la beauté des mondes virtuels rencontre
          l'expérience immersive ultime. Explorez des paysages époustouflants,
          défiez les lois de la réalité et vivez des aventures inoubliables.
          <span className="font-extrabold text-white">Plongez-vous</span> dans
          des environnements visuellement saisissants, interagissez avec des
          personnages fantastiques et découvrez des dimensions uniques.
          Préparez-vous à être émerveillé et transporté dans des{" "}
          <span className="font-extrabold text-white">réalités</span>{" "}
          alternatives où tout devient possible. Bienvenue dans le futur de
          l'expérience de jeu : bienvenue dans notre{" "}
          <span className="font-extrabold text-white">Virtuality Madness.</span>
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/images/arrow-down.svg"
          alt="Arrow-down"
          className="w-[18] h-[28px] object-contain mt-[28px] "
        ></motion.img>
      </motion.div>
    </section>
  );
};

export default About;
