import axios from "axios";

const fetchJeux = async (setJeux) => {
  const response = await axios.get("/api/jeux").then((response) => {
    setJeux(response.data);
  });
};

export default fetchJeux;
