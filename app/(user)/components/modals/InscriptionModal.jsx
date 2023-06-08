"use client";
import axios from "axios";
import { useState, useCallback } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useInscriptionModal from "../../hooks/useInscriptionModal";
import useConnexionModal from "../../hooks/useConnexionModal";
import Modal from "./Modal";
import { signIn } from "next-auth/react";

const InscriptionModal = () => {
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const inscriptionModal = useInscriptionModal();
  const connexionModal = useConnexionModal();

  const data = {
    email,
    nom,
    password,
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async () => {
    await axios.post(`/api/inscription/`, data).then(() => {
      inscriptionModal.onClose();
    });
  };

  const onToggle = useCallback(() => {
    inscriptionModal.onClose();
    connexionModal.onOpen();
  }, [inscriptionModal, connexionModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-white">
          Bienvenue sur Virtual Neo
        </div>
        <div className="font-light text-neutral-300 mt-2">Créer un compte</div>
      </div>

      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="relative w-full text-white">
          <input
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            type="email"
            required
            className=" peer
          w-full
          p-2
          pt-6 
          font-light 
          bg-primary-black
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          "
          />
          <label
            className="absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          left-4"
          >
            Email
          </label>
        </div>
        <div className="relative w-full text-white">
          <input
            required
            value={nom}
            onChange={(ev) => setNom(ev.target.value)}
            type="text"
            className=" peer
          w-full
          p-2
          pt-6 
          font-light 
          bg-primary-black
          border-2
          rounded-md
          outline-none
          transition
          "
          />
          <label
            className="absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          left-4"
          >
            Nom
          </label>
        </div>
        <div className="relative w-full text-white">
          <input
            required
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            type={showPassword ? "text" : "password"}
            className=" peer
          w-full
          p-2
          pt-6 
          font-light 
          bg-primary-black
          border-2
          rounded-md
          outline-none
          transition
          "
          />
          <label
            className="absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          left-4"
          >
            Mot de passe
          </label>
          <button onClick={toggleShowPassword} type="button">
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        <button
          type="submit"
          className="
          px-4
          py-2
          rounded-xl
          hover:opacity-60
          uppercase
          text-black-primary
        bg-white
          border
          text-md
          w-full"
        >
          m'inscrire
        </button>
      </form>
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3 ">
      <hr />
      <button
        onClick={() => signIn("google")}
        className="w-full
         bg-primary-black
        border-2
        rounded-md
        outline-none
        flex
       items-center
       justify-center
        gap-3
        py-2
        text-white
        font-semibold"
      >
        <FcGoogle />
        Continuer avec Google
      </button>
      <div className="text-neutral-300 text center mt-4 font-light">
        <div className="flex gap-2 flex-row items-center justify-center">
          <div>Déjà un compte ?</div>
          <div
            className="text-neutral-100 cursor-pointer hover:underline"
            onClick={onToggle}
          >
            Se connecter
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={inscriptionModal.isOpen}
      onClose={inscriptionModal.onClose}
      onSubmit={inscriptionModal.onSubmit}
      title="Inscription"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default InscriptionModal;
