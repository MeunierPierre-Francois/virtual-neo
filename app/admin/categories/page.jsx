"use client";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import DeleteModal from "../components/DeleteModal";
import UpdateModal from "../components/UpdateModal";

const Categorie = () => {
  const [nom, setNom] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategorieId, setSelectedCategorieId] = useState(null);
  const [selectedCategorieNom, setSelectedCategorieNom] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const deleteCategorie = useCallback(async () => {
    try {
      await axios.delete(`/api/categories/${selectedCategorieId}`);
      fetchCategories();
      closeModal();
    } catch (error) {
      console.error(error);
    }
  }, [selectedCategorieId]);

  const openDeleteModal = useCallback((categorieId) => {
    setSelectedCategorieId(categorieId);
    setShowDeleteModal(true);
  }, []);

  const openUpdateModal = useCallback((categorieId, categorieNom) => {
    setSelectedCategorieId(categorieId);
    setSelectedCategorieNom(categorieNom);
    setShowUpdateModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedCategorieId(null);
    setShowUpdateModal(false);
    setShowDeleteModal(false);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    axios.get("/api/categories").then((response) => {
      setCategories(response.data);
    });
  }

  async function addCategorie(ev) {
    ev.preventDefault();
    await axios.post("/api/categories", { nom });
    setNom("");
    fetchCategories();
  }

  return (
    <div>
      <h1>Catégories</h1>
      <label htmlFor="">Ajouter une nouvelle Catégorie</label>
      <form className="flex gap-1" onSubmit={addCategorie}>
        <input
          className="mb-0"
          type="text"
          placeholder="Nom de la catégorie"
          value={nom}
          onChange={(ev) => setNom(ev.target.value)}
        />
        <button className="btn-primary py-1" type="submit">
          Ajouter
        </button>
      </form>
      <table className="basic mt-4">
        <thead>
          <tr>
            <td>Catégories</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((categorie) => (
              <tr key={categorie._id}>
                <td>{categorie.nom}</td>
                <td>
                  <button
                    onClick={() =>
                      openUpdateModal(categorie._id, categorie.nom)
                    }
                  >
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
                    Modifier
                  </button>

                  <button onClick={() => openDeleteModal(categorie._id)}>
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={closeModal}
        deleteCategorie={deleteCategorie}
      />
      <UpdateModal
        isOpen={showUpdateModal}
        onClose={closeModal}
        categorieNom={selectedCategorieNom}
        categorieId={selectedCategorieId}
      />
    </div>
  );
};

export default Categorie;
