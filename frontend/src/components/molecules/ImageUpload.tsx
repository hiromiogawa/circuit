import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import axios from 'axios'

import upload from '@/functions/fetch/upload'

type ImageUploadProps = {
  initialImage: string
  endPoint: string
  width?: number
  height?: number
  isMyData: boolean
}

const ImageUpload = ({
  initialImage,
  endPoint,
  width = 700,
  height = 300,
  isMyData = false
}: ImageUploadProps) => {
  const [imagePreview, setImagePreview] = useState<string>('')
  const [imagePath, setImagePath] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const inputFileRef = useRef<HTMLInputElement>(null)

  const postImagePath = async (): Promise<void> => {
    try {
      const response = await axios.put(
        endPoint,
        {
          imagePath
        },
        { withCredentials: true }
      )

      if (inputFileRef.current) {
        inputFileRef.current.value = ''
      }
      setImage(null)

      if (response.status !== 204) {
        throw new Error('Failed to update my car image path.')
      }
    } catch (error: any) {
      throw new Error(error.message || 'Error updating my car image path.')
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setImage(file)

      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target) {
          setImagePreview(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (image) {
      const _filePath = await upload(image)
      setImagePath(_filePath)
    } else {
      setError('画像を選択してください')
    }
  }

  useEffect(() => {
    if (imagePath) postImagePath()
  }, [imagePath])

  return (
    <>
      <Image
        src={imagePreview ? imagePreview : initialImage}
        alt={initialImage ? '' : 'No Image'}
        width={width}
        height={height}
      />
      {error && <p>{error}</p>}
      {isMyData && (
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} ref={inputFileRef} />
          <button disabled={!image} type="submit">
            {initialImage ? '決定' : '登録'}
          </button>
        </form>
      )}
    </>
  )
}

export default ImageUpload
