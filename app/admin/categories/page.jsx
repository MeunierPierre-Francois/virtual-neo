"use client";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import DeleteModal from "../components/DeleteModal";
import UpdateModal from "../components/UpdateModal";
import { FiEdit } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";

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
                    className="btn-default"
                  >
                    <FiEdit className="w-5 h-5" />
                    Modifier
                  </button>

                  <button
                    onClick={() => openDeleteModal(categorie._id)}
                    className="btn-red"
                  >
                    <BsTrash3 className="w-5 h-5 " />
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
