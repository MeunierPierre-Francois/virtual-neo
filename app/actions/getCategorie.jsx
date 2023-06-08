import axios from "axios";

const fetchCategories = async (setCategories) => {
  const response = await axios.get("/api/categories").then((response) => {
    setCategories(response.data);
  });
};

export default fetchCategories;
