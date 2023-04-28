// frontend/components/FileUpload.tsx
import React, { useState } from 'react'

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) {
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('http://localhost:3001/api/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        console.log('File uploaded successfully')
      } else {
        console.error('File upload failed')
      }
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default FileUpload
