import axios from "axios";

//Función para obtener los datos de la api
export const getPosts = async () => {
    const response = await axios.get("http://localhost:4000/posts");
    return response.data;
  };