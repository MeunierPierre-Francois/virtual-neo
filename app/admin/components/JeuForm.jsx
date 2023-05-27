"use client";

import axios from "axios";
import { redirect } from "next/navigation";
import { useState } from "react";

const JeuForm = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionCourte, setDescriptionCourte] = useState("");
  const [prix, setPrix] = useState("");
  const [age, setAge] = useState("");
  const [joueurMax, setJoueurMax] = useState("");
  const [joueurMin, setJoueurMin] = useState("");

  const [goToJeux, setGoToJeux] = useState(false);
  async function createJeu(ev) {
    ev.preventDefault();
    const data = {
      nom,
      description,
      descriptionCourte,
      prix,
      age,
      joueurMax,
      joueurMin,
    };
    await axios.post("/api/jeux", data);
    setGoToJeux(true);
  }

  if (goToJeux) {
    return redirect("/admin/jeux");
  }

  return (
    <div>
      <form onSubmit={createJeu}>
        <label>Nom du jeu</label>
        <input
          type="text"
          placeholder="Nom du jeu"
          value={nom}
          onChange={(ev) => setNom(ev.target.value)}
        />
        <label>Brève description</label>
        <textarea
          placeholder="Description"
          value={descriptionCourte}
          onChange={(ev) => setDescriptionCourte(ev.target.value)}
        />
        <label>Description complète</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <label>Prix de base par joueur</label>
        <input
          type="number"
          placeholder="Prix"
          value={prix}
          onChange={(ev) => setPrix(ev.target.value)}
        />
        <label>Âge minimum</label>
        <input
          type="number"
          placeholder="Âge"
          value={age}
          onChange={(ev) => setAge(ev.target.value)}
        />
        <label>Nombre de joueur minimum</label>
        <input
          type="number"
          placeholder="Nombre minimum"
          value={joueurMin}
          onChange={(ev) => setJoueurMin(ev.target.value)}
        />
        <label>Nombre de joueur maximum</label>
        <input
          type="number"
          placeholder="Nombre maximum"
          value={joueurMax}
          onChange={(ev) => setJoueurMax(ev.target.value)}
        />
        <button type="submit" className="btn-primary">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default JeuForm;
