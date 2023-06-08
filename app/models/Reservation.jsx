import mongoose, { Schema, model, models } from "mongoose";

const ReservationSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  jeu: { type: mongoose.Types.ObjectId, ref: "Jeu" },
  nombreJoueurs: { type: Number },
  dateReservation: { type: Date },
  prixTotal: { type: Number },
});

export const Reservation =
  models.Reservation || model("Reservation", ReservationSchema);
