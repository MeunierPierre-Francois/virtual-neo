"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../../Utils/motion";
import { TitleText, JeuxCard } from "../components";
import fetchJeux from "../../actions/getJeux";
import fetchCategories from "../../actions/getCategorie";

const JeuxListing = () => {
  const [jeux, setJeux] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchJeux(setJeux);
    fetchCategories(setCategories);
  }, []);
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col ">
        <TitleText
          title={<>Decouvrez toutes nos réalités</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {jeux.map((jeu) => (
            <JeuxCard key={jeu._id} {...jeu} categories={categories} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JeuxListing;
