"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../Utils/motion";
import Link from "next/link";

const ExploreCard = ({ _id, imageSrc, nom, index, active, handleClick }) => (
  <div
    className={`relative ${
      active === _id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(_id)}
  >
    <img
      src={imageSrc}
      alt="univers"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== _id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {nom}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <Link href={`/jeux/${_id}`}>
          <div className="w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] flex justify-center items-center">
            <img
              src="/images/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </Link>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Plongez dans une autre réalité
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {nom}
        </h2>
      </div>
    )}
  </div>
);

export default ExploreCard;
