import JeuHeader from "../../components/pageJeu/JeuHeader";
import JeuInfos from "../../components/pageJeu/JeuxInfos";
import JeuReservation from "../../components/pageJeu/JeuReseravation";
import useConnexionModal from "../../hooks/useConnexionModal";

const JeuClient = ({ jeu }) => {
  const { categorie } = jeu;
  return (
    <div
      className="max-w-[1280px]
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4"
    >
      <div className="flex flex-col gap-6" />
      <JeuHeader
        nom={jeu.nom}
        categorie={categorie.nom}
        imageSrc={jeu.imageSrc}
      />
      <div
        className="grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6"
      >
        <JeuInfos
          description={jeu.description}
          prix={jeu.prix}
          joueurMax={jeu.joueurMax}
          joueurMin={jeu.joueurMin}
          age={jeu.age}
        />
        <div className=" mb-10 md:col-span-3">
          <JeuReservation
            joueurMax={jeu.joueurMax}
            joueurMin={jeu.joueurMin}
            prix={jeu.prix}
          />
        </div>
      </div>
    </div>
  );
};

export default JeuClient;
