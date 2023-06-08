"use client";
import { useCallback, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import MenuItem from "./MenuItem";
import useInscriptionModal from "../../hooks/useInscriptionModal";
import useConnexionModal from "../../hooks/useConnexionModal";
import { signOut } from "next-auth/react";

const UserMenu = ({ currentUser }) => {
  const inscriptionModal = useInscriptionModal();
  const connexionModal = useConnexionModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div onClick={toggleOpen} className="cursor-pointer">
        <HiMenuAlt3 className="text-white w-5 h-5" />
      </div>

      {isOpen && (
        <div className="absolute top-6 right-0 text-neutral-300 ">
          <div className="flex flex-col cursor-pointer  ">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="Réservation" />
                <MenuItem onClick={() => signOut()} label="Déconnexion" />
              </>
            ) : (
              <>
                <MenuItem onClick={connexionModal.onOpen} label="Connexion" />
                <MenuItem
                  onClick={inscriptionModal.onOpen}
                  label="Inscription"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
