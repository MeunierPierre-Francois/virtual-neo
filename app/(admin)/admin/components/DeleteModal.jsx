import axios from "axios";

const DeleteModal = ({ isOpen, onClose, deleteCategorie }) => {
  if (!isOpen) return null;

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
        <h3 className="text-lg font-black text-gray-800">
          Confirmer la suppression
        </h3>
        <p className="text-sm text-gray-500">
          Êtes vous certain de vouloir supprimer la catégorie
        </p>
        <div className="flex gap-4">
          <button
            onClick={deleteCategorie}
            className="flex gap-2 items-center justify-center border-2 border-red-600 bg-red-200 w-full
           shadow-red-400/40 shadow-md rounded-lg py-1 px-3 font-semibold mt-2 text-red-600"
          >
            Supprimer
          </button>
          <button
            className="flex gap-2 items-center justify-center
           py-1 px-3 font-semibold mt-2 rounded-lg shadow-md bg-white text-gray-500 w-full"
            onClick={onClose}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
