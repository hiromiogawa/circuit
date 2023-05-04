import axios from 'axios'
import FormData from 'form-data'

const upload = async (file: File): Promise<string> => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

    console.log('File uploaded successfully')
    return response.data.fileName
  } catch (error) {
    console.error('Error uploading file:', error)
    return ''
  }
}

export default upload
