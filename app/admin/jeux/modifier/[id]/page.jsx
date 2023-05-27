"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const UpdateJeu = () => {
  const { id } = useState("");
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("api/jeux?id=" + id).then((response) => {
      console.log(response.data);
    });
  }, [id]);
  return <div>Page update</div>;
};

export default UpdateJeu;
