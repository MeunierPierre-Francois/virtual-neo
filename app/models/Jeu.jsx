import { Schema, model, models } from "mongoose";

const JeuSchema = new Schema({
  nom: { type: String },
  description: String,
  descriptionCourte: String,
  prix: { type: Number },
  age: { type: Number },
  joueurMax: { type: Number },
  joueurMin: { type: Number },
});

export const Jeu = models.Jeu || model("Jeu", JeuSchema);
