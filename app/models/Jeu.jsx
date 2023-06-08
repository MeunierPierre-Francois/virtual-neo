import mongoose, { Schema, model, models } from "mongoose";

const JeuSchema = new Schema({
  nom: { type: String },
  description: { type: String },
  descriptionCourte: { type: String },
  prix: { type: Number },
  age: { type: Number },
  joueurMax: { type: Number },
  joueurMin: { type: Number },
  imageSrc: { type: String },
  categorie: { type: mongoose.Types.ObjectId, ref: "Categorie" },
  enAvant: { type: Boolean, default: false },
});

export const Jeu = models.Jeu || model("Jeu", JeuSchema);
