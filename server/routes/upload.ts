import express, { Request, Response } from 'express';
import cloudinary from '../config/cloudinary'; // Importa tu configuración de Cloudinary

const router = express.Router();

// Define la estructura del cuerpo de la solicitud
interface UploadRequest extends Request {
  body: {
    image: string; // La imagen en formato Base64
  };
}

router.post('/upload', async (req: UploadRequest, res: Response) => {
  const { image } = req.body;

  try {
    // Sube la imagen a Cloudinary
    const result = await cloudinary.uploader.upload(image, {
      upload_preset: 'preset_posts', // Usa el preset configurado en Cloudinary
    });

    // Devuelve la URL segura de la imagen subida
    res.json({ secure_url: result.secure_url });
  } catch (error) {
    console.error("Error subiendo la imagen:", error);
    res.status(500).json({ message: "Error subiendo la imagen" });
  }
});

export default router;