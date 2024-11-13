import { Request, Response } from 'express';
import cloudinary from '../config/cloudinary.config';
import fs from 'fs';

export const uploadImage = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
        res.status(400).json({ message: 'No se ha proporcionado ninguna imagen' });
      return 
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'luxmundi',
    });

    fs.unlinkSync(req.file.path);

    res.status(200).json({
      message: 'Imagen subida exitosamente',
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ message: 'Error al subir la imagen', error });
  }
};
