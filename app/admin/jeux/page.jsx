"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Jeux = () => {
  const [jeux, setjeux] = useState([]);
  useEffect(() => {
    axios.get("/api/jeux").then((response) => {
      setjeux(response.data);
    });
  }, []);

  return (
    <div>
      <Link href={"admin/jeux/nouveau"} className=" btn-primary">
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
                <Link href={"/admin/jeux/modifier/" + jeu._id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  Modifier{" "}
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
