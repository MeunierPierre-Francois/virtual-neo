import { mongooseConnect } from "../../../lib/mongoose";
import { Jeu } from "../../../models/Jeu";
import { useMemo } from "react";

const page = async ({ params }) => {
  await mongooseConnect();
  const { id } = params;
  const jeu = await Jeu.findById(id);

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <div>
        <h1>réservation pour {jeu.nom}</h1>
      </div>
    </section>
  );
};

export default page;
