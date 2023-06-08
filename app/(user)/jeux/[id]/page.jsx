import JeuClient from "./JeuClient";

import getJeuById from "../../../actions/getJeuById";
import getCurrentUSer from "../../../actions/getCurrentUser";
import getReservations from "../../../actions/getReservations";

const JeuAffiche = async ({ params }) => {
  const jeu = await getJeuById(params);
  const currentUser = await getCurrentUSer();
  const reservations = await getReservations(params);

  return (
    <JeuClient
      jeu={jeu}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
};

export default JeuAffiche;
