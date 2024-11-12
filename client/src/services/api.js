import axios from "axios";


export const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/posts"); //  /posts
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los posts:", error);
    throw error;
  }
};


// Cloudinary. Función para subir una imagen a Cloudinary
//  export const subirImagenCloudinary = async (file) => {
//     // Convierte el archivo a Base64
//     const toBase64 = (file) =>
//       new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = (error) => reject(error);
//       });
  
//     const imageBase64 = await toBase64(file);
  
//     try {
//       // Realiza la solicitud POST al backend con la imagen en formato Base64
//       const response = await axios.post('posts', {
//         image: imageBase64,
//       });
//       // Devuelve la URL segura de la imagen subida
//       return response.data.secure_url;
//     } catch (error) {
//       console.error("Error subiendo la imagen:", error);
//       throw error;
//     }
//   };
  