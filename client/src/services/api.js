import axios from "axios";

//Función para obtener los datos de la api
export const getPosts = async () => {
    const response = await axios.get("http://localhost:4000/posts");
    return response.data;
  };

  export const subirImagenCloudinary = async (file) => {
    // Convierte el archivo a Base64
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
  
    const imageBase64 = await toBase64(file);
  
    try {
      // Realiza la solicitud POST al backend con la imagen en formato Base64
      const response = await axios.post('http://localhost:4000/posts', {
        image: imageBase64,
      });
      // Devuelve la URL segura de la imagen subida
      return response.data.secure_url;
    } catch (error) {
      console.error("Error subiendo la imagen:", error);
      throw error;
    }
  };