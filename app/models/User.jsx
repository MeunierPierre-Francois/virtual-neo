import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  nom: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  reservations: [{ type: mongoose.Types.ObjectId, ref: "Reservation" }],
});

export const User = models.User || model("User", UserSchema);
