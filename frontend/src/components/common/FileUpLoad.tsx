// frontend/components/FileUpload.tsx
import React, { useState } from 'react'
import upload from '@/functions/upload'

export type FileUploadType = {
  setState: (value: string) => void
}

const FileUpload = ({ setState }: FileUploadType) => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (file) {
      const _filePath = await upload(file)
      setState(_filePath)
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
