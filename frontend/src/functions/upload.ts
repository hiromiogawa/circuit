import axios from 'axios'
import FormData from 'form-data'

const upload = async (file: File) => {
  if (!file) {
    return
  }

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

    console.log(response.data)
    console.log('File uploaded successfully')
  } catch (error) {
    console.error('Error uploading file:', error)
  }

  // try {
  //   const response = await fetch('http://localhost:3000/upload', {
  //     method: 'POST',
  //     body: formData
  //   })

  //   if (response.ok) {
  //     const data = await response.json()
  //     console.log('File uploaded successfully:', data.imageUrl)

  //     // ここで、data.imageUrl を使用して画像を表示したり、データベースに保存する処理を行います。
  //   } else {
  //     console.error('File upload failed')
  //   }
  // } catch (error) {
  //   console.error('Error uploading file:', error)
  // }
}

export default upload
