"use client";
import axios from "axios";
import { useState, useCallback } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { signIn } from "next-auth/react";
import useInscriptionModal from "../../hooks/useInscriptionModal";
import useConnexionModal from "../../hooks/useConnexionModal";
import Modal from "./Modal";
import { redirect } from "next/navigation";

const ConnexionModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const inscriptionModal = useInscriptionModal();
  const connexionModal = useConnexionModal();

  const data = {
    email,
    password,
  };

  const onSubmit = async () => {
    signIn("credentials", { ...data });
    connexionModal.onClose();
  };
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onToggle = useCallback(() => {
    connexionModal.onClose();
    inscriptionModal.onOpen();
  }, [connexionModal, inscriptionModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-white">
          BIenvenue sur Virtual Neo!
        </div>
        <div className="font-light text-neutral-300 mt-2">Se connecter</div>
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
          left-4
          right-4
         
          "
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
          Se connecter
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
        py-2s
        text-white
        font-semibold"
      >
        <FcGoogle />
        Continer avec Google
      </button>
      <div className="text-neutral-300 text center mt-4 font-light">
        <div className="flex gap-2 flex-row items-center justify-center">
          <div>Pas encore membre?</div>
          <div
            className="text-neutral-100 cursor-pointer hover:underline"
            onClick={onToggle}
          >
            S'inscrire
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={connexionModal.isOpen}
      onClose={connexionModal.onClose}
      onSubmit={connexionModal.onSubmit}
      title="Connexion"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default ConnexionModal;
