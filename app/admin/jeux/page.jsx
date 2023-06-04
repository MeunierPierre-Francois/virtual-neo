"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";

const Jeux = () => {
  const [jeux, setJeux] = useState([]);
  useEffect(() => {
    axios.get("/api/jeux").then((response) => {
      setJeux(response.data);
    });
  }, []);

  return (
    <div>
      <Link href="admin/jeux/ajouter" className=" btn-primary">
        Ajouter un nouveau jeu
      </Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Jeux</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {jeux.map((jeu) => (
            <tr key={jeu._id}>
              <td>{jeu.nom}</td>
              <td>
                <Link
                  href={"/admin/jeux/modifier/" + jeu._id}
                  className="btn-default"
                >
                  <FiEdit className="w-5 h-5" />
                  Modifier
                </Link>
                <Link
                  href={"/admin/jeux/supprimer/" + jeu._id}
                  className="btn-red"
                >
                  <BsTrash3 className="w-5 h-5 " />
                  Supprimer
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jeux;
