"use client";
import { redirect } from "next/navigation";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const DeleteJeu = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const [jeuInfo, setJeuInfo] = useState();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/jeux/${id}`).then((response) => {
      setJeuInfo(response.data);
    });
  }, [id]);

  function goBack() {
    router.push("/admin/jeux");
  }
  async function deleteJeu() {
    await axios.delete(`/api/jeux/${id}`);
    goBack();
  }

  return (
    <div>
      <h1 className="text-center">
        Voulez vous supprimer le jeu "{jeuInfo?.nom}" ?
      </h1>
      <div className="flex gap-2 justify-center">
        <button onClick={deleteJeu} className="btn-red">
          OUI
        </button>
        <button onClick={goBack} className="btn-default">
          NON
        </button>
      </div>
    </div>
  );
};

export default DeleteJeu;
