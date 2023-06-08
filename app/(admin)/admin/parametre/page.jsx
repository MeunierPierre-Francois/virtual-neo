"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const EnAvant = () => {
  const [jeux, setJeux] = useState([]);

  function fetchJeux() {
    axios.get("/api/jeux").then((response) => {
      setJeux(response.data);
    });
  }

  useEffect(() => {
    fetchJeux();
  }, []);

  const handleToggle = async (jeu) => {
    const id = jeu._id;
    const { enAvant: currentEnAvant } = jeu;
    const updatedEnAvant = !currentEnAvant;

    await axios.put(`/api/jeux/${id}`, { enAvant: updatedEnAvant });
    setJeux((prevJeux) => {
      return prevJeux.map((item) => {
        if (item._id === id) {
          return { ...item, enAvant: updatedEnAvant };
        }
        return item;
      });
    });
  };

  return (
    <div>
      <h1>Paramètre</h1>
      <h2>Jeux en avant </h2>
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
                <button
                  onClick={() => handleToggle(jeu)}
                  className={`${
                    jeu.enAvant
                      ? "border-4 border-green-600 bg-green-200 text-green-600"
                      : "border-4 border-red-600 bg-red-200 text-red-600"
                  }  py-2 px-4 rounded-full`}
                >
                  {jeu.enAvant ? "Activé" : "Désactivé"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnAvant;
