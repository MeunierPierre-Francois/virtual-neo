import { HiOutlineTag } from "react-icons/hi";
import Image from "next/image";

const JeuHeader = ({ categorie, nom, imageSrc }) => {
  return (
    <>
      <div>
        <div className="text-xl font-bold text-white">{nom}</div>
        <div className=" font-light text-neutral-300 flex items-center gap-2">
          <HiOutlineTag />
          {categorie}
        </div>
      </div>
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image
          alt="Image du jeu"
          src={imageSrc}
          fill
          className="object-cover
        w-full"
        />
      </div>
    </>
  );
};

export default JeuHeader;
