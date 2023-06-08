"use client";
import { useState } from "react";

const JeuReseravation = ({ joueurMax, joueurMin, prix }) => {
  const [prixTotal, setPrixTotal] = useState(prix);

  return (
    <>
      <div
        className="   
        text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2"
      >
        <div className="text-white ">Réservation</div>
      </div>

      <div
        className="
        p-4 
        flex 
        flex-row 
        items-center 
        justify-between
        font-semibold
        text-lg
      "
      >
        <div>Total</div>
        <div>{prixTotal}</div>
      </div>
    </>
  );
};

export default JeuReseravation;
