"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import JeuForm from "../../../components/JeuForm";

const UpdateJeu = ({ params }) => {
  const [jeuInfo, setJeuInfo] = useState(null);
  const { id } = params;
  if (!id) {
    return;
  }
  useEffect(() => {
    axios.get(`/api/jeux/${id}`).then((response) => {
      setJeuInfo(response.data);
    });
  }, [id]);

  return (
    <div>
      <h1>Modifier le jeu</h1>
      {jeuInfo && <JeuForm {...jeuInfo} />}
    </div>
  );
};

export default UpdateJeu;
