import axios from "axios";
import { useState } from "react";

const UpdateModal = ({ isOpen, onClose, categorieNom, categorieId }) => {
  if (!isOpen) return null;
  const id = categorieId;
  const [nom, setNom] = useState("");

  const updateCategorie = async () => {
    await axios.put(`/api/categories/${id}`, { nom });
    fetchCategories();
    closeModal();
  };
  console.log(id);
  console.log(nom);
  return (
    <div
      onClick={onClose}
      className={
        "flex inset-0 fixed justify-center items-center transition-colors bg-neutral-800/70"
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all
        ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white
         hover:bg-gray-50 hover:text-gray-600"
        >
          X
        </button>
        <h3 className="text-lg font-black text-gray-800">Modifification</h3>
        <p className="text-sm text-gray-500">
          Êtes vous certain de vouloir modifier la catégorie "{categorieNom}"
        </p>
        <form onSubmit={updateCategorie}>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 mt-2 mb-4 w-full"
            placeholder="Nouvelle catégorie"
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex gap-2 items-center justify-center border-2 border-green-600 bg-green-200 w-full
           shadow-green-400/40 shadow-md rounded-lg py-1 px-3 font-semibold mt-2"
            >
              Modifier
            </button>
            <button
              className="flex gap-2 items-center justify-center
           py-1 px-3 font-semibold mt-2 rounded-lg shadow-md bg-white text-gray-500 w-full"
              onClick={onClose}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
