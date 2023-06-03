"use client";

import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const JeuForm = ({
  _id,
  nom: existingNom,
  description: existingDescription,
  descriptionCourte: existingDescriptionCourte,
  prix: existingPrix,
  age: existingAge,
  joueurMax: existingJoueurMax,
  joueurMin: existingJoueurMin,
  imageSrc: existingImageSrc,
  categorie: existingCategorie,
}) => {
  const [nom, setNom] = useState(existingNom || "");
  const [categorie, setCategorie] = useState(existingCategorie || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [descriptionCourte, setDescriptionCourte] = useState(
    existingDescriptionCourte || ""
  );
  const [prix, setPrix] = useState(existingPrix || "");
  const [age, setAge] = useState(existingAge || "");
  const [joueurMax, setJoueurMax] = useState(existingJoueurMax || "");
  const [joueurMin, setJoueurMin] = useState(existingJoueurMin || "");
  const [imageSrc, setImageSrc] = useState(existingImageSrc || "");
  const [categories, setCategories] = useState([]);

  const [goToJeux, setGoToJeux] = useState(false);

  useEffect(() => {
    axios.get("/api/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function saveJeu(ev) {
    ev.preventDefault();

    let image = null;
    const form = ev.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    if (fileInput.files.length > 0) {
      const formData = new FormData();

      for (const file of fileInput.files) {
        formData.append("file", file);
      }
      formData.append("upload_preset", "et2jomc9");

      image = await fetch(
        "https://api.cloudinary.com/v1_1/dwooxpvlr/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((response) => response.json());

      setImageSrc(image.secure_url);
    }

    const data = {
      nom,
      description,
      descriptionCourte,
      prix,
      age,
      joueurMax,
      joueurMin,
      imageSrc,
      categorie,
    };
    if (_id) {
      await axios.put("/api/jeux", { ...data, _id });
    } else {
      await axios.post("/api/jeux", data);
    }

    setGoToJeux(true);
  }

  if (goToJeux) {
    return redirect("/admin/jeux");
  }

  return (
    <div>
      <form onSubmit={saveJeu}>
        <label>Nom du jeu</label>
        <input
          type="text"
          placeholder="Nom du jeu"
          value={nom}
          onChange={(ev) => setNom(ev.target.value)}
        />
        <label>Catégorie</label>

        <select
          value={categorie}
          onChange={(ev) => setCategorie(ev.target.value)}
        >
          <option value="">---Catégories---</option>
          {categories.length > 0 &&
            categories.map((categorie) => (
              <option key={categorie._id} value={categorie._id}>
                {categorie.nom}
              </option>
            ))}
        </select>

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
        <label> Photos</label>
        <div className="mb-2 flex">
          <label
            className=" w-24 h-24 cursor-pointer flex flex-col justify-center items-center
           text-gray-500 bg-gray-200 rounded-lg text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <div>Télécharger</div>
            <input
              type="file"
              name="file"
              className="hidden"
              onChange={handleOnChange}
            />
          </label>
          <div className="h-24 pl-8">
            <img src={imageSrc} className="rounded-lg" />
          </div>
        </div>
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
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default JeuForm;
