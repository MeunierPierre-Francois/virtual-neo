import { Jeu } from "../models/Jeu";
import { mongooseConnect } from "../lib/mongoose";

const getJeuById = async (params) => {
  await mongooseConnect();

  const { id } = params;
  const jeu = await Jeu.findById(id).populate("categorie");

  return jeu;
};

export default getJeuById;
