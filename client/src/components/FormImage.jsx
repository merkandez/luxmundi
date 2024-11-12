import React from 'react'
import UploadForm from './UploadForm'


const FormImage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-8">
        Subir Imagen a Cloudinary
      </h1>
      <UploadForm />
    </div>
  )
}

export default FormImage