import axios from "axios";

//Función para obtener los datos de la api
export const getPosts = async () => {
    const response = await axios.get("http://localhost:4000/posts");
    return response.data;
  };

 // Función asincrónica para subir una imagen a Cloudinary
export const subirImagenCloudinary = async (file) => {
  //Crea un objeto FormData para enviar el archivo
  const formData = new FormData();
  //Agrega el archivo al FormData
  formData.append("file", file);
  //Agrega el preset de carga de Cloudinary
  formData.append("upload_preset", "preset_posts");

  try {
    // Realiza una solicitud POST a la API de Cloudinary con el FormData
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dbjlow18s/image/upload`, formData,
    );
    // Devuelve la URL segura de la imagen subida
    return response.data.secure_url;
  } catch (error) {
    // Si ocurre un error, lo registra en la consola
    console.error("Error subiendo la imagen:", error);
    // Lanza el error para que pueda ser manejado por el llamador
    throw error;
  }


}