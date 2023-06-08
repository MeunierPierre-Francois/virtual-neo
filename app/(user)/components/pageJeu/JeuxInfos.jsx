"use client";
import { BsFillPersonFill } from "react-icons/bs";
import { HiPlusSm } from "react-icons/hi";

const JeuxInfos = ({ description, prix, joueurMax, joueurMin, age }) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div className="text-white ">Infos du jeu </div>
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-400
          "
        >
          <div className="flex items-center gap-1">
            <BsFillPersonFill /> {joueurMin}-{joueurMax}
          </div>
          <div className="flex items-center ">
            <HiPlusSm />
            {age}ans
          </div>
          <div className="flex items-center gap-1">{prix} €/pers.</div>
        </div>
      </div>
      <hr />
      <div className="text-white">
        <h1 className="text-xl pb-6">Ce qui vous attend !</h1>
        <div
          className="
        text-lg font-light"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default JeuxInfos;
