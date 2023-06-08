import { HiOutlineTag } from "react-icons/hi";
import Link from "next/link";

const JeuxCard = ({
  _id,
  nom,
  descriptionCourte,
  imageSrc,
  categorie,
  categories,
}) => {
  const categorieId = categorie;

  return (
    <div className="flex md:flex-row flex-col gap-4">
      <Link href={`/jeux/${_id}`}>
        <img
          src={imageSrc}
          alt="Univers"
          className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
        />
      </Link>
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {nom}
          </h4>

          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {descriptionCourte}
          </p>
        </div>

        <Link href={`/jeux/${_id}`}>
          <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
            <img
              src="/images/arrow.svg"
              alt="arrow"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JeuxCard;
