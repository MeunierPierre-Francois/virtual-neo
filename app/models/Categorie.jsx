import { Schema, model, models } from "mongoose";

const CategorieSchema = new Schema({
  nom: { type: String },
});

export const Categorie =
  models.Categorie || model("Categorie", CategorieSchema);
